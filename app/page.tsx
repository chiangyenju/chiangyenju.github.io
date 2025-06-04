"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  // Ensure page starts at top and prevent scrolling
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section className="h-screen w-full bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-6 sm:py-12 h-full flex flex-col justify-center">
        
        {/* Hero Section - Personal Introduction */}
        <div className="text-center">
          
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
            
            {/* Call to Action Button - Both mobile and desktop with gradient border and foil */}
            <div className="mt-8 sm:mt-12">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 rounded-full text-white hover:text-white transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                  background: 'rgba(0,0,0,0.3)',
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), linear-gradient(135deg, #ffffff40, #ffffff80, #ffffff40)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              >
                {/* Foil effect overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
                <span className="relative z-10">Projects</span>
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

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes moonFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}