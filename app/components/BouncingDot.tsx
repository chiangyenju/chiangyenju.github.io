'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function BouncingDot() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to get element position
    const getElementPosition = (selector: string): Position | null => {
      const element = document.querySelector(selector);
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    };

    // Get all step positions
    const getStepPositions = () => {
      const positions: Position[] = [];
      for (let i = 1; i <= 5; i++) {
        const pos = getElementPosition(`[data-step="${i}"]`);
        if (pos) positions.push(pos);
      }
      // Get the arrow position
      const arrowPos = getElementPosition('[data-step="arrow"]');
      if (arrowPos) positions.push(arrowPos);
      return positions;
    };

    // Update positions when the component mounts and on window resize
    const updatePositions = () => {
      const newPositions = getStepPositions();
      setPositions(newPositions);
    };

    // Initial position update
    updatePositions();

    // Update positions on window resize
    window.addEventListener('resize', updatePositions);

    // Start the animation sequence
    const startAnimation = () => {
      setCurrentIndex(0);
      setIsVisible(true);
    };

    // Start the animation after a delay
    const timeout = setTimeout(startAnimation, 1000);

    return () => {
      window.removeEventListener('resize', updatePositions);
      clearTimeout(timeout);
    };
  }, []);

  // Move to next position when animation completes
  const onAnimationComplete = () => {
    if (currentIndex < positions.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000); // Wait at each position for 1 second
    } else {
      // At the last position (arrow), fade out and restart
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex(0);
          setIsVisible(true);
        }, 1000);
      }, 1000);
    }
  };

  if (positions.length === 0 || !positions[currentIndex]) return null;

  return (
    <motion.div
      className="fixed w-3 h-3 bg-olive rounded-full pointer-events-none"
      animate={{
        x: positions[currentIndex].x,
        y: positions[currentIndex].y,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
} 