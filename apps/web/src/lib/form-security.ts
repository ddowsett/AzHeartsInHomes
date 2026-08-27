const requestHistory = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const SITE_ORIGIN = "https://azheartsinhomes.com";

export function isAllowedFormRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const hasTrustedOrigin =
    origin === SITE_ORIGIN ||
    origin === `${SITE_ORIGIN}/` ||
    referer?.startsWith(`${SITE_ORIGIN}/`);

  if (!hasTrustedOrigin) {
    return false;
  }

  const userAgent = request.headers.get("user-agent") || "";
  const automatedUserAgent =
    /bot|crawler|spider|scrapy|curl|wget|python-requests|httpclient/i.test(
      userAgent
    );

  if (automatedUserAgent) {
    return false;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const recentRequests = (requestHistory.get(clientIp) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    requestHistory.set(clientIp, recentRequests);
    return false;
  }

  recentRequests.push(now);
  requestHistory.set(clientIp, recentRequests);

  return true;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
