'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiLayout, FiSmartphone, FiUsers, FiTarget } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Projects() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeStyle, setActiveStyle] = useState('transitional');
  const figmaRef = useRef(null);
  const bedroomRef = useRef(null);
  
  const { scrollYProgress: figmaScrollProgress } = useScroll({
    target: figmaRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: bedroomScrollProgress } = useScroll({
    target: bedroomRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(
    figmaScrollProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    figmaScrollProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, -50]
  );

  const bedroomOpacity = useTransform(
    bedroomScrollProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const bedroomY = useTransform(
    bedroomScrollProgress,
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
              <p className="font-sans md:text-justify hyphens-auto">
                This project is an AI-powered interior design tool aimed at helping new homeowners visualize and furnish their living spaces. The platform allows users to upload a photo or layout of their home and receive fully furnished design recommendations, complete with purchasable furniture items. The goal was to make the interior design process more efficient, intuitive, and directly actionable by integrating both AI-driven recommendations and a commerce flow for purchasing items.
              </p>
              <blockquote className="border-l-2 border-olive pl-6 py-2 bg-ebony/[0.02] !font-extralight md:text-justify hyphens-auto">
                I collaborated closely with an experienced team that included an award-winning interior designer, engineers focused on AI and computer vision, and fellow designers. My work primarily focused on user experience design across platforms, including creating mockups for both the mobile app and the web application. I also contributed to implementing and adapting the design system across responsive breakpoints.
              </blockquote>
              <p className="font-sans md:text-justify hyphens-auto">
                The project was developed over a six-month period and is currently under an accelerator program. While not yet launched, a working prototype with interactive flows and high-fidelity visuals has been developed to communicate the concept.
              </p>
            </div>
          </section>

          {/* Role Infographic */}
          <div className="py-3">
            <div className="relative p-6 bg-ebony/[0.02] rounded-2xl border border-ebony/5">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-red/20 rounded-tl-2xl -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-red/20 rounded-tr-2xl translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-red/20 rounded-bl-2xl -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-red/20 rounded-br-2xl translate-x-1 translate-y-1"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiLayout className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">UI/UX Design</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiSmartphone className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">Mobile & Web Dev</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiUsers className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">User Research</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiTarget className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold uppercase text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">Product Mgmt</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Figma Design Image */}
          <motion.div
            ref={figmaRef}
            style={{ opacity, y }}
            className="mt-4"
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Problem Statement</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">02</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify hyphens-auto">
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

              <p className="font-sans md:text-justify hyphens-auto">
                We also consulted mentors who emphasized the importance of visual clarity, clean user flows, and age-appropriate interaction design. This shifted our direction toward larger content blocks, simplified instructions, and visually rich interfaces.
              </p>

              <p className="font-sans md:text-justify hyphens-auto">
                The project aims to bridge this gap by creating an AI-powered interior design platform that makes professional design accessible to everyone, regardless of budget or expertise.
              </p>

              {/* Flipcard Images Grid */}
              <div className="mt-16 bg-ebony/[0.02] p-8 rounded-lg border border-ebony/5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Image
                    src="/projects/interior-design-ai/flipcard-1.png"
                    alt="Interior Design AI Flipcard 1"
                    width={200}
                    height={120}
                    className="rounded shadow-sm w-full"
                  />
                  <Image
                    src="/projects/interior-design-ai/flipcard-2.png"
                    alt="Interior Design AI Flipcard 2"
                    width={200}
                    height={120}
                    className="rounded shadow-sm w-full"
                  />
                  <Image
                    src="/projects/interior-design-ai/flipcard-3.png"
                    alt="Interior Design AI Flipcard 3"
                    width={200}
                    height={120}
                    className="rounded shadow-sm w-full"
                  />
                  <Image
                    src="/projects/interior-design-ai/flipcard-4.png"
                    alt="Interior Design AI Flipcard 4"
                    width={200}
                    height={120}
                    className="rounded shadow-sm w-full"
                  />
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
              <p className="font-sans md:text-justify hyphens-auto">
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

              <p className="font-sans md:text-justify hyphens-auto">
                While some companies have AR tools and AI generative models, they focus more on item-level previews than full-space furnishing. Moreover, many existing solutions fail to provide an end-to-end experience from design to shopping.
              </p>

              <p className="font-sans md:text-justify hyphens-auto">
                We also validated demand through local interviews, focus groups, and the experience of the interior designer on the team, who had firsthand insights from working with real clients.
              </p>

              {/* Bedroom Images */}
              <motion.div
                ref={bedroomRef}
                style={{ opacity: bedroomOpacity, y: bedroomY }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
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
          </section>
          <section id="design-system">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Design System</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">04</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify hyphens-auto">
                The project&apos;s design system was built by a specialized design systems expert. It includes comprehensive guidelines on branding, typography, color palettes (six core colors and their usage), and a library of reusable components such as buttons, pagination elements, and grid structures.
              </p>

              <p className="font-sans md:text-justify hyphens-auto mb-32">
                While I was not responsible for creating the system, I applied it rigorously in my design work—especially when adapting the desktop-first system for mobile platforms. The system exists primarily in Figma and is documented with high-level visual and written guidelines to ensure consistency across screens and use cases.
              </p>

              {/* Design System Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Typography */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-3 mb-10">
                    <div className="h-[1px] w-12 bg-ebony/20"></div>
                    <div className="font-serif text-xs tracking-wider">Heading Style</div>
                    <div className="h-[1px] w-12 bg-ebony/20"></div>
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
                    <div className="h-[1px] w-12 bg-ebony/20"></div>
                    <div className="font-serif text-xs tracking-wider">Body Text</div>
                    <div className="h-[1px] w-12 bg-ebony/20"></div>
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
              </div>
            </div>
          </section>
          <section id="user-experience">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">User Experience & Interface</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">05</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify hyphens-auto">
                The primary user journey was carefully structured to be intuitive and accessible, particularly for users who may not be tech-savvy. The flow is as follows:
              </p>

              {/* Elegant Metro Grid */}
              <div className="relative py-12">
                <div className="max-w-5xl mx-auto">
                  {/* Process Grid */}
                  <div className="grid grid-cols-2 gap-12">
                    {/* Step 1 */}
                    <div className="group">
                      <div className="flex items-start space-x-6">
                        <span className="font-serif text-xs text-red/40">01</span>
                        <div>
                          <p className="font-sans text-sm font-extralight leading-relaxed">
                            Define your space by specifying room types, dimensions, and floor plan arrangement.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 h-px bg-gradient-to-r from-red/10 to-transparent"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="group">
                      <div className="flex items-start space-x-6">
                        <span className="font-serif text-xs text-red/40">02</span>
                        <div>
                          <p className="font-sans text-sm font-extralight leading-relaxed">
                            Upload room photographs to capture current state, lighting, and spatial context.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 h-px bg-gradient-to-r from-red/10 to-transparent"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="group">
                      <div className="flex items-start space-x-6">
                        <span className="font-serif text-xs text-red/40">03</span>
                        <div>
                          <p className="font-sans text-sm font-extralight leading-relaxed">
                            Select your preferred interior style, color schemes, and material preferences.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 h-px bg-gradient-to-r from-red/10 to-transparent"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="group">
                      <div className="flex items-start space-x-6">
                        <span className="font-serif text-xs text-red/40">04</span>
                        <div>
                          <p className="font-sans text-sm font-extralight leading-relaxed">
                            AI processes inputs to create personalized design concepts and visualizations.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 h-px bg-gradient-to-r from-red/10 to-transparent"></div>
                    </div>

                    {/* Step 5 */}
                    <div className="group">
                      <div className="flex items-start space-x-6">
                        <span className="font-serif text-xs text-red/40">05</span>
                        <div>
                          <p className="font-sans text-sm font-extralight leading-relaxed">
                            Browse curated furniture selections and proceed with purchase.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 h-px bg-gradient-to-r from-red/10 to-transparent"></div>
                    </div>

                    {/* Summary */}
                    <div className="group">
                      <div className="flex items-start space-x-6">
                        <span className="font-serif text-xs text-red/40">→</span>
                        <div>
                          <p className="font-sans text-sm font-extralight leading-relaxed text-red/40">
                            A seamless journey from concept to completion, transforming spaces with AI-powered design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-sans md:text-justify hyphens-auto">
                The goal was to make the interface feel like a guided, step-by-step walkthrough rather than an overwhelming dashboard. Instead of large tutorial videos or dense blocks of text, micro-guidance is built into each step.
              </p>

              <p className="font-sans">Challenges included:</p>

              <div className="space-y-4 ml-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Visualizing a high-impact design experience without having a fully trained AI model
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Balancing the fixed recommendations of AI-generated results with the exploratory nature of e-commerce browsing
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Differentiating flows between mobile (optimized for scanning and on-the-go interaction) and web (optimized for in-depth browsing and purchase decisions)
                    </p>
                  </div>
                </div>
              </div>

              {/* User Flow Images */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Image
                  src="/projects/interior-design-ai/homepage-mockup.png"
                  alt="Homepage interface mockup"
                  width={1200}
                  height={800}
                  className="rounded-lg"
                />
                <Image
                  src="/projects/interior-design-ai/login-mockup.png"
                  alt="Login interface mockup"
                  width={1200}
                  height={800}
                  className="rounded-lg"
                />
                <Image
                  src="/projects/interior-design-ai/capture-mockup.png"
                  alt="Room capture interface mockup"
                  width={1200}
                  height={800}
                  className="rounded-lg"
                />
                <Image
                  src="/projects/interior-design-ai/results-mockup.png"
                  alt="Results and shopping interface mockup"
                  width={1200}
                  height={800}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>
          <section id="ai-integration">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">AI Integration & Technical Considerations</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">06</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify hyphens-auto">
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

              <p className="font-sans md:text-justify hyphens-auto">
                Each of these approaches presents trade-offs. Computer vision is faster and simpler but less precise. 3D modeling provides a more realistic experience but requires more advanced technology, including accurate 3D models of real furniture.
              </p>

              <p className="font-sans md:text-justify hyphens-auto">
                We are currently evaluating a hybrid model that blends realism with ease-of-use, while continuing to consult domain experts to determine the best path forward. Accurate 3D data remains a bottleneck, especially when relying on product images from suppliers.
              </p>

              {/* AI Process Visualization */}
              <div className="mt-16">
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
                      <div className="h-[1px] w-8 bg-ebony/10"></div>
                      <div className="font-serif text-xs tracking-wider text-ebony/40">Living Room Selected</div>
                      <div className="h-[1px] w-8 bg-ebony/10"></div>
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => setActiveStyle('transitional')}
                        className={`font-sans text-sm font-bold uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                          activeStyle === 'transitional' 
                            ? 'bg-red/5 border border-red/10 text-red' 
                            : 'bg-ebony/[0.02] border border-ebony/5 hover:bg-ebony/[0.04]'
                        }`}
                      >
                        Transitional
                      </button>
                      <button 
                        onClick={() => setActiveStyle('farmhouse')}
                        className={`font-sans text-sm font-bold uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                          activeStyle === 'farmhouse' 
                            ? 'bg-red/5 border border-red/10 text-red' 
                            : 'bg-ebony/[0.02] border border-ebony/5 hover:bg-ebony/[0.04]'
                        }`}
                      >
                        Modern Farmhouse
                      </button>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-8">
                    <div className={`bg-ebony/[0.02] p-8 rounded-lg border transition-all duration-300 ${
                      activeStyle === 'transitional' ? 'border-red/10' : 'border-ebony/5 opacity-50'
                    }`}>
                      <Image
                        src="/projects/interior-design-ai/results-1.png"
                        alt="Transitional style result"
                        width={1000}
                        height={750}
                        className="rounded"
                      />
                    </div>
                    <div className={`bg-ebony/[0.02] p-8 rounded-lg border transition-all duration-300 ${
                      activeStyle === 'farmhouse' ? 'border-red/10' : 'border-ebony/5 opacity-50'
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
              </div>
            </div>
          </section>
          <section id="challenges">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Challenges & Learnings</h2>
              <div className="font-serif text-8xl text-ebony/[0.03] leading-none select-none">07</div>
            </div>
            <div className="space-y-6">
              <p className="font-sans md:text-justify hyphens-auto">
                This project presented several interconnected challenges:
              </p>

              <div className="space-y-4 ml-4">
                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Defining where and how AI fits into the user journey in a meaningful, outcome-oriented way
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Navigating fast-moving technology trends that could outdate features in a matter of months
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <span className="text-red text-2xl leading-none">•</span>
                  <div>
                    <p className="font-sans font-extralight">
                      Managing the complexity of combining AI generation, user interaction, and e-commerce in a single, cohesive experience
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-sans md:text-justify hyphens-auto mt-12">
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

              <p className="font-sans md:text-justify hyphens-auto mt-12">
                Despite the challenges, our team operated with strong communication and high agility. We consistently iterated on designs and priorities to stay aligned with our vision and stakeholder expectations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 