'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AIImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  isActive?: boolean;
  noItemBg?: boolean;
}

const AIImageCarousel: React.FC<AIImageCarouselProps> = ({ images, isActive = true, noItemBg = false }) => {
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
    <div className={`relative w-full aspect-[5/2] sm:aspect-[5/2] overflow-visible rounded-2xl group transition-all duration-500 ${isActive ? 'brightness-100 shadow-2xl' : 'brightness-75 grayscale-[30%]'}`}>
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
              {noItemBg ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={400}
                  className="object-contain w-full h-full sm:w-full sm:h-full md:w-[90%] md:h-[90%] lg:w-[95%] lg:h-[95%] xl:w-[98%] xl:h-[98%]"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              ) : (
                <div className="w-[95%] h-[95%] sm:w-[90%] sm:h-[90%] md:w-[95%] md:h-[95%] lg:w-[98%] lg:h-[98%] xl:w-full xl:h-full bg-white rounded-2xl flex items-center justify-center shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={640}
                    height={400}
                    className="object-contain w-full h-full p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIImageCarousel; 