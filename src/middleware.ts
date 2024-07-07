import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isPublicRoute = createRouteMatcher(["/site", "/api/uploadthing"])

/**
 * Handles authentication and authorization with Clerk.
 *
 * @see https://clerk.com/docs/references/nextjs/clerk-middleware
 * @param auth: ClerkMiddlewareAuth - Clerk auth object
 * @param request: NextMiddlewareRequestParam - Next middleware request param
 *
 * @returns NextMiddlewareReturn - Next middleware return
 */
export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
