'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiLayout, FiSmartphone, FiUsers, FiTarget } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Projects() {
  const [activeSection, setActiveSection] = useState('overview');
  const figmaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: figmaRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, -50]
  );

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

        {/* Content sections */}
        <div className="space-y-24">
          <section id="overview">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Overview</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">01</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-justify hyphens-auto">
                This project is an AI-powered interior design tool aimed at helping new homeowners visualize and furnish their living spaces. The platform allows users to upload a photo or layout of their home and receive fully furnished design recommendations, complete with purchasable furniture items. The goal was to make the interior design process more efficient, intuitive, and directly actionable by integrating both AI-driven recommendations and a commerce flow for purchasing items.
              </p>
              <blockquote className="border-l-2 border-olive pl-6 py-2 bg-ebony/[0.02] !font-extralight text-justify hyphens-auto">
                I collaborated closely with an experienced team that included an award-winning interior designer, engineers focused on AI and computer vision, and fellow designers. My work primarily focused on user experience design across platforms, including creating mockups for both the mobile app and the web application. I also contributed to implementing and adapting the design system across responsive breakpoints.
              </blockquote>
              <p className="font-sans text-justify hyphens-auto">
                The project was developed over a six-month period and is currently under an accelerator program. While not yet launched, a working prototype with interactive flows and high-fidelity visuals has been developed to communicate the concept.
              </p>
            </div>
          </section>

          {/* Role Infographic */}
          <div className="py-4 flex flex-wrap justify-center gap-x-12 gap-y-3">
            <div className="flex items-center gap-2 group">
              <div className="text-red group-hover:text-red/80 transition-colors">
                <FiLayout className="w-3.5 h-3.5" />
              </div>
              <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">UI/UX Design</h3>
            </div>

            <div className="flex items-center gap-2 group">
              <div className="text-red group-hover:text-red/80 transition-colors">
                <FiSmartphone className="w-3.5 h-3.5" />
              </div>
              <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">Mobile & Web Development</h3>
            </div>

            <div className="flex items-center gap-2 group">
              <div className="text-red group-hover:text-red/80 transition-colors">
                <FiUsers className="w-3.5 h-3.5" />
              </div>
              <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">User Research</h3>
            </div>

            <div className="flex items-center gap-2 group">
              <div className="text-red group-hover:text-red/80 transition-colors">
                <FiTarget className="w-3.5 h-3.5" />
              </div>
              <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">Product Management</h3>
            </div>
          </div>

          {/* Figma Design Image */}
          <motion.div
            ref={figmaRef}
            style={{ opacity, y }}
            className="mt-16"
          >
            <Image
              src="/projects/interior-design-ai/figma-image.png"
              alt="Figma design process and components"
              width={2000}
              height={1200}
              className="w-full rounded-lg"
              priority
            />
          </motion.div>

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