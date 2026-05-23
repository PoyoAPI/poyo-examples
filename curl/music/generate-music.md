# Generate Music cURL Quickstart

Use `generate-music` when your product needs background tracks, creator-tool audio, soundtrack drafts, or generated song ideas.

This first example uses simple mode so new users only need a prompt.

## Sample Output

Sample output: [PoYo model page sample](https://poyo.ai/models/generate-music).

This links to the official PoYo model page output area, not to a private generated task or internal audio file.

## Simple Music Generation

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/api/generate/submit" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "generate-music",
    "input": {
      "prompt": "Create a bright 30 second electronic background track for a product launch video, optimistic and polished",
      "custom_mode": false,
      "instrumental": false,
      "mv": "V4"
    }
  }'
```

Store the returned `data.task_id`. Music tasks can be checked through the music detail endpoint documented by PoYo, and may also send callbacks when `callback_url` is provided.

## Custom Instrumental Example

```json
{
  "model": "generate-music",
  "callback_url": "https://example.com/api/poyo/webhook",
  "input": {
    "prompt": "A calm and relaxing piano track with soft melodies",
    "style": "Classical, peaceful, minimal",
    "title": "Quiet Launch",
    "custom_mode": true,
    "instrumental": true,
    "mv": "V5_5",
    "negative_tags": "Heavy metal, aggressive drums",
    "style_weight": 0.65
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

## Ship Checklist

- Start with `custom_mode: false` for quick tests.
- Use `custom_mode: true` when you need title and style control.
- Store `task_id` and inspect the music detail result when complete.
- Avoid logging private lyrics or customer prompts.
- Download generated audio and cover images before they expire.

## Social Angle

One PoYo task can create soundtrack drafts for product videos, creator tools, and social posts without switching API providers.
