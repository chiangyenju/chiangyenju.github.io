"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-black">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-6 sm:py-12">
        
        {/* Hero Section - Personal Introduction */}
        <div className="text-center mt-4 sm:mt-8 mb-8 sm:mb-12">
          
          {/* Personal Introduction */}
          <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
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
              <div className="flex flex-col items-center space-y-2">
                <p 
                  className="text-5xl text-white/70" 
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
                    background: 'linear-gradient(135deg, #ffffff 0%, #ffffff80 50%, #ffffff40 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  creating things.
                </p>
              </div>
            </div>
            
            {/* Desktop: Centered layout with gradient */}
            <div className="hidden sm:block">
              <p 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 sm:px-0" 
                style={{ 
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1.2',
                  letterSpacing: '0.01em',
                  fontWeight: '300'
                }}
              >
                <span className="text-white/70">I enjoy </span>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #ffffff80 50%, #ffffff40 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  creating things.
                </span>
              </p>
            </div>
            
            {/* Call to Action Button - Both mobile and desktop with gradient */}
            <div className="mt-8 sm:mt-12">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 rounded-full text-white hover:text-white transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)';
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
              {/* Mobile: All tags in one row, small and light */}
              <div className="block sm:hidden">
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                  <Link
                    href="/projects"
                    className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    mobile application
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    web interface
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    physical product
                  </Link>
                  <Link
                    href="/music"
                    className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    EDM music
                  </Link>
                  <Link
                    href="/sandbox"
                    className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    visual design
                  </Link>
                </div>
              </div>
              
              {/* Desktop: Smaller, thinner tags */}
              <div className="hidden sm:block">
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                  <Link
                    href="/projects"
                    className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    mobile application
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    web interface
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    physical product
                  </Link>
                  <Link
                    href="/music"
                    className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm"
                    style={{
                      fontWeight: '200'
                    }}
                  >
                    EDM music
                  </Link>
                  <Link
                    href="/sandbox"
                    className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm"
                    style={{
                      fontWeight: '200'
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