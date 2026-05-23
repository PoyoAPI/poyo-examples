# GPT-5.2 Chat cURL Quickstart

Use `gpt-5.2` for OpenAI-style chat completion workflows. Unlike media generation, chat responses are synchronous and do not require polling.

## Sample Response

Sample output: [PoYo chat docs](https://docs.poyo.ai/api-manual/chat-series).

Safe example assistant content:

```text
1. Keep the API key on the server.
2. Validate the request body before calling the model.
3. Log request IDs and status, not private user content.
4. Return concise errors to the client.
5. Add a retry policy for transient upstream failures.
```

## Chat Completion

```bash
export POYO_API_KEY="YOUR_POYO_API_KEY_HERE"
export POYO_BASE_URL="https://api.poyo.ai"

curl --fail-with-body --request POST \
  --url "$POYO_BASE_URL/v1/chat/completions" \
  --header "Authorization: Bearer $POYO_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "gpt-5.2",
    "messages": [
      {
        "role": "system",
        "content": "You are a concise API launch advisor. Reply with a short checklist."
      },
      {
        "role": "user",
        "content": "Give me a production checklist for launching an AI media generation endpoint."
      }
    ],
    "temperature": 0.4,
    "max_tokens": 400
  }'
```

## Expected Response Shape

```json
{
  "code": 200,
  "data": {
    "id": "chatcmpl-example",
    "object": "chat.completion",
    "model": "gpt-5.2",
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
      "prompt_tokens": 28,
      "completion_tokens": 120,
      "total_tokens": 148
    }
  }
}
```

## Ship Checklist

- Keep `POYO_API_KEY` server-side only.
- Use `/v1/chat/completions` for synchronous chat.
- Use `/api/generate/submit` for async media and 3D generation.
- Set `max_tokens` to control response length.
- Avoid logging private user messages unless your product policy allows it.

## Social Angle

Chat plus media in one PoYo account: use GPT-5.2 for planning, copy, or agent workflows alongside image, video, music, and 3D generation.
