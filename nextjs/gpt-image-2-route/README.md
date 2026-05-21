# Next.js Route Handlers: `gpt-image-2`

This example shows a minimal Next.js flow that submits a PoYo `gpt-image-2` task from the server and checks status without exposing `POYO_API_KEY` to the browser.

## Files

- Copy [`app/api/poyo/gpt-image-2/route.ts`](app/api/poyo/gpt-image-2/route.ts) to submit the generation task.
- Copy [`app/api/poyo/status/[taskId]/route.ts`](app/api/poyo/status/[taskId]/route.ts) to check task status through your backend.

## Environment

```env
POYO_API_KEY=YOUR_POYO_API_KEY_HERE
POYO_BASE_URL=https://api.poyo.ai
```

Optional:

```env
POYO_CALLBACK_URL=https://example.com/api/poyo/webhook
```

## Client Request

Submit a prompt:

```ts
const response = await fetch("/api/poyo/gpt-image-2", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    prompt: "A clean product photo of a matte black smart speaker",
  }),
});

const result = await response.json();
console.log(result.task_id);
```

Then check status through your own backend:

```ts
const statusResponse = await fetch(`/api/poyo/status/${result.task_id}`);
const status = await statusResponse.json();
console.log(status.status);
```

The browser receives `task_id` and status data, not your PoYo API key.

## Flow

1. Browser sends a prompt to `/api/poyo/gpt-image-2`.
2. The Next.js route reads `POYO_API_KEY` from server environment variables.
3. The route submits the task to PoYo and returns `task_id`.
4. Browser checks `/api/poyo/status/{task_id}`.
5. The status route calls PoYo from the server and returns the latest task state.

For production, store the returned `task_id` in your database before polling or waiting for a webhook.
