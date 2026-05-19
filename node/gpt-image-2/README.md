# GPT Image 2 Node.js Example

Submits a `gpt-image-2` task and polls until it reaches `finished` or `failed`.

## Run

```bash
cd node/gpt-image-2
cp ../../.env.example ../../.env
# Edit ../../.env and set POYO_API_KEY
npm start
```

## Production Notes

- Persist `data.task_id` before polling.
- Move polling to a worker for high-volume workflows.
- Use `POYO_CALLBACK_URL` when your webhook receiver is public.
- Do not run this directly in browser code.
