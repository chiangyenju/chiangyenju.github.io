"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dotPosition, setDotPosition] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getActiveItem = () => {
    if (pathname === '/projects') return 'projects';
    if (pathname === '/music') return 'music';
    if (pathname === '/sandbox') return 'sandbox';
    return null;
  };

  const activeItem = getActiveItem();

  const updateDotPosition = (itemKey: string) => {
    const itemElement = itemRefs.current[itemKey];
    const navElement = navRef.current;
    
    if (itemElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const position = itemRect.left - navRect.left + (itemRect.width / 2);
      setDotPosition(position);
    }
  };

  useEffect(() => {
    if (activeItem) {
      updateDotPosition(activeItem);
    }
  }, [activeItem]);

  const handleMouseEnter = (itemKey: string) => {
    setHoveredItem(itemKey);
    updateDotPosition(itemKey);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    if (activeItem) {
      updateDotPosition(activeItem);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Responsive */}
          <Link href="/" className="flex items-center">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'flex-end',
              }}
            >
              <span className="text-xs sm:text-sm font-[500] tracking-[0.2em] uppercase select-none"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      background: 'linear-gradient(90deg, #757575 0%, #bdbdbd 50%, #e0e0e0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                yenju
              </span>
              <span style={{
                fontFamily: 'Zhi Mang Xing, cursive, sans-serif',
                fontSize: '1.5em',
                lineHeight: 1,
                marginLeft: '0.2em',
                display: 'inline-block',
                filter: 'blur(0.1px) contrast(1.1)',
                transform: 'rotate(-5deg) scale(1.05,1.1) translateY(1px)',
                textShadow: '0 0 1px #fff, 0 0 4px #bdbdbd',
                background: 'linear-gradient(90deg, #757575 0%, #bdbdbd 50%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                江
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div ref={navRef} className="hidden md:flex items-center space-x-8 relative">
            {/* Single unified dot that moves and bounces */}
            <div 
              className="absolute -bottom-3 w-1.5 h-1.5 bg-white/80 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{
                left: `${dotPosition}px`,
                transform: 'translateX(-50%)',
                opacity: hoveredItem || activeItem ? 1 : 0,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                animation: activeItem && !hoveredItem ? 'bounce 2s infinite' : 'none'
              }}
            />

            <Link 
              ref={(el) => { itemRefs.current['projects'] = el; }}
              href="/projects" 
              className={`text-sm font-light font-sans tracking-wide transition-all duration-300 relative focus:outline-none ${
                isActive('/projects') 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/80'
              }`}
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              Projects
            </Link>
            
            <Link 
              ref={(el) => { itemRefs.current['music'] = el; }}
              href="/music" 
              className={`text-sm font-light font-sans tracking-wide transition-all duration-300 relative focus:outline-none ${
                isActive('/music') 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/80'
              }`}
              onMouseEnter={() => handleMouseEnter('music')}
              onMouseLeave={handleMouseLeave}
            >
              Music
            </Link>
            
            <Link 
              ref={(el) => { itemRefs.current['sandbox'] = el; }}
              href="/sandbox" 
              className={`text-sm font-light font-sans tracking-wide transition-all duration-300 relative focus:outline-none ${
                isActive('/sandbox') 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/80'
              }`}
              onMouseEnter={() => handleMouseEnter('sandbox')}
              onMouseLeave={handleMouseLeave}
            >
              Sandbox
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white/50 hover:text-white/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/projects" 
                className={`text-base font-light font-sans tracking-wide transition-all duration-300 py-2 focus:outline-none ${
                  isActive('/projects') 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              
              <Link 
                href="/music" 
                className={`text-base font-light font-sans tracking-wide transition-all duration-300 py-2 focus:outline-none ${
                  isActive('/music') 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                Music
              </Link>
              
              <Link 
                href="/sandbox" 
                className={`text-base font-light font-sans tracking-wide transition-all duration-300 py-2 focus:outline-none ${
                  isActive('/sandbox') 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                Sandbox
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CSS for bouncing animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-8px);
          }
          60% {
            transform: translateX(-50%) translateY(-4px);
          }
        }
      `}</style>
    </nav>
  );
} 