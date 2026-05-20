# PoYo Examples

Production workflows for building image, video, music, 3D, and chat products with PoYo AI APIs.

[Website](https://poyo.ai) | [Docs](https://docs.poyo.ai) | [Models](https://poyo.ai/models) | [Pricing](https://poyo.ai/pricing) | [Dashboard](https://poyo.ai/dashboard) | [Discord](https://discord.gg/F8JNuUPB3j)

PoYo gives developers one account and one API workflow for multimodal generation. This repo is designed for backend builders: submit tasks from a server, store task IDs, poll or receive webhooks, then download generated files before they expire.

## Start In 3 Minutes

1. Create an account at [poyo.ai](https://poyo.ai).
2. Create an API key in [API Keys](https://poyo.ai/dashboard/api-key).
3. Copy `.env.example` to `.env`.
4. Set `POYO_API_KEY`.
5. Run one cURL, Node.js, or Python example.
6. Store the returned `data.task_id`.
7. Poll status or provide `callback_url` for webhooks.

```bash
cp .env.example .env
export POYO_API_KEY="your-api-key"
export POYO_BASE_URL="https://api.poyo.ai"
```

Never expose a PoYo API key in browser code, mobile apps, public repositories, screenshots, or client-side logs.

## Choose Your Workflow

| Goal | Start here |
| --- | --- |
| Test a model with cURL | [`curl/`](curl/) |
| Build a Node.js backend | [`node/`](node/) |
| Build a Python backend | [`python/`](python/) |
| Add a Next.js server route | [`nextjs/`](nextjs/) |
| Start from product recipes | [`recipes/`](recipes/) |
| Receive production callbacks | [`webhooks/`](webhooks/) |
| Troubleshoot shared behavior | [`shared/README.md`](shared/README.md) |
| Promote demos on social channels | [`social/first-batch.md`](social/first-batch.md) |

## First Batch Examples

| Model | Capability | Example |
| --- | --- | --- |
| `gpt-image-2` | Product image generation and editing | [`curl/image/gpt-image-2.md`](curl/image/gpt-image-2.md) |
| `seedance-2` | Short social video generation | [`curl/video/seedance-2.md`](curl/video/seedance-2.md) |
| `sora-2` | High-interest video quickstart | [`curl/video/sora-2.md`](curl/video/sora-2.md) |
| `generate-music` | Background music generation | [`curl/music/generate-music.md`](curl/music/generate-music.md) |
| `meshy-6-text-to-3d` | Prompt to downloadable 3D asset | [`curl/3d/meshy-6-text-to-3d.md`](curl/3d/meshy-6-text-to-3d.md) |
| `gpt-5.2` | OpenAI-style chat completion | [`curl/chat/gpt-5.2.md`](curl/chat/gpt-5.2.md) |

## Unified Async Flow

Most media and 3D examples use the same backend pattern.

```http
POST https://api.poyo.ai/api/generate/submit
Authorization: Bearer <POYO_API_KEY>
Content-Type: application/json
```

The submit response returns a task ID:

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

Persist `data.task_id`, then poll:

```http
GET https://api.poyo.ai/api/generate/status/{task_id}
Authorization: Bearer <POYO_API_KEY>
```

Or pass `callback_url` during submit and process the webhook when the task reaches `finished` or `failed`.

Chat examples use the synchronous OpenAI-style endpoint:

```http
POST https://api.poyo.ai/v1/chat/completions
Authorization: Bearer <POYO_API_KEY>
Content-Type: application/json
```

## Production Checklist

- Keep `POYO_API_KEY` server-side only.
- Store `data.task_id` before polling or waiting for webhooks.
- Treat `finished` and `failed` as terminal states.
- Use moderate polling intervals and backoff on transient errors.
- Make webhook handlers idempotent.
- Only process webhook task IDs your system submitted.
- Download and store generated files before they expire.
- Check [Dashboard History](https://poyo.ai/dashboard/history) when debugging task cost, status, and output.

## Contributing

Issues and PRs are welcome. Keep examples small, backend-safe, and runnable with minimal dependencies.
