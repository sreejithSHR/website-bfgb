import { SignUp } from "@clerk/nextjs"

/**
 * Calls the SignUp component from Clerk
 * @component
 *
 * @see https://clerk.com/docs/references/nextjs/custom-signup-signin-pages
 * @returns The SignUp component from Clerk
 */
const Page = () => {
  return <SignUp />
}

export default Page
