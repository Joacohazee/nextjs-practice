import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-custom-header", "my-custom-value");

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (request.nextUrl.pathname.endsWith("/information")) {
    return NextResponse.redirect(
      new URL("/information/characters", request.url)
    );
  }

  if (request.nextUrl.pathname.startsWith("/information")) {
    const user = {
      name: "John Doe",
      authenticated: false,
    };

    if (!user.authenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/information/:path*",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
