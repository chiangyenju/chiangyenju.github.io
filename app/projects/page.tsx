"use client";

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A brief description of the project and its significance.",
    year: "2024",
    tags: ["Design", "Development", "UI/UX"],
    link: "https://example.com",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Another elegant project showcasing different skills.",
    year: "2023",
    tags: ["Art", "Animation", "Creative"],
    link: "https://example.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="w-full max-w-4xl px-4 py-16">
        <h1 className="text-[8px] md:text-[10px] tracking-wider text-center mb-16"
          style={{
            color: "#e0e6f0",
            opacity: 0.95,
            fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
            fontWeight: 100,
            fontStyle: "italic",
            letterSpacing: "0.15em",
            lineHeight: 1.8,
            textShadow: "0 0 2px #fff, 0 0 8px #bdbdbd, 0 1px 0 #757575",
            filter: "blur(0.2px) contrast(1.2)",
          }}
        >
          Selected Works
        </h1>

        <div className="space-y-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <h2 className="text-[8px] md:text-[10px] tracking-wider"
                    style={{
                      color: "#e0e6f0",
                      opacity: hoveredProject === project.id ? 1 : 0.95,
                      fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
                      fontWeight: 100,
                      fontStyle: "italic",
                      letterSpacing: "0.15em",
                      lineHeight: 1.8,
                      textShadow: "0 0 2px #fff, 0 0 8px #bdbdbd, 0 1px 0 #757575",
                      filter: "blur(0.2px) contrast(1.2)",
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-[8px] md:text-[10px] mt-2"
                    style={{
                      color: "#e0e6f0",
                      opacity: 0.7,
                      fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
                      fontWeight: 100,
                      fontStyle: "italic",
                      letterSpacing: "0.15em",
                      lineHeight: 1.8,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[8px] md:text-[10px]"
                    style={{
                      color: "#e0e6f0",
                      opacity: 0.5,
                      fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
                      fontWeight: 100,
                      fontStyle: "italic",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {project.year}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[8px] md:text-[10px] px-2 py-1"
                        style={{
                          color: "#e0e6f0",
                          opacity: 0.5,
                          fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
                          fontWeight: 100,
                          fontStyle: "italic",
                          letterSpacing: "0.15em",
                          border: "1px solid rgba(224, 230, 240, 0.2)",
                          borderRadius: "2px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 opacity-0"
                  aria-label={`View ${project.title}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .group:hover {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
} 