"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  description: string;
  image?: string;
  figmaEmbed?: string;
  link?: string;
  type: 'image' | 'figma';
}

const projects: Project[] = [
  {
    id: "1",
    description: "Modern design system and web application",
    image: "/projects/project-alpha.jpg", // Add your image here
    link: "https://example.com",
    type: "image",
  },
  {
    id: "2",
    description: "User flow and micro-interactions",
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    type: "figma",
  },
  {
    id: "3",
    description: "Typography-focused with subtle animations",
    image: "/projects/portfolio.jpg", // Add your image here
    link: "https://example.com",
    type: "image",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen w-full bg-black">
      <div className="max-w-5xl mx-auto px-6 pt-64 pb-20">
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Project Visual */}
              <div className="relative">
                {project.type === 'image' && project.image && (
                  <div 
                    className="relative aspect-[3/2] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.description}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      style={{
                        opacity: 0.85,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                
                {project.type === 'figma' && project.figmaEmbed && (
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <iframe
                      src={project.figmaEmbed}
                      className="w-full h-full"
                      allowFullScreen
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        background: "rgba(255, 255, 255, 0.02)",
                      }}
                    />
                  </div>
                )}

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-end justify-between">
                    <p className="text-xs opacity-80 leading-relaxed flex-1"
                      style={{
                        color: "#e0e6f0",
                        lineHeight: 1.4,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs opacity-50 hover:opacity-100 transition-opacity ml-3"
                        style={{
                          color: "#e0e6f0",
                          letterSpacing: "0.05em",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for expanded images */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            {projects.find(p => p.id === selectedProject)?.image && (
              <Image
                src={projects.find(p => p.id === selectedProject)!.image!}
                alt={projects.find(p => p.id === selectedProject)!.description}
                width={1400}
                height={1000}
                className="object-contain max-h-[90vh] max-w-full"
              />
            )}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl font-light"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 