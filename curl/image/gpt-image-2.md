# GPT Image 2 cURL Quickstart

Use `gpt-image-2` when you need a fast server-side image generation test for product visuals, ads, UI mockups, or social assets.

## Text To Image

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "gpt-image-2",
    "input": {
      "prompt": "A premium product photo of a matte black smart speaker on a clean white studio background, realistic softbox lighting, high detail",
      "quality": "low",
      "size": "1:1",
      "resolution": "1K"
    }
  }'
```

Store the returned `data.task_id`, then poll:

```bash
curl --fail-with-body --request GET \
  --url "$POYO_BASE_URL/api/generate/status/task-unified-example" \
  --header "Authorization: Bearer $POYO_API_KEY"
```

## Image Edit

Use `gpt-image-2-edit` when you have one reference image.

```json
{
  "model": "gpt-image-2-edit",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "Replace the background with a clean studio backdrop and add a soft natural shadow",
    "quality": "high",
    "size": "1:1",
    "resolution": "2K",
    "image_urls": [
      "https://example.com/source-product.png"
    ]
  }
}
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

- Keep `POYO_API_KEY` server-side only.
- Store `data.task_id` before polling.
- Use `gpt-image-2-edit` when sending `image_urls`.
- Download returned images before they expire.
- Use `callback_url` for high-volume product image workflows.

## Social Angle

Prompt to product shot: one PoYo API request creates a product image task, and the same status endpoint returns the generated file URL.
