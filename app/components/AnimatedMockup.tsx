import React from 'react';
import Image from 'next/image';
import DrawingAnimation from './DrawingAnimation';

interface AnimatedMockupProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationPath: string;
  animationDelay?: number;
}

export default function AnimatedMockup({
  src,
  alt,
  width,
  height,
  className = '',
  animationPath,
  animationDelay = 0,
}: AnimatedMockupProps) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`relative z-10 ${className}`}
      />
      <div className="absolute inset-0 z-0">
        <DrawingAnimation
          pathData={animationPath}
          delay={animationDelay}
        />
      </div>
    </div>
  );
} 