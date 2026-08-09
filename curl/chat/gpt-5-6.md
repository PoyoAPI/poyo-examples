# GPT-5.6 API cURL quickstart

GPT-5.6 uses the Responses-compatible endpoint and explicit Luna, Terra, or Sol model IDs. There is no generic `gpt-5-6` alias in this integration.

```bash
curl -X POST "https://api.poyo.ai/v1/responses" \
  -H "Authorization: Bearer $POYO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5-6-luna",
    "instructions": "Answer as a concise senior backend engineer.",
    "input": "Explain how to make webhook processing idempotent.",
    "max_output_tokens": 700
  }'
```

See the [GPT-5.6 focused repository](https://github.com/PoyoAPI/gpt-5-6-api) for all three model IDs and their pricing tiers.

