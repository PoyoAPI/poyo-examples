import json
import os
import time
from pathlib import Path

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


def require_api_key() -> str:
    api_key = os.environ.get("POYO_API_KEY", "")
    if not api_key or api_key == "YOUR_POYO_API_KEY_HERE":
        raise SystemExit("Set POYO_API_KEY in your environment or repo-root .env file.")
    return api_key


def request_json(method: str, url: str, **kwargs):
    import requests

    response = requests.request(method, url, timeout=60, **kwargs)
    try:
        body = response.json()
    except ValueError:
        body = {"raw": response.text}

    api_code = body.get("code")
    has_api_error = isinstance(api_code, int) and api_code not in (0, 200)
    if not response.ok or has_api_error:
        raise RuntimeError(
            "PoYo request failed: "
            + json.dumps(
                {
                    "http_status": response.status_code,
                    "api_code": api_code,
                    "body": body,
                },
                indent=2,
            )
        )
    return body


def poll_task(base_url: str, api_key: str, task_id: str):
    for attempt in range(1, 61):
        result = request_json(
            "GET",
            f"{base_url}/api/generate/status/{task_id}",
            headers={"Authorization": f"Bearer {api_key}"},
        )
        status = result.get("data", {}).get("status")
        print(f"poll {attempt}: {status or 'unknown'}")
        if status in ("finished", "failed"):
            return result
        time.sleep(10)
    raise TimeoutError(f"Timed out waiting for task {task_id}")


def main() -> None:
    load_env()
    api_key = require_api_key()
    base_url = os.environ.get("POYO_BASE_URL", "https://api.poyo.ai")
    callback_url = os.environ.get("POYO_CALLBACK_URL")

    payload = {
        "model": "seedance-2",
        "input": {
            "prompt": "A clean 4 second social ad shot: a smart speaker on a desk lights up while colorful audio waves move through a modern apartment",
            "duration": 4,
            "resolution": "720p",
            "aspect_ratio": "16:9",
            "generate_audio": True,
        },
    }
    if callback_url:
        payload["callback_url"] = callback_url

    submit_result = request_json(
        "POST",
        f"{base_url}/api/generate/submit",
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        json=payload,
    )
    task_id = submit_result.get("data", {}).get("task_id")
    if not task_id:
        raise RuntimeError(f"Submit response did not include data.task_id: {submit_result}")

    print(f"submitted task: {task_id}")
    final_result = poll_task(base_url, api_key, task_id)
    print(json.dumps(final_result, indent=2))


if __name__ == "__main__":
    main()
