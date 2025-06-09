'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [activeSection, setActiveSection] = useState('overview');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better trigger point

      sections.forEach((section) => {
        const element = section as HTMLElement;
        if (element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-ivory">
      {/* Fixed Sidebar Navigation */}
      <nav className="fixed top-32 left-8 w-56 hidden lg:block">
        <div className="font-sans font-extrabold text-xs uppercase tracking-wider text-ebony mb-6">
          Interior Design AI Platform
        </div>
        <ul className="space-y-3 border-l border-ebony/10 pl-4">
          <li>
            <a 
              href="#overview" 
              className={`font-sans font-bold text-xs ${activeSection === 'overview' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              Overview
            </a>
          </li>
          <li>
            <a 
              href="#problem-statement" 
              className={`font-sans font-bold text-xs ${activeSection === 'problem-statement' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              Problem Statement
            </a>
          </li>
          <li>
            <a 
              href="#market-research" 
              className={`font-sans font-bold text-xs ${activeSection === 'market-research' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              Market Research
            </a>
          </li>
          <li>
            <a 
              href="#design-system" 
              className={`font-sans font-bold text-xs ${activeSection === 'design-system' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              Design System
            </a>
          </li>
          <li>
            <a 
              href="#user-experience" 
              className={`font-sans font-bold text-xs ${activeSection === 'user-experience' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              User Experience & Interface
            </a>
          </li>
          <li>
            <a 
              href="#ai-integration" 
              className={`font-sans font-bold text-xs ${activeSection === 'ai-integration' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              AI Integration & Technical Considerations
            </a>
          </li>
          <li>
            <a 
              href="#challenges" 
              className={`font-sans font-bold text-xs ${activeSection === 'challenges' ? 'text-olive' : 'text-ebony/60 hover:text-olive'} transition-colors`}
            >
              Challenges & Learnings
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:pl-64">
        {/* Project Header */}
        <header className="mb-16">
          <h1 className="font-serif text-4xl mb-2">Interior Design AI Platform</h1>
          <p className="font-sans font-thin text-xl text-ebony/80 mb-12">AI-powered room design and visualization tool</p>
          
          {/* Hero Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-ebony/5">
            <Image
              src="/projects/interior-design-ai/hero-image.png"
              alt="Interior Design AI Platform hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Content sections will be added here */}
        <div className="space-y-24">
          <section id="overview">
            {/* Content will go here */}
          </section>
          <section id="problem-statement">
            {/* Content will go here */}
          </section>
          <section id="market-research">
            {/* Content will go here */}
          </section>
          <section id="design-system">
            {/* Content will go here */}
          </section>
          <section id="user-experience">
            {/* Content will go here */}
          </section>
          <section id="ai-integration">
            {/* Content will go here */}
          </section>
          <section id="challenges">
            {/* Content will go here */}
          </section>
        </div>
      </div>
    </main>
  );
} 