import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4 text-center">404</h2>
        <h1 className="text-2xl mb-4 text-center">Page Not Found</h1>
        <p className="text-white/60">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 