# PoYo First Batch Social Kit

Use these posts to launch the first examples without sounding like a generic model list. Each post points to a runnable workflow.

## X Posts

### GPT Image 2

PoYo examples now include a backend-safe `gpt-image-2` quickstart.

Prompt -> task_id -> status -> product image URL.

Start here: `curl/image/gpt-image-2.md`

### Seedance 2

Build a short video workflow with PoYo:

1. Submit a `seedance-2` task
2. Store `task_id`
3. Poll or receive a webhook
4. Download the MP4

Start here: `curl/video/seedance-2.md`

### Sora 2

Sora 2 quickstart, PoYo style: one async task flow for video generation, with polling and webhook-ready production notes.

Start here: `curl/video/sora-2.md`

### Generate Music

PoYo is not just image/video.

The first examples include `generate-music` so apps can create soundtrack drafts and creator-tool audio from the same API workflow.

Start here: `curl/music/generate-music.md`

### Meshy 6 Text To 3D

Prompt -> 3D task -> downloadable model files.

The first PoYo examples include `meshy-6-text-to-3d` to show 3D assets next to image, video, music, and chat.

Start here: `curl/3d/meshy-6-text-to-3d.md`

### GPT-5.2 Chat

PoYo examples now include synchronous chat with `gpt-5.2` plus async media generation examples.

Use one account for chat planning, image generation, video, music, and 3D.

Start here: `curl/chat/gpt-5.2.md`

## Discord Announcements

### Full Batch

We published the first PoYo examples batch for developers:

- `gpt-image-2` product image workflow
- `seedance-2` short video workflow
- `sora-2` video quickstart
- `generate-music` simple music generation
- `meshy-6-text-to-3d` prompt-to-3D workflow
- `gpt-5.2` chat completion

The repo now includes cURL docs, Node examples, Python examples, Express/FastAPI webhook receivers, and production notes for polling, task IDs, and callbacks.

### Webhooks

New PoYo webhook examples are available for Express and FastAPI.

They show local allowlists, duplicate callback handling, fast `2xx` responses, and task-status reconciliation. Use them as a starting point before replacing in-memory state with your database.

## GitHub Release Note

### Title

First production workflow examples for PoYo AI APIs

### Body

This release turns `poyo-examples` into a runnable examples repo for backend developers.

Included:

- cURL quickstarts for `gpt-image-2`, `seedance-2`, `sora-2`, `generate-music`, `meshy-6-text-to-3d`, and `gpt-5.2`
- Node.js 18 examples for image, video, and chat
- Python examples for image, video, and chat
- Express and FastAPI webhook receivers
- Shared production notes for task IDs, polling, webhooks, and response handling

The repo focuses on PoYo's real production flow: submit a task, store `task_id`, poll or receive a callback, then retrieve generated files.
