import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isPublicRoute = createRouteMatcher([
  "/site",
  "/api/uploadthing",
  "/sign-in",
  "/sign-up",
])

/**
 * Handles authentication and authorization with Clerk.
 *
 * Protects all routes except for the defined public routes.
 * Redirects to the appropriate subdomain based on the hostname.
 *
 * @see https://clerk.com/docs/references/nextjs/clerk-middleware
 * @param auth: ClerkMiddlewareAuth - Clerk auth object
 * @param request: NextMiddlewareRequestParam - Next middleware request param
 *
 * @returns NextMiddlewareReturn - Next middleware return
 */
export default clerkMiddleware((auth, request) => {
  const url = new URL(request.url)
  const searchParams = url.searchParams.toString()
  const hostname = request.headers.get("host")
  const pathWithParams = `${url.pathname}${
    searchParams ? `?${searchParams}` : ""
  }`

  const subDomain = hostname
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0]

  if (subDomain) {
    return NextResponse.rewrite(
      new URL(`/${subDomain}${pathWithParams}`, request.url)
    )
  }

  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL(`agency${url.pathname}`, request.url))
  }

  if (
    url.pathname === "/" ||
    (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.redirect(new URL(`/site`, request.url))
  }

  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = { matcher: ["/((?!...|_next).)", "/", "/(api|trpc)(.)"] }
