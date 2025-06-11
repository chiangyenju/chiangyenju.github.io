import React from 'react';
import { motion } from 'framer-motion';

interface DrawingAnimationProps {
  pathData: string;
  duration?: number;
  delay?: number;
  strokeColor?: string;
  glowColor?: string;
  strokeWidth?: number;
}

export default function DrawingAnimation({
  pathData,
  duration = 2,
  delay = 0,
  strokeColor = '#D4B483',
  glowColor = '#E8C795',
  strokeWidth = 2,
}: DrawingAnimationProps) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
    >
      <motion.path
        d={pathData}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        filter="url(#glow)"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{ pathLength: 1, opacity: [1, 1, 0] }}
        transition={{
          duration: duration * 2,
          delay,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5
        }}
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor={glowColor} result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
} 