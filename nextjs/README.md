# PoYo Next.js Examples

Use these examples when your web app needs to call PoYo from a server route instead of directly from the browser.

## Examples

| Example | What it shows |
| --- | --- |
| [`gpt-image-2-route`](gpt-image-2-route/) | Submit a `gpt-image-2` task from a Next.js route handler and return `task_id` to the client. |

## Why Server Routes

Keep `POYO_API_KEY` in server-side environment variables. Browser code should call your own route, and your route should call PoYo.

Recommended flow:

1. Browser sends a prompt to your app route.
2. Route reads `POYO_API_KEY` from the server environment.
3. Route submits the PoYo task.
4. Route returns `task_id` to the browser.
5. Browser polls your app backend, or your backend waits for a webhook.
