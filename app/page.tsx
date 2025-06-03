"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-black">
      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Hero Section - Personal Introduction */}
        <div className="text-center mt-32 mb-20">
          
          {/* Personal Introduction */}
          <div className="max-w-3xl mx-auto space-y-16">
            <p 
              className="text-lg text-white/70" 
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
            
            <p 
              className="text-6xl text-white/70" 
              style={{ 
                fontFamily: 'Georgia, serif',
                lineHeight: '1.2',
                letterSpacing: '0.01em',
                fontWeight: '300'
              }}
            >
              I enjoy creating things.
            </p>
            
            <p 
              className="text-lg text-white/70" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              <Link
                href="/projects"
                className="text-white/70 hover:text-white transition-colors duration-300 mx-3"
                style={{
                  fontWeight: '300',
                  fontSize: '0.875rem'
                }}
              >
                mobile application
              </Link>
              <Link
                href="/projects"
                className="text-white/70 hover:text-white transition-colors duration-300 mx-3"
                style={{
                  fontWeight: '300',
                  fontSize: '0.875rem'
                }}
              >
                web interface
              </Link>
              <Link
                href="/projects"
                className="text-white/70 hover:text-white transition-colors duration-300 mx-3"
                style={{
                  fontWeight: '300',
                  fontSize: '0.875rem'
                }}
              >
                physical product
              </Link>
              <Link
                href="/music"
                className="text-white/70 hover:text-white transition-colors duration-300 mx-3"
                style={{
                  fontWeight: '300',
                  fontSize: '0.875rem'
                }}
              >
                EDM music
              </Link>
              <Link
                href="/sandbox"
                className="text-white/70 hover:text-white transition-colors duration-300 mx-3"
                style={{
                  fontWeight: '300',
                  fontSize: '0.875rem'
                }}
              >
                visual design
              </Link>
            </p>
          </div>

          {/* Floating Moon Dot - moved outside space-y container */}
          <div className="flex justify-center mt-32">
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