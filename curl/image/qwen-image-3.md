# Qwen Image 3 API cURL quickstart

Use `qwen-image-3` for standard generation or `qwen-image-3-pro` for the higher-tier model.

```bash
curl -X POST "https://api.poyo.ai/api/generate/submit" \
  -H "Authorization: Bearer $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-image-3",
    "input": {
      "prompt": "Editorial travel poster of Hangzhou at dawn, crisp geometric layout",
      "size": "3:2",
      "resolution": "2K",
      "output_format": "png",
      "prompt_extend": true,
      "enable_safety_checker": true
    }
  }'
```

Store `data.task_id`, then call `GET /api/generate/status/{task_id}`. See the [Qwen Image 3 focused repository](https://github.com/PoyoAPI/qwen-image-3-api) for editing inputs and pricing.

