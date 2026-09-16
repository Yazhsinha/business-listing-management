import { createFileRoute } from "@tanstack/react-router";
import {
  isIndexableMarketingHost,
  normalizeHost,
  robotsTxtForHost,
} from "@/lib/public-host";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const raw =
          request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
        const host = normalizeHost(raw);
        const body = robotsTxtForHost(host);
        const headers: Record<string, string> = {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
        };
        if (!isIndexableMarketingHost(host)) {
          headers["X-Robots-Tag"] = "noindex, nofollow";
        }
        return new Response(body, { headers });
      },
    },
  },
});
