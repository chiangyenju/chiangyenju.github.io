import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'yenju portfolio',
  description: 'Personal portfolio of Andrew Chiang',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="alternate icon" href="/favicon.ico" />
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