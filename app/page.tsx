"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-ds-primary flex items-center">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Hero Section - Personal Introduction */}
        <div className="text-center">
          
          {/* Personal Introduction - All on one line with lots of spacing */}
          <div className="mx-auto px-12 sm:px-24 md:px-32 lg:px-40 xl:px-48">
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg text-ds-tertiary flex flex-wrap justify-center items-baseline gap-1 sm:gap-2" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.3',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              <span>My name is</span>
              <span
                style={{
                  color: "#f5f5f4",
                  fontWeight: '300'
                }}
              >
                Andrew Chiang.
              </span>
              <span
                style={{
                  fontWeight: '900',
                  fontSize: '1.1em',
                  background: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 30%, #d6d3d1 60%, #a8a29e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(245, 245, 244, 0.3)',
                }}
              >
                I enjoy creating things.
              </span>
            </p>
            
            {/* Call to Action Button - Both mobile and desktop */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/projects"
                className="interactive btn-primary"
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  fontSize: '14px',
                  letterSpacing: '0.02em'
                }}
              >
                View Projects
              </Link>
            </div>
            
            {/* Tags */}
            <div 
              className="text-ds-tertiary px-12 sm:px-24 md:px-32 lg:px-40 xl:px-48" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              {/* Unified layout for all screen sizes - single row */}
              <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2">
                <Link
                  href="/projects"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs sm:text-sm"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  mobile application
                </Link>
                <Link
                  href="/projects"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs sm:text-sm"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  web interface
                </Link>
                <Link
                  href="/projects"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs sm:text-sm"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  physical product
                </Link>
                <Link
                  href="/music"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs sm:text-sm"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  EDM music
                </Link>
                <Link
                  href="/sandbox"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs sm:text-sm"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  visual design
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Moon Dot - positioned to fit on screen */}
          <div className="flex justify-center mt-6 sm:mt-10">
            <div 
              className="w-1.5 h-1.5 bg-ds-interactive rounded-full"
              style={{ 
                animation: 'moonFloat 6s ease-in-out infinite',
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.3)'
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