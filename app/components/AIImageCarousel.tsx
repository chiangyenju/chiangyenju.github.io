'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AIImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  isActive?: boolean;
}

const AIImageCarousel: React.FC<AIImageCarouselProps> = ({ images, isActive = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative w-full aspect-[5/2] overflow-visible rounded-2xl group transition-all duration-500 ${isActive ? 'brightness-100 shadow-2xl' : 'brightness-75 grayscale-[30%]'}`}>
      <div className="w-full h-full relative">
        {images.map((image, index) => {
          let stateClass = '';
          if (index === currentIndex) {
            // Entering image: slide up from bottom, slow fade/slide
            stateClass = 'z-20 translate-y-0 opacity-100 transition-all duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)]';
          } else if ((index === (currentIndex - 1 + images.length) % images.length)) {
            // Outgoing image: just fade out quickly, no slide
            stateClass = 'z-10 translate-y-0 opacity-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]';
          } else {
            // All other images (not visible)
            stateClass = 'z-0 translate-y-[30%] opacity-0';
          }
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${stateClass}`}
              style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
            >
              <div className="w-[80%] h-[80%] bg-white rounded-2xl flex items-center justify-center shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={200}
                  className="object-contain w-full h-full p-4"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIImageCarousel; 