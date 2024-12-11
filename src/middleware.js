import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken"); // Example: Check for an authentication token
  const url = request.nextUrl;

  // Protect routes starting with `/dashboard` (private routes)
  if (url.pathname.startsWith("/admin/dashboard") && !token) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Redirect authenticated users away from public routes like login
  if (url.pathname.startsWith("/admin/login") && token) {
    return NextResponse.redirect(
      new URL("/admin/dashboard/clientReview", request.url)
    );
  }

  return NextResponse.next();
}

// Define the routes to match
export const config = {
  matcher: ["/admin/dashboard/:path*", "/admin/login"],
};
