# Express Webhook Receiver

Receives PoYo task callbacks at `POST /api/poyo/webhook`.

## Run

```bash
cd webhooks/express
cp ../../.env.example ../../.env
npm install
npm start
```

Expose the local server with a secure tunnel during development, then pass that public URL as `callback_url` in submit requests.

```json
{
  "callback_url": "https://example.com/api/poyo/webhook"
}
```

## Local Testing

```bash
curl --request POST http://localhost:3000/api/poyo/webhook \
  --header "Content-Type: application/json" \
  --data '{
    "code": 200,
    "data": {
      "task_id": "task-unified-example",
      "status": "finished",
      "files": []
    }
  }'
```

For local webhook testing, set `POYO_ALLOW_UNLISTED_TASK_IDS=true` or set `POYO_KNOWN_TASK_IDS` to the task IDs you submitted.

## Production Notes

- Replace the in-memory maps with durable database records.
- Keep `POYO_ALLOW_UNLISTED_TASK_IDS` unset or `false`.
- Return `2xx` only after your application accepts the callback.
- Reconcile important callbacks with the task status endpoint.
