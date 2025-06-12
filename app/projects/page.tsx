'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiLayout, FiSmartphone, FiUsers, FiTarget } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedMockup from '../components/AnimatedMockup';
import DrawingAnimation from '../components/DrawingAnimation';
import SimultaneousDrawingAnimation from '../components/SimultaneousDrawingAnimation';
import FlipCards from '../components/FlipCards';

// Animation paths for mockups
const ANIMATION_PATHS = {
  homepage: "M 20,20 L 80,20 L 80,80 L 20,80 L 20,20 Z",
  login: "M 50,20 C 65,20 80,35 80,50 C 80,65 65,80 50,80 C 35,80 20,65 20,50 C 20,35 35,20 50,20 M 50,35 C 58,35 65,42 65,50 C 65,58 58,65 50,65 C 42,65 35,58 35,50 C 35,42 42,35 50,35",
  capture: "M 20,20 L 80,20 L 80,80 L 20,80 L 20,20 M 35,35 L 65,35 L 65,65 L 35,65 L 35,35 M 50,20 L 50,35 M 20,50 L 35,50 M 65,50 L 80,50 M 50,65 L 50,80",
  results: "M 20,30 L 80,30 M 20,50 L 80,50 M 20,70 L 80,70"
};

export default function Projects() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeStyle, setActiveStyle] = useState('transitional');
  const [spotlightStep, setSpotlightStep] = useState(1);
  
  // Refs for scroll animations with proper types
  const figmaRef = useRef<HTMLDivElement>(null);
  const bedroomRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const flipcardRef = useRef<HTMLDivElement>(null);
  const designSystemRef = useRef<HTMLDivElement>(null);
  const userFlowRef = useRef<HTMLDivElement>(null);
  const aiProcessRef = useRef<HTMLDivElement>(null);
  
  // Use the custom hook for each ref
  const figmaAnimation = useScrollAnimation(figmaRef);
  const bedroomAnimation = useScrollAnimation(bedroomRef);
  const heroAnimation = useScrollAnimation(heroRef);
  const roleAnimation = useScrollAnimation(roleRef);
  const flipcardAnimation = useScrollAnimation(flipcardRef);
  const designSystemAnimation = useScrollAnimation(designSystemRef);
  const userFlowAnimation = useScrollAnimation(userFlowRef);
  const aiProcessAnimation = useScrollAnimation(aiProcessRef);

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

  // Add useEffect for spotlight animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightStep((prev) => (prev % 6) + 1);
    }, 3000); // Change spotlight every 3 seconds

    return () => clearInterval(interval);
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
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 py-24 lg:pl-64">
        {/* Project Header */}
        <header className="mb-16 px-4 sm:px-0">
          <h1 className="font-serif text-4xl mb-2">
            Interior Design AI Platform
          </h1>
          <p className="font-sans font-thin text-xl text-ebony/80 mb-12">
            AI-powered room design and visualization tool
          </p>
          
          {/* Hero Image */}
          <motion.div 
            ref={heroRef}
            style={{ opacity: heroAnimation.opacity, y: heroAnimation.y }}
            className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-ebony/5"
          >
            <Image
              src="/projects/interior-design-ai/hero-image.png"
              alt="Interior Design AI Platform hero image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </header>

        {/* Content sections */}
        <div className="space-y-24">
          <section id="overview" className="px-4 sm:px-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Overview</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">01</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                This project is an AI-powered interior design tool aimed at helping new homeowners visualize and furnish their living spaces. The platform allows users to upload a photo or layout of their home and receive fully furnished design recommendations, complete with purchasable furniture items. The goal was to make the interior design process more efficient, intuitive, and directly actionable by integrating both AI-driven recommendations and a commerce flow for purchasing items.
              </p>
              <blockquote className="border-l-2 border-olive pl-6 py-2 bg-ebony/[0.02] !font-extralight md:text-justify">
                I collaborated closely with an experienced team that included an award-winning interior designer, engineers focused on AI and computer vision, and fellow designers. My work primarily focused on user experience design across platforms, including creating mockups for both the mobile app and the web application. I also contributed to implementing and adapting the design system across responsive breakpoints.
              </blockquote>
              <p className="font-sans md:text-justify">
                The project was developed over a six-month period and is currently under an accelerator program. While not yet launched, a working prototype with interactive flows and high-fidelity visuals has been developed to communicate the concept.
              </p>
            </div>
          </section>

          {/* Role Infographic + Figma Image Combined Container */}
          <div className="relative -mx-4 sm:mx-0">
            <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-20">
                <div className="flex items-center gap-3 group">
                  <div className="text-olive group-hover:text-olive/80 transition-colors">
                    <FiLayout className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">UI/UX Design</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-olive group-hover:text-olive/80 transition-colors">
                    <FiSmartphone className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">Mobile & Web Dev</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-olive group-hover:text-olive/80 transition-colors">
                    <FiUsers className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">User Research</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-olive group-hover:text-olive/80 transition-colors">
                    <FiTarget className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">Product Mgmt</h3>
                </div>
              </div>

              {/* Figma Design Image */}
              <motion.div
                ref={figmaRef}
                style={{ opacity: figmaAnimation.opacity, y: figmaAnimation.y }}
                className="relative"
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
            </div>
          </div>

          <section id="problem-statement">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Problem Statement</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">02</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                New homeowners often struggle to furnish and design their spaces in a cohesive, functional, and aesthetically aligned manner. Working with professional interior designers can be time-consuming, expensive, and inefficient, particularly when communication breaks down during iterative design phases. This project aimed to replace that slow, linear process with a more flexible, guided, and tech-assisted experience.
              </p>

              <p className="font-sans">Through user interviews and mentor feedback, we identified several key insights:</p>

              {/* Key Insights Infographic - Vertical Layout */}
              <div className="ml-4 space-y-2 mt-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Gradual furniture acquisition process, blending new purchases with existing items
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Difficulty visualizing cohesion between existing and new furniture pieces
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Need assistance with organizing and integrating existing belongings during moves
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Target demographic (30s-50s) values practical, simple, and moderately stylish designs
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-sans md:text-justify">
                We also consulted mentors who emphasized the importance of visual clarity, clean user flows, and age-appropriate interaction design. This shifted our direction toward larger content blocks, simplified instructions, and visually rich interfaces.
              </p>

              <p className="font-sans md:text-justify">
                The project aims to bridge this gap by creating an AI-powered interior design platform that makes professional design accessible to everyone, regardless of budget or expertise.
              </p>

              {/* Flipcard Images Grid */}
              <div className="relative -mx-4 sm:mx-0">
                <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="text-olive group-hover:text-olive/80 transition-colors">
                      <FiUsers className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">User Survey Design Component</h3>
                  </div>
                  <motion.div 
                    ref={flipcardRef}
                    style={{ opacity: flipcardAnimation.opacity, y: flipcardAnimation.y }}
                    className="h-[400px] lg:h-[300px]"
                  >
                    <FlipCards />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          <section id="market-research">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Market Research</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">03</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                Most competitors in the space leverage computer vision to create "before and after" images of room designs. However, these tools often overlook critical constraints like physical layout, lighting, and existing furniture. Additionally, they rarely connect users to actual products for purchase, creating a gap between concept and execution.
              </p>

              <p className="font-sans">This project stands apart by:</p>

              <ul className="space-y-2 list-inside ml-4">
                <li className="font-sans font-extralight flex items-center space-x-6">
                  <span className="text-red text-2xl leading-none">•</span>
                  <span>Creating practical, personalized room designs based on actual room photos</span>
                </li>
                <li className="font-sans font-extralight flex items-center space-x-6">
                  <span className="text-red text-2xl leading-none">•</span>
                  <span>Offering purchasable items directly linked to the generated designs</span>
                </li>
                <li className="font-sans font-extralight flex items-center space-x-6">
                  <span className="text-red text-2xl leading-none">•</span>
                  <span>Exploring both 2D image-based AI and full 3D modeling to improve accuracy</span>
                </li>
              </ul>

              <p className="font-sans md:text-justify">
                While some companies have AR tools and AI generative models, they focus more on item-level previews than full-space furnishing. Moreover, many existing solutions fail to provide an end-to-end experience from design to shopping.
              </p>

              <p className="font-sans md:text-justify">
                We also validated demand through local interviews, focus groups, and the experience of the interior designer on the team, who had firsthand insights from working with real clients.
              </p>

              {/* Bedroom Images */}
              <div className="relative -mx-4 sm:mx-0">
                <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="text-olive group-hover:text-olive/80 transition-colors">
                      <FiTarget className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">Market Solutions</h3>
                  </div>
                  <motion.div
                    ref={bedroomRef}
                    style={{ opacity: bedroomAnimation.opacity, y: bedroomAnimation.y }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <Image
                      src="/projects/interior-design-ai/bedroom-1.jpg"
                      alt="Original bedroom design"
                      width={500}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <Image
                      src="/projects/interior-design-ai/bedroom-ai-1.jpg"
                      alt="AI generated bedroom design 1"
                      width={500}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <Image
                      src="/projects/interior-design-ai/bedroom-ai-2.jpg"
                      alt="AI generated bedroom design 2"
                      width={500}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <Image
                      src="/projects/interior-design-ai/bedroom-ai-3.jpg"
                      alt="AI generated bedroom design 3"
                      width={500}
                      height={300}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          <section id="design-system">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Design System</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">04</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                The project's design system was built by a specialized design systems expert. It includes comprehensive guidelines on branding, typography, color palettes (six core colors and their usage), and a library of reusable components such as buttons, pagination elements, and grid structures.
              </p>

              <p className="font-sans md:text-justify mb-32">
                While I was not responsible for creating the system, I applied it rigorously in my design work—especially when adapting the desktop-first system for mobile platforms. The system exists primarily in Figma and is documented with high-level visual and written guidelines to ensure consistency across screens and use cases.
              </p>

              {/* Design System Components Grid */}
              <div className="relative -mx-4 sm:mx-0">
                <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="text-olive group-hover:text-olive/80 transition-colors">
                      <FiLayout className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">Design System Components</h3>
                  </div>
                  <motion.div
                    ref={designSystemRef}
                    style={{ opacity: designSystemAnimation.opacity, y: designSystemAnimation.y }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-16"
                  >
                    {/* Typography */}
                    <div className="flex flex-col items-center">
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

                    {/* Colors */}
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#1E1E2A]"></div>
                        <div className="w-10 h-10 rounded-full bg-[#F5F5F5]"></div>
                        <div className="w-10 h-10 rounded-full bg-[#9E4F4F]"></div>
                        <div className="w-10 h-10 rounded-full bg-[#B8C4D9]"></div>
                        <div className="w-10 h-10 rounded-full bg-[#D4B483]"></div>
                        <div className="w-10 h-10 rounded-full bg-[#E8C795]"></div>
                      </div>
                    </div>

                    {/* Components */}
                    <div className="flex flex-col items-center justify-center h-full gap-3">
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
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          <section id="user-experience">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">User Experience & Interface</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">05</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                The primary user journey was carefully structured to be intuitive and accessible, particularly for users who may not be tech-savvy. The flow is as follows:
              </p>

              {/* User Flow Diagram */}
              <div className="relative -mx-4 sm:mx-0">
                <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="text-olive group-hover:text-olive/80 transition-colors">
                      <FiUsers className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">User Flow Diagram</h3>
                  </div>
                  {/* Process Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
                    {/* Step 1 */}
                    <div className="group p-6 rounded-lg transition-all duration-1000">
                      <div className="flex items-start space-x-6">
                        <span className={`font-serif text-xs transition-colors duration-1000 ${
                          spotlightStep === 1 ? 'text-olive' : 'text-olive/20'
                        }`}>01</span>
                        <div>
                          <p className={`font-sans text-sm font-extralight leading-relaxed transition-colors duration-1000 ${
                            spotlightStep === 1 ? 'text-ivory' : 'text-ivory/30'
                          }`}>
                            Define your space by specifying room types, dimensions, and floor plan arrangement.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group p-6 rounded-lg transition-all duration-1000">
                      <div className="flex items-start space-x-6">
                        <span className={`font-serif text-xs transition-colors duration-1000 ${
                          spotlightStep === 2 ? 'text-olive' : 'text-olive/20'
                        }`}>02</span>
                        <div>
                          <p className={`font-sans text-sm font-extralight leading-relaxed transition-colors duration-1000 ${
                            spotlightStep === 2 ? 'text-ivory' : 'text-ivory/30'
                          }`}>
                            Upload room photographs to capture current state, lighting, and spatial context.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group p-6 rounded-lg transition-all duration-1000">
                      <div className="flex items-start space-x-6">
                        <span className={`font-serif text-xs transition-colors duration-1000 ${
                          spotlightStep === 3 ? 'text-olive' : 'text-olive/20'
                        }`}>03</span>
                        <div>
                          <p className={`font-sans text-sm font-extralight leading-relaxed transition-colors duration-1000 ${
                            spotlightStep === 3 ? 'text-ivory' : 'text-ivory/30'
                          }`}>
                            Select your preferred interior style, color schemes, and material preferences.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="group p-6 rounded-lg transition-all duration-1000">
                      <div className="flex items-start space-x-6">
                        <span className={`font-serif text-xs transition-colors duration-1000 ${
                          spotlightStep === 4 ? 'text-olive' : 'text-olive/20'
                        }`}>04</span>
                        <div>
                          <p className={`font-sans text-sm font-extralight leading-relaxed transition-colors duration-1000 ${
                            spotlightStep === 4 ? 'text-ivory' : 'text-ivory/30'
                          }`}>
                            AI processes inputs to create personalized design concepts and visualizations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="group p-6 rounded-lg transition-all duration-1000">
                      <div className="flex items-start space-x-6">
                        <span className={`font-serif text-xs transition-colors duration-1000 ${
                          spotlightStep === 5 ? 'text-olive' : 'text-olive/20'
                        }`}>05</span>
                        <div>
                          <p className={`font-sans text-sm font-extralight leading-relaxed transition-colors duration-1000 ${
                            spotlightStep === 5 ? 'text-ivory' : 'text-ivory/30'
                          }`}>
                            Browse curated furniture selections and proceed with purchase.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="group p-6 rounded-lg transition-all duration-1000">
                      <div className="flex items-start space-x-6">
                        <span className={`font-serif text-xs transition-colors duration-1000 ${
                          spotlightStep === 6 ? 'text-olive' : 'text-olive/20'
                        }`}>→</span>
                        <div>
                          <p className={`font-sans text-sm font-extralight leading-relaxed transition-colors duration-1000 ${
                            spotlightStep === 6 ? 'text-ivory' : 'text-ivory/30'
                          }`}>
                            A seamless journey from concept to completion, transforming spaces with AI-powered design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-sans mt-12">Challenges included:</p>

              <div className="space-y-4 ml-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-olive text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Visualizing a high-impact design experience without having a fully trained AI model
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-olive text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Balancing the fixed recommendations of AI-generated results with the exploratory nature of e-commerce browsing
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-olive text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Differentiating flows between mobile (optimized for scanning and on-the-go interaction) and web (optimized for in-depth browsing and purchase decisions)
                    </p>
                  </div>
                </div>
              </div>

              {/* User Flow Images */}
              <div className="relative -mx-4 sm:mx-0">
                <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="text-olive group-hover:text-olive/80 transition-colors">
                      <FiSmartphone className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">Interface Mockups</h3>
                  </div>
                  <motion.div
                    ref={userFlowRef}
                    style={{ opacity: userFlowAnimation.opacity, y: userFlowAnimation.y }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div className="relative">
                      <Image
                        src="/projects/interior-design-ai/homepage-mockup.png"
                        alt="Homepage interface mockup"
                        width={1200}
                        height={800}
                        className="relative z-10 rounded-lg"
                      />
                      <div className="absolute inset-0 z-0">
                        <DrawingAnimation
                          pathData="M 20,20 L 80,20 L 80,80 L 20,80 L 20,20 Z"
                          delay={0}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/projects/interior-design-ai/login-mockup.png"
                        alt="Login interface mockup"
                        width={1200}
                        height={800}
                        className="relative z-10 rounded-lg"
                      />
                      <div className="absolute inset-0 z-0">
                        <DrawingAnimation
                          pathData="M 50,20 C 65,20 80,35 80,50 C 80,65 65,80 50,80 C 35,80 20,65 20,50 C 20,35 35,20 50,20 M 50,35 C 58,35 65,42 65,50 C 65,58 58,65 50,65 C 42,65 35,58 35,50 C 35,42 42,35 50,35"
                          delay={0.5}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/projects/interior-design-ai/capture-mockup.png"
                        alt="Room capture interface mockup"
                        width={1200}
                        height={800}
                        className="relative z-10 rounded-lg"
                      />
                      <div className="absolute inset-0 z-0">
                        <SimultaneousDrawingAnimation
                          paths={[
                            "M 50,20 L 80,70", // Outer right line
                            "M 50,20 L 20,70", // Outer left line
                            "M 50,30 L 70,65", // Inner right line
                            "M 50,30 L 30,65"  // Inner left line
                          ]}
                          delay={1}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/projects/interior-design-ai/results-mockup.png"
                        alt="Results and shopping interface mockup"
                        width={1200}
                        height={800}
                        className="relative z-10 rounded-lg"
                      />
                      <div className="absolute inset-0 z-0">
                        <DrawingAnimation
                          pathData="M 20,30 L 80,30 M 20,50 L 80,50 M 20,70 L 80,70"
                          delay={1.5}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          <section id="ai-integration">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">AI Integration & Technical Considerations</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">06</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                The project leverages multiple AI technologies:
              </p>

              <div className="space-y-4 ml-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Computer Vision: Reads room images to infer layout, lighting, and design opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      3D Modeling: Used to simulate realistic spatial arrangements and ensure item dimensions are consistent with physical constraints
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Generative Design Models: Provides furnishing recommendations based on design styles, layout rules, and product databases
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-sans md:text-justify">
                Each of these approaches presents trade-offs. Computer vision is faster and simpler but less precise. 3D modeling provides a more realistic experience but requires more advanced technology, including accurate 3D models of real furniture.
              </p>

              <p className="font-sans md:text-justify">
                We are currently evaluating a hybrid model that blends realism with ease-of-use, while continuing to consult domain experts to determine the best path forward. Accurate 3D data remains a bottleneck, especially when relying on product images from suppliers.
              </p>

              {/* AI Process Visualization */}
              <div className="relative -mx-4 sm:mx-0">
                <div className="bg-ebony rounded-[30px] sm:rounded-[50px] pt-20 pb-24 px-8 sm:px-12 text-ivory">
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="text-olive group-hover:text-olive/80 transition-colors">
                      <FiTarget className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ivory/80 transition-colors whitespace-nowrap">AI Style Generation</h3>
                  </div>
                  <motion.div
                    ref={aiProcessRef}
                    style={{ opacity: aiProcessAnimation.opacity, y: aiProcessAnimation.y }}
                    className="mt-16"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      {/* Input and Style Selection */}
                      <div className="flex flex-col items-center justify-center min-h-full space-y-12">
                        <div className="bg-ebony/[0.02] p-6 rounded-lg border border-ebony/5">
                          <Image
                            src="/projects/interior-design-ai/empty-room.png"
                            alt="Empty room photo"
                            width={600}
                            height={450}
                            className="rounded"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-[1px] w-8 bg-ivory/10"></div>
                          <div className="font-serif text-xs tracking-wider text-ivory/40">Living Room Selected</div>
                          <div className="h-[1px] w-8 bg-ivory/10"></div>
                        </div>

                        <div className="flex gap-3">
                          <button 
                            onClick={() => setActiveStyle('transitional')}
                            className={`font-sans text-sm font-bold uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                              activeStyle === 'transitional' 
                                ? 'bg-olive/10 border border-olive/20 text-ivory' 
                                : 'bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 text-olive/60'
                            }`}
                          >
                            Transitional
                          </button>
                          <button 
                            onClick={() => setActiveStyle('farmhouse')}
                            className={`font-sans text-sm font-bold uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                              activeStyle === 'farmhouse' 
                                ? 'bg-olive/10 border border-olive/20 text-ivory' 
                                : 'bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 text-olive/60'
                            }`}
                          >
                            Modern Farmhouse
                          </button>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div className={`bg-ivory/5 p-8 rounded-lg border transition-all duration-300 ${
                          activeStyle === 'transitional' ? 'border-olive/20' : 'border-ivory/10 opacity-50'
                        }`}>
                          <Image
                            src="/projects/interior-design-ai/results-1.png"
                            alt="Transitional style result"
                            width={1000}
                            height={750}
                            className="rounded"
                          />
                        </div>
                        <div className={`bg-ivory/5 p-8 rounded-lg border transition-all duration-300 ${
                          activeStyle === 'farmhouse' ? 'border-olive/20' : 'border-ivory/10 opacity-50'
                        }`}>
                          <Image
                            src="/projects/interior-design-ai/results-2.png"
                            alt="Modern Farmhouse style result"
                            width={1000}
                            height={750}
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          <section id="challenges">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Challenges & Learnings</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">07</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify">
                This project presented several interconnected challenges:
              </p>

              <div className="space-y-4 ml-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-olive text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Defining where and how AI fits into the user journey in a meaningful, outcome-oriented way
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-olive text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Navigating fast-moving technology trends that could outdate features in a matter of months
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-olive text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Managing the complexity of combining AI generation, user interaction, and e-commerce in a single, cohesive experience
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-sans md:text-justify mt-12">
                We made several strategic pivots during the process:
              </p>

              <div className="space-y-4 ml-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Transitioning from web-first to mobile-first due to the camera-focused nature of user interaction
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Refining the user flow based on mentor and user feedback
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Reworking visual and content design to suit older users with moderate styling preferences
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-sans md:text-justify mt-12">
                Despite the challenges, our team operated with strong communication and high agility. We consistently iterated on designs and priorities to stay aligned with our vision and stakeholder expectations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 