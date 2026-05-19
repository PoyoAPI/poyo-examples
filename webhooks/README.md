# PoYo Webhook Examples

PoYo sends callbacks to `callback_url` when async tasks reach a terminal state.

| Example | Stack |
| --- | --- |
| [`express`](express/) | Node.js + Express |
| [`fastapi`](fastapi/) | Python + FastAPI |

## Local Demo Mode

For local tests, either set known task IDs:

```env
POYO_KNOWN_TASK_IDS=task-unified-example
```

Or allow all task IDs for local demos only:

```env
POYO_ALLOW_UNLISTED_TASK_IDS=true
```

Do not enable `POYO_ALLOW_UNLISTED_TASK_IDS=true` in production.

## Production Pattern

- Store submitted task IDs in your database.
- Accept callbacks only for task IDs you submitted.
- Persist the event quickly, return `2xx`, and process slow work asynchronously.
- Make callback handling idempotent.
- Reconcile important callbacks with `GET /api/generate/status/{task_id}`.
