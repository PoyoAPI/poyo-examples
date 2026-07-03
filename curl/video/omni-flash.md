# Omni Flash cURL Quickstart

Use `omni-flash` for conversational video generation and editing workflows where prompts, images, or videos can become short production drafts.

## Model Page

Model page: [Omni Flash on PoYo](https://poyo.ai/models/omni-flash).

## Text To Video

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "omni-flash",
    "input": {
      "prompt": "A short product video draft of a compact translucent desk speaker on a wooden desk beside a laptop, soft daylight, slow camera push, no logo, no text",
      "resolution": "720p",
      "duration": 4,
      "aspect_ratio": "16:9"
    }
  }'
```

Store the returned `data.task_id`, then poll:

```bash
curl --fail-with-body --request GET \
  --url "$POYO_BASE_URL/api/generate/status/task-unified-example" \
  --header "Authorization: Bearer $POYO_API_KEY"
```

## Image Or Video Guided Draft

Add `image_urls` or `video_urls` when your workflow starts from existing media.

```json
{
  "model": "omni-flash",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "Turn the reference product image into a short social video draft with a subtle camera move, realistic desk lighting, no logo, no text",
    "image_urls": [
      "https://example.com/source-product.png"
    ],
    "resolution": "720p",
    "duration": 4,
    "aspect_ratio": "16:9"
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
        "file_url": "https://storage.poyo.ai/generated/video.mp4",
        "file_type": "video"
      }
    ],
    "error_message": null
  }
}
```

## Ship Checklist

- Keep `POYO_API_KEY` on your server.
- Start with `720p` and short durations for draft loops.
- Use image or video inputs only when they are public HTTPS URLs your backend trusts.
- Store `data.task_id` before polling or waiting for a webhook.
- Use webhooks for production queues instead of tight polling loops.

## Social Angle

Omni Flash is useful when a video workflow is iterative: start from a prompt or reference, generate a short draft, then decide what to revise.
