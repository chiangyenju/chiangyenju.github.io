'use client';

import { useState, useEffect } from 'react';

interface TypewriterIconProps {
  children: React.ReactNode;
  delay: number;
  href: string;
  ariaLabel: string;
  className?: string;
  speed?: number;
}

export default function TypewriterIcon({ 
  children, 
  delay, 
  href,
  ariaLabel,
  className = "",
  speed = 0.1
}: TypewriterIconProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const animate = async () => {
      await new Promise(resolve => setTimeout(resolve, delay));
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, speed * 1000));
      setIsTyping(false);
      setIsVisible(true);
    };

    animate();
  }, [delay, speed]);

  if (!isTyping && !isVisible) return <div className={`w-4 h-4 sm:w-5 sm:h-5 opacity-0`} />;

  return (
    <>
      {isVisible ? (
        <a 
          href={href}
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-ebony/60 hover:text-olive transition-colors ${className}`}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      ) : (
        <div className="relative">
          <div className="opacity-0">
            {children}
          </div>
          <span 
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              inline-block w-[0.1em] h-[1em]
              animate-[blink_1s_infinite]
              bg-ebony/60
            `}
          />
        </div>
      )}
    </>
  );
} 