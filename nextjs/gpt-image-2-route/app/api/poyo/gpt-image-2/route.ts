export const runtime = "nodejs";

declare const process: {
  env: Record<string, string | undefined>;
};

type PoyoSubmitResponse = {
  code?: number;
  message?: string;
  data?: {
    task_id?: string;
    status?: string;
  };
};

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, { status });
}

async function parseJson(response: Response): Promise<PoyoSubmitResponse | Record<string, unknown>> {
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text) as PoyoSubmitResponse;
  } catch {
    return { raw: text };
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.POYO_API_KEY;
  const baseUrl = process.env.POYO_BASE_URL || "https://api.poyo.ai";
  const callbackUrl = process.env.POYO_CALLBACK_URL;

  if (!apiKey || apiKey === "YOUR_POYO_API_KEY_HERE") {
    return jsonResponse({ error: "Set POYO_API_KEY on the server before calling PoYo." }, 500);
  }

  const body = await request.json().catch(() => ({}));
  const prompt =
    typeof body.prompt === "string" && body.prompt.trim()
      ? body.prompt.trim()
      : "A premium product photo of a matte black smart speaker on a clean white studio background";

  const payload = {
    model: "gpt-image-2",
    ...(callbackUrl ? { callback_url: callbackUrl } : {}),
    input: {
      prompt,
      quality: "low",
      size: "1:1",
      resolution: "1K",
    },
  };

  const response = await fetch(`${baseUrl}/api/generate/submit`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await parseJson(response)) as PoyoSubmitResponse;
  const apiCode = Number(result.code);
  const hasApiError = Number.isFinite(apiCode) && apiCode !== 0 && apiCode !== 200;

  if (!response.ok || hasApiError) {
    return jsonResponse(
      {
        error: "PoYo submit failed",
        http_status: response.status,
        api_code: result.code,
        message: result.message,
      },
      response.ok ? 502 : response.status,
    );
  }

  const taskId = result.data?.task_id;
  if (!taskId) {
    return jsonResponse({ error: "PoYo submit response did not include data.task_id" }, 502);
  }

  return jsonResponse({
    task_id: taskId,
    status: result.data?.status || "not_started",
  });
}
