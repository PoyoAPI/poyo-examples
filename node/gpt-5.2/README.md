# GPT-5.2 Node.js Example

Sends a synchronous chat completion request to `/v1/chat/completions`.

## Run

```bash
cd node/gpt-5.2
cp ../../.env.example ../../.env
# Edit ../../.env and set POYO_API_KEY
npm start
```

## Production Notes

- Chat does not use task polling.
- Set `max_tokens` to control response size.
- Keep user messages and API keys out of public logs.
