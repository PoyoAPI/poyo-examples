# PoYo Product Recipes

Recipes start from product workflows instead of individual endpoints. Use them to decide which examples to combine first.

## Recipe Table

| Product workflow | PoYo models | Start with |
| --- | --- | --- |
| Chat-assisted image prompt | `gpt-5.2` -> `gpt-image-2` | [`curl/chat/gpt-5.2.md`](../curl/chat/gpt-5.2.md), [`curl/image/gpt-image-2.md`](../curl/image/gpt-image-2.md) |
| Product idea to short video | `seedance-2` or `sora-2` | [`curl/video/seedance-2.md`](../curl/video/seedance-2.md), [`curl/video/sora-2.md`](../curl/video/sora-2.md) |
| Creator tool background music | `generate-music` | [`curl/music/generate-music.md`](../curl/music/generate-music.md) |
| Ecommerce or game 3D asset | `meshy-6-text-to-3d` | [`curl/3d/meshy-6-text-to-3d.md`](../curl/3d/meshy-6-text-to-3d.md) |

## Chat To Image Prompt

Use `gpt-5.2` to turn user intent into a clean image prompt, then submit the prompt to `gpt-image-2`.

Minimum chat request:

```json
{
  "model": "gpt-5.2",
  "messages": [
    {
      "role": "user",
      "content": "Rewrite this product idea as a concise image generation prompt: a premium smart speaker on a clean studio background"
    }
  ]
}
```

Then submit the generated prompt:

```json
{
  "model": "gpt-image-2",
  "input": {
    "prompt": "A premium product photo of a matte black smart speaker on a clean white studio background",
    "quality": "low",
    "size": "1:1",
    "resolution": "1K"
  }
}
```

Store `data.task_id` and poll status or wait for a webhook.

## Product Idea To Short Video

Use video models when the product story needs motion, pacing, or a short social ad draft.

```json
{
  "model": "seedance-2",
  "input": {
    "prompt": "A cinematic tracking shot around a premium perfume bottle on a dark reflective surface",
    "duration": 4,
    "resolution": "720p",
    "aspect_ratio": "16:9",
    "generate_audio": true
  }
}
```

Store the task ID before leaving your request handler.

## Creator Tool Background Music

Use `generate-music` when a creator tool needs a soundtrack draft from a text idea.

```json
{
  "model": "generate-music",
  "input": {
    "prompt": "Bright electronic background music for a 15 second product launch video",
    "instrumental": true
  }
}
```

Use webhooks for production tools where users may leave the page before the music finishes.

## Ecommerce Or Game 3D Asset

Use `meshy-6-text-to-3d` when a catalog, game, or prototype needs downloadable 3D files.

```json
{
  "model": "meshy-6-text-to-3d",
  "input": {
    "prompt": "A low-poly futuristic delivery drone, clean topology, game-ready asset",
    "art_style": "realistic"
  }
}
```

Persist the returned task ID and retrieve the generated model files after completion.

## Production Notes

- Keep API keys server-side.
- Save `task_id`, model, and status for every request.
- Prefer webhooks for long-running media workflows.
- Store generated files before they expire.
- Do not log prompts that contain private customer data unless your product explicitly requires it.
