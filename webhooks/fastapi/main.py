import json
import os
from pathlib import Path
from typing import Any

import requests
from fastapi import BackgroundTasks, FastAPI, Request
from fastapi.responses import JSONResponse


def load_env() -> None:
    for env_path in (Path.cwd() / ".env", Path.cwd() / "../../.env"):
        if not env_path.exists():
            continue
        for line in env_path.read_text(encoding="utf-8").splitlines():
            stripped = line.strip()
            if not stripped or stripped.startswith("#") or "=" not in stripped:
                continue
            key, value = stripped.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip())


load_env()

app = FastAPI(title="PoYo FastAPI Webhook Example")
base_url = os.environ.get("POYO_BASE_URL", "https://api.poyo.ai")
api_key = os.environ.get("POYO_API_KEY", "")
allow_unlisted_task_ids = os.environ.get("POYO_ALLOW_UNLISTED_TASK_IDS") == "true"
known_task_ids = {
    task_id.strip()
    for task_id in os.environ.get("POYO_KNOWN_TASK_IDS", "").split(",")
    if task_id.strip()
}
last_status_by_task_id: dict[str, str] = {}


def is_known_task_id(task_id: str) -> bool:
    return task_id in known_task_ids or allow_unlisted_task_ids


def reconcile_task_status(task_id: str) -> None:
    if not api_key or api_key == "YOUR_POYO_API_KEY_HERE":
        print(json.dumps({"task_id": task_id, "reconciled": False, "reason": "POYO_API_KEY is not set"}))
        return

    try:
        response = requests.get(
            f"{base_url}/api/generate/status/{task_id}",
            headers={"Authorization": f"Bearer {api_key}"},
            timeout=5,
        )
        body: Any
        try:
            body = response.json()
        except ValueError:
            body = {"raw": response.text}
        print(
            json.dumps(
                {
                    "task_id": task_id,
                    "reconciled": response.ok,
                    "http_status": response.status_code,
                    "status": body.get("data", {}).get("status") if isinstance(body, dict) else None,
                }
            )
        )
    except requests.RequestException as error:
        print(json.dumps({"task_id": task_id, "reconciled": False, "reason": str(error)}))


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/api/poyo/webhook")
async def handle_webhook(request: Request, background_tasks: BackgroundTasks):
    event = await request.json()
    task_id = event.get("data", {}).get("task_id") or event.get("task_id")

    if not task_id:
        return JSONResponse({"ok": False, "error": "Missing task_id"}, status_code=400)

    if not is_known_task_id(task_id):
        return JSONResponse({"ok": True, "ignored": True, "reason": "Unknown task_id"}, status_code=202)

    status = event.get("data", {}).get("status") or event.get("status") or "unknown"
    dedupe_key = f"{task_id}:{status}"

    if last_status_by_task_id.get(task_id) == dedupe_key:
        return {"ok": True, "duplicate": True}

    last_status_by_task_id[task_id] = dedupe_key
    print(json.dumps({"task_id": task_id, "status": status, "accepted": True}))

    background_tasks.add_task(reconcile_task_status, task_id)
    return {"ok": True}
