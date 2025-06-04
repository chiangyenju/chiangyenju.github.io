import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">Could not find requested resource</p>
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