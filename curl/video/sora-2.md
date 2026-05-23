# Sora 2 cURL Quickstart

Use `sora-2` for a high-interest video quickstart that demonstrates PoYo video tasks without adding storyboard complexity in the first run.

## Sample Output

Sample output: [PoYo model page sample](https://storage.poyo.ai/sora-2-official/feature-3.mp4).

This is an official PoYo model page sample. The quickstart below keeps the current examples repo model ID as `sora-2`; check the [PoYo model catalog](https://poyo.ai/models) for current Sora model options.

## Text To Video

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "sora-2",
    "input": {
      "prompt": "A cinematic product launch clip: a compact AI camera rotates on a glass table while city lights reflect in the background",
      "duration": 10
    }
  }'
```

Store the returned `data.task_id`, then poll:

```bash
curl --fail-with-body --request GET \
  --url "$POYO_BASE_URL/api/generate/status/task-unified-example" \
  --header "Authorization: Bearer $POYO_API_KEY"
```

## Expected Submit Response

```json
{
  "code": 200,
  "data": {
    "task_id": "task-unified-example",
    "status": "not_started",
    "created_time": "2026-05-19T08:00:00"
  }
}
```

## Ship Checklist

- Start with a simple text-to-video prompt.
- Use 10 seconds for quick validation.
- Store `task_id` before leaving the request handler.
- Prefer webhooks for production video queues.
- Reconcile important callbacks with the status endpoint.

## Social Angle

Sora 2 through PoYo: a small backend request creates the task, and your app can poll or receive a callback when the video finishes.
