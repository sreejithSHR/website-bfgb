import React from "react"

type Props = {
  children: React.ReactNode
}

/**
 * Layout component for the authorization pages
 * @layout
 * @version 1.0.0
 *
 * @param children: React.ReactNode - The children to render
 * @returns The layout component
 */
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  )
}

export default AuthLayout
