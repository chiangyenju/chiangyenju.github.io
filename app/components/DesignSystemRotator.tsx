"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ROTATE_INTERVAL = 3000;
const FADE_IN_DURATION = 2000;
const FADE_OUT_DURATION = 500;

const typography = (
  <div className="flex flex-col items-center justify-center h-72">
    <div className="flex items-center space-x-3 mb-10">
      <div className="h-[1px] w-12 bg-ivory/20"></div>
      <div className="font-serif text-xs tracking-wider">Heading Style</div>
      <div className="h-[1px] w-12 bg-ivory/20"></div>
    </div>
    <div className="mb-10">
      <Image
        src="/projects/interior-design-ai/logo-2.png"
        alt="Typography example"
        width={250}
        height={167}
      />
    </div>
    <div className="flex items-center space-x-3">
      <div className="h-[1px] w-12 bg-ivory/20"></div>
      <div className="font-serif text-xs tracking-wider">Body Text</div>
      <div className="h-[1px] w-12 bg-ivory/20"></div>
    </div>
  </div>
);

const colors = (
  <div className="flex flex-col items-center justify-center h-72">
    <div className="grid grid-cols-3 gap-3">
      <div className="w-10 h-10 rounded-full bg-[#1E1E2A]"></div>
      <div className="w-10 h-10 rounded-full bg-[#F5F5F5]"></div>
      <div className="w-10 h-10 rounded-full bg-[#9E4F4F]"></div>
      <div className="w-10 h-10 rounded-full bg-[#B8C4D9]"></div>
      <div className="w-10 h-10 rounded-full bg-[#D4B483]"></div>
      <div className="w-10 h-10 rounded-full bg-[#E8C795]"></div>
    </div>
  </div>
);

const components = (
  <div className="flex flex-col items-center justify-center h-72 gap-3">
    <Image
      src="/projects/interior-design-ai/back-button.png"
      alt="Back button component"
      width={100}
      height={40}
      className="h-10 w-auto"
    />
    <Image
      src="/projects/interior-design-ai/next-button.png"
      alt="Next button component"
      width={100}
      height={40}
      className="h-10 w-auto"
    />
  </div>
);

const elements = [typography, colors, components];

const DesignSystemRotator = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % elements.length);
        setFade(true);
      }, FADE_OUT_DURATION);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-80">
      <div
        style={{
          transition: `opacity ${fade ? FADE_IN_DURATION : FADE_OUT_DURATION}ms`,
          opacity: fade ? 1 : 0,
        }}
        className="w-full flex items-center justify-center"
      >
        {elements[index]}
      </div>
    </div>
  );
};

export default DesignSystemRotator; 