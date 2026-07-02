# Grok Imagine Image cURL Quickstart

Use `grok-imagine-image` when you want a small backend-safe image generation call for visual quality tests, thumbnails, social assets, and product concept images.

## Model Page

Model page: [Grok Imagine on PoYo](https://poyo.ai/models/grok-imagine).

## Text To Image

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "grok-imagine-image",
    "input": {
      "prompt": "A clean cinematic product photo of a translucent desk speaker on a white studio surface, soft reflections, realistic lighting",
      "size": "16:9"
    }
  }'
```

Store the returned `data.task_id`, then poll:

```bash
curl --fail-with-body --request GET \
  --url "$POYO_BASE_URL/api/generate/status/task-unified-example" \
  --header "Authorization: Bearer $POYO_API_KEY"
```

## Optional Callback

Add `callback_url` at the top level when your webhook receiver is public:

```json
{
  "model": "grok-imagine-image",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "A polished hero image for a developer tool dashboard, realistic screen reflections",
    "size": "16:9"
  }
}
```

## Expected Status Response

```json
{
  "code": 200,
  "data": {
    "task_id": "task-unified-example",
    "status": "finished",
    "progress": 100,
    "files": [
      {
        "file_url": "https://storage.poyo.ai/generated/image.png",
        "file_type": "image"
      }
    ],
    "error_message": null
  }
}
```

## Ship Checklist

- Keep `POYO_API_KEY` on your server.
- Start with one image and one size before batching variants.
- Store `data.task_id` before polling or waiting for a webhook.
- Treat `finished` and `failed` as terminal states.
- Download returned files before they expire.

## Social Angle

Grok Imagine Image is useful when you want to compare output quality quickly without building a full media pipeline first.
