"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  profileImage: string;
  images: string[];
  tags: string[];
}

// Define different projects for the cover flow
const projects: Project[] = [
  {
    id: "the-one-prime",
    name: "The One Prime",
    description: "Flexible Book Cover Design",
    longDescription: "Flexible book cover with a refined nature-inspired design, offering stylish protection for your favorite reads.",
    profileImage: "/projects/the-one-prime/optimized_the-one-prime-logo.jpg",
    images: [
      "/projects/the-one-prime/optimized_1BookCover.jpg",
      "/projects/the-one-prime/optimized_1OUTER-05.jpg", 
      "/projects/the-one-prime/optimized_bookcover-package-mockup.jpg",
      "/projects/the-one-prime/optimized_2BookCover.jpg",
      "/projects/the-one-prime/optimized_2OUTER-05.jpg",
      "/projects/the-one-prime/optimized_3BookCover.jpg",
      "/projects/the-one-prime/optimized_3OUTER-05.jpg",
      "/projects/the-one-prime/optimized_4BookCover.jpg",
      "/projects/the-one-prime/optimized_4OUTER-05.jpg",
      "/projects/the-one-prime/optimized_5BookCover.jpg",
      "/projects/the-one-prime/optimized_5OUTER-05.jpg",
    ],
    tags: ["stretchable", "washable", "non-adhesive"]
  },
  {
    id: "fruit",
    name: "Premium Fruit Collection",
    description: "Rare, premium Elegant Festival Gifting",
    longDescription: "Rare, premium fruits—perfect for elegant festival gifting and farm-fresh experiences.",
    profileImage: "/projects/fruit/optimized_logo_high_res.png",
    images: [
      "/projects/fruit/optimized_giftbox.jpg"
    ],
    tags: ["premium-graded", "farm-fresh", "gift-ready"]
  },
  {
    id: "project-three", 
    name: "Project Three",
    description: "Coming Soon",
    longDescription: "Another innovative project coming soon. More details will be available shortly.",
    profileImage: "/projects/the-one-prime/optimized_the-one-prime-logo.jpg",
    images: [],
    tags: []
  }
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="min-h-screen w-full bg-black">
      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Hero Section - Personal Introduction First */}
        <div className="text-center mt-32 mb-20">
          
          {/* Personal Introduction */}
          <div className="max-w-3xl mx-auto space-y-16">
            <p 
              className="text-lg text-white/70" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              My name is{' '}
              <span
                style={{
                  color: 'white',
                  fontWeight: '300'
                }}
              >
                Yen Ju Andrew Chiang
              </span>
              .
            </p>
            
            <p 
              className="text-6xl text-white/70" 
              style={{ 
                fontFamily: 'Georgia, serif',
                lineHeight: '1.2',
                letterSpacing: '0.01em',
                fontWeight: '300'
              }}
            >
              I enjoy creating things.
            </p>
            
            <p 
              className="text-lg text-white/70" 
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                lineHeight: '1.4',
                letterSpacing: '0.01em',
                fontWeight: '200'
              }}
            >
              <Link
                href="/projects"
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-gray-100/10 to-gray-300/10 hover:from-gray-100/20 hover:to-gray-300/20 transition-all duration-300"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  fontSize: '0.75rem',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
                }}
              >
                mobile application
              </Link>
              {' '}
              <Link
                href="/projects"
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-gray-100/10 to-gray-300/10 hover:from-gray-100/20 hover:to-gray-300/20 transition-all duration-300"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  fontSize: '0.75rem',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
                }}
              >
                web interface
              </Link>
              {' '}
              <Link
                href="/projects"
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-gray-100/10 to-gray-300/10 hover:from-gray-100/20 hover:to-gray-300/20 transition-all duration-300"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  fontSize: '0.75rem',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
                }}
              >
                physical product
              </Link>
              {' '}
              <Link
                href="/music"
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-gray-100/10 to-gray-300/10 hover:from-gray-100/20 hover:to-gray-300/20 transition-all duration-300"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  fontSize: '0.75rem',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
                }}
              >
                EDM music
              </Link>
              {' '}
              <Link
                href="/sandbox"
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-gray-100/10 to-gray-300/10 hover:from-gray-100/20 hover:to-gray-300/20 transition-all duration-300"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  fontSize: '0.75rem',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
                }}
              >
                visual design
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Project Summaries */}
      <div className="max-w-3xl mx-auto space-y-20 mt-24">
        {projects.map((project) => (
          <div key={project.id} className="text-center">
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 300,
                letterSpacing: '0.01em',
                color: 'white',
                fontSize: '2rem',
                marginBottom: '0.5em',
              }}
            >
              {project.name}
            </h2>
            <p className="text-white/70 mb-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 200, fontSize: '1.1rem' }}>{project.description}</p>
            <p className="text-white/50 mb-4" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 200, fontSize: '1rem' }}>{project.longDescription}</p>
            {/* Only render images if they exist */}
            {project.images.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {project.images.map((img, idx) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`${project.name} image ${idx + 1}`}
                    width={320}
                    height={220}
                    className="rounded-xl object-cover"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
            {/* Render tags with more spacing if they exist */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mt-6 mb-2" style={{ gap: '1.5rem' }}>
                {project.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-xs text-white/60 bg-white/5 rounded-full border border-white/10"
                    style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 300, margin: '0 0.5rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CSS Animation for Silver Glowing Dot */}
      <style jsx>{`
        @keyframes silverGlow {
          0% { 
            transform: translateY(0px);
            opacity: 0.7;
            box-shadow: 0 0 8px rgba(229, 231, 235, 0.6), 0 0 16px rgba(156, 163, 175, 0.4), 0 0 24px rgba(107, 116, 128, 0.2);
          }
          50% { 
            transform: translateY(-8px);
            opacity: 1;
            box-shadow: 0 0 12px rgba(229, 231, 235, 0.8), 0 0 24px rgba(156, 163, 175, 0.6), 0 0 36px rgba(107, 116, 128, 0.4);
          }
          100% { 
            transform: translateY(0px);
            opacity: 0.7;
            box-shadow: 0 0 8px rgba(229, 231, 235, 0.6), 0 0 16px rgba(156, 163, 175, 0.4), 0 0 24px rgba(107, 116, 128, 0.2);
          }
        }
      `}</style>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-12 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1400}
              height={1000}
              className="object-contain max-h-[85vh] max-w-full"
            />
            <button
              className="absolute -top-6 -right-6 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 text-xl font-light transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 