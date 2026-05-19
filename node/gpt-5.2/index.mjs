import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnv() {
  for (const envPath of [resolve(process.cwd(), ".env"), resolve(process.cwd(), "../../.env")]) {
    if (!existsSync(envPath)) continue;

    const content = readFileSync(envPath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const index = trimmed.indexOf("=");
      if (index === -1) continue;

      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

async function requestJson(url, options) {
  const response = await fetch(url, options);
  const text = await response.text();
  let body = {};

  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = { raw: text };
    }
  }

  const apiCode = Number(body?.code);
  const hasApiError = Number.isFinite(apiCode) && apiCode !== 0 && apiCode !== 200;

  if (!response.ok || hasApiError) {
    throw new Error(
      `PoYo request failed: ${JSON.stringify(
        {
          http_status: response.status,
          http_status_text: response.statusText,
          api_code: body?.code,
          body,
        },
        null,
        2,
      )}`,
    );
  }

  return body;
}

loadEnv();

const apiKey = process.env.POYO_API_KEY;
const baseUrl = process.env.POYO_BASE_URL || "https://api.poyo.ai";

if (!apiKey || apiKey === "YOUR_POYO_API_KEY_HERE") {
  console.error("Set POYO_API_KEY in your environment or repo-root .env file.");
  process.exit(1);
}

const payload = {
  model: "gpt-5.2",
  messages: [
    {
      role: "system",
      content: "You are a concise API launch advisor. Reply with a short checklist.",
    },
    {
      role: "user",
      content: "Give me a production checklist for launching an AI media generation endpoint.",
    },
  ],
  temperature: 0.4,
  max_tokens: 400,
};

const result = await requestJson(`${baseUrl}/v1/chat/completions`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

console.log(JSON.stringify(result, null, 2));
