import type { Metadata } from "next"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import "./globals.css"

export const metadata: Metadata = {
  title: "Plura Website builder",
  description: "SAAS Website Builder with a focus on project management",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
