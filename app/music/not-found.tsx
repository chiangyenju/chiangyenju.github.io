import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <div>
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          Return Home
        </Link>
      </div>
    </div>
  )
} 