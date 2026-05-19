# Seedance 2 cURL Quickstart

Use `seedance-2` for short video generation workflows such as social ads, product motion, creator tools, and prompt-to-video experiments.

## Text To Video

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "seedance-2",
    "input": {
      "prompt": "A clean 4 second social ad shot: a smart speaker on a desk lights up while colorful audio waves move through a modern apartment",
      "duration": 4,
      "resolution": "720p",
      "aspect_ratio": "16:9",
      "generate_audio": true
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
  "model": "seedance-2",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "A short product launch video with soft camera motion",
    "duration": 4,
    "resolution": "720p",
    "aspect_ratio": "16:9",
    "generate_audio": true
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

- Use `duration` from 4 to 15 seconds.
- Start with `720p` for lower-cost tests.
- Poll every 10 seconds or use webhooks.
- Log task status transitions, not private prompts or media URLs.
- Download returned videos before they expire.

## Social Angle

Prompt to social ad: PoYo turns a short creative brief into a video task, then returns the final MP4 through the same task status flow.
