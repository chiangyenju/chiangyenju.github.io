import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

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
        <Navigation />
        
        {/* Main Content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}