# Security Policy

## Reporting A Vulnerability

Please report security issues to `support@poyo.ai`.

Do not open a public GitHub issue for API keys, leaked credentials, callback URLs, account data, billing data, or other sensitive information.

## What Not To Share Publicly

- `POYO_API_KEY` values or bearer tokens.
- Real task IDs from production or customer workflows.
- Callback URLs that include internal routes, secrets, or account-specific data.
- Raw request or response logs that contain user prompts, generated file URLs, billing details, or account identifiers.
- Screenshots that show keys, tokens, task IDs, dashboard data, or private logs.

## Safe Reporting Details

Useful reports include:

- A short description of the issue.
- The affected example path or model name.
- The expected behavior.
- The observed behavior.
- Redacted request and response shapes.
- Steps to reproduce with placeholder values.

## Example Repository Scope

This repository contains public integration examples. It should never store real credentials, internal hosts, customer data, or production task logs.
