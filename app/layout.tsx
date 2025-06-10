import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Andrew Chiang',
  description: 'Personal portfolio of Andrew Chiang',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-ivory text-ebony font-sans">
        <Navigation />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}