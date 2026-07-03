# Claude Sonnet 5 Chat cURL Quickstart

Use `claude-sonnet-5` for agentic coding, planning, browser or computer-use orchestration, and long-context professional workflows.

## Model Page

Model page: [Claude Sonnet 5 on PoYo](https://poyo.ai/models/claude-sonnet-5).

## Chat Completion

Claude Sonnet 5 is a synchronous chat model. Use `/v1/chat/completions`; you do not need task polling.

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/v1/chat/completions" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "claude-sonnet-5",
    "messages": [
      {
        "role": "system",
        "content": "You are a concise senior engineering assistant. Reply with practical implementation steps."
      },
      {
        "role": "user",
        "content": "Give me a short plan for adding server-side API key protection to an AI generation feature."
      }
    ],
    "max_tokens": 600
  }'
```

## Expected Response Shape

```json
{
  "code": 200,
  "data": {
    "id": "chatcmpl-example",
    "object": "chat.completion",
    "model": "claude-sonnet-5",
    "choices": [
      {
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "..."
        },
        "finish_reason": "stop"
      }
    ],
    "usage": {
      "prompt_tokens": 64,
      "completion_tokens": 180,
      "total_tokens": 244
    }
  }
}
```

## Ship Checklist

- Keep `POYO_API_KEY` server-side only.
- Use `/v1/chat/completions` for synchronous chat.
- Set `max_tokens` to control response length and cost.
- Avoid logging private user messages unless your product policy allows it.
- Use media task endpoints separately when your workflow needs image, video, music, or 3D generation.

## Social Angle

Claude Sonnet 5 is useful when the API workflow needs reasoning before generation: planning prompts, reviewing user inputs, writing code, or coordinating follow-up media tasks.
