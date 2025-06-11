'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
  onComplete?: () => void;
}

export default function TypewriterText({ 
  text, 
  delay = 0, 
  className = "", 
  speed = 0.1,
  onComplete 
}: TypewriterTextProps) {
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const animate = async () => {
      await new Promise(resolve => setTimeout(resolve, delay));
      setIsTyping(true);
      
      await controls.start({
        opacity: 1,
        transition: { duration: 0.1 }
      });

      let currentText = '';
      for (let i = 0; i <= text.length; i++) {
        currentText = text.slice(0, i);
        setDisplayedText(currentText);
        await new Promise(resolve => setTimeout(resolve, speed * 1000));
      }
      
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
    };
    
    animate();
  }, [text, delay, controls, speed, onComplete]);

  return (
    <div className="relative">
      <span className={`invisible ${className}`}>{text}</span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className={`absolute top-0 left-0 whitespace-nowrap ${className}`}
      >
        {displayedText}
        {isTyping && (
          <span 
            className={`
              inline-block w-[0.1em] -mb-[0.1em] ml-[1px]
              animate-[blink_1s_infinite]
              ${className.includes('font-serif') ? 'h-[1.1em]' : 'h-[1.2em]'}
              ${className.includes('font-thin') ? 'bg-ebony/60' : 'bg-ebony'}
            `}
          />
        )}
      </motion.div>
    </div>
  );
} 