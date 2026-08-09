# FLUX 3 Video API cURL quickstart

FLUX 3 provides separate model IDs for text, image, first/last-frame, extension, and keyframe workflows. This example starts with text-to-video.

```bash
curl -X POST "https://api.poyo.ai/api/generate/submit" \
  -H "Authorization: Bearer $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "flux-3/text-to-video",
    "input": {
      "prompt": "A premium macro product shot with crisp reflections",
      "duration": 5,
      "resolution": "720p",
      "aspect_ratio": "16:9",
      "sound": true
    }
  }'
```

Store `data.task_id`, then call `GET /api/generate/status/{task_id}`. See the [FLUX 3 Video focused repository](https://github.com/PoyoAPI/flux-3-video-api) for all five workflow IDs.

