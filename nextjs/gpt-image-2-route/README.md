# Next.js Route Handler: `gpt-image-2`

This example shows a minimal Next.js route handler that submits a PoYo `gpt-image-2` task from the server.

## File

Copy [`app/api/poyo/gpt-image-2/route.ts`](app/api/poyo/gpt-image-2/route.ts) into your Next.js app.

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

The browser receives `task_id`, not your PoYo API key.
