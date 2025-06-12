'use client';

import { useEffect, useState } from 'react';

interface PressableButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const PressableButton: React.FC<PressableButtonProps> = ({ isActive, onClick, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isActive) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500); // Animation duration
      }, 2000); // Interval between animations

      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <button
      onClick={onClick}
      className={`
        font-sans text-sm font-bold uppercase px-6 py-3 rounded-full 
        transition-all duration-300 transform
        ${isActive
          ? 'bg-olive/10 border border-olive/20 text-ivory'
          : `bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 text-olive/60
             ${isAnimating ? 'animate-press' : ''}`
        }
      `}
    >
      {children}
    </button>
  );
};

export default PressableButton; 