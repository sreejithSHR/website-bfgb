import { SignIn } from "@clerk/nextjs"

/**
 * Calls the SignIn component from Clerk
 * @component
 *
 * @see https://clerk.com/docs/references/nextjs/custom-signup-signin-pages
 * @returns The SignIn component from Clerk
 */
const Page = () => {
  return <SignIn />
}

export default Page
