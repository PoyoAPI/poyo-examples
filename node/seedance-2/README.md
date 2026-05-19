# Seedance 2 Node.js Example

Submits a `seedance-2` video task and polls until it reaches a terminal state.

## Run

```bash
cd node/seedance-2
cp ../../.env.example ../../.env
# Edit ../../.env and set POYO_API_KEY
npm start
```

## Production Notes

- Store the task ID before polling.
- Poll video tasks less frequently than image tasks.
- Prefer webhooks for production video queues.
- Do not log private prompts or generated media URLs.
