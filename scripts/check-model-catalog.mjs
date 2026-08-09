import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const catalog = JSON.parse(readFileSync(resolve(root, "models", "catalog.json"), "utf8"));
const network = process.argv.includes("--network");
const maxAgeDays = Number(process.env.MAX_MODEL_AGE_DAYS || 45);
const required = ["name", "slug", "modality", "status", "repository", "model_page", "documentation", "endpoint", "model_ids", "last_verified", "search_terms"];
const errors = [];
const slugs = new Set();
const repositories = new Set();
const modelIds = new Set();

if (catalog.schema_version !== 1) errors.push("schema_version must be 1");
if (!Array.isArray(catalog.models) || catalog.models.length === 0) errors.push("models must be a non-empty array");

for (const [index, model] of (catalog.models || []).entries()) {
  const label = model?.slug || `models[${index}]`;
  for (const field of required) {
    if (model?.[field] === undefined || model?.[field] === null || model?.[field] === "") errors.push(`${label}: missing ${field}`);
  }
  if (slugs.has(model.slug)) errors.push(`${label}: duplicate slug`);
  slugs.add(model.slug);
  if (repositories.has(model.repository)) errors.push(`${label}: duplicate repository`);
  repositories.add(model.repository);
  if (model.status !== "live") errors.push(`${label}: featured entries must be live`);
  if (!["image", "video", "chat", "music", "3d", "audio"].includes(model.modality)) errors.push(`${label}: unsupported modality`);
  for (const field of ["repository", "model_page", "documentation"]) {
    try {
      if (new URL(model[field]).protocol !== "https:") errors.push(`${label}: ${field} must use HTTPS`);
    } catch {
      errors.push(`${label}: invalid ${field} URL`);
    }
  }
  if (!model.repository?.startsWith("https://github.com/PoyoAPI/")) errors.push(`${label}: repository must belong to PoyoAPI`);
  if (!Array.isArray(model.model_ids) || model.model_ids.length === 0) errors.push(`${label}: model_ids must be non-empty`);
  for (const id of model.model_ids || []) {
    if (modelIds.has(id)) errors.push(`${label}: duplicate model ID ${id}`);
    modelIds.add(id);
  }
  if (!Array.isArray(model.search_terms) || model.search_terms.length < 2) errors.push(`${label}: include at least two search_terms`);
  const verifiedAt = new Date(`${model.last_verified}T00:00:00Z`);
  const ageDays = (Date.now() - verifiedAt.getTime()) / 86_400_000;
  if (!Number.isFinite(ageDays)) errors.push(`${label}: invalid last_verified date`);
  else if (ageDays > maxAgeDays) errors.push(`${label}: verification is ${Math.floor(ageDays)} days old (max ${maxAgeDays})`);
  else if (ageDays < -1) errors.push(`${label}: last_verified is in the future`);
}

if (network && errors.length === 0) {
  const urls = [...new Set(catalog.models.flatMap((model) => [model.repository, model.model_page, model.documentation]))];
  async function checkUrl(url) {
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        const isGitHubRepository = url.startsWith("https://github.com/PoyoAPI/");
        const targetUrl = isGitHubRepository
          ? url.replace("https://github.com/", "https://api.github.com/repos/")
          : url;
        const headers = {
          "User-Agent": "PoyoAPI-model-catalog-check",
          Accept: isGitHubRepository ? "application/vnd.github+json" : "text/html",
        };
        if (url.startsWith("https://github.com/") && process.env.GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }
        const response = await fetch(targetUrl, {
          method: "HEAD",
          redirect: "follow",
          headers,
          signal: AbortSignal.timeout(30_000),
        });
        if (response.ok) return null;
        if (attempt === 2) return `${url}: HTTP ${response.status}`;
      } catch (error) {
        if (attempt === 2) return `${url}: ${error.message}`;
      }
    }
  }
  const results = [];
  for (let index = 0; index < urls.length; index += 3) {
    results.push(...await Promise.all(urls.slice(index, index + 3).map(checkUrl)));
  }
  errors.push(...results.filter(Boolean));
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Model catalog valid: ${catalog.models.length} live models${network ? " with reachable canonical URLs" : ""}.`);
