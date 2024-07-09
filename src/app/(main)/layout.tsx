import { ClerkProvider } from "@clerk/nextjs"
import React from "react"
import { dark } from "@clerk/themes"

type Props = {
  children: React.ReactNode
}

/**
 * Layout component for the main pages
 * @layout
 * @version 1.0.0
 *
 * @param children: React.ReactNode - The children to render
 * @returns The layout component
 */
const Layout = ({ children }: Props) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
  )
}

export default Layout
