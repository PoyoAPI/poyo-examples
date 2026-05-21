export const runtime = "nodejs";

declare const process: {
  env: Record<string, string | undefined>;
};

type PoyoStatusResponse = {
  code?: number;
  message?: string;
  data?: {
    task_id?: string;
    status?: string;
    [key: string]: unknown;
  };
};

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, { status });
}

async function parseJson(response: Response): Promise<PoyoStatusResponse | Record<string, unknown>> {
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text) as PoyoStatusResponse;
  } catch {
    return { raw: text };
  }
}

export async function GET(_request: Request, context: { params: { taskId: string } }) {
  const apiKey = process.env.POYO_API_KEY;
  const baseUrl = process.env.POYO_BASE_URL || "https://api.poyo.ai";
  const taskId = context.params.taskId?.trim();

  if (!apiKey || apiKey === "YOUR_POYO_API_KEY_HERE") {
    return jsonResponse({ error: "Set POYO_API_KEY on the server before calling PoYo." }, 500);
  }

  if (!taskId) {
    return jsonResponse({ error: "Missing taskId" }, 400);
  }

  const response = await fetch(`${baseUrl}/api/generate/status/${encodeURIComponent(taskId)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  const result = (await parseJson(response)) as PoyoStatusResponse;
  const apiCode = Number(result.code);
  const hasApiError = Number.isFinite(apiCode) && apiCode !== 0 && apiCode !== 200;

  if (!response.ok || hasApiError) {
    return jsonResponse(
      {
        error: "PoYo status lookup failed",
        http_status: response.status,
        api_code: result.code,
        message: result.message,
      },
      response.ok ? 502 : response.status,
    );
  }

  return jsonResponse({
    task_id: result.data?.task_id || taskId,
    status: result.data?.status,
    data: result.data,
  });
}
