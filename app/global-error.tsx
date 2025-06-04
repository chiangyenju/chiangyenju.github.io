'use client'

export default function GlobalError({
  error, // eslint-disable-line @typescript-eslint/no-unused-vars
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: 'black', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
        <section style={{ 
          minHeight: '100vh', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '32rem' }}>
            
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ 
                fontSize: '3rem',
                fontWeight: '300',
                letterSpacing: '0.01em',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Something went wrong
              </h1>
              
              <p style={{ 
                fontSize: '1.25rem',
                fontWeight: '200',
                letterSpacing: '0.01em',
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                A critical error occurred
              </p>
              
              <button
                onClick={reset}
                style={{
                  padding: '0.75rem 1.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.5rem',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  fontSize: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Try again
              </button>
            </div>

          </div>
        </section>
      </body>
    </html>
  )
} 