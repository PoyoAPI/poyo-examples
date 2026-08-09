# Seedance 2.5 API cURL quickstart

Use model `seedance-2.5` for 4-30 second video generation at 480p or 720p.

```bash
curl -X POST "https://api.poyo.ai/api/generate/submit" \
  -H "Authorization: Bearer $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "seedance-2.5",
    "input": {
      "prompt": "A cinematic tracking shot through a neon-lit night market after rain",
      "duration": 8,
      "resolution": "720p",
      "aspect_ratio": "16:9",
      "generate_audio": false
    }
  }'
```

Store `data.task_id`, then call `GET /api/generate/status/{task_id}`. See the [focused repository](https://github.com/PoyoAPI/seedance-2-5-api) for reference limits, pricing, Node.js polling, and production notes.

