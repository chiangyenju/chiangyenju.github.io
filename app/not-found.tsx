import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center">
        <h2 className="font-serif text-4xl mb-4">404</h2>
        <h1 className="font-serif text-2xl mb-4">Page Not Found</h1>
        <p className="font-sans font-thin text-ebony/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-ebony text-ivory rounded-lg hover:bg-olive transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 