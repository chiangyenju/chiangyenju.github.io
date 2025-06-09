'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-ivory">
          <div className="text-center">
            <h2 className="font-serif text-2xl mb-4">Something went wrong</h2>
            <p className="font-sans font-thin text-ebony/60 mb-8">
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-ebony text-ivory rounded-lg hover:bg-olive transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 