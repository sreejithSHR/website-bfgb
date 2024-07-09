import { ThemeProvider } from "next-themes"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"

const font = DM_Sans({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Plura Agency",
  description: "All in one agency solution",
}

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
