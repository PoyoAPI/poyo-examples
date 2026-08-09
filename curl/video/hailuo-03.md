# MiniMax H3 API cURL quickstart

MiniMax H3 uses the production model ID `hailuo-03`.

```bash
curl -X POST "https://api.poyo.ai/api/generate/submit" \
  -H "Authorization: Bearer $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "hailuo-03",
    "input": {
      "prompt": "A paper dragon awakens on an illustrator desk, warm morning light",
      "duration": 5,
      "resolution": "2K",
      "aspect_ratio": "16:9"
    }
  }'
```

Store `data.task_id`, then call `GET /api/generate/status/{task_id}`. See the [MiniMax H3 focused repository](https://github.com/PoyoAPI/minimax-h3-api) for first/last-frame and reference rules.

