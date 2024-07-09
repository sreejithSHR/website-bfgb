import { ThemeProvider } from "@/providers/theme-prodiver"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"

const font = DM_Sans({ subsets: ["latin"] })

/**
 * Metadata for the layout
 *
 * @type Metadata
 * @version 1.0.0
 */
export const metadata: Metadata = {
  title: "Plura Agency",
  description: "All in one agency",
}

/**
 * Root layout for the application
 * @layout
 * @version 1.0.0
 *
 * @param children: React.ReactNode - The children of the layout
 * @returns The layout of the application
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
