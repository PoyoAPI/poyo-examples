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

## Recent Model Quickstarts

These examples match the latest model and repo maintenance work. Use the focused repos when you want the smallest standalone project for one model.

| Model | Best for | Start here |
| --- | --- | --- |
| `seedance-2.5` | 4-30 second controllable video with up to 50 multimodal references | [PoyoAPI/seedance-2-5-api](https://github.com/PoyoAPI/seedance-2-5-api) ([model page](https://poyo.ai/models/seedance-2-5)) |
| `hailuo-03` (MiniMax H3) | 2K video, first/last frames, and reference-driven generation | [PoyoAPI/minimax-h3-api](https://github.com/PoyoAPI/minimax-h3-api) ([model page](https://poyo.ai/models/minimax-h3)) |
| `flux-3/text-to-video` | FLUX 3 generation, extension, and keyframe-directed video | [PoyoAPI/flux-3-video-api](https://github.com/PoyoAPI/flux-3-video-api) ([model page](https://poyo.ai/models/flux-3)) |
| `qwen-image-3` | 1K/2K image generation and multi-image editing | [PoyoAPI/qwen-image-3-api](https://github.com/PoyoAPI/qwen-image-3-api) ([model page](https://poyo.ai/models/qwen-image-3)) |
| `kimi-k3` | Long-context chat, coding, and agent planning | [PoyoAPI/kimi-k3-api](https://github.com/PoyoAPI/kimi-k3-api) ([model page](https://poyo.ai/models/kimi-k3)) |
| `gpt-5-6-luna` / `terra` / `sol` | Responses API workloads across three capability and cost tiers | [PoyoAPI/gpt-5-6-api](https://github.com/PoyoAPI/gpt-5-6-api) ([model page](https://poyo.ai/models/gpt-5-6)) |
| `claude-opus-5` | Complex reasoning, research, and architecture review | [PoyoAPI/claude-opus-5-api](https://github.com/PoyoAPI/claude-opus-5-api) ([model page](https://poyo.ai/models/claude-opus-5)) |
| `seedream-5.0-pro` | Dense layouts, multilingual text, product visuals, and precise image edits | [PoyoAPI/seedream-5-0-pro-api](https://github.com/PoyoAPI/seedream-5-0-pro-api) ([model page](https://poyo.ai/models/seedream-5-0-pro)) |
| `seedance-2-mini` | Lower-cost ByteDance video drafts and fast direction tests | [PoyoAPI/seedance-2-mini-api](https://github.com/PoyoAPI/seedance-2-mini-api) ([model page](https://poyo.ai/models/seedance-2-mini)) |
| `wan2.2-text-to-video-fast` | Low-cost Wan text-to-video and guided image-to-video drafts | [PoyoAPI/wan-2-2-fast-api](https://github.com/PoyoAPI/wan-2-2-fast-api) ([model page](https://poyo.ai/models/wan-2-2-fast)) |
| `hailuo-2.3` | MiniMax realistic motion and first-frame guided video drafts | [PoyoAPI/hailuo-2-3-api](https://github.com/PoyoAPI/hailuo-2-3-api) ([model page](https://poyo.ai/models/hailuo-2-3)) |
| `kling-avatar-2.0/standard` | Audio-driven talking avatar and presenter videos | [PoyoAPI/kling-avatar-2-0-api](https://github.com/PoyoAPI/kling-avatar-2-0-api) ([model page](https://poyo.ai/models/kling-avatar-2-0)) |
| `flux-kontext-pro` | Scene-preserving image generation and editing workflows | [PoyoAPI/flux-kontext-api](https://github.com/PoyoAPI/flux-kontext-api) ([model page](https://poyo.ai/models/flux-kontext)) |
| `tripo3d-h3.1-text-to-3d` | High-detail text, image, and multiview 3D asset drafts | [PoyoAPI/tripo-h31-3d-api](https://github.com/PoyoAPI/tripo-h31-3d-api) ([model page](https://poyo.ai/models/tripo-h31-3d)) |
| `veo3.1-fast-official` | Fast Veo 3.1 video drafts with native audio options | [PoyoAPI/veo-3-1-official-api](https://github.com/PoyoAPI/veo-3-1-official-api) |
| `gemini-3-flash-preview` | Coding, agent, and long-context chat workflows | [PoyoAPI/gemini-3-api](https://github.com/PoyoAPI/gemini-3-api) |
| `deepseek-v4-flash` | Cost-aware coding, reasoning, and assistant workflows | [PoyoAPI/deepseek-v4-api](https://github.com/PoyoAPI/deepseek-v4-api) |
| `grok-imagine-video-1.5` | Image-to-video drafts for product and creator tools | [PoyoAPI/grok-imagine-video-1-5-api](https://github.com/PoyoAPI/grok-imagine-video-1-5-api) |
| `elevenlabs-v3-tts` | Expressive narration, dialogue, and voiceover workflows | [PoyoAPI/elevenlabs-v3-tts-api](https://github.com/PoyoAPI/elevenlabs-v3-tts-api) |
| `minimax-music-2.6` | Music drafts for creator tools and product videos | [PoyoAPI/minimax-music-2-6-api](https://github.com/PoyoAPI/minimax-music-2-6-api) |
| `claude-sonnet-5` | Agentic coding, planning, and long-context chat workflows | [`curl/chat/claude-sonnet-5.md`](curl/chat/claude-sonnet-5.md) |
| `nano-banana-2-lite` | Fast lower-cost image drafts and high-throughput visual tests | [`curl/image/nano-banana-2-lite.md`](curl/image/nano-banana-2-lite.md) |
| `omni-flash` | Short video drafts from prompts, images, or video references | [`curl/video/omni-flash.md`](curl/video/omni-flash.md) |
| `grok-imagine-image` | Image quality tests and visual concept drafts | [`curl/image/grok-imagine-image.md`](curl/image/grok-imagine-image.md) |
| `seedance-2-mini` | Lower-cost video draft loops and quick direction tests | [`curl/video/seedance-2-mini.md`](curl/video/seedance-2-mini.md) |
| `kling-3.0-turbo/standard` | Fast 720p video drafts and multi-shot storyboards | [`curl/video/kling-3-0-turbo.md`](curl/video/kling-3-0-turbo.md) |

## Cost And Failed Task Behavior

For generation APIs, the real cost is the cost of getting a usable result, not just sending a request.

PoYo uses credit-based pricing, and failed generation tasks are not charged credits. Your backend should still treat `failed` as a terminal state, log the reason, and retry only when it makes sense.

## Start By Goal

| Goal | Start here |
| --- | --- |
| Generate or edit images | [Qwen Image 3 repo](https://github.com/PoyoAPI/qwen-image-3-api), [Flux Kontext repo](https://github.com/PoyoAPI/flux-kontext-api), [`curl/image/qwen-image-3.md`](curl/image/qwen-image-3.md), [`curl/image/gpt-image-2.md`](curl/image/gpt-image-2.md) |
| Generate short videos | [Seedance 2.5 repo](https://github.com/PoyoAPI/seedance-2-5-api), [MiniMax H3 repo](https://github.com/PoyoAPI/minimax-h3-api), [FLUX 3 Video repo](https://github.com/PoyoAPI/flux-3-video-api), [`curl/video/seedance-2-5.md`](curl/video/seedance-2-5.md), [`curl/video/hailuo-03.md`](curl/video/hailuo-03.md), [`curl/video/flux-3.md`](curl/video/flux-3.md) |
| Try a high-interest video quickstart | [`curl/video/sora-2.md`](curl/video/sora-2.md) |
| Build chat and agent workflows | [Kimi K3 repo](https://github.com/PoyoAPI/kimi-k3-api), [GPT-5.6 repo](https://github.com/PoyoAPI/gpt-5-6-api), [Claude Opus 5 repo](https://github.com/PoyoAPI/claude-opus-5-api), [`curl/chat/kimi-k3.md`](curl/chat/kimi-k3.md), [`curl/chat/gpt-5-6.md`](curl/chat/gpt-5-6.md), [`curl/chat/claude-opus-5.md`](curl/chat/claude-opus-5.md) |
| Generate speech or music | [ElevenLabs v3 TTS repo](https://github.com/PoyoAPI/elevenlabs-v3-tts-api), [MiniMax Music 2.6 repo](https://github.com/PoyoAPI/minimax-music-2-6-api), [`curl/music/generate-music.md`](curl/music/generate-music.md) |
| Keep API keys out of browser code | [`nextjs/gpt-image-2-route/`](nextjs/gpt-image-2-route/) |
| Receive production callbacks | [`webhooks/`](webhooks/) |
| Build from product recipes | [`recipes/`](recipes/) |
| Understand shared task behavior | [`shared/README.md`](shared/README.md) |

## First Batch Examples

| Model | Capability | Example |
| --- | --- | --- |
| `veo3.1-fast-official` | Fast Veo 3.1 video generation | [PoyoAPI/veo-3-1-official-api](https://github.com/PoyoAPI/veo-3-1-official-api) |
| `gemini-3-flash-preview` | Chat, coding, and agent workflows | [PoyoAPI/gemini-3-api](https://github.com/PoyoAPI/gemini-3-api) |
| `deepseek-v4-flash` | Cost-aware chat and coding workflows | [PoyoAPI/deepseek-v4-api](https://github.com/PoyoAPI/deepseek-v4-api) |
| `grok-imagine-video-1.5` | Image-to-video draft generation | [PoyoAPI/grok-imagine-video-1-5-api](https://github.com/PoyoAPI/grok-imagine-video-1-5-api) |
| `elevenlabs-v3-tts` | Text-to-speech and voiceover generation | [PoyoAPI/elevenlabs-v3-tts-api](https://github.com/PoyoAPI/elevenlabs-v3-tts-api) |
| `minimax-music-2.6` | Music generation for creator workflows | [PoyoAPI/minimax-music-2-6-api](https://github.com/PoyoAPI/minimax-music-2-6-api) |
| `claude-sonnet-5` | Agentic chat, coding, planning, and long-context work | [`curl/chat/claude-sonnet-5.md`](curl/chat/claude-sonnet-5.md) |
| `nano-banana-2-lite` | Fast lower-cost image generation and edits | [`curl/image/nano-banana-2-lite.md`](curl/image/nano-banana-2-lite.md) |
| `omni-flash` | Prompt, image, or video guided video drafts | [`curl/video/omni-flash.md`](curl/video/omni-flash.md) |
| `gpt-image-2` | Product image generation and editing | [`curl/image/gpt-image-2.md`](curl/image/gpt-image-2.md) |
| `grok-imagine-image` | Image quality and visual concept generation | [`curl/image/grok-imagine-image.md`](curl/image/grok-imagine-image.md) |
| `seedance-2-mini` | Lower-cost video draft generation | [`curl/video/seedance-2-mini.md`](curl/video/seedance-2-mini.md) |
| `kling-3.0-turbo/standard` | Fast video generation and multi-shot storyboards | [`curl/video/kling-3-0-turbo.md`](curl/video/kling-3-0-turbo.md) |
| `seedance-2` | Short social video generation | [`curl/video/seedance-2.md`](curl/video/seedance-2.md) |
| `sora-2` | High-interest video quickstart | [`curl/video/sora-2.md`](curl/video/sora-2.md) |
| `generate-music` | Background music generation | [`curl/music/generate-music.md`](curl/music/generate-music.md) |
| `meshy-6-text-to-3d` | Prompt to downloadable 3D asset | [`curl/3d/meshy-6-text-to-3d.md`](curl/3d/meshy-6-text-to-3d.md) |
| `gpt-5.2` | OpenAI-style chat completion | [`curl/chat/gpt-5.2.md`](curl/chat/gpt-5.2.md) |

## Examples Index

| Model | Modality | Workflow | cURL | Node.js | Python | Next.js | Webhook | Sample Output |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `seedance-2.5` | Video | Async task | [cURL](curl/video/seedance-2-5.md) | [Focused repo](https://github.com/PoyoAPI/seedance-2-5-api) | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/seedance-2-5) |
| `hailuo-03` | Video | Async task | [cURL](curl/video/hailuo-03.md) | [Focused repo](https://github.com/PoyoAPI/minimax-h3-api) | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/minimax-h3) |
| `flux-3/text-to-video` | Video | Async task | [cURL](curl/video/flux-3.md) | [Focused repo](https://github.com/PoyoAPI/flux-3-video-api) | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/flux-3) |
| `qwen-image-3` | Image | Async task | [cURL](curl/image/qwen-image-3.md) | [Focused repo](https://github.com/PoyoAPI/qwen-image-3-api) | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/qwen-image-3) |
| `kimi-k3` | Chat | Sync response | [cURL](curl/chat/kimi-k3.md) | [Focused repo](https://github.com/PoyoAPI/kimi-k3-api) | - | - | - | [PoYo model page](https://poyo.ai/models/kimi-k3) |
| `gpt-5-6-luna` | Chat | Responses API | [cURL](curl/chat/gpt-5-6.md) | [Focused repo](https://github.com/PoyoAPI/gpt-5-6-api) | - | - | - | [PoYo model page](https://poyo.ai/models/gpt-5-6) |
| `claude-opus-5` | Chat | Messages API | [cURL](curl/chat/claude-opus-5.md) | [Focused repo](https://github.com/PoyoAPI/claude-opus-5-api) | - | - | - | [PoYo model page](https://poyo.ai/models/claude-opus-5) |
| `claude-sonnet-5` | Chat | Sync response | [cURL](curl/chat/claude-sonnet-5.md) | - | - | - | - | [PoYo model page](https://poyo.ai/models/claude-sonnet-5) |
| `nano-banana-2-lite` | Image | Async task | [cURL](curl/image/nano-banana-2-lite.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/nano-banana-2-lite) |
| `omni-flash` | Video | Async task | [cURL](curl/video/omni-flash.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/omni-flash) |
| `gpt-image-2` | Image | Async task | [cURL](curl/image/gpt-image-2.md) | [Node.js](node/gpt-image-2/) | [Python](python/gpt-image-2/) | [Route](nextjs/gpt-image-2-route/) | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/gpt-image-2/gpt-image-2-example-1_1.png) |
| `grok-imagine-image` | Image | Async task | [cURL](curl/image/grok-imagine-image.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/grok-imagine) |
| `seedance-2-mini` | Video | Async task | [cURL](curl/video/seedance-2-mini.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/seedance-2-mini) |
| `kling-3.0-turbo/standard` | Video | Async task | [cURL](curl/video/kling-3-0-turbo.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page](https://poyo.ai/models/kling-3-0-turbo) |
| `seedance-2` | Video | Async task | [cURL](curl/video/seedance-2.md) | [Node.js](node/seedance-2/) | [Python](python/seedance-2/) | - | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/seedance-2/feature-1.mp4) |
| `sora-2` | Video | Async task | [cURL](curl/video/sora-2.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/sora-2-official/feature-3.mp4) |
| `generate-music` | Music | Async task | [cURL](curl/music/generate-music.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page sample](https://poyo.ai/models/generate-music) |
| `meshy-6-text-to-3d` | 3D | Async task | [cURL](curl/3d/meshy-6-text-to-3d.md) | - | - | - | [Receivers](webhooks/) | [PoYo model page sample](https://storage.poyo.ai/meshy-6-3d/fal-text-to-3d/preview.png) |
| `gpt-5.2` | Chat | Sync response | [cURL](curl/chat/gpt-5.2.md) | [Node.js](node/gpt-5.2/) | [Python](python/gpt-5.2/) | - | - | [Chat docs](https://docs.poyo.ai/api-manual/chat-series) |

## Model-Specific Repositories

Use this repo as the main integration hub. If you are searching for a single model, these focused repos provide smaller entry points with cURL, Node.js, webhook, prompt, and production notes.

| Category | Model repo | Best for |
| --- | --- | --- |
| Chat | [PoyoAPI/kimi-k3-api](https://github.com/PoyoAPI/kimi-k3-api) ([model page](https://poyo.ai/models/kimi-k3)) | Kimi K3 long-context chat, coding, and agent workflows |
| Chat | [PoyoAPI/gpt-5-6-api](https://github.com/PoyoAPI/gpt-5-6-api) ([model page](https://poyo.ai/models/gpt-5-6)) | GPT-5.6 Luna, Terra, and Sol Responses API workflows |
| Chat | [PoyoAPI/claude-opus-5-api](https://github.com/PoyoAPI/claude-opus-5-api) ([model page](https://poyo.ai/models/claude-opus-5)) | Claude Opus 5 reasoning, research, and agent workflows |
| Chat | [PoyoAPI/gpt-5-5-api](https://github.com/PoyoAPI/gpt-5-5-api) ([model page](https://poyo.ai/models/gpt-5-5)) | GPT-5.5 chat, coding, and agent workflows |
| Chat | [PoyoAPI/claude-opus-4-8-api](https://github.com/PoyoAPI/claude-opus-4-8-api) ([model page](https://poyo.ai/models/claude-opus-4-8)) | Claude Opus 4.8 reasoning, coding, and agent workflows |
| Chat | [PoyoAPI/gemini-3-5-flash-api](https://github.com/PoyoAPI/gemini-3-5-flash-api) ([model page](https://poyo.ai/models/gemini-3-5-flash)) | Gemini 3.5 Flash fast assistant and routing workflows |
| Chat | [PoyoAPI/claude-4-5-api](https://github.com/PoyoAPI/claude-4-5-api) ([model page](https://poyo.ai/models/claude-4-5-api)) | Claude 4.5 Opus, Sonnet, and Haiku agent workflows |
| Chat | [PoyoAPI/gemini-3-api](https://github.com/PoyoAPI/gemini-3-api) | Gemini 3 chat, coding, and agent workflows |
| Chat | [PoyoAPI/deepseek-v4-api](https://github.com/PoyoAPI/deepseek-v4-api) | DeepSeek V4 Flash and Pro cost-aware assistant workflows |
| Chat | [PoyoAPI/claude-sonnet-5-api](https://github.com/PoyoAPI/claude-sonnet-5-api) | Claude Sonnet 5 chat, coding, and agentic workflows |
| Image | [PoyoAPI/qwen-image-3-api](https://github.com/PoyoAPI/qwen-image-3-api) ([model page](https://poyo.ai/models/qwen-image-3)) | Qwen Image 3 generation and multi-image editing |
| Image | [PoyoAPI/grok-imagine-image-quality-api](https://github.com/PoyoAPI/grok-imagine-image-quality-api) ([model page](https://poyo.ai/models/grok-imagine-image-quality)) | Grok Imagine Image Quality photorealistic image drafts |
| Image | [PoyoAPI/flux-2-api](https://github.com/PoyoAPI/flux-2-api) ([model page](https://poyo.ai/models/flux-2)) | FLUX.2 pro and flex image generation and editing workflows |
| Image | [PoyoAPI/flux-kontext-api](https://github.com/PoyoAPI/flux-kontext-api) ([model page](https://poyo.ai/models/flux-kontext)) | Flux Kontext scene-preserving image generation and editing workflows |
| Image | [PoyoAPI/seedream-5-0-pro-api](https://github.com/PoyoAPI/seedream-5-0-pro-api) ([model page](https://poyo.ai/models/seedream-5-0-pro)) | Seedream 5.0 Pro structured image generation and precise editing workflows |
| Image | [PoyoAPI/seedream-5-0-lite-api](https://github.com/PoyoAPI/seedream-5-0-lite-api) ([model page](https://poyo.ai/models/seedream-5-0-lite-api)) | Seedream 5.0 Lite fast image generation and edit drafts |
| Image | [PoyoAPI/seedream-4-5-api](https://github.com/PoyoAPI/seedream-4-5-api) ([model page](https://poyo.ai/models/seedream-4-5-api)) | Seedream 4.5 generation and edit drafts |
| Image | [PoyoAPI/gpt-image-2-api](https://github.com/PoyoAPI/gpt-image-2-api) | GPT Image 2 generation and editing |
| Image | [PoyoAPI/grok-imagine-image-api](https://github.com/PoyoAPI/grok-imagine-image-api) | Grok Imagine Image visual quality tests |
| Image | [PoyoAPI/nano-banana-2-lite-api](https://github.com/PoyoAPI/nano-banana-2-lite-api) | Nano Banana 2 Lite lower-cost image drafts |
| Image | [PoyoAPI/nano-banana-2-api](https://github.com/PoyoAPI/nano-banana-2-api) | Nano Banana 2 generation and image edits |
| Image | [PoyoAPI/nano-banana-pro-api](https://github.com/PoyoAPI/nano-banana-pro-api) | Nano Banana Pro higher-detail image workflows |
| Video | [PoyoAPI/seedance-2-5-api](https://github.com/PoyoAPI/seedance-2-5-api) ([model page](https://poyo.ai/models/seedance-2-5)) | Seedance 2.5 4-30 second multimodal-reference video workflows |
| Video | [PoyoAPI/minimax-h3-api](https://github.com/PoyoAPI/minimax-h3-api) ([model page](https://poyo.ai/models/minimax-h3)) | MiniMax H3 / Hailuo 03 2K video workflows |
| Video | [PoyoAPI/flux-3-video-api](https://github.com/PoyoAPI/flux-3-video-api) ([model page](https://poyo.ai/models/flux-3)) | FLUX 3 generation, extension, and keyframe video workflows |
| Video | [PoyoAPI/kling-3-api](https://github.com/PoyoAPI/kling-3-api) ([model page](https://poyo.ai/models/kling-3-api)) | Kling 3.0 standard, pro, and 4K video workflows |
| Video | [PoyoAPI/seedance-2-mini-api](https://github.com/PoyoAPI/seedance-2-mini-api) ([model page](https://poyo.ai/models/seedance-2-mini)) | Seedance 2.0 Mini lower-cost video draft workflows |
| Video | [PoyoAPI/wan-2-2-fast-api](https://github.com/PoyoAPI/wan-2-2-fast-api) ([model page](https://poyo.ai/models/wan-2-2-fast)) | Wan 2.2 Fast text-to-video and image-to-video draft loops |
| Video | [PoyoAPI/hailuo-2-3-api](https://github.com/PoyoAPI/hailuo-2-3-api) ([model page](https://poyo.ai/models/hailuo-2-3)) | Hailuo 2.3 realistic motion and first-frame guided video drafts |
| Video | [PoyoAPI/kling-avatar-2-0-api](https://github.com/PoyoAPI/kling-avatar-2-0-api) ([model page](https://poyo.ai/models/kling-avatar-2-0)) | Kling Avatar 2.0 audio-driven talking avatar workflows |
| Video | [PoyoAPI/runway-gen-4-5-api](https://github.com/PoyoAPI/runway-gen-4-5-api) ([model page](https://poyo.ai/models/runway-gen-4-5)) | Runway Gen-4.5 cinematic text-to-video and image-to-video workflows |
| Video | [PoyoAPI/kling-o3-api](https://github.com/PoyoAPI/kling-o3-api) ([model page](https://poyo.ai/models/kling-o3-api)) | Kling O3 standard, pro, and 4K video workflows |
| Video | [PoyoAPI/wan-2-7-video-api](https://github.com/PoyoAPI/wan-2-7-video-api) ([model page](https://poyo.ai/models/wan-2-7-video)) | Wan 2.7 text, image, reference, and edit video workflows |
| Video | [PoyoAPI/veo-3-1-official-api](https://github.com/PoyoAPI/veo-3-1-official-api) | Veo 3.1 Official fast, lite, and quality video workflows |
| Video | [PoyoAPI/grok-imagine-video-1-5-api](https://github.com/PoyoAPI/grok-imagine-video-1-5-api) | Grok Imagine Video 1.5 image-to-video drafts |
| Video | [PoyoAPI/omni-flash-api](https://github.com/PoyoAPI/omni-flash-api) | Omni Flash prompt, image, and video guided drafts |
| Video | [PoyoAPI/kling-3-0-turbo-api](https://github.com/PoyoAPI/kling-3-0-turbo-api) | Kling 3.0 Turbo fast drafts and multi-shot storyboards |
| Video | [PoyoAPI/seedance-2-api](https://github.com/PoyoAPI/seedance-2-api) | Seedance 2 video generation and fast drafts |
| Video | [PoyoAPI/sora-2-official-api](https://github.com/PoyoAPI/sora-2-official-api) | Sora 2 Official video and reference-frame workflows |
| Video | [PoyoAPI/happy-horse-api](https://github.com/PoyoAPI/happy-horse-api) | Happy Horse text-to-video and image-to-video workflows |
| Music | [PoyoAPI/gemini-3-1-flash-tts-api](https://github.com/PoyoAPI/gemini-3-1-flash-tts-api) ([model page](https://poyo.ai/models/gemini-3-1-flash-tts)) | Gemini 3.1 Flash TTS voice and dialogue workflows |
| Music | [PoyoAPI/elevenlabs-music-api](https://github.com/PoyoAPI/elevenlabs-music-api) ([model page](https://poyo.ai/models/elevenlabs-music)) | ElevenLabs Music prompt-based creator audio workflows |
| Music | [PoyoAPI/elevenlabs-v3-tts-api](https://github.com/PoyoAPI/elevenlabs-v3-tts-api) | ElevenLabs v3 narration, dialogue, and voiceover workflows |
| Music | [PoyoAPI/minimax-music-2-6-api](https://github.com/PoyoAPI/minimax-music-2-6-api) | MiniMax Music 2.6 background music and creator audio drafts |
| 3D | [PoyoAPI/hunyuan-3d-3-1-api](https://github.com/PoyoAPI/hunyuan-3d-3-1-api) ([model page](https://poyo.ai/models/hunyuan-3d-3-1)) | Hunyuan 3D 3.1 pro and rapid 3D asset workflows |
| 3D | [PoyoAPI/tripo-h31-3d-api](https://github.com/PoyoAPI/tripo-h31-3d-api) ([model page](https://poyo.ai/models/tripo-h31-3d)) | Tripo3D H3.1 high-detail text, image, and multiview 3D asset workflows |
| 3D | [PoyoAPI/meshy-6-3d-api](https://github.com/PoyoAPI/meshy-6-3d-api) ([model page](https://poyo.ai/models/meshy-6-3d)) | Meshy 6 text-to-3D, image-to-3D, and multi-image-to-3D workflows |

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
