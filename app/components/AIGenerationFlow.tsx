'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AIImageCarousel from './AIImageCarousel';

const ANIMATION_DURATION = 3000; // Duration for each path
const TOTAL_PATHS = 2; // Number of paths to animate

const AIGenerationFlow = () => {
  const [activePath, setActivePath] = useState(0); // 0 for transitional, 1 for modern farmhouse

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePath((prev) => (prev + 1) % TOTAL_PATHS);
    }, ANIMATION_DURATION);
    return () => clearInterval(interval);
  }, []);

  const getLineOpacity = (pathIndex: number) => {
    return activePath === pathIndex ? "opacity-100" : "opacity-30";
  };

  const getTagHighlight = (pathIndex: number) => {
    return activePath === pathIndex 
      ? "text-ivory" 
      : "text-ivory/50 hover:text-ivory/70";
  };

  const getImageHighlight = (pathIndex: number) => {
    return activePath === pathIndex ? "opacity-100 scale-105" : "opacity-50 scale-100";
  };

  return (
    <div className="w-full flex flex-col items-center space-y-16">
      {/* Row 1: Empty Room */}
      <div className="w-full max-w-[500px] relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src="/projects/interior-design-ai/empty-room.png"
          alt="Empty room"
          fill
          className="object-cover"
        />
      </div>

      {/* Connecting Line */}
      <div className="h-16 w-[1px] bg-olive/50"></div>

      {/* Row 2: Living Room Tag */}
      <div className="relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-olive/20"></div>
        <div className="text-ivory text-xs tracking-[0.2em] uppercase relative inline-block">
          Living Room
        </div>
      </div>

      {/* Connecting Lines Container */}
      <div className="relative w-full max-w-[700px] h-32">
        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-1/2 w-[1px] bg-olive/50"></div>
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-olive/50"></div>
        {/* Left vertical line */}
        <div className={`absolute top-1/2 left-1/4 h-1/2 w-[1px] bg-olive transition-opacity duration-500 ${getLineOpacity(0)}`}></div>
        {/* Right vertical line */}
        <div className={`absolute top-1/2 right-1/4 h-1/2 w-[1px] bg-olive transition-opacity duration-500 ${getLineOpacity(1)}`}></div>
      </div>

      {/* Row 3: Style Tags */}
      <div className="w-full flex justify-center">
        <div className="w-[500px] sm:w-[600px] md:w-[700px] relative">
          {/* Left vertical line */}
          <div className="absolute left-[25%] -top-16 w-[1px] bg-olive/20"></div>
          {/* Right vertical line */}
          <div className="absolute right-[25%] -top-16 w-[1px] bg-olive/20"></div>
          
          <div className="flex justify-between">
            <motion.div 
              className={`relative group w-[50%] flex justify-center`}
              animate={{ scale: activePath === 0 ? 1.05 : 1 }}
            >
              <div className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase relative inline-block transition-all duration-300 ${getTagHighlight(0)}`}>
                Transitional
              </div>
            </motion.div>
            <motion.div 
              className={`relative group w-[50%] flex justify-center`}
              animate={{ scale: activePath === 1 ? 1.05 : 1 }}
            >
              <div className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase relative inline-block transition-all duration-300 ${getTagHighlight(1)}`}>
                Modern Farmhouse
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Connecting Lines Container */}
      <div className="relative w-full max-w-[700px] h-16">
        {/* Left vertical line */}
        <div className={`absolute left-1/4 h-full w-[1px] bg-olive transition-opacity duration-500 ${getLineOpacity(0)}`}></div>
        {/* Right vertical line */}
        <div className={`absolute right-1/4 h-full w-[1px] bg-olive transition-opacity duration-500 ${getLineOpacity(1)}`}></div>
      </div>

      {/* Row 4: Result Images */}
      <div className="w-full max-w-[700px] grid grid-cols-2 gap-16 relative">
        <motion.div 
          className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-500 ${getImageHighlight(0)}`}
          animate={{ scale: activePath === 0 ? 1.05 : 1 }}
        >
          <Image
            src="/projects/interior-design-ai/results-1.png"
            alt="Transitional style result"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-500 ${getImageHighlight(1)}`}
          animate={{ scale: activePath === 1 ? 1.05 : 1 }}
        >
          <Image
            src="/projects/interior-design-ai/results-2.png"
            alt="Modern farmhouse style result"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Tag: Items Included */}
      <div className="w-full flex justify-center my-4">
        <span className="px-6 py-2 rounded-full bg-olive/10 text-olive text-xs font-bold tracking-widest uppercase shadow-sm">Items Included</span>
      </div>

      {/* Row 5: Item Carousels */}
      <div className="w-full max-w-[700px] grid grid-cols-2 gap-16 mt-8">
        <div>
          <AIImageCarousel
            images={[
              { src: "/projects/interior-design-ai/transitional-items/item1.png", alt: "Transitional item 1" },
              { src: "/projects/interior-design-ai/transitional-items/item2.png", alt: "Transitional item 2" },
              { src: "/projects/interior-design-ai/transitional-items/item3.png", alt: "Transitional item 3" },
              { src: "/projects/interior-design-ai/transitional-items/item4.png", alt: "Transitional item 4" },
              { src: "/projects/interior-design-ai/transitional-items/item5.png", alt: "Transitional item 5" },
              { src: "/projects/interior-design-ai/transitional-items/item6.png", alt: "Transitional item 6" },
              { src: "/projects/interior-design-ai/transitional-items/item7.png", alt: "Transitional item 7" },
              { src: "/projects/interior-design-ai/transitional-items/item8.png", alt: "Transitional item 8" },
              { src: "/projects/interior-design-ai/transitional-items/item9.png", alt: "Transitional item 9" },
            ]}
            isActive={activePath === 0}
          />
        </div>
        <div>
          <AIImageCarousel
            images={[
              { src: "/projects/interior-design-ai/modern-farmhouse-items/item1.png", alt: "Modern Farmhouse item 1" },
              { src: "/projects/interior-design-ai/modern-farmhouse-items/item2.png", alt: "Modern Farmhouse item 2" },
              { src: "/projects/interior-design-ai/modern-farmhouse-items/item3.png", alt: "Modern Farmhouse item 3" },
              { src: "/projects/interior-design-ai/modern-farmhouse-items/item4.png", alt: "Modern Farmhouse item 4" },
              { src: "/projects/interior-design-ai/modern-farmhouse-items/item5.png", alt: "Modern Farmhouse item 5" },
            ]}
            isActive={activePath === 1}
          />
        </div>
      </div>
    </div>
  );
};

export default AIGenerationFlow; 