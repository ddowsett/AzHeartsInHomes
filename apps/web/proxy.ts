import { NextResponse, type NextRequest } from "next/server";

const HOME_SEARCH_URL =
  "https://homesmart.com/real-estate-agent/HSAZ001/Darek-Dowsett/bc25aac8-ae7c-2f03-4438-5c175f718779";

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/buyers") {
    const referer = request.headers.get("referer");

    if (referer) {
      try {
        const refererUrl = new URL(referer);

        if (
          refererUrl.origin === request.nextUrl.origin &&
          refererUrl.pathname.startsWith("/communities/")
        ) {
          return NextResponse.redirect(HOME_SEARCH_URL);
        }
      } catch {
        // Ignore malformed referrers and allow the normal Buyers page.
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/buyers"],
};
