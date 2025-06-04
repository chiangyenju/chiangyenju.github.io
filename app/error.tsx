'use client'

export default function Error({
  error, // eslint-disable-line @typescript-eslint/no-unused-vars
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">
        
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight" 
               style={{ 
                 fontFamily: 'Georgia, serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em'
               }}>
            Something went wrong
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '200',
                 letterSpacing: '0.01em'
               }}>
              An unexpected error occurred
            </p>
            
            <button
              onClick={reset}
              className="px-6 py-3 text-white/90 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.01em'
              }}
            >
              Try again
            </button>
          </div>
        </div>

      </div>
    </section>
  )
} 