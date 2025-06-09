'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiLayout, FiSmartphone, FiUsers, FiTarget } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Projects() {
  const [activeSection, setActiveSection] = useState('overview');
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
          <div className="py-12">
            <div className="relative p-8 bg-ebony/[0.02] rounded-2xl border border-ebony/5">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-red/20 rounded-tl-2xl -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-red/20 rounded-tr-2xl translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-red/20 rounded-bl-2xl -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-red/20 rounded-br-2xl translate-x-1 translate-y-1"></div>
              
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiLayout className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">UI/UX Design</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiSmartphone className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">Mobile & Web Development</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiUsers className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">User Research</h3>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="text-red group-hover:text-red/80 transition-colors">
                    <FiTarget className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm group-hover:text-ebony/80 transition-colors whitespace-nowrap">Product Management</h3>
                </div>
              </div>
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

              <p className="font-sans md:text-justify hyphens-auto">
                While I was not responsible for creating the system, I applied it rigorously in my design work—especially when adapting the desktop-first system for mobile platforms. The system exists primarily in Figma and is documented with high-level visual and written guidelines to ensure consistency across screens and use cases.
              </p>

              {/* Design System Components Grid */}
              <div className="mt-24 space-y-32">
                <div className="space-y-3">
                  <div className="text-red text-sm font-serif">Typography</div>
                  <div className="flex flex-col items-center space-y-8">
                    <div className="flex items-center space-x-3">
                      <div className="h-[1px] w-12 bg-ebony/20"></div>
                      <div className="font-serif text-xs tracking-wider">Heading Style</div>
                      <div className="h-[1px] w-12 bg-ebony/20"></div>
                    </div>
                    <div>
                      <Image
                        src="/projects/interior-design-ai/logo-2.png"
                        alt="Typography example"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-[1px] w-12 bg-ebony/20"></div>
                      <div className="font-serif text-xs tracking-wider">Body Text</div>
                      <div className="h-[1px] w-12 bg-ebony/20"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-red text-sm font-serif">Colors</div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-[#1E1E2A]"></div>
                      <div className="w-10 h-10 rounded-full bg-[#F5F5F5]"></div>
                      <div className="w-10 h-10 rounded-full bg-[#9E4F4F]"></div>
                      <div className="w-10 h-10 rounded-full bg-[#B8C4D9]"></div>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#D4B483] absolute -top-2 left-0"></div>
                        <div className="w-10 h-10 rounded-full bg-[#E8C795]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-red text-sm font-serif">Components</div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-8">
                      <Image
                        src="/projects/interior-design-ai/back-button.png"
                        alt="Back button component"
                        width={120}
                        height={48}
                        className="h-12 w-auto"
                      />
                      <Image
                        src="/projects/interior-design-ai/next-button.png"
                        alt="Next button component"
                        width={120}
                        height={48}
                        className="h-12 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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