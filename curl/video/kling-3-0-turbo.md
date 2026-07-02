# Kling 3.0 Turbo cURL Quickstart

Use `kling-3.0-turbo/standard` or `kling-3.0-turbo/pro` when you want fast video generation for high-volume drafts, multi-shot storyboards, and first-frame image-to-video workflows.

## Model Page

Model page: [Kling 3.0 Turbo on PoYo](https://poyo.ai/models/kling-3-0-turbo).

## Text To Video

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "kling-3.0-turbo/standard",
    "input": {
      "prompt": "A chef carefully plating a gourmet dish in a modern kitchen, steam rising under warm lighting. Slow push-in, cinematic depth of field.",
      "duration": 5,
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

## Multi-Shot Storyboard

Use `multi_prompt` when you want one generated video with several planned shots:

```json
{
  "model": "kling-3.0-turbo/standard",
  "input": {
    "aspect_ratio": "16:9",
    "multi_prompt": [
      {
        "prompt": "Wide shot: a product designer sketches a new desk lamp beside a laptop in a sunlit studio.",
        "duration": 4
      },
      {
        "prompt": "Close-up: the lamp prototype turns on, showing warm light across the desk surface.",
        "duration": 4
      },
      {
        "prompt": "Final shot: the camera pulls back to reveal the full desk setup, clean and realistic.",
        "duration": 4
      }
    ]
  }
}
```

## Optional Callback

Add `callback_url` at the top level when your webhook receiver is public:

```json
{
  "model": "kling-3.0-turbo/pro",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "A cinematic 5 second product concept video with realistic camera motion",
    "duration": 5,
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

- Use `kling-3.0-turbo/standard` for fast 720p drafts.
- Use `kling-3.0-turbo/pro` when you need 1080p output.
- Keep total duration between 3 and 15 seconds.
- Use `multi_prompt` for up to 6 planned shots in one video.
- Use webhooks for production pipelines instead of tight polling loops.

## Social Angle

Kling 3.0 Turbo is useful when the bottleneck is not one perfect video, but generating enough structured drafts to choose the right direction quickly.
