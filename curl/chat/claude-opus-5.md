# Claude Opus 5 API cURL quickstart

Call the Anthropic-compatible Messages endpoint with model `claude-opus-5`.

```bash
curl -X POST "https://api.poyo.ai/v1/messages" \
  -H "x-api-key: $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-opus-5",
    "max_tokens": 900,
    "system": "You are a rigorous research and engineering assistant.",
    "messages": [
      {"role": "user", "content": "Review this canary rollout strategy and list missing safety checks."}
    ]
  }'
```

See the [Claude Opus 5 focused repository](https://github.com/PoyoAPI/claude-opus-5-api) for Node.js and production guidance.

