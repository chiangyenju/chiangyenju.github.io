"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FigmaProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'mobile' | 'web' | 'design-system';
  tags: string[];
  hero: string;
  problem: string;
  solution: string;
  outcome: string;
  typography: {
    title: string;
    images: string[];
  };
  colorPalette: {
    title: string;
    images: string[];
  };
  userFlow: {
    title: string;
    description: string;
    images: string[];
  };
  screens: string[];
  components?: string[];
  physicalProducts?: {
    elasticBookCover: {
      title: string;
      description: string;
      images: string[];
      tags: string[];
    };
    premiumFruit: {
      title: string;
      description: string;
      images: string[];
      tags: string[];
    };
  };
}

// Table of Contents structure for each project
const projectSections = [
  { id: 'case-study', title: 'Overview' },
  { id: 'problem-insights', title: 'Problem Statement' },
  { id: 'market-research', title: 'Market Research' },
  { id: 'design-systems', title: 'Design Systems' },
  { id: 'user-experience-interface', title: 'User Experience & Interface' },
  { id: 'ai-integration-technical', title: 'AI Integration' },
  { id: 'challenges-learnings', title: 'Challenges & Learnings' },
  { id: 'components', title: 'Components' },
];

// Sample data - replace with your actual projects
const figmaProjects: FigmaProject[] = [
  {
    id: "philo-homes",
    title: "Interior Design AI Platform",
    subtitle: "AI-powered room design and visualization tool",
    category: "web",
    tags: ["UI/UX", "Web App", "Mobile App", "AI/ML", "Interior Design"],
    hero: "/projects/figma-projects/philo-homes/hero-image.png",
    problem: "This project is an AI-powered interior design tool aimed at helping new homeowners visualize and furnish their living spaces. The platform allows users to upload a photo or layout of their home and receive fully furnished design recommendations, complete with purchasable furniture items.",
    solution: "I collaborated closely with an experienced team that included an award-winning interior designer, engineers focused on AI and computer vision, and fellow designers. My work primarily focused on user experience design across platforms, including creating mockups for both the mobile app and the web application.",
    outcome: "The project was developed over a six-month period and is currently under an accelerator program. While not yet launched, a working prototype with interactive flows and high-fidelity visuals has been developed to communicate the concept.",
    typography: {
      title: "Typography System",
      images: []
    },
    colorPalette: {
      title: "Color Palette",
      images: []
    },
    userFlow: {
      title: "User Journey & AI Workflow",
      description: "Mapping the complete user experience from photo upload to design completion, including AI processing steps and decision points.",
      images: []
    },
    screens: [
      "/projects/figma-projects/philo-homes/login-mockup.png",
      "/projects/figma-projects/philo-homes/homepage-mockup.png",
      "/projects/figma-projects/philo-homes/capture-mockup.png",
      "/projects/figma-projects/philo-homes/results-mockup.png"
    ],
    components: []
  },
  {
    id: "ecommerce-web",
    title: "E-commerce Retail",
    subtitle: "Multi-platform retail experience with physical products",
    category: "web",
    tags: ["UI/UX", "Web", "E-commerce", "Conversion", "Physical Products"],
    hero: "",
    problem: "High cart abandonment rates and poor mobile conversion. Users struggled with product discovery and checkout flow complexity.",
    solution: "Implemented smart filtering, one-click checkout, and progressive web app features. Redesigned product pages with better imagery and social proof.",
    outcome: "25% increase in conversion rate. 50% reduction in cart abandonment. Mobile sales increased by 80%.",
    typography: {
      title: "Typography System",
      images: []
    },
    colorPalette: {
      title: "Brand Colors",
      images: []
    },
    userFlow: {
      title: "Shopping Journey",
      description: "Optimized path from product discovery to purchase completion, focusing on reducing friction and building trust.",
      images: []
    },
    screens: [],
    physicalProducts: {
      elasticBookCover: {
        title: "Elastic Book Cover",
        description: "Flexible book cover with a refined nature-inspired design, offering stylish protection for your favorite reads.",
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
          "/projects/the-one-prime/optimized_5OUTER-05.jpg"
        ],
        tags: ["stretchable", "washable", "non-adhesive"]
      },
      premiumFruit: {
        title: "Premium Fruit Giftbox",
        description: "Rare, premium fruits—perfect for elegant festival gifting and farm-fresh experiences.",
        images: ["/projects/fruit/optimized_giftbox.jpg"],
        tags: ["premium-graded", "farm-fresh", "gift-ready"]
      }
    }
  }
];

