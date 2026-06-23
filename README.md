# Backend-safe AI generation examples for PoYo

[![API docs](https://img.shields.io/badge/API%20docs-docs.poyo.ai-22d3ee)](https://docs.poyo.ai)
[![Models](https://img.shields.io/badge/Models-poyo.ai%2Fmodels-a78bfa)](https://poyo.ai/models)
[![License: MIT](https://img.shields.io/badge/License-MIT-111827)](LICENSE)
[![Check examples](https://github.com/PoyoAPI/poyo-examples/actions/workflows/check.yml/badge.svg)](https://github.com/PoyoAPI/poyo-examples/actions/workflows/check.yml)

Copy-paste backend workflows for PoYo image, video, music, 3D, and chat APIs.

[Website](https://poyo.ai) | [Docs](https://docs.poyo.ai) | [Models](https://poyo.ai/models) | [Pricing](https://poyo.ai/pricing) | [Dashboard](https://poyo.ai/dashboard) | [Discord](https://discord.gg/F8JNuUPB3j)

PoYo gives developers one account and one production workflow for multimodal generation: keep the API key on your server, submit a task, store `data.task_id`, poll while testing, and use webhooks in production.

## Run Your First Task In 3 Minutes

The core path is the same for most media and 3D models:

```text
POYO_API_KEY -> submit task -> data.task_id -> status polling or callback_url
```

1. Create an account at [poyo.ai](https://poyo.ai).
2. Create an API key in [API Keys](https://poyo.ai/dashboard/api-key).
3. Copy `.env.example` to `.env` and set `POYO_API_KEY`.
4. Run one cURL, Node.js, or Python example.
5. Store the returned `data.task_id`.
6. Poll status while testing, or pass `callback_url` for production webhooks.

```bash
cp .env.example .env
export POYO_API_KEY="your-api-key"
export POYO_BASE_URL="https://api.poyo.ai"
```

Start with one of these:

```bash
# cURL quickstart
cat curl/image/gpt-image-2.md

# Node.js backend example
(cd node/gpt-image-2 && npm install && npm start)

# Python backend example
(cd python/gpt-image-2 && pip install -r requirements.txt && python main.py)
```

Never expose a PoYo API key in browser code, mobile apps, public repositories, screenshots, or client-side logs.

## Cost And Failed Task Behavior

For generation APIs, the real cost is the cost of getting a usable result, not just sending a request.

PoYo uses credit-based pricing, and failed generation tasks are not charged credits. Your backend should still treat `failed` as a terminal state, log the reason, and retry only when it makes sense.

## Start By Goal

| Goal | Start here |
| --- | --- |
| Generate or edit images | [`curl/image/gpt-image-2.md`](curl/image/gpt-image-2.md), [`node/gpt-image-2/`](node/gpt-image-2/), [`python/gpt-image-2/`](python/gpt-image-2/) |
| Generate short videos | [`curl/video/seedance-2.md`](curl/video/seedance-2.md), [`node/seedance-2/`](node/seedance-2/), [`python/seedance-2/`](python/seedance-2/) |
| Try a high-interest video quickstart | [`curl/video/sora-2.md`](curl/video/sora-2.md) |
| Build chat completions | [`curl/chat/gpt-5.2.md`](curl/chat/gpt-5.2.md), [`node/gpt-5.2/`](node/gpt-5.2/), [`python/gpt-5.2/`](python/gpt-5.2/) |
| Keep API keys out of browser code | [`nextjs/gpt-image-2-route/`](nextjs/gpt-image-2-route/) |
| Receive production callbacks | [`webhooks/`](webhooks/) |
| Build from product recipes | [`recipes/`](recipes/) |
| Understand shared task behavior | [`shared/README.md`](shared/README.md) |

## First Batch Examples

| Model | Capability | Example |
| --- | --- | --- |
| `gpt-image-2` | Product image generation and editing | [`curl/image/gpt-image-2.md`](curl/image/gpt-image-2.md) |
| `seedance-2` | Short social video generation | [`curl/video/seedance-2.md`](curl/video/seedance-2.md) |
| `sora-2` | High-interest video quickstart | [`curl/video/sora-2.md`](curl/video/sora-2.md) |
| `generate-music` | Background music generation | [`curl/music/generate-music.md`](curl/music/generate-music.md) |
| `meshy-6-text-to-3d` | Prompt to downloadable 3D asset | [`curl/3d/meshy-6-text-to-3d.md`](curl/3d/meshy-6-text-to-3d.md) |
| `gpt-5.2` | OpenAI-style chat completion | [`curl/chat/gpt-5.2.md`](curl/chat/gpt-5.2.md) |

## Examples Index

| Model | Modality | Workflow | cURL | Node.js | Python | Next.js | Webhook | Sample Output |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `gpt-image-2` | Image | Async task | [cURL](curl/image/gpt-image-2.md) | [Node.js](node/gpt-image-2/) | [Python](python/gpt-image-2/) | [Route](nextjs/gpt-image-2-route/) | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/gpt-image-2/gpt-image-2-example-1_1.png) |
| `seedance-2` | Video | Async task | [cURL](curl/video/seedance-2.md) | [Node.js](node/seedance-2/) | [Python](python/seedance-2/) | - | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/seedance-2/feature-1.mp4) |
| `sora-2` | Video | Async task | [cURL](curl/video/sora-2.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/sora-2-official/feature-3.mp4) |
| `generate-music` | Music | Async task | [cURL](curl/music/generate-music.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page sample](https://poyo.ai/models/generate-music) |
| `meshy-6-text-to-3d` | 3D | Async task | [cURL](curl/3d/meshy-6-text-to-3d.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/meshy-6-3d/fal-text-to-3d/preview.png) |
| `gpt-5.2` | Chat | Sync response | [cURL](curl/chat/gpt-5.2.md) | [Node.js](node/gpt-5.2/) | [Python](python/gpt-5.2/) | - | - | [Chat docs](https://docs.poyo.ai/api-manual/chat-series) |

## Model-Specific Repositories

Use this repo as the main integration hub. If you are searching for a single model, these focused repos provide smaller entry points with cURL, Node.js, webhook, prompt, and production notes.

| Category | Model repo | Best for |
| --- | --- | --- |
| Image | [PoyoAPI/gpt-image-2-api](https://github.com/PoyoAPI/gpt-image-2-api) | GPT Image 2 generation and editing |
| Image | [PoyoAPI/nano-banana-2-api](https://github.com/PoyoAPI/nano-banana-2-api) | Nano Banana 2 generation and image edits |
| Image | [PoyoAPI/nano-banana-pro-api](https://github.com/PoyoAPI/nano-banana-pro-api) | Nano Banana Pro higher-detail image workflows |
| Video | [PoyoAPI/seedance-2-api](https://github.com/PoyoAPI/seedance-2-api) | Seedance 2 video generation and fast drafts |
| Video | [PoyoAPI/sora-2-official-api](https://github.com/PoyoAPI/sora-2-official-api) | Sora 2 Official video and reference-frame workflows |
| Video | [PoyoAPI/happy-horse-api](https://github.com/PoyoAPI/happy-horse-api) | Happy Horse text-to-video and image-to-video workflows |

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

## Repository Status

- Latest release: [v0.1.0](https://github.com/PoyoAPI/poyo-examples/releases/tag/v0.1.0).
- Changelog: [CHANGELOG.md](CHANGELOG.md).
- Local checks: `make check` or `pwsh -NoLogo -NoProfile -File scripts/check.ps1`; on Windows PowerShell, use `powershell -NoLogo -NoProfile -File scripts/check.ps1`.
- Contributions: [CONTRIBUTING.md](CONTRIBUTING.md).
- Security reports: [SECURITY.md](SECURITY.md).
- Issues: [choose a template](https://github.com/PoyoAPI/poyo-examples/issues/new/choose), [bug report](https://github.com/PoyoAPI/poyo-examples/issues/new?template=bug_report.md), or [example request](https://github.com/PoyoAPI/poyo-examples/issues/new?template=example_request.md).

## Contributing

Issues and PRs are welcome. Keep examples small, backend-safe, and runnable with minimal dependencies. See [CONTRIBUTING.md](CONTRIBUTING.md) before adding examples, and use [SECURITY.md](SECURITY.md) for sensitive reports.
