import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chiang Yen Ju',
  description: 'Chiang Yen Ju - UX Designer & Researcher Portfolio',
  themeColor: '#1c1917',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-ds-primary text-ds-primary antialiased`}>
        
        {/* Light Animation Background - Disabled for performance 
        <div className="light-container">
          <div className="tunnel-light"></div>
          <div className="light-beam light-beam-1"></div>
          <div className="light-beam light-beam-2"></div>
          <div className="light-beam light-beam-3"></div>
          <div className="light-beam light-beam-4"></div>
          <div className="light-beam light-beam-5"></div>
          <div className="light-beam light-beam-6"></div>
        </div>
        */}
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  )
}