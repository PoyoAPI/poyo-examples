# Seedance 2.0 Mini cURL Quickstart

Use `seedance-2-mini` for lower-cost video draft workflows where you want to test several creative directions before choosing what to polish.

## Model Page

Model page: [Seedance 2.0 Mini on PoYo](https://poyo.ai/models/seedance-2-mini).

## Text To Video

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "seedance-2-mini",
    "input": {
      "prompt": "A short video draft of a small ceramic desk mascot on a wooden desk near a laptop. Slow orbit camera, natural daylight, realistic handheld creator workflow feeling, no text.",
      "duration": 5,
      "resolution": "720p",
      "aspect_ratio": "16:9",
      "generate_audio": false
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
  "model": "seedance-2-mini",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "A quick 5 second product draft with handheld camera movement and realistic desk lighting",
    "duration": 5,
    "resolution": "720p",
    "aspect_ratio": "16:9",
    "generate_audio": false
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

- Use `480p` or `720p` depending on draft quality and cost target.
- Use `duration` from 4 to 15 seconds.
- Generate multiple short drafts before spending time on final edits.
- Poll every 10 seconds while testing, or use webhooks in production.
- Download returned videos before they expire.

## Social Angle

Seedance 2.0 Mini is useful for fast draft loops: same idea, several camera or motion directions, then choose what is worth polishing.
