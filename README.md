# PoYo Examples

Examples for building with PoYo AI APIs.

## Start Here

1. Create an account at [poyo.ai](https://poyo.ai).
2. Sign in and open [API Keys](https://poyo.ai/dashboard/api-key).
3. Create an API key.
4. Set `POYO_API_KEY` in your server environment.
5. Submit a task with `POST https://api.poyo.ai/api/generate/submit`.
6. Save the returned `task_id`.
7. Poll with `GET https://api.poyo.ai/api/generate/status/{task_id}`.
8. Use `callback_url` for production webhook delivery.

## Environment

```bash
export POYO_API_KEY="sk-your-api-key"
export POYO_BASE_URL="https://api.poyo.ai"
export POYO_CALLBACK_URL="https://your-domain.com/webhook"
```

Never expose your API key in browser code, mobile apps, public repositories, or client-side logs.

## Submit A Task

```http
POST /api/generate/submit
Authorization: Bearer <POYO_API_KEY>
Content-Type: application/json
```

```json
{
  "model": "gpt-image-2",
  "callback_url": "https://your-domain.com/webhook",
  "input": {
    "prompt": "A clean product render of a translucent AI cube on a white studio surface",
    "size": "1:1",
    "resolution": "1K",
    "quality": "low",
    "n": 1
  }
}
```

## Check Status

```http
GET /api/generate/status/{task_id}
Authorization: Bearer <POYO_API_KEY>
```

## Examples To Add

| Folder | Description |
| --- | --- |
| `curl/` | Copy-paste cURL requests for image, video, and polling. |
| `python/` | Python submit-and-poll example. |
| `node/` | Node.js submit-and-poll example. |
| `webhooks/fastapi/` | FastAPI webhook receiver. |
| `webhooks/express/` | Express webhook receiver. |

## Model Examples

### Image: `gpt-image-2`

```json
{
  "model": "gpt-image-2",
  "input": {
    "prompt": "A clean product render of a translucent AI cube on a white studio surface",
    "size": "1:1",
    "resolution": "1K",
    "quality": "low",
    "n": 1
  }
}
```

### Video: `seedance-2`

```json
{
  "model": "seedance-2",
  "input": {
    "prompt": "A cinematic tracking shot through a bright design studio with floating AI interface panels",
    "duration": 4,
    "resolution": "720p",
    "aspect_ratio": "16:9",
    "generate_audio": true
  }
}
```

## Webhooks

Add `callback_url` at the top level of the submit payload:

```json
{
  "model": "gpt-image-2",
  "callback_url": "https://your-domain.com/webhook",
  "input": {
    "prompt": "A clean product render of a translucent AI cube on a white studio surface"
  }
}
```

Your webhook should accept JSON, return a `2xx` response quickly, and process the result asynchronously if your business logic is slow.
