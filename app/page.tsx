"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-black">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 sm:py-16">
        
        {/* Hero Section - Personal Introduction */}
        <div className="text-center mt-2 sm:mt-16 mb-8 sm:mb-20">
          
          {/* Personal Introduction */}
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-16">
            <p 
              className="text-sm sm:text-xl lg:text-2xl text-white/70" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              My name is{' '}
              <span
                style={{
                  color: 'white',
                  fontWeight: '300'
                }}
              >
                Yen Ju Andrew Chiang
              </span>
              .
            </p>
            
            {/* Mobile: Split alignment, Desktop: Center aligned */}
            <div className="block sm:hidden">
              <p 
                className="text-left text-3xl text-white/70 mb-2" 
                style={{ 
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1.4',
                  letterSpacing: '0.01em',
                  fontWeight: '300'
                }}
              >
                I enjoy
              </p>
              <p 
                className="text-right text-3xl text-white/70" 
                style={{ 
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1.4',
                  letterSpacing: '0.01em',
                  fontWeight: '300'
                }}
              >
                creating things.
              </p>
            </div>
            
            {/* Desktop: Original centered layout */}
            <p 
              className="hidden sm:block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/70 px-4 sm:px-0" 
              style={{ 
                fontFamily: 'Georgia, serif',
                lineHeight: '1.2',
                letterSpacing: '0.01em',
                fontWeight: '300'
              }}
            >
              I enjoy creating things.
            </p>
            
            {/* Call to Action Button - Mobile only */}
            <div className="block sm:hidden mt-8">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-full text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                Projects
              </Link>
            </div>
            
            {/* Tags */}
            <div 
              className="text-white/70 px-4 sm:px-0" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              {/* Mobile: Tiny tags, one per row, center aligned */}
              <div className="block sm:hidden space-y-3">
                <div className="text-center">
                  <Link
                    href="/projects"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    mobile application
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    href="/projects"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    web interface
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    href="/projects"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    physical product
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    href="/music"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    EDM music
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    href="/sandbox"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    visual design
                  </Link>
                </div>
              </div>
              
              {/* Desktop: Original layout */}
              <div className="hidden sm:block text-lg sm:text-xl lg:text-2xl">
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-3">
                  <Link
                    href="/projects"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    mobile application
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    web interface
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    physical product
                  </Link>
                  <Link
                    href="/music"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    EDM music
                  </Link>
                  <Link
                    href="/sandbox"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    visual design
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Moon Dot - positioned to fit on screen */}
          <div className="flex justify-center mt-8 sm:mt-32">
            <div 
              className="w-2 h-2 bg-white/60 rounded-full"
              style={{ 
                animation: 'moonFloat 4s ease-in-out infinite',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* CSS for moon floating animation */}
      <style jsx>{`
        @keyframes moonFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}