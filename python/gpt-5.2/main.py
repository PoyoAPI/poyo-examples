import json
import os
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


def main() -> None:
    load_env()
    api_key = require_api_key()
    base_url = os.environ.get("POYO_BASE_URL", "https://api.poyo.ai")

    payload = {
        "model": "gpt-5.2",
        "messages": [
            {
                "role": "system",
                "content": "You are a concise API launch advisor. Reply with a short checklist.",
            },
            {
                "role": "user",
                "content": "Give me a production checklist for launching an AI media generation endpoint.",
            },
        ],
        "temperature": 0.4,
        "max_tokens": 400,
    }

    result = request_json(
        "POST",
        f"{base_url}/v1/chat/completions",
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        json=payload,
    )
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
