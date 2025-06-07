"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-ds-primary flex items-center">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Hero Section - Personal Introduction */}
        <div className="text-center">
          
          {/* Personal Introduction */}
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-12">
            <p 
              className="text-sm sm:text-xl lg:text-2xl text-ds-tertiary" 
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
                  color: "#f5f5f4",
                  fontWeight: '300'
                }}
              >
                Yen Ju Andrew Chiang
              </span>
              .
            </p>
            
            {/* Mobile: Split alignment, Desktop: Center aligned */}
            <div className="block sm:hidden">
              <div className="flex flex-col items-center space-y-2">
                <p 
                  className="text-5xl text-ds-tertiary" 
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    lineHeight: '1.2',
                    letterSpacing: '0.01em',
                    fontWeight: '300'
                  }}
                >
                  I enjoy
                </p>
                <p 
                  className="text-5xl"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    lineHeight: '1.2',
                    letterSpacing: '0.01em',
                    fontWeight: '300',
                    background: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 50%, #d6d3d1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  creating things.
                </p>
              </div>
            </div>
            
            {/* Desktop: Gradient applied to full text */}
            <p 
              className="hidden sm:block text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 sm:px-0" 
              style={{ 
                fontFamily: 'Georgia, serif',
                lineHeight: '1.2',
                letterSpacing: '0.01em',
                fontWeight: '300'
              }}
            >
              I enjoy{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 50%, #d6d3d1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                creating things.
              </span>
            </p>
            
            {/* Call to Action Button - Both mobile and desktop */}
            <div className="mt-8 sm:mt-12">
              <Link
                href="/projects"
                className="interactive btn-primary"
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                View Projects
              </Link>
            </div>
            
            {/* Tags */}
            <div 
              className="text-ds-tertiary px-4 sm:px-0" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              {/* Mobile: All tags in one row, small and light */}
              <div className="block sm:hidden">
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                  <Link
                    href="/projects"
                    className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    mobile application
                  </Link>
                  <Link
                    href="/projects"
                    className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    web interface
                  </Link>
                  <Link
                    href="/projects"
                    className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    physical product
                  </Link>
                  <Link
                    href="/music"
                    className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    EDM music
                  </Link>
                  <Link
                    href="/sandbox"
                    className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
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
                    className="text-ds-tertiary hover:text-ds-primary transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    mobile application
                  </Link>
                  <Link
                    href="/projects"
                    className="text-ds-tertiary hover:text-ds-primary transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    web interface
                  </Link>
                  <Link
                    href="/projects"
                    className="text-ds-tertiary hover:text-ds-primary transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    physical product
                  </Link>
                  <Link
                    href="/music"
                    className="text-ds-tertiary hover:text-ds-primary transition-colors duration-300 text-base sm:text-lg"
                    style={{
                      fontWeight: '300'
                    }}
                  >
                    EDM music
                  </Link>
                  <Link
                    href="/sandbox"
                    className="text-ds-tertiary hover:text-ds-primary transition-colors duration-300 text-base sm:text-lg"
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
          <div className="flex justify-center mt-8 sm:mt-16">
            <div 
              className="w-2 h-2 bg-ds-interactive rounded-full"
              style={{ 
                animation: 'moonFloat 6s ease-in-out infinite',
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