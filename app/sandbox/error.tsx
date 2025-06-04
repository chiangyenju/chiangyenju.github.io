'use client'

export default function SandboxError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center max-w-md mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4" 
            style={{ 
              fontFamily: 'Georgia, serif',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}>
          Something went wrong with Sandbox
        </h2>
        <p className="text-white/60 mb-6 text-sm" 
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '200',
             lineHeight: '1.5'
           }}>
          {error.message || 'An unexpected error occurred while loading the sandbox page'}
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-sm"
            style={{ 
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontWeight: '300'
            }}
          >
            Try again
          </button>
          <div>
            <a 
              href="/"
              className="text-white/60 hover:text-white/80 transition-colors text-sm underline"
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: '200'
              }}
            >
              Return to home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 