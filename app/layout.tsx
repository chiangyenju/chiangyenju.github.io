import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'chiangyenju | 江',
  description: 'new tech • games • music • design',
  keywords: [
    'web3',
    'blockchain',
    'artificial intelligence',
    'games',
    'music',
  ],
  authors: [{ name: 'chiangyenju' }],
  openGraph: {
    title: 'chiangyenju | 江',
    description: 'new tech • games • music • design',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'chiangyenju | 江',
    description: 'new tech • games • music • design',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Long+Cang&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="antialiased">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-paper">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <Link href="/" className="flex items-center">
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'flex-end',
                    background: 'linear-gradient(90deg, #e0e0e0 0%, #bdbdbd 50%, #757575 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.95
                  }}
                >
                  <span className="text-base font-[500] tracking-[0.25em] uppercase select-none"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 500,
                          letterSpacing: '0.25em',
                          background: 'linear-gradient(90deg, #757575 0%, #bdbdbd 50%, #e0e0e0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                    yenju
                  </span>
                  <span style={{
                    fontFamily: 'Zhi Mang Xing, cursive, sans-serif',
                    fontSize: '2.2em',
                    lineHeight: 1,
                    marginLeft: '0.3em',
                    display: 'inline-block',
                    filter: 'blur(0.2px) contrast(1.2)',
                    transform: 'rotate(-7deg) scale(1.1,1.2) translateY(2px)',
                    textShadow: '0 0 2px #fff, 0 0 8px #bdbdbd, 0 1px 0 #757575'
                  }}>
                    江
                  </span>
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/projects" className="text-xs faded-ink-text hover:ink-text transition-colors font-light font-sans tracking-wider">
                  Projects
                </Link>
                <a href="#music" className="text-xs faded-ink-text hover:ink-text transition-colors font-light font-sans tracking-wider">
                  Music
                </a>
                <a href="#sandbox" className="text-xs faded-ink-text hover:ink-text transition-colors font-light font-sans tracking-wider">
                  Sandbox
                </a>
                <a href="#me" className="text-xs faded-ink-text hover:ink-text transition-colors font-light font-sans tracking-wider">
                  Me
                </a>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 faded-ink-text hover:ink-text">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}