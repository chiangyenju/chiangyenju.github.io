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
              <span>My name is Andrew Chiang.</span>
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontWeight: '300',
                  fontSize: '1.1em',
                  background: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 30%, #d6d3d1 60%, #a8a29e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                I enjoy creating things.
              </span>
            </p>

            
            {/* Tags */}
            <div 
              className="text-ds-tertiary px-12 sm:px-24 md:px-32 lg:px-40 xl:px-48 mt-6 sm:mt-8" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              {/* Unified layout for all screen sizes - single row */}
              <div className="flex justify-center gap-x-2 sm:gap-x-4">
                <Link
                  href="/projects"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs whitespace-nowrap"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  mobile application
                </Link>
                <Link
                  href="/projects"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs whitespace-nowrap"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  web interface
                </Link>
                <Link
                  href="/projects"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs whitespace-nowrap"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  physical product
                </Link>
                <Link
                  href="/music"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs whitespace-nowrap"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  EDM music
                </Link>
                <Link
                  href="/sandbox"
                  className="text-ds-quaternary hover:text-ds-tertiary transition-colors duration-300 text-xs whitespace-nowrap"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  visual design
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Moon Dot - simplified for performance */}
          <div className="flex justify-center mt-6 sm:mt-10">
            <div 
              className="w-1.5 h-1.5 bg-ds-interactive rounded-full opacity-60"
              style={{ 
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.2)'
              }}
            ></div>
          </div>
        </div>
      </div>


    </section>
  );
}