export default function Projects() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [coverflowIndex, setCoverflowIndex] = useState<number>(0);
  const [selectedStyle, setSelectedStyle] = useState<string>('transitional'); // Add state for selected style
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const navRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dotPosition, setDotPosition] = useState(0);

  // State for infographic scroll animations - now using continuous progress values
  const [infographProgress, setInfographProgress] = useState<{ [key: string]: number }>({});
  
  // Random direction assignments for each infographic (set after mounting to avoid hydration mismatch)
  const [infographDirections, setInfographDirections] = useState<{ [key: string]: 'left' | 'right' }>({});

  // Touch gesture handling for coverflow
  const touchStartRef = useRef<number>(0);
  const coverflowRef = useRef<HTMLDivElement>(null);

  // Initialize random directions after component mounts to avoid hydration mismatch
  useEffect(() => {
    const directions: { [key: string]: 'left' | 'right' } = {};
    const infographIds = [
      'overview-infographs',
      'problem-insights-infographs', 
      'market-research-infographs',
      'design-systems-infographs',
      'user-journey-infographs',
      'interface-mockups-infographs',
      'ai-results-infographs',
      'ai-tech-infographs'
    ];
    
    infographIds.forEach(id => {
      directions[id] = Math.random() > 0.5 ? 'left' : 'right';
    });
    
    setInfographDirections(directions);
  }, []);

  // Show all projects without filtering
  const filteredProjects = figmaProjects;

  // Book cover images for coverflow
  const bookCoverImages = figmaProjects.find(p => p.id === "ecommerce-web")?.physicalProducts?.elasticBookCover.images || [];

  // Coverflow functionality
  const handleCoverflowScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && coverflowIndex > 0) {
      setCoverflowIndex(coverflowIndex - 1);
    } else if (direction === 'right' && coverflowIndex < bookCoverImages.length - 1) {
      setCoverflowIndex(coverflowIndex + 1);
    }
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swiped left - go to next image
        handleCoverflowScroll('right');
      } else {
        // Swiped right - go to previous image
        handleCoverflowScroll('left');
      }
    }
    
    touchStartRef.current = 0;
  };

  const getVisibleImages = () => {
    const totalSlots = 7;
    const centerIndex = Math.floor(totalSlots / 2);
    const result = [];
    
    for (let i = 0; i < totalSlots; i++) {
      const imageIndex = coverflowIndex - centerIndex + i;
      if (imageIndex >= 0 && imageIndex < bookCoverImages.length) {
        result.push({
          image: bookCoverImages[imageIndex],
          originalIndex: imageIndex,
          isBlank: false
        });
      } else {
        result.push({
          image: null,
          originalIndex: -1,
          isBlank: true
        });
      }
    }
    
    return result;
  };

  // Generate table of contents for all projects
  const generateTableOfContents = () => {
    const toc: Array<{
      type: 'project' | 'section';
      id: string;
      title: string;
      projectId?: string;
    }> = [];

    filteredProjects.forEach((project) => {
      // Add project title
      toc.push({
        type: 'project',
        id: `project-${project.id}`,
        title: project.title,
        projectId: project.id
      });

      // Add project sections - special handling for E-commerce and Interior Design
      if (project.id === 'ecommerce-web') {
        // Only show physical product sections for E-commerce
        toc.push({
          type: 'section',
          id: `${project.id}-elastic-book-cover`,
          title: 'Elastic Book Cover',
          projectId: project.id
        });
        toc.push({
          type: 'section',
          id: `${project.id}-premium-fruit`,
          title: 'Premium Fruit Giftbox',
          projectId: project.id
        });
      } else {
        // Standard sections for other projects
        projectSections.forEach((section) => {
          // Skip components section for interior design project and if project doesn't have components
          if (section.id === 'components' && (project.id === 'philo-homes' || !project.components)) {
            return;
          }
          
          toc.push({
            type: 'section',
            id: `${project.id}-${section.id}`,
            title: section.title,
            projectId: project.id
          });
        });
      }
    });

    return toc;
  };

  const tableOfContents = generateTableOfContents();

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = '';
      
      // Check which section is currently in view
      Object.entries(sectionRefs.current).forEach(([sectionId, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            currentSection = sectionId;
          }
        }
      });

      if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Update dot position when active section changes (scrolling)
  useEffect(() => {
    if (activeSection && !hoveredItem) {
      updateDotPosition(activeSection);
    }
  }, [activeSection, hoveredItem]);

  // Set initial highlighting state
  useEffect(() => {
    const results1 = document.querySelector('.results-1-image');
    const results2 = document.querySelector('.results-2-image');
    if (selectedStyle === 'transitional') {
      if (results1) results1.classList.add('highlighted');
      if (results2) results2.classList.remove('highlighted');
    } else {
      if (results1) results1.classList.remove('highlighted');
      if (results2) results2.classList.add('highlighted');
    }
  }, [selectedStyle]);

  const updateDotPosition = (itemId: string) => {
    const itemElement = itemRefs.current[itemId];
    const navElement = navRef.current;
    
    if (itemElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const position = itemRect.top - navRect.top + (itemRect.height / 2);
      setDotPosition(position);
    }
  };

  const handleMouseEnter = (itemId: string) => {
    setHoveredItem(itemId);
    updateDotPosition(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    if (activeSection) {
      updateDotPosition(activeSection);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offsetTop = element.offsetTop - 120; // Increased offset to account for navigation
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const ProjectSection = ({ project }: { project: FigmaProject }) => (
    <div className="mb-40">
      {/* Project Title and Hero */}
      <div 
        ref={(el) => { sectionRefs.current[`project-${project.id}`] = el; }}
        id={`project-${project.id}`} 
        className="mb-20 pt-24" // Added top padding to prevent navigation blocking
      >
        <div className="mb-8 px-4 sm:px-0 text-center">
          <h1 className="text-xl sm:text-2xl text-ds-primary mb-2 leading-tight" 
                style={{ 
                  fontFamily: 'Georgia, serif',
                  fontWeight: '300',
                  letterSpacing: '0.01em',
                  color: 'var(--text-primary)'
                }}>
            {project.title}
          </h1>
          <p className="text-sm sm:text-lg text-ds-tertiary leading-relaxed"
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.005em'
              }}>
            {project.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        {project.hero && (
          <div className="w-full mb-12 px-0">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
              src={project.hero}
                alt={`${project.title} Hero`}
                fill
                className="object-cover"
              />
              </div>
        </div>
        )}
      </div>

      {/* Overview */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-case-study`] = el; }}
        id={`${project.id}-case-study`} 
        className="mb-24 px-4 sm:px-0"
      >
        {/* Overview Title */}
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          OVERVIEW
        </h2>
        
        {/* Project Description */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              This project is an AI-powered interior design tool aimed at helping new homeowners visualize and furnish their living spaces. The platform allows users to upload a photo or layout of their home and receive fully furnished design recommendations, complete with purchasable furniture items. The goal was to make the interior design process more efficient, intuitive, and directly actionable by integrating both AI-driven recommendations and a commerce flow for purchasing items.
            </p>

            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              I collaborated closely with an experienced team that included an award-winning interior designer, engineers focused on AI and computer vision, and fellow designers. My work primarily focused on user experience design across platforms, including creating mockups for both the mobile app and the web application. I also contributed to implementing and adapting the design system across responsive breakpoints.
            </p>

            <p className="text-stone-300 leading-relaxed text-sm sm:text-base"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                 lineHeight: '1.6'
                 }}>
              The project was developed over a six-month period and is currently under an accelerator program. While not yet launched, a working prototype with interactive flows and high-fidelity visuals has been developed to communicate the concept.
              </p>
            </div>

          {/* Infographic Blocks - Prominent Container */}
          <div 
            className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
            data-infograph-id="overview-infographs"
            style={{
              ...getInfographStyles('overview-infographs'),
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  
                  {/* UI/UX Block */}
                  <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                    <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                      {/* Subtle geometric accent */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full"></div>
                      
                      <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                        <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                          <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                          </svg>
                        </div>
                        <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                            style={{ 
                              fontFamily: 'Helvetica Neue, Arial, sans-serif',
                              letterSpacing: '0.02em'
                            }}>
                          UI/UX Design
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                             lineHeight: '1.6'
                 }}>
                          Crafting intuitive digital experiences through user-centered design methodologies and systematic design thinking.
              </p>
                      </div>
            </div>
          </div>

                  {/* Mobile & Web Apps Block */}
                  <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                    <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                      {/* Subtle geometric accent */}
                      <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-lg blur-sm opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-10 h-0.5 bg-gradient-to-r from-white/[0.12] to-transparent rounded-full"></div>
                      
                      <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                        <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                          <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                          </svg>
                        </div>
                        <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                            style={{ 
                              fontFamily: 'Helvetica Neue, Arial, sans-serif',
                              letterSpacing: '0.02em'
                            }}>
                          Mobile & Web
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                             letterSpacing: '0.01em',
                             lineHeight: '1.6'
               }}>
                          Building responsive, cross-platform applications with seamless user experiences across devices.
            </p>
          </div>
        </div>
      </div>

                  {/* Design Systems Block */}
                  <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                    <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                      {/* Subtle geometric accent */}
                      <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-white/[0.1] to-transparent rounded-full"></div>
                      
                      <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                        <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                          <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                          </svg>
            </div>
                        <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                            style={{ 
                              fontFamily: 'Helvetica Neue, Arial, sans-serif',
                              letterSpacing: '0.02em'
                            }}>
                          Design Systems
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                           style={{ 
                             fontFamily: 'Helvetica Neue, Arial, sans-serif',
                             fontWeight: '300',
                             letterSpacing: '0.01em',
                             lineHeight: '1.6'
                           }}>
                          Creating scalable component libraries and design foundations that ensure consistency across platforms.
                        </p>
          </div>
        </div>
                  </div>

                  {/* User Flow Block */}
                  <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                    <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                      {/* Subtle geometric accent */}
                      <div className="absolute top-4 right-4 w-5 h-5 bg-gradient-to-br from-white/[0.04] to-transparent rounded-md blur-sm opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-9 h-0.5 bg-gradient-to-r from-white/[0.08] to-transparent rounded-full"></div>
                      
                      <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                        <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                          <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                          </svg>
                        </div>
                        <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                            style={{ 
                              fontFamily: 'Helvetica Neue, Arial, sans-serif',
                              letterSpacing: '0.02em'
                            }}>
                          User Flow
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                           style={{ 
                             fontFamily: 'Helvetica Neue, Arial, sans-serif',
                             fontWeight: '300',
                             letterSpacing: '0.01em',
                             lineHeight: '1.6'
                           }}>
                          Mapping user journeys and optimizing pathways to create seamless, conversion-focused experiences.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>

      {/* Problem Statement & Insights */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-problem-insights`] = el; }}
        id={`${project.id}-problem-insights`} 
        className="mb-24 px-4 sm:px-0"
      >
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          PROBLEM STATEMENT
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              New homeowners often struggle to furnish and design their spaces in a cohesive, functional, and aesthetically aligned manner. Working with professional interior designers can be time-consuming, expensive, and inefficient, particularly when communication breaks down during iterative design phases. This project aimed to replace that slow, linear process with a more flexible, guided, and tech-assisted experience.
            </p>

            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              Through user interviews and mentor feedback, we identified several key insights:
            </p>

            {/* Research Insights Grid */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="problem-insights-infographs"
              style={{
                ...getInfographStyles('problem-insights-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    
                    {/* User Behavior Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex items-center justify-center group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                              <svg className="w-6 h-6 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Computer Vision
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Reads room images to infer layout, lighting, and design opportunities
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3D Modeling Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-lg blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-10 h-0.5 bg-gradient-to-r from-white/[0.12] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex items-center justify-center group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                              <svg className="w-6 h-6 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                              </svg>
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              3D Modeling
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Used to simulate realistic spatial arrangements and ensure item dimensions are consistent with physical constraints
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Generative Design Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-white/[0.1] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex items-center justify-center group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                              <svg className="w-6 h-6 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                              </svg>
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Generative Design
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Provides furnishing recommendations based on design styles, layout rules, and product databases
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              We also consulted mentors who emphasized the importance of visual clarity, clean user flows, and age-appropriate interaction design. This shifted our direction toward larger content blocks, simplified instructions, and visually rich interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>

      {/* Market Research & Positioning */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-market-research`] = el; }}
        id={`${project.id}-market-research`} 
        className="mb-24 px-4 sm:px-0"
      >
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          MARKET RESEARCH
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Market Gap Overview */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              Most existing solutions leverage computer vision to create &ldquo;before and after&rdquo; images of room designs. However, these tools often overlook critical constraints like physical layout, lighting, and existing furniture. Additionally, they rarely connect users to actual products for purchase, creating a gap between concept and execution.
            </p>

            {/* Differentiators Grid */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="market-research-infographs"
              style={{
                ...getInfographStyles('market-research-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-5xl mx-auto">
                  
                  <p className="text-stone-300 leading-relaxed text-sm sm:text-base mb-12 text-center"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    This project stands apart by:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    
                    {/* Real Photo Analysis Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full"></div>
                        
                        <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                          <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                            <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                              style={{ 
                                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                letterSpacing: '0.02em'
                              }}>
                            Real Photo Analysis
                          </h3>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Creating practical, personalized room designs based on actual room photos with attention to physical constraints.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Direct Commerce Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-lg blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-10 h-0.5 bg-gradient-to-r from-white/[0.12] to-transparent rounded-full"></div>
                        
                        <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                          <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                            <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </div>
                          <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                              style={{ 
                                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                letterSpacing: '0.02em'
                              }}>
                            Direct Commerce
                          </h3>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Offering purchasable items directly linked to the generated designs, bridging concept to execution.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3D Modeling Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-white/[0.1] to-transparent rounded-full"></div>
                        
                        <div className="relative text-center" style={{ transform: 'skewY(1deg)' }}>
                          <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl flex items-center justify-center relative group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                            <svg className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                          </div>
                          <h3 className="text-stone-300 text-lg mb-4 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                              style={{ 
                                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                letterSpacing: '0.02em'
                              }}>
                            3D Modeling
                          </h3>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Exploring both 2D image-based AI and full 3D modeling to improve design accuracy and visualization.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Context */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              While some companies have AR tools and generative AI, they focus more on item-level previews than full-space furnishing. Moreover, many existing solutions fail to provide an end-to-end experience from design to shopping.
            </p>

            {/* Validation Summary */}
            <p className="text-stone-300 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              We also validated demand through local interviews, focus groups, and the experience of the interior designer on the team, who had firsthand insights from working with real clients.
            </p>

          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>

      {/* Design Systems */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-design-systems`] = el; }}
        id={`${project.id}-design-systems`} 
        className="mb-24 px-4 sm:px-0"
      >
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          DESIGN SYSTEMS
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Introduction */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              The project&rsquo;s design system was built by a specialized design systems expert. It includes comprehensive guidelines on branding, typography, color palettes (six core colors and their usage), and a library of reusable components such as buttons, pagination elements, and grid structures.
            </p>

            {/* Visual Elements Grid */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="design-systems-infographs"
              style={{
                ...getInfographStyles('design-systems-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    
                    {/* Typography Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-8 sm:p-10 lg:p-12 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08] min-h-[320px] sm:min-h-[360px]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-6 left-6 w-12 h-0.5 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full"></div>
                        
                        <div className="relative text-center h-full flex flex-col" style={{ transform: 'skewY(1deg)' }}>
                          <h3 className="text-stone-300 text-xl mb-8 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                              style={{ 
                                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                letterSpacing: '0.02em'
                              }}>
                            Typography
                          </h3>
                          
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Logo with responsive indicators */}
                            <div className="relative w-fit mx-auto mb-8">
                              
                              {/* Typography indicator above - desktop */}
                              <div className="hidden lg:block text-center mb-3">
                                <div className="flex items-center justify-center text-sm">
                                  <span className="text-stone-400 italic" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                                    headings
                                  </span>
                                  <div className="w-6 h-px bg-stone-400/60 ml-2"></div>
                                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full ml-1"></div>
                                </div>
                              </div>
                              
                              <Image
                                src="/projects/figma-projects/philo-homes/philo-logo.png"
                                alt="Philo Logo"
                                width={200}
                                height={100}
                                className="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                              />
                              
                              {/* Typography indicator below - desktop */}
                              <div className="hidden lg:block text-center mt-3">
                                <div className="flex items-center justify-center text-sm">
                                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mr-1"></div>
                                  <div className="w-6 h-px bg-stone-400/60 mr-2"></div>
                                  <span className="text-stone-400 italic" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                                    body
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Mobile indicators */}
                            <div className="block lg:hidden space-y-3 text-sm">
                              <div className="flex items-center justify-center gap-3">
                                <span className="text-stone-400 italic">headings</span>
                                <div className="w-4 h-px bg-stone-400/60"></div>
                                <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full"></div>
                              </div>
                              <div className="flex items-center justify-center gap-3">
                                <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full"></div>
                                <div className="w-4 h-px bg-stone-400/60"></div>
                                <span className="text-stone-400 italic">body</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Color Palette Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-8 sm:p-10 lg:p-12 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08] min-h-[320px] sm:min-h-[360px]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-lg blur-sm opacity-60"></div>
                        <div className="absolute bottom-6 left-6 w-10 h-0.5 bg-gradient-to-r from-white/[0.12] to-transparent rounded-full"></div>
                        
                        <div className="relative text-center h-full flex flex-col" style={{ transform: 'skewY(1deg)' }}>
                          <h3 className="text-stone-300 text-xl mb-8 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                              style={{ 
                                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                letterSpacing: '0.02em'
                              }}>
                            Color Palette
                          </h3>
                          
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Color dots with enhanced spacing */}
                            <div className="mb-6">
                              <div className="grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-48 mx-auto">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-slate-900 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 mx-auto"></div>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-stone-100 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 mx-auto"></div>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-amber-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 mx-auto"></div>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-slate-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 mx-auto"></div>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-red-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 mx-auto"></div>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-indigo-400 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 mx-auto"></div>
                              </div>
                            </div>
                            
                            <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors duration-500"
                               style={{ 
                                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                 fontWeight: '300',
                                 letterSpacing: '0.01em'
                               }}>
                              Six core colors with usage guidelines
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Components Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-8 sm:p-10 lg:p-12 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08] min-h-[320px] sm:min-h-[360px]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-6 right-6 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-6 left-6 w-8 h-0.5 bg-gradient-to-r from-white/[0.1] to-transparent rounded-full"></div>
                        
                        <div className="relative text-center h-full flex flex-col" style={{ transform: 'skewY(1deg)' }}>
                          <h3 className="text-stone-300 text-xl mb-8 font-light tracking-wide group-hover:text-stone-100 transition-colors duration-500" 
                              style={{ 
                                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                letterSpacing: '0.02em'
                              }}>
                            Components
                          </h3>
                          
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Button Components */}
                            <div className="mb-6">
                              <div className="flex flex-col gap-4 sm:gap-5 items-center justify-center">
                                <Image
                                  src="/projects/figma-projects/philo-homes/back-button.png"
                                  alt="Back Button Component"
                                  width={120}
                                  height={45}
                                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <Image
                                  src="/projects/figma-projects/philo-homes/next-button.png"
                                  alt="Next Button Component"
                                  width={120}
                                  height={45}
                                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />
                              </div>
                            </div>
                            
                            <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors duration-500"
                               style={{ 
                                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                                 fontWeight: '300',
                                 letterSpacing: '0.01em'
                               }}>
                              Reusable button library & grid structures
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Application Context */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              While I was not responsible for creating the system, I applied it rigorously in my design work—especially when adapting the desktop-first system for mobile platforms. The system exists primarily in Figma and is documented with high-level visual and written guidelines to ensure consistency across screens and use cases.
            </p>

          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>

      {/* User Experience & Interface */}
        <div 
          ref={(el) => { sectionRefs.current[`${project.id}-user-experience-interface`] = el; }}
          id={`${project.id}-user-experience-interface`} 
          className="mb-24 px-4 sm:px-0"
        >
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
             style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
               fontWeight: '300',
             letterSpacing: '0.12em'
             }}>
          USER EXPERIENCE & INTERFACE
          </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Introduction */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              The primary user journey was carefully structured to be intuitive and accessible, particularly for users who may not be tech-savvy. The goal was to make the interface feel like a guided, step-by-step walkthrough rather than an overwhelming dashboard. Instead of large tutorial videos or dense blocks of text, micro-guidance is built into each step.
            </p>

            {/* User Journey Steps */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="user-journey-infographs"
              style={{
                ...getInfographStyles('user-journey-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-5xl mx-auto">
                  
                  <p className="text-stone-300 leading-relaxed text-sm sm:text-base mb-12 text-center"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    The flow is as follows:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    
                    {/* Step 1: Layout Specification */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/[0.15] to-white/[0.08] flex items-center justify-center text-stone-300 text-sm font-light group-hover:from-white/[0.2] group-hover:to-white/[0.12] transition-all duration-500">
                              1
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Layout Specification
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Users specify the layout of their home (e.g., number and types of rooms)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Photo Upload */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-lg blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-10 h-0.5 bg-gradient-to-r from-white/[0.12] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/[0.15] to-white/[0.08] flex items-center justify-center text-stone-300 text-sm font-light group-hover:from-white/[0.2] group-hover:to-white/[0.12] transition-all duration-500">
                              2
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Photo Upload
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            For each room, they upload a photo—either empty or already furnished
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Style Selection */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-white/[0.1] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/[0.15] to-white/[0.08] flex items-center justify-center text-stone-300 text-sm font-light group-hover:from-white/[0.2] group-hover:to-white/[0.12] transition-all duration-500">
                              3
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Style Selection
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            They select a preferred style and room type
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4: AI Generation */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-5 h-5 bg-gradient-to-br from-white/[0.04] to-transparent rounded-md blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-9 h-0.5 bg-gradient-to-r from-white/[0.08] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/[0.15] to-white/[0.08] flex items-center justify-center text-stone-300 text-sm font-light group-hover:from-white/[0.2] group-hover:to-white/[0.12] transition-all duration-500">
                              4
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              AI Generation
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            The AI generates a fully furnished version of each room, with styled images and itemized lists (including product names, prices, and quantities)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 5: Shopping & Purchase */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out md:col-span-2 lg:col-span-2" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-9 h-9 bg-gradient-to-br from-white/[0.09] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-14 h-0.5 bg-gradient-to-r from-white/[0.18] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/[0.15] to-white/[0.08] flex items-center justify-center text-stone-300 text-sm font-light group-hover:from-white/[0.2] group-hover:to-white/[0.12] transition-all duration-500">
                              5
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Shopping & Purchase
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Users can add items to their cart, swap them out for alternatives, and proceed to purchase with built-in checkout, payment, and delivery functionality
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              <h3 className="text-stone-300 text-lg font-light tracking-wide" 
                  style={{ 
                    fontFamily: 'Helvetica Neue, Arial, sans-serif',
                    letterSpacing: '0.02em'
                  }}>
                Challenges included:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Visualizing a high-impact design experience without having a fully trained AI model
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Balancing the fixed recommendations of AI-generated results with the exploratory nature of e-commerce browsing
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Differentiating flows between mobile (optimized for scanning and on-the-go interaction) and web (optimized for in-depth browsing and purchase decisions)
                  </p>
                </div>
              </div>
            </div>

            {/* Interface Mockups */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="interface-mockups-infographs"
              style={{
                ...getInfographStyles('interface-mockups-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-6xl mx-auto">
                  
                  <p className="text-stone-300 leading-relaxed text-sm sm:text-base mb-12 text-center"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Interface Designs
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Login Mockup - Vertical */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-80 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-full blur-sm opacity-60"></div>
                        
                        <div className="relative flex flex-col h-full" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex-1 flex items-center justify-center mb-6">
                            <div className="h-56 w-32 rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src="/projects/figma-projects/philo-homes/login-mockup.png"
                                alt="Login Interface"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <h4 className="text-stone-300 text-sm font-light text-center group-hover:text-stone-100 transition-colors duration-500 mt-auto" 
                              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                            Login
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Homepage Mockup - Horizontal */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-80 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-5 h-5 bg-gradient-to-br from-white/[0.04] to-transparent rounded-md blur-sm opacity-60"></div>
                        
                        <div className="relative flex flex-col h-full" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex-1 flex items-center justify-center mb-6">
                            <div className="h-40 w-72 rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src="/projects/figma-projects/philo-homes/homepage-mockup.png"
                                alt="Homepage Interface"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <h4 className="text-stone-300 text-sm font-light text-center group-hover:text-stone-100 transition-colors duration-500 mt-auto" 
                              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                            Homepage
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Capture Mockup - Horizontal */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-80 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                        
                        <div className="relative flex flex-col h-full" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex-1 flex items-center justify-center mb-6">
                            <div className="h-40 w-72 rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src="/projects/figma-projects/philo-homes/capture-mockup.png"
                                alt="Photo Capture Interface"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <h4 className="text-stone-300 text-sm font-light text-center group-hover:text-stone-100 transition-colors duration-500 mt-auto" 
                              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                            Photo Capture
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Results Mockup - Vertical */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-80 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-stone-500/[0.08] to-transparent rounded-sm blur-sm opacity-60"></div>
                        
                        <div className="relative flex flex-col h-full" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex-1 flex items-center justify-center mb-6">
                            <div className="h-56 w-32 rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src="/projects/figma-projects/philo-homes/results-mockup.png"
                                alt="Results Interface"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <h4 className="text-stone-300 text-sm font-light text-center group-hover:text-stone-100 transition-colors duration-500 mt-auto" 
                              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                            Results
                          </h4>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              <h3 className="text-stone-300 text-lg font-light tracking-wide" 
                  style={{ 
                    fontFamily: 'Helvetica Neue, Arial, sans-serif',
                    letterSpacing: '0.02em'
                  }}>
                Challenges included:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Visualizing a high-impact design experience without having a fully trained AI model
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Balancing the fixed recommendations of AI-generated results with the exploratory nature of e-commerce browsing
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Differentiating flows between mobile (optimized for scanning and on-the-go interaction) and web (optimized for in-depth browsing and purchase decisions)
                  </p>
                </div>
              </div>
            </div>

            {/* AI Generation Results */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="ai-results-infographs"
              style={{
                ...getInfographStyles('ai-results-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-8 sm:py-10 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Main Process Flow */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Input Process */}
                    <div className="space-y-6">
                      
                      {/* Step 1: Photo Upload */}
                      <div className="group transform hover:scale-[1.01] transition-all duration-700 ease-out" style={{ transform: 'skewY(-0.5deg)' }}>
                        <div className="relative bg-gradient-to-br from-stone-500/[0.12] to-stone-600/[0.06] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-stone-500/[0.2] hover:border-stone-400/[0.35] transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                          {/* Step indicator */}
                          <div className="absolute top-4 left-4 w-7 h-7 bg-stone-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-stone-200 text-sm font-semibold">1</span>
                          </div>
                          
                          {/* Geometric accent */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/[0.15] to-transparent rounded-full blur-sm opacity-40"></div>
                          <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-gradient-to-r from-white/[0.25] to-transparent rounded-full"></div>
                          
                          <div className="relative mt-6" style={{ transform: 'skewY(0.5deg)' }}>
                            <h4 className="text-stone-200 text-lg font-light mb-2 tracking-wide" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                              Original Room Photo
                            </h4>
                            <p className="text-stone-400 text-sm mb-4 leading-relaxed"
                               style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                              Start with an empty or existing room layout
                            </p>
                            
                            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 relative group-hover:scale-[1.02] transition-transform duration-700">
                              <Image
                                src="/projects/figma-projects/philo-homes/empty-room.png"
                                alt="Original Empty Room"
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Room Type Tag */}
                            <div className="flex justify-center">
                              <div className="px-4 py-2 bg-stone-500/12 rounded-full border border-white/20 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                                  <span className="text-stone-300 text-sm font-medium" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                    Living Room
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: Style Selection */}
                      <div className="group transform hover:scale-[1.01] transition-all duration-700 ease-out" style={{ transform: 'skewY(-0.5deg)' }}>
                        <div className="relative bg-gradient-to-br from-stone-500/[0.12] to-stone-600/[0.06] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-stone-500/[0.2] hover:border-stone-400/[0.35] transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                          {/* Step indicator */}
                          <div className="absolute top-4 left-4 w-7 h-7 bg-stone-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-stone-200 text-sm font-semibold">2</span>
                          </div>
                          
                          {/* Geometric accent */}
                          <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.12] to-transparent rounded-lg blur-sm opacity-40"></div>
                          <div className="absolute bottom-4 left-4 w-10 h-0.5 bg-gradient-to-r from-white/[0.2] to-transparent rounded-full"></div>
                          
                          <div className="relative mt-6" style={{ transform: 'skewY(0.5deg)' }}>
                            <h4 className="text-stone-200 text-lg font-light mb-2 tracking-wide" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                              Design Style Selection
                            </h4>
                            <p className="text-stone-400 text-sm mb-4 leading-relaxed"
                               style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                              Choose your preferred interior design aesthetic
                            </p>

                            <div className="space-y-3">
                              {/* Transitional Option */}
                              <div 
                                className={`transitional-option group/style relative p-4 rounded-xl border-2 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-white/[0.1] ${
                                  selectedStyle === 'transitional' 
                                    ? 'bg-gradient-to-r from-white/[0.12] to-white/[0.08] border-white/[0.25] hover:border-white/[0.4]' 
                                    : 'bg-gradient-to-r from-stone-500/[0.12] to-white/[0.03] border-white/[0.15] hover:border-white/[0.3] opacity-70 hover:opacity-100'
                                }`}
                                onMouseEnter={() => {
                                  const results1 = document.querySelector('.results-1-image');
                                  const results2 = document.querySelector('.results-2-image');
                                  if (results1) results1.classList.add('highlighted');
                                  if (results2) results2.classList.remove('highlighted');
                                }}
                                onMouseLeave={() => {
                                  // Reset to selected state when not hovering
                                  const results1 = document.querySelector('.results-1-image');
                                  const results2 = document.querySelector('.results-2-image');
                                  if (selectedStyle === 'transitional') {
                                    if (results1) results1.classList.add('highlighted');
                                    if (results2) results2.classList.remove('highlighted');
                                  } else {
                                    if (results1) results1.classList.remove('highlighted');
                                    if (results2) results2.classList.add('highlighted');
                                  }
                                }}
                                onClick={() => {
                                  setSelectedStyle('transitional');
                                  const results1 = document.querySelector('.results-1-image');
                                  const results2 = document.querySelector('.results-2-image');
                                  if (results1) results1.classList.add('highlighted');
                                  if (results2) results2.classList.remove('highlighted');
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-4 h-4 rounded-full shadow-lg ${
                                      selectedStyle === 'transitional' 
                                        ? 'bg-gradient-to-br from-white/[0.8] to-white/[0.6]' 
                                        : 'border-2 border-white/[0.5]'
                                    }`}></div>
                                    <span className={`text-base font-medium ${
                                      selectedStyle === 'transitional' ? 'text-stone-100' : 'text-stone-300'
                                    }`} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                      Transitional
                                    </span>
                                  </div>
                                  {selectedStyle === 'transitional' && (
                                    <div className="w-5 h-5 bg-white/90 rounded-full flex items-center justify-center">
                                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                                <p className={`text-sm mt-2 ${
                                  selectedStyle === 'transitional' ? 'text-stone-400' : 'text-stone-400'
                                }`} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  Classic meets contemporary design
                                </p>
                              </div>

                              {/* Modern Farmhouse Option */}
                              <div 
                                className={`farmhouse-option group/style relative p-4 rounded-xl border transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-white/[0.1] ${
                                  selectedStyle === 'farmhouse' 
                                    ? 'bg-gradient-to-r from-white/[0.12] to-white/[0.08] border-white/[0.25] hover:border-white/[0.4]' 
                                    : 'bg-gradient-to-r from-stone-500/[0.12] to-white/[0.03] border-white/[0.15] hover:border-white/[0.3] opacity-70 hover:opacity-100'
                                }`}
                                onMouseEnter={() => {
                                  const results1 = document.querySelector('.results-1-image');
                                  const results2 = document.querySelector('.results-2-image');
                                  if (results1) results1.classList.remove('highlighted');
                                  if (results2) results2.classList.add('highlighted');
                                }}
                                onMouseLeave={() => {
                                  // Reset to selected state when not hovering
                                  const results1 = document.querySelector('.results-1-image');
                                  const results2 = document.querySelector('.results-2-image');
                                  if (selectedStyle === 'transitional') {
                                    if (results1) results1.classList.add('highlighted');
                                    if (results2) results2.classList.remove('highlighted');
                                  } else {
                                    if (results1) results1.classList.remove('highlighted');
                                    if (results2) results2.classList.add('highlighted');
                                  }
                                }}
                                onClick={() => {
                                  setSelectedStyle('farmhouse');
                                  const results1 = document.querySelector('.results-1-image');
                                  const results2 = document.querySelector('.results-2-image');
                                  if (results1) results1.classList.remove('highlighted');
                                  if (results2) results2.classList.add('highlighted');
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-4 h-4 rounded-full shadow-lg ${
                                      selectedStyle === 'farmhouse' 
                                        ? 'bg-gradient-to-br from-white/[0.8] to-white/[0.6]' 
                                        : 'border-2 border-white/[0.5]'
                                    }`}></div>
                                    <span className={`text-base ${
                                      selectedStyle === 'farmhouse' ? 'text-stone-100 font-medium' : 'text-stone-300'
                                    }`} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                      Modern Farmhouse
                                    </span>
                                  </div>
                                  {selectedStyle === 'farmhouse' && (
                                    <div className="w-5 h-5 bg-white/90 rounded-full flex items-center justify-center">
                                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                                <p className={`text-sm mt-2 ${
                                  selectedStyle === 'farmhouse' ? 'text-stone-400' : 'text-stone-400'
                                }`} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  Rustic charm with clean lines
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: AI Results */}
                    <div className="space-y-6">
                      <div className="text-center mb-4">
                        <h4 className="text-stone-200 text-lg font-light mb-2 tracking-wide" 
                            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                          Design Results
                        </h4>
                        <p className="text-stone-400 text-sm"
                           style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                          Hover over style options to preview results
                        </p>
                      </div>

                      {/* Results 1 - Transitional */}
                      <div className="results-1-image group transform hover:scale-[1.02] transition-all duration-700 ease-out highlighted" style={{ transform: 'skewY(-0.5deg)' }}>
                        <div className="relative bg-gradient-to-br from-stone-500/[0.12] to-stone-600/[0.06] backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-stone-500/[0.2] hover:border-stone-400/[0.35] transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                          <div className="relative" style={{ transform: 'skewY(0.5deg)' }}>
                            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 relative group-hover:scale-[1.01] transition-transform duration-700">
                              <Image
                                src="/projects/figma-projects/philo-homes/results-1.png"
                                alt="Design Result - Transitional Style"
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>

                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                                <span className="text-stone-200 text-base font-medium" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  Transitional Style
                                </span>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <div className="flex-1 px-3 py-2 bg-stone-500/12 hover:bg-stone-500/20 rounded-lg border border-white/20 text-center transition-all duration-300 cursor-pointer">
                                <span className="text-stone-300 text-sm font-medium" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  View Items
                                </span>
                              </div>
                              <div className="flex-1 px-3 py-2 bg-stone-500/15 hover:bg-stone-400/30 rounded-lg border border-white/25 text-center transition-all duration-300 cursor-pointer">
                                <span className="text-stone-200 text-sm font-medium" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  Shop Now
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Results 2 - Modern Farmhouse */}
                      <div className="results-2-image group transform hover:scale-[1.02] transition-all duration-700 ease-out opacity-60" style={{ transform: 'skewY(-0.5deg)' }}>
                        <div className="relative bg-gradient-to-br from-white/[0.04] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 overflow-hidden group-hover:shadow-xl group-hover:shadow-white/[0.03]">
                          <div className="relative" style={{ transform: 'skewY(0.5deg)' }}>
                            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 relative group-hover:scale-[1.01] transition-transform duration-700">
                              <Image
                                src="/projects/figma-projects/philo-homes/results-2.png"
                                alt="Design Result - Modern Farmhouse Style"
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>

                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-stone-500/120 rounded-full"></div>
                                <span className="text-stone-300 text-base" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  Modern Farmhouse
                                </span>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <div className="flex-1 px-3 py-2 bg-stone-500/12 hover:bg-stone-500/15 rounded-lg border border-white/15 text-center transition-all duration-300 cursor-pointer">
                                <span className="text-stone-400 text-sm" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  View Items
                                </span>
                              </div>
                              <div className="flex-1 px-3 py-2 bg-white/8 hover:bg-stone-500/20 rounded-lg border border-white/20 text-center transition-all duration-300 cursor-pointer">
                                <span className="text-stone-300 text-sm" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                                  Shop Now
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <style jsx>{`
              .results-1-image.highlighted {
                opacity: 1;
                transform: skewY(-0.5deg) scale(1.02);
              }
              .results-2-image.highlighted {
                opacity: 1;
                transform: skewY(-0.5deg) scale(1.02);
              }
              .results-1-image.highlighted .relative {
                border-color: rgba(255, 255, 255, 0.3);
                box-shadow: 0 25px 50px -12px rgba(255, 255, 255, 0.1);
              }
              .results-2-image.highlighted .relative {
                border-color: rgba(255, 255, 255, 0.3);
                box-shadow: 0 25px 50px -12px rgba(255, 255, 255, 0.1);
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>

      {/* AI Integration & Technical Considerations */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-ai-integration-technical`] = el; }}
        id={`${project.id}-ai-integration-technical`} 
        className="mb-24 px-4 sm:px-0"
      >
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          AI INTEGRATION & TECHNICAL CONSIDERATIONS
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Introduction */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              The project leverages multiple AI technologies:
            </p>

            {/* AI Technologies Grid */}
            <div 
              className="-mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-16 mb-8"
              data-infograph-id="ai-tech-infographs"
              style={{
                ...getInfographStyles('ai-tech-infographs'),
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    
                    {/* Computer Vision Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex items-center justify-center group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                              <svg className="w-6 h-6 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Computer Vision
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Reads room images to infer layout, lighting, and design opportunities
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3D Modeling Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-stone-500/[0.12] to-transparent rounded-lg blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-10 h-0.5 bg-gradient-to-r from-white/[0.12] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex items-center justify-center group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                              <svg className="w-6 h-6 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                              </svg>
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              3D Modeling
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Used to simulate realistic spatial arrangements and ensure item dimensions are consistent with physical constraints
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Generative Design Card */}
                    <div className="group transform hover:scale-[1.02] transition-all duration-500 ease-out" style={{ transform: 'skewY(-1deg)' }}>
                      <div className="relative bg-gradient-to-br from-stone-500/[0.08] to-stone-600/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-stone-500/[0.15] hover:border-stone-400/[0.3] transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/[0.08]">
                        {/* Subtle geometric accent */}
                        <div className="absolute top-4 right-4 w-7 h-7 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-sm opacity-60"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-white/[0.1] to-transparent rounded-full"></div>
                        
                        <div className="relative" style={{ transform: 'skewY(1deg)' }}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex items-center justify-center group-hover:from-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500">
                              <svg className="w-6 h-6 text-stone-400 group-hover:text-stone-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                              </svg>
                            </div>
                            <h4 className="text-stone-300 text-lg font-light group-hover:text-stone-100 transition-colors duration-500" 
                                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em' }}>
                              Generative Design
                            </h4>
                          </div>
                          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-500"
                             style={{ 
                               fontFamily: 'Helvetica Neue, Arial, sans-serif',
                               fontWeight: '300',
                               letterSpacing: '0.01em',
                               lineHeight: '1.6'
                             }}>
                            Provides furnishing recommendations based on design styles, layout rules, and product databases
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Trade-offs & Approach */}
            <div className="space-y-6">
              <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                   lineHeight: '1.6'
                 }}>
                Each of these approaches presents trade-offs. Computer vision is faster and simpler but less precise. 3D modeling provides a more realistic experience but requires more advanced technology, including accurate 3D models of real furniture.
              </p>

              <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                   lineHeight: '1.6'
                 }}>
                We are currently evaluating a hybrid model that blends realism with ease-of-use, while continuing to consult domain experts to determine the best path forward. Accurate 3D data remains a bottleneck, especially when relying on product images from suppliers.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>

      {/* Challenges & Learnings */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-challenges-learnings`] = el; }}
        id={`${project.id}-challenges-learnings`} 
        className="mb-24 px-4 sm:px-0"
      >
        <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          CHALLENGES & LEARNINGS
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Introduction */}
            <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              This project presented several interconnected challenges:
            </p>

            {/* Challenges List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                <p className="text-stone-300 text-sm leading-relaxed"
                   style={{ 
                     fontFamily: 'Helvetica Neue, Arial, sans-serif',
                     fontWeight: '300',
                     letterSpacing: '0.01em',
                     lineHeight: '1.6'
                   }}>
                  Defining where and how AI fits into the user journey in a meaningful, outcome-oriented way
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                <p className="text-stone-300 text-sm leading-relaxed"
                   style={{ 
                     fontFamily: 'Helvetica Neue, Arial, sans-serif',
                     fontWeight: '300',
                     letterSpacing: '0.01em',
                     lineHeight: '1.6'
                   }}>
                  Navigating fast-moving technology trends that could outdate features in a matter of months
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                <p className="text-stone-300 text-sm leading-relaxed"
                   style={{ 
                     fontFamily: 'Helvetica Neue, Arial, sans-serif',
                     fontWeight: '300',
                     letterSpacing: '0.01em',
                     lineHeight: '1.6'
                   }}>
                  Managing the complexity of combining AI generation, user interaction, and e-commerce in a single, cohesive experience
                </p>
              </div>
            </div>

            {/* Strategic Pivots */}
            <div className="space-y-6">
              <p className="text-stone-200 leading-relaxed text-sm sm:text-base"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                   lineHeight: '1.6'
                 }}>
                We made several strategic pivots during the process:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Transitioning from web-first to mobile-first due to the camera-focused nature of user interaction
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Refining the user flow based on mentor and user feedback
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-stone-400/60 rounded-full mt-2 shrink-0"></div>
                  <p className="text-stone-300 text-sm leading-relaxed"
                     style={{ 
                       fontFamily: 'Helvetica Neue, Arial, sans-serif',
                       fontWeight: '300',
                       letterSpacing: '0.01em',
                       lineHeight: '1.6'
                     }}>
                    Reworking visual and content design to suit older users with moderate styling preferences
                  </p>
                </div>
              </div>
            </div>

            {/* Team Reflection */}
            <p className="text-stone-300 leading-relaxed text-sm sm:text-base"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 lineHeight: '1.6'
               }}>
              Despite the challenges, our team operated with strong communication and high agility. We consistently iterated on designs and priorities to stay aligned with our vision and stakeholder expectations.
            </p>

          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
      </div>
    </div>
  );

  // Special E-commerce Project Section with only book cover and fruit giftbox
  const EcommerceProjectSection = ({ project }: { project: FigmaProject }) => (
    <div className="mb-40">
      {/* Project Title and Hero */}
      <div 
        ref={(el) => { sectionRefs.current[`project-${project.id}`] = el; }}
        id={`project-${project.id}`} 
        className="mb-20 pt-24" // Added top padding to prevent navigation blocking
      >
        <div className="mb-8 px-4 sm:px-0 text-center">
          <h1 className="text-xl sm:text-2xl text-ds-primary mb-2 leading-tight" 
                style={{ 
                  fontFamily: 'Georgia, serif',
                  fontWeight: '300',
                  letterSpacing: '0.01em',
                  color: 'var(--text-primary)'
                }}>
            {project.title}
          </h1>
          <p className="text-sm sm:text-lg text-ds-tertiary leading-relaxed"
              style={{ 
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.005em'
              }}>
            {project.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        {project.hero && (
          <div className="w-full mb-12 px-0">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
              src={project.hero}
                alt={`${project.title} Hero`}
                fill
                className="object-cover"
              />
              </div>
        </div>
        )}
      </div>

      {/* Physical Products */}
      {project.physicalProducts && (
        <>
          {/* Elastic Book Cover Section with Coverflow */}
          <div 
            ref={(el) => { sectionRefs.current[`${project.id}-elastic-book-cover`] = el; }}
            id={`${project.id}-elastic-book-cover`} 
            className="mb-40 px-4 sm:px-0"
          >
            <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
                style={{ 
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.10em'
                }}>
              ELASTIC BOOK COVER
            </h2>

            {/* Coverflow Gallery */}
            <div className="w-full mx-auto px-4 sm:px-8 mb-16 overflow-hidden">
              <div className="relative flex items-center justify-center">
                
                {/* Left Arrow - Responsive */}
                <button
                  onClick={() => handleCoverflowScroll('left')}
                  disabled={coverflowIndex === 0}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-stone-500/12 hover:bg-stone-500/20 disabled:bg-stone-500/12 disabled:opacity-30 rounded-full backdrop-blur-sm transition-all duration-300 mr-2 sm:mr-4 lg:mr-8 focus:outline-none"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Coverflow Container - Mobile-First Responsive with Touch Support */}
                <div 
                  ref={coverflowRef}
                  className="h-56 sm:h-72 lg:h-[450px] flex items-center justify-center overflow-hidden max-w-sm sm:max-w-xl lg:max-w-6xl"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-6" style={{ perspective: '1000px' }}>
                    {getVisibleImages().map(({ image, originalIndex, isBlank }, displayIndex) => {
                      const centerIndex = Math.floor(7 / 2);
                      const isCenter = displayIndex === centerIndex;
                      const isLeft = displayIndex < centerIndex;
                      const distance = Math.abs(displayIndex - centerIndex);
                      
                      if (isBlank) {
                        return (
                          <div 
                            key={`blank-${displayIndex}`}
                            className={`relative transition-all duration-700 ease-out ${
                              isCenter 
                                ? 'w-40 h-28 sm:w-64 sm:h-44 lg:w-96 lg:h-64 z-30 scale-110' 
                                : 'w-24 h-18 sm:w-40 sm:h-28 lg:w-56 lg:h-40 z-20 scale-90 opacity-70'
                            }`}
                            style={{
                              transform: isCenter 
                                ? 'rotateY(0deg) translateZ(0px)' 
                                : isLeft 
                                  ? `rotateY(30deg) translateZ(-${distance * 15}px) translateX(${distance * 5}px)` 
                                  : `rotateY(-30deg) translateZ(-${distance * 15}px) translateX(-${distance * 5}px)`,
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            {/* Blank space */}
                      </div>
                        );
                      }
                      
                      return (
                        <div 
                          key={originalIndex}
                          className={`relative cursor-pointer transition-all duration-700 ease-out ${
                            isCenter 
                              ? 'w-40 h-28 sm:w-64 sm:h-44 lg:w-96 lg:h-64 z-30 scale-110' 
                              : 'w-24 h-18 sm:w-40 sm:h-28 lg:w-56 lg:h-40 z-20 scale-90 opacity-70'
                          }`}
                          style={{
                            transform: isCenter 
                              ? 'rotateY(0deg) translateZ(0px)' 
                              : isLeft 
                                ? `rotateY(30deg) translateZ(-${distance * 15}px) translateX(${distance * 5}px)` 
                                : `rotateY(-30deg) translateZ(-${distance * 15}px) translateX(-${distance * 5}px)`,
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                            {image && (
                          <Image
                            src={image}
                                alt={`Book Cover ${originalIndex + 1}`}
                            fill
                                className="object-cover"
                                sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 384px"
                          />
                            )}
                          </div>
                          {isCenter && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Arrow - Responsive */}
                <button
                  onClick={() => handleCoverflowScroll('right')}
                  disabled={coverflowIndex === bookCoverImages.length - 1}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-stone-500/12 hover:bg-stone-500/20 disabled:bg-stone-500/12 disabled:opacity-30 rounded-full backdrop-blur-sm transition-all duration-300 ml-2 sm:ml-4 lg:ml-8 focus:outline-none"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-200 mb-8 leading-relaxed text-center px-4 sm:px-0"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                   fontSize: '14px',
                   lineHeight: '1.5'
                 }}>
                Flexible book cover with a refined nature-inspired design, offering stylish protection for your favorite reads.
              </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center px-4 sm:px-0">
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {project.physicalProducts.elasticBookCover.tags.map((tag, _) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs text-stone-400 bg-stone-500/12 rounded-full border border-white/10"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full flex justify-center mb-16">
            <div className="w-1 h-1 bg-stone-400/60 rounded-full"></div>
          </div>

          {/* Premium Fruit Giftbox Section */}
          <div 
            ref={(el) => { sectionRefs.current[`${project.id}-premium-fruit`] = el; }}
            id={`${project.id}-premium-fruit`} 
            className="mb-40 px-4 sm:px-0"
          >
            <h2 className="text-stone-400 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
                style={{ 
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.10em'
                }}>
              PREMIUM FRUIT GIFTBOX
            </h2>

            {/* Single Fruit Image */}
            <div className="flex justify-center mb-12 px-4 sm:px-0">
              <div 
                className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="/projects/fruit/optimized_giftbox.jpg"
                  alt="Premium Fruit Gift Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-200 mb-8 leading-relaxed text-center px-4 sm:px-0"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 fontSize: '14px',
                 lineHeight: '1.5'
               }}>
              {project.physicalProducts.premiumFruit.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center px-4 sm:px-0">
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {project.physicalProducts.premiumFruit.tags.map((tag, _) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs text-stone-400 bg-stone-500/12 rounded-full border border-white/10"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Helper function to get animation styles based on scroll progress (0-1)
  const getInfographStyles = (elementId: string) => {
    const progress = infographProgress[elementId] || 0;
    const direction = infographDirections[elementId] || 'left'; // Fallback to 'left' if not set yet
    
    // Apply easing function for smoother animations
    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
    const easeInOutCubic = (t: number): number => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    const easedProgress = easeInOutCubic(progress);
    
    // Enhanced smooth interpolation based on progress
    const opacity = Math.max(0.15, Math.min(1, 0.15 + (easedProgress * 0.85)));
    const translateY = (1 - easeOutQuart(progress)) * 40; // Reduced for subtler vertical movement
    const scale = 0.95 + (easedProgress * 0.05); // Subtle scaling
    const blur = Math.max(0, (1 - easedProgress) * 2.5); // Blur when out of view
    
    // Random left/right sliding animation instead of rotation
    // Only apply slide effect if directions have been initialized
    // Reduce slide distance on mobile for better performance and visibility
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const slideDistance = Object.keys(infographDirections).length > 0 ? (1 - easedProgress) * (isMobile ? 40 : 80) : 0;
    const translateX = direction === 'left' ? -slideDistance : slideDistance;
    
    // Add subtle wave-like secondary movement (reduced on mobile)
    const waveOffset = Math.sin(progress * Math.PI) * (isMobile ? 1.5 : 3); // Very subtle wave
    
    return {
      transform: `translateY(${translateY}px) translateX(${translateX + waveOffset}px) scale(${scale})`,
      opacity: opacity,
      filter: `blur(${blur}px)`,
      transition: 'none', // Remove transitions for smooth scroll-driven animation
      willChange: 'transform, opacity, filter' // Optimize for animations
    };
  };

  // Scroll-driven animation effect for infographics
  useEffect(() => {
    const handleInfographScroll = () => {
      const infographIds = [
        'overview-infographs',
        'problem-insights-infographs', 
        'market-research-infographs',
        'design-systems-infographs',
        'user-journey-infographs',
        'interface-mockups-infographs',
        'ai-results-infographs',
        'ai-tech-infographs'
      ];

      const newProgress: { [key: string]: number } = {};

      infographIds.forEach(id => {
        const element = document.querySelector(`[data-infograph-id="${id}"]`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Responsive animation calculation based on screen size
          const isMobile = window.innerWidth < 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
          
          // Adjust animation ranges based on device type
          let animationStartMultiplier = 1.5; // Default for desktop
          if (isMobile) {
            animationStartMultiplier = 1.2; // Closer start for mobile
          } else if (isTablet) {
            animationStartMultiplier = 1.3; // Medium for tablet
          }
          
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const elementHeight = rect.height;
          const elementCenter = elementTop + (elementHeight / 2);
          
          // Define responsive animation range
          const animationStart = windowHeight * animationStartMultiplier;
          const animationPeak = windowHeight / 2;
          const animationEnd = -elementHeight / 2;
          
          let progress = 0;
          
          if (elementCenter <= animationStart && elementCenter >= animationPeak) {
            // Entering phase: 0 to 1
            progress = (animationStart - elementCenter) / (animationStart - animationPeak);
          } else if (elementCenter < animationPeak && elementCenter > animationEnd) {
            // Exiting phase: 1 to 0
            const exitProgress = (elementCenter - animationEnd) / (animationPeak - animationEnd);
            progress = exitProgress;
          } else if (elementCenter <= animationEnd) {
            // Completely out of view (top)
            progress = 0;
          } else {
            // Not yet in animation range (bottom)
            progress = 0;
          }
          
          // Clamp progress between 0 and 1
          newProgress[id] = Math.max(0, Math.min(1, progress));
        } else {
          newProgress[id] = 0;
        }
      });

      setInfographProgress(newProgress);
    };

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleInfographScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add resize listener to recalculate on orientation change (mobile)
    const handleResize = () => {
      handleInfographScroll();
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial call
    handleInfographScroll();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen w-full bg-neutral-900 overflow-x-hidden">
      {/* Mobile Table of Contents - Horizontal scroll at top */}
      <div className="xl:hidden sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="px-4 py-3">
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {tableOfContents.map((item, index) => {
              const isActive = activeSection === item.id;
              const isProject = item.type === 'project';
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex-shrink-0 px-3 py-2 text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                    isProject
                      ? 'border-2'
                      : 'border'
                  } ${
                    isActive
                      ? isProject
                        ? 'text-white bg-white/10 border-white/50'
                        : 'text-stone-200 bg-stone-500/20 border-stone-400'
                      : isProject
                        ? 'text-stone-300 border-stone-600 hover:text-white hover:border-white/40'
                        : 'text-stone-400 border-stone-700 hover:text-stone-300 hover:border-stone-500'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="flex-1 lg:mr-80 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-8">
          {/* All Projects in Continuous Scroll */}
          {filteredProjects.map((project) => (
            project.id === 'ecommerce-web' ? 
              <EcommerceProjectSection key={project.id} project={project} /> :
              <ProjectSection key={project.id} project={project} />
          ))}
        </div>

        {/* Desktop Table of Contents Sidebar - Right Side - Hidden on mobile/tablet */}
        <div className="hidden xl:block w-64 fixed right-8 top-1/2 transform -translate-y-1/2 h-[70vh] overflow-y-auto scrollbar-hide hover:scrollbar-default">
          <div className="bg-stone-500/12 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            
            <nav className="space-y-2" ref={navRef}>
              {/* Vertical layout for table of contents items */}
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {tableOfContents.map((item, index) => {
                const isActive = activeSection === item.id;
                const isProject = item.type === 'project';
                
                return (
                  <button
                    key={item.id}
                    ref={(el) => { itemRefs.current[item.id] = el; }}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    className={`w-full text-left transition-all duration-300 focus:outline-none rounded-lg ${
                      isProject 
                        ? 'px-3 py-2 font-medium text-sm border-l-4' 
                        : 'px-4 py-1 text-xs ml-2'
                    } ${
                      isActive 
                        ? isProject 
                          ? 'text-stone-100 border-white/50 bg-stone-600/20' 
                          : 'text-stone-200 bg-stone-500/20'
                        : isProject
                          ? 'text-stone-300 hover:text-stone-100 border-transparent hover:border-white/30 hover:bg-stone-600/10'
                          : 'text-stone-400 hover:text-stone-300 hover:bg-stone-500/10'
                    }`}
                  >
                    <span className="block transition-all duration-300 leading-tight">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* CSS for animations and mobile-specific styles */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
        @keyframes bounceHorizontal {
          0%, 100% {
            transform: translateX(-8rem);
          }
          50% {
            transform: translateX(8rem);
          }
        }
        
        /* Custom scrollbar hiding for mobile navigation */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 