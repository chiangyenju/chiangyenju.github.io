import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MarketSolutionsCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
}

const MarketSolutionsCarousel: React.FC<MarketSolutionsCarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full aspect-[4/3] max-w-xs sm:max-w-md mx-auto p-2 sm:p-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="w-full h-full p-2 sm:p-6 rounded-xl overflow-hidden shadow-lg bg-transparent">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 80vw, 30vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketSolutionsCarousel; 