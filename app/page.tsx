import { FiLinkedin } from 'react-icons/fi';
import { FaSoundcloud } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
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
            <p className="font-sans font-thin text-sm sm:text-base">My name is Andrew Chiang.</p>
          </div>
          <h1 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl">I enjoy creating things.</h1>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/chiangyenju/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ebony/60 hover:text-olive transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://soundcloud.com/chiangyenju" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ebony/60 hover:text-olive transition-colors"
            aria-label="SoundCloud Profile"
          >
            <FaSoundcloud className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
} 