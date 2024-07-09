import { NextRequest, NextResponse } from "next/server"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isPublicRoute = createRouteMatcher([
  "/site",
  "/api/uploadthing",
  "/agency/sign-in",
  "/agency/sign-up",
])

/**
 * Handles authentication and authorization with Clerk.
 *
 * @see https://clerk.com/docs/references/nextjs/clerk-middleware
 * @param auth: ClerkMiddlewareAuth - Clerk auth object
 * @param request: NextMiddlewareRequestParam - Next middleware request param
 *
 * @returns NextMiddlewareReturn - Next middleware return
 */
export default clerkMiddleware(
  (auth, request) => {
    if (!isPublicRoute(request)) {
      // TODO: auth().protect()
    }
  },
  { debug: true }
)

export const config = { matcher: ["/((?!...|_next).)", "/", "/(api|trpc)(.)"] }
