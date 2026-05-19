# Shared PoYo API Patterns

These notes apply to the examples in this repository.

## Environment

All backend examples read these variables:

```env
POYO_API_KEY=YOUR_POYO_API_KEY_HERE
POYO_BASE_URL=https://api.poyo.ai
POYO_CALLBACK_URL=https://example.com/api/poyo/webhook
```

`POYO_CALLBACK_URL` is optional. Set it only after your webhook receiver is publicly reachable.

## Async Tasks

Image, video, music, and 3D generation use:

```http
POST /api/generate/submit
GET /api/generate/status/{task_id}
```

Always store `data.task_id` from the submit response before polling or waiting for callbacks.

Terminal states:

- `finished`
- `failed`

Non-terminal states:

- `not_started`
- `running`

## Response Handling

Production callers should treat both transport errors and API-level errors as failures:

- HTTP status is not `2xx`
- JSON body contains a `code` that is neither `0` nor `200`
- Submit response is missing `data.task_id`
- Status response is missing `data.status`

## Polling

Use moderate polling intervals:

- Image: every 5 seconds
- Video, music, and 3D: every 10 seconds

For high-volume production workloads, prefer webhooks.

## Webhooks

Webhook handlers should:

- Return `2xx` quickly after accepting the event.
- Ignore task IDs that were not submitted by your system.
- Be idempotent for duplicate deliveries.
- Persist callback state before doing slow business logic.
- Reconcile important callbacks with `GET /api/generate/status/{task_id}` before irreversible actions.

## Chat

Chat uses the synchronous OpenAI-style endpoint:

```http
POST /v1/chat/completions
```

The chat examples use `gpt-5.2`, but the same request shape works for other supported chat models listed in the PoYo docs.
