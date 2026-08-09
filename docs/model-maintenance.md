# Model repository maintenance

PoYo's GitHub repositories support three discovery goals in this order: Google Search, AI answer engines, and GitHub Search.

## Release rule

Create or update a focused repository only after the production model ID, endpoint, required inputs, limits, pricing, and availability are verified from live PoYo sources.

Every featured model must have:

- a focused repository with a query-matching name and description;
- an answer-first README with the exact endpoint and model ID;
- runnable cURL and Node.js examples;
- production limits and a dated pricing snapshot;
- repository topics, model-page homepage, and automated checks;
- an entry in [models/catalog.json](../models/catalog.json), [llms.txt](../llms.txt), the main README, and the organization profile.

## Freshness policy

The catalog check runs every Monday. A featured entry fails when `last_verified` is older than 45 days or when a canonical repository, model page, or documentation URL is unreachable.

When a model changes:

1. update the focused repository first;
2. run its local check and merge the change;
3. update `models/catalog.json` and all discovery links;
4. run `node scripts/check-model-catalog.mjs --network`;
5. remove or redirect stale claims instead of keeping contradictory pages.

## Search content policy

Use one canonical focused repository per model intent. Put the product name, ?API,? exact model IDs, endpoint, runnable answer, constraints, and verification date near the top. Avoid speculative capability claims and duplicate thin repositories.

## Retirement policy

When an API model ID is retired, mark the catalog entry `retired`, point to the replacement, archive the focused repository only after its README contains a visible migration path, and remove it from the featured catalog after search traffic has had time to follow the replacement.
