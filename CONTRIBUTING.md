# Contributing

Thanks for helping improve the PoYo examples. This repo is for small, backend-safe examples that developers can copy into real products.

## What Fits

- cURL, Node.js, Python, Next.js route, webhook, and production-note examples.
- Examples that use the public PoYo API flow: submit a task, store `data.task_id`, poll or receive a webhook, then retrieve files.
- Short files with minimal dependencies and clear environment variables.
- Model examples that match the current PoYo docs and model page behavior.

## Example Standards

- Keep `POYO_API_KEY` server-side only.
- Do not include real API keys, bearer tokens, task IDs, internal hosts, or customer data.
- Use placeholder values such as `YOUR_POYO_API_KEY_HERE`, `<POYO_API_KEY>`, and `task-unified-example`.
- Make polling and webhook examples treat `finished` and `failed` as terminal states.
- Keep webhook handlers idempotent and return `2xx` quickly.
- Link to the relevant model page and docs when adding a model-specific example.
- Prefer focused examples over large demo apps.

## Before Opening A PR

Run the repository checks:

```powershell
powershell -NoLogo -NoProfile -File scripts/check.ps1
```

On systems with PowerShell 7:

```bash
pwsh -NoLogo -NoProfile -File scripts/check.ps1
```

Also check the diff:

```bash
git diff --check
git status --short
```

## Issue Reports

When reporting a bug, include the model name, example path, runtime, command, and sanitized error output. Do not include API keys, real task IDs, or private callback URLs.

## Security

For sensitive reports, use the process in [SECURITY.md](SECURITY.md) instead of opening a public issue.
