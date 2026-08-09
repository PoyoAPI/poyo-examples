# Kimi K3 API cURL quickstart

Call the OpenAI-compatible chat endpoint with model `kimi-k3`.

```bash
curl -X POST "https://api.poyo.ai/v1/chat/completions" \
  -H "Authorization: Bearer $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "kimi-k3",
    "messages": [
      {"role": "system", "content": "You are a precise software architecture assistant."},
      {"role": "user", "content": "Design a migration checklist for splitting a monolith into three services."}
    ],
    "temperature": 0.2,
    "max_tokens": 900
  }'
```

See the [Kimi K3 focused repository](https://github.com/PoyoAPI/kimi-k3-api) for Node.js and production guidance.

