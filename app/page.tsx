'use client';

import { FiLinkedin } from 'react-icons/fi';
import { FaSoundcloud } from 'react-icons/fa';
import Image from 'next/image';
import TypewriterText from './components/TypewriterText';
import TypewriterIcon from './components/TypewriterIcon';
import { useState } from 'react';

export default function Home() {
  const [firstLineComplete, setFirstLineComplete] = useState(false);
  const [secondLineComplete, setSecondLineComplete] = useState(false);
  const [firstLineContent, setFirstLineContent] = useState<string | null>(null);
  const [secondLineContent, setSecondLineContent] = useState<string | null>(null);
  
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col justify-start pt-[20vh]">
      <div className="flex flex-col items-center px-4 space-y-16">
        <div className="text-center space-y-3">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-ebony/10">
              <Image
                src="/images/profile.jpg"
                alt="Andrew Chiang profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div style={{ minHeight: '1.5rem' }}>
              {!firstLineComplete ? (
                <TypewriterText 
                  text="My name is Andrew Chiang."
                  className="font-sans font-thin text-sm sm:text-base"
                  delay={500}
                  speed={0.08}
                  onComplete={() => {
                    setFirstLineContent("My name is Andrew Chiang.");
                    setFirstLineComplete(true);
                  }}
                />
              ) : (
                <p className="font-sans font-thin text-sm sm:text-base">
                  {firstLineContent}
                </p>
              )}
            </div>
          </div>
          <div style={{ minHeight: '2.5rem' }}>
            {firstLineComplete && !secondLineComplete ? (
              <TypewriterText 
                text="I enjoy creating things."
                className="font-serif font-bold text-xl sm:text-2xl md:text-3xl"
                delay={200}
                speed={0.1}
                onComplete={() => {
                  setSecondLineContent("I enjoy creating things.");
                  setSecondLineComplete(true);
                }}
              />
            ) : secondLineContent && (
              <p className="font-serif font-bold text-xl sm:text-2xl md:text-3xl">
                {secondLineContent}
              </p>
            )}
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-8">
          <div className="w-4 h-4 sm:w-5 sm:h-5">
            <TypewriterIcon 
              href="https://www.linkedin.com/in/chiangyenju/"
              delay={secondLineComplete ? 500 : 99999}
              ariaLabel="LinkedIn Profile"
              speed={0.3}
            >
              <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </TypewriterIcon>
          </div>
          <div className="w-4 h-4 sm:w-5 sm:h-5">
            <TypewriterIcon 
              href="https://soundcloud.com/chiangyenju"
              delay={secondLineComplete ? 1000 : 99999}
              ariaLabel="SoundCloud Profile"
              speed={0.3}
            >
              <FaSoundcloud className="w-4 h-4 sm:w-5 sm:h-5" />
            </TypewriterIcon>
          </div>
        </div>
      </div>
    </div>
  );
} 