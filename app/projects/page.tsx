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
  { id: 'design-systems', title: 'Design Systems' },
  { id: 'user-flow', title: 'User Flow' },
  { id: 'interface', title: 'Interface' },
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
    problem: "Traditional interior design services are expensive and time-consuming. Homeowners struggled to visualize design changes.",
    solution: "AI-powered platform that analyzes room photos and generates realistic visualizations with instant design recommendations, and purchase source!",
    outcome: "Admitted to accelerator, concept to be testified.",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const [coverflowIndex, setCoverflowIndex] = useState<number>(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const navRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dotPosition, setDotPosition] = useState(0);

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
      const scrollPosition = window.scrollY + (window.innerHeight / 2); // Middle of viewport

      // Find which section is currently in view
      let currentSection = '';
      
      Object.entries(sectionRefs.current).forEach(([sectionId, element]) => {
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects]);

  // Update dot position when active section changes
  useEffect(() => {
    if (activeSection && !hoveredItem) {
      updateDotPosition(activeSection);
    }
  }, [activeSection, hoveredItem]);

  const updateDotPosition = (itemId: string) => {
    const itemElement = itemRefs.current[itemId];
    const navElement = navRef.current;
    
    if (itemElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const position = itemRect.top - navRect.top + (itemRect.height / 2) - 2; // Center the dot
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
      const offsetTop = element.offsetTop - 100; // Account for header
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
        className="mb-20"
      >
        <div className="mb-8 px-4 sm:px-0 text-center">
          <h1 className="text-xl sm:text-2xl text-white mb-2 leading-tight" 
               style={{ 
                 fontFamily: 'Georgia, serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 color: 'white'
               }}>
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed"
             style={{ 
               fontFamily: 'Helvetica Neue, Arial, sans-serif',
               fontWeight: '200',
               letterSpacing: '0.01em'
             }}>
            {project.subtitle}
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black relative mb-12 mx-4 sm:mx-0">
          {project.hero && (
                <Image
              src={project.hero}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority={true}
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
                )}
        </div>
      </div>

      {/* Overview */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-case-study`] = el; }}
        id={`${project.id}-case-study`} 
        className="mb-24 px-4 sm:px-0"
      >
        {/* Overview Title */}
        <h2 className="text-white/60 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          OVERVIEW
        </h2>
        
        {/* Compact Layout */}
        <div className="max-w-3xl mx-auto relative">
          <div className="space-y-8">
            {/* Problem */}
            <div className="text-left relative">
              <p className="text-white/90 leading-relaxed"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                   fontSize: '14px',
                   lineHeight: '1.5'
                 }}>
                <span className="italic text-white/70 mr-2" style={{ fontWeight: '300' }}>Problem:</span>
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="text-left relative">
              <p className="text-white/90 leading-relaxed"
                 style={{ 
                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
                   fontWeight: '300',
                   letterSpacing: '0.01em',
                   fontSize: '14px',
                   lineHeight: '1.5'
                 }}>
                <span className="italic text-white/70 mr-2" style={{ fontWeight: '300' }}>Solution:</span>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Outcome with subtle divider */}
          <div className="mt-10 pt-6 border-t border-white/8">
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.02em'
               }}>
              {project.outcome}
            </p>
          </div>

          {/* Room Transformation Flow */}
          <div className="mt-16 relative max-w-4xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col items-center relative">
              {/* Initial Room with Tag */}
              <div className="flex flex-col items-center mb-12 sm:mb-24">
                <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[4/3] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/projects/figma-projects/philo-homes/empty-room.png"
                    alt="Empty Room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -top-8 w-px h-8 bg-white/20"></div>
                  <div className="relative px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                    Living Room
                  </div>
        </div>
      </div>

              {/* Style Options and Results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 lg:gap-32 w-full relative px-4 sm:px-0">
                {/* Simple Dot Divider - hidden on mobile */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden sm:block">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" style={{ animation: 'bounceHorizontal 3s infinite' }}></div>
            </div>

                {/* Left Path - Transitional */}
                <div className="relative flex flex-col items-center">
                  <div className="relative mb-8 sm:mb-16">
                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                      Transitional Style
          </div>
                    {/* Connecting line from Style to Image */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-8 sm:h-16 w-px bg-white/20 -bottom-8 sm:-bottom-16"></div>
        </div>
                  <div className="relative w-full max-w-xs sm:max-w-none aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/projects/figma-projects/philo-homes/results-1.png"
                      alt="Transitional Style Result"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right Path - Modern Farmhouse */}
                <div className="relative flex flex-col items-center">
                  <div className="relative mb-8 sm:mb-16">
                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                      Modern Farmhouse
                    </div>
                    {/* Connecting line from Style to Image */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-8 sm:h-16 w-px bg-white/20 -bottom-8 sm:-bottom-16"></div>
                  </div>
                  <div className="relative w-full max-w-xs sm:max-w-none aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/projects/figma-projects/philo-homes/results-2.png"
                      alt="Modern Farmhouse Result"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-white/40 rounded-full" style={{ animation: 'bounce 3s infinite' }}></div>
      </div>

      {/* Design Systems */}
      <div 
        ref={(el) => { sectionRefs.current[`${project.id}-design-systems`] = el; }}
        id={`${project.id}-design-systems`} 
        className="mb-24 px-4 sm:px-0"
      >
        <h2 className="text-white/60 mb-16 leading-tight text-xs sm:text-sm tracking-widest text-center"
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '300',
             letterSpacing: '0.12em'
           }}>
          DESIGN SYSTEMS
        </h2>
        
        {/* Single Column Layout with increased spacing */}
        <div className="max-w-2xl mx-auto space-y-32 px-4 sm:px-0">
          
          {/* Typography Section */}
          <div className="relative w-fit mx-auto space-y-12">
            
            {/* Mobile indicators above image - visible only on mobile */}
            <div className="block sm:hidden text-center mb-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/70 text-sm italic" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  headings
                </span>
                <div className="w-6 h-px bg-white/60"></div>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              </div>
            </div>

            {/* Logo */}
            <div className="relative w-fit mx-auto mb-16">
              <Image
                src="/projects/figma-projects/philo-homes/philo-logo.png"
                alt="Philo Logo"
                width={200}
                height={100}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedImage("/projects/figma-projects/philo-homes/philo-logo.png")}
              />
              
              {/* Desktop line indicators - hidden on mobile */}
              <div className="absolute top-0 -left-32 transform hidden sm:block">
                <div className="flex items-center">
                  <span className="text-white/70 text-sm italic" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                    headings
                  </span>
                  <div className="w-8 h-px bg-white/60 ml-2"></div>
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full ml-1"></div>
                </div>
              </div>
              
              <div className="absolute bottom-0 -right-32 transform hidden sm:block">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-1"></div>
                  <div className="w-8 h-px bg-white/60 mr-2"></div>
                  <span className="text-white/70 text-sm italic" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                    body
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile indicators below image - visible only on mobile */}
            <div className="block sm:hidden text-center mt-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                <div className="w-6 h-px bg-white/60"></div>
                <span className="text-white/70 text-sm italic" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  body
                </span>
              </div>
            </div>
          </div>

          {/* Color Palette Section */}
          <div className="mt-16 space-y-8">
            {/* Enhanced color dots container */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-12 items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-slate-900 rounded-full shadow-lg"></div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-stone-100 rounded-full shadow-lg"></div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-amber-600 rounded-full shadow-lg"></div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-slate-600 rounded-full shadow-lg"></div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-red-600 rounded-full shadow-lg"></div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-indigo-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Button Components */}
          <div className="flex gap-8 sm:gap-10 md:gap-12 items-center justify-center">
            <Image
              src="/projects/figma-projects/philo-homes/back-button.png"
              alt="Back Button Component"
              width={150}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <Image
              src="/projects/figma-projects/philo-homes/next-button.png"
              alt="Next Button Component"
              width={150}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-white/40 rounded-full" style={{ animation: 'bounce 3s infinite' }}></div>
      </div>

      {/* User Flow */}
        <div 
          ref={(el) => { sectionRefs.current[`${project.id}-user-flow`] = el; }}
          id={`${project.id}-user-flow`} 
          className="mb-24 px-4 sm:px-0"
        >
        <h2 className="text-white/60 mb-16 leading-tight text-xs sm:text-sm tracking-widest text-center"
             style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
               fontWeight: '300',
             letterSpacing: '0.12em'
             }}>
          USER FLOW
          </h2>

        {/* User Flow Section */}
        <div className="max-w-xl mx-auto space-y-6 px-4 sm:px-0">
          {/* Step 1 */}
          <div className="relative group">
            {/* Unified centered layout for both mobile and desktop */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/70 text-xs font-light">01</span>
              </div>
              <div className="text-center">
                <h3 className="text-white/90 text-sm sm:text-base" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  Photo Upload
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  <span className="block sm:hidden">Upload room photos</span>
                  <span className="hidden sm:block">Upload room photos through drag-and-drop or camera capture</span>
                </p>
              </div>
            </div>
            {/* Horizontal connecting line */}
            <div className="flex justify-center mt-4">
              <div className="w-16 h-px bg-white/20"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/70 text-xs font-light">02</span>
              </div>
              <div className="text-center">
                <h3 className="text-white/90 text-sm sm:text-base" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  AI Analysis
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  <span className="block sm:hidden">Analyze room dimensions</span>
                  <span className="hidden sm:block">Analyze room dimensions, lighting, and furniture layout</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-px bg-white/20"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/70 text-xs font-light">03</span>
              </div>
              <div className="text-center">
                <h3 className="text-white/90 text-sm sm:text-base" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  Style Selection
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  <span className="block sm:hidden">Browse design styles</span>
                  <span className="hidden sm:block">Browse curated design styles or create custom preferences</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-px bg-white/20"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/70 text-xs font-light">04</span>
              </div>
              <div className="text-center">
                <h3 className="text-white/90 text-sm sm:text-base" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  Design Generation
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  <span className="block sm:hidden">Generate design options</span>
                  <span className="hidden sm:block">Generate multiple design options with realistic visualizations</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-px bg-white/20"></div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative group">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/70 text-xs font-light">05</span>
              </div>
              <div className="text-center">
                <h3 className="text-white/90 text-sm sm:text-base" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  Direct Purchase
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}>
                  <span className="block sm:hidden">One-click purchase</span>
                  <span className="hidden sm:block">One-click purchase from curated partner stores</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-white/40 rounded-full" style={{ animation: 'bounce 3s infinite' }}></div>
      </div>

      {/* Interface Designs */}
      {project.screens && project.screens.length > 0 && (
        <div 
          ref={(el) => { sectionRefs.current[`${project.id}-interface`] = el; }}
          id={`${project.id}-interface`} 
          className="mb-24 px-4 sm:px-0"
        >
          <h2 className="text-white/60 mb-16 leading-tight text-xs sm:text-sm tracking-widest text-center"
             style={{ 
               fontFamily: 'Helvetica Neue, Arial, sans-serif',
               fontWeight: '300',
               letterSpacing: '0.12em'
             }}>
            INTERFACE
          </h2>

          {/* Large Preview Area - Desktop only */}
          <div className="mb-8 px-4 sm:px-0 hidden sm:block">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              {(selectedMockup || project.screens[0]) && (
                <Image
                  src={selectedMockup || project.screens[0]}
                  alt="Selected Interface Mockup"
                  fill
                  className="object-contain bg-black/20 backdrop-blur-sm"
                  priority
                />
              )}
            </div>
          </div>

          {/* Mockup Thumbnails - Desktop only */}
          <div className="hidden sm:flex gap-2 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-2 sm:px-0">
            {project.screens.map((image, index) => (
              <div 
                key={index} 
                className="group relative shrink-0 snap-center cursor-pointer"
                style={{ width: 'calc(22% - 6px)' }}
                onClick={() => setSelectedMockup(image)}
              >
                <div className="relative overflow-hidden rounded-xl transition-transform">
                  {selectedMockup === image && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90 z-10"></div>
                  )}
                  <div className="aspect-[4/3]">
                    <Image
                      src={image}
                      alt={`Interface Mockup ${index + 1}`}
                      fill
                      className={`object-cover transform transition-all duration-500 ${
                        selectedMockup === image 
                          ? 'brightness-100' 
                          : 'brightness-75 hover:brightness-100'
                      }`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Large Images - Mobile only */}
          <div className="block sm:hidden space-y-16 px-6">
            {project.screens.map((image, index) => {
              // Make later 3 images smaller, especially horizontal ones
              const isLaterImage = index >= 1; // Images 2, 3, 4 (0-indexed: 1, 2, 3)
              const isHorizontal = index === 1 || index === 2; // Middle two are horizontal
              
              return (
                <div 
                  key={index} 
                  className={`relative rounded-xl overflow-hidden mx-auto ${
                    isLaterImage 
                      ? isHorizontal 
                        ? 'aspect-[16/9] max-w-80' // Horizontal images: much wider
                        : 'aspect-[9/16] max-w-52'  // Later vertical images: smaller
                      : 'aspect-[9/16] max-w-64'    // First image: original size
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Interface Mockup ${index + 1}`}
                    fill
                    className={`object-cover ${
                      isLaterImage 
                        ? isHorizontal 
                          ? 'scale-110'  // Less scaling for horizontal images
                          : 'scale-115'  // Slightly less scaling for later vertical
                        : 'scale-125'    // Original scaling for first image
                    }`}
                    style={{ objectPosition: 'center center' }}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Animated Dot Divider */}
      <div className="w-full flex justify-center mb-24">
        <div className="w-1 h-1 bg-white/40 rounded-full" style={{ animation: 'bounce 3s infinite' }}></div>
      </div>

      {/* Components */}
      {project.components && project.components.length > 0 && (
        <div 
          ref={(el) => { sectionRefs.current[`${project.id}-components`] = el; }}
          id={`${project.id}-components`} 
          className="mb-24"
        >
          <h2 className="text-3xl text-white mb-12 leading-tight text-center"
             style={{ 
               fontFamily: 'Georgia, serif',
               fontWeight: '300',
               letterSpacing: '0.01em'
             }}>
            Design Components
          </h2>
        </div>
      )}

      {/* Physical Products */}
      {project.physicalProducts && (
        <div className="mb-24">
          {/* Elastic Book Cover */}
          <div className="mb-20">
            <h2 className="text-3xl text-white mb-6 leading-tight text-center"
               style={{ 
                 fontFamily: 'Georgia, serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em'
               }}>
              {project.physicalProducts.elasticBookCover.title}
            </h2>
            <p className="text-white/70 mb-12 leading-loose text-lg text-center"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '200',
                 letterSpacing: '0.01em'
               }}>
              {project.physicalProducts.elasticBookCover.description}
            </p>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {project.physicalProducts.elasticBookCover.images.map((image, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    {image && (
                      <Image
                        src={image}
                        alt={`Book Cover ${index + 1}`}
                        width={400}
                        height={600}
                        className="w-full h-auto rounded-xl"
                        onClick={() => setSelectedImage(image)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Fruit Giftbox */}
          <div>
            <h2 className="text-white/60 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
                style={{ 
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.10em'
                }}>
              PREMIUM FRUIT GIFTBOX
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed text-center px-4 sm:px-0"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 fontSize: '14px',
                 lineHeight: '1.5'
               }}>
              {project.physicalProducts.premiumFruit.description}
            </p>
            <div className="grid gap-8">
              {project.physicalProducts.premiumFruit.images.map((image, index) => (
                <div key={index} className="max-w-2xl mx-auto">
                  <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    {image && (
                      <Image
                        src={image}
                        alt={`Premium Fruit ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-xl"
                        onClick={() => setSelectedImage(image)}
                      />
                    )}
                  </div>
                      </div>
                    ))}
                  </div>
          </div>
        </div>
      )}
    </div>
  );

  // Special E-commerce Project Section with only book cover and fruit giftbox
  const EcommerceProjectSection = ({ project }: { project: FigmaProject }) => (
    <div className="mb-40">
      {/* Project Title and Hero */}
      <div 
        ref={(el) => { sectionRefs.current[`project-${project.id}`] = el; }}
        id={`project-${project.id}`} 
        className="mb-20"
      >
        <div className="mb-8 px-4 sm:px-0 text-center">
          <h1 className="text-xl sm:text-2xl text-white mb-2 leading-tight" 
               style={{ 
                 fontFamily: 'Georgia, serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em',
                 color: 'white'
               }}>
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed"
             style={{ 
               fontFamily: 'Helvetica Neue, Arial, sans-serif',
               fontWeight: '200',
               letterSpacing: '0.01em'
             }}>
            {project.subtitle}
          </p>
        </div>
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
            <h2 className="text-white/60 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
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
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-30 rounded-full backdrop-blur-sm transition-all duration-300 mr-2 sm:mr-4 lg:mr-8"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Coverflow Container - Mobile-First Responsive */}
                <div className="h-48 sm:h-64 lg:h-96 flex items-center justify-center overflow-hidden max-w-sm sm:max-w-xl lg:max-w-5xl">
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
                                ? 'w-32 h-20 sm:w-48 sm:h-32 lg:w-72 lg:h-48 z-30 scale-110' 
                                : 'w-20 h-14 sm:w-36 sm:h-24 lg:w-48 lg:h-32 z-20 scale-90 opacity-70'
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
                              ? 'w-32 h-20 sm:w-48 sm:h-32 lg:w-72 lg:h-48 z-30 scale-110' 
                              : 'w-20 h-14 sm:w-36 sm:h-24 lg:w-48 lg:h-32 z-20 scale-90 opacity-70'
                          }`}
                          style={{
                            transform: isCenter 
                              ? 'rotateY(0deg) translateZ(0px)' 
                              : isLeft 
                                ? `rotateY(30deg) translateZ(-${distance * 15}px) translateX(${distance * 5}px)` 
                                : `rotateY(-30deg) translateZ(-${distance * 15}px) translateX(-${distance * 5}px)`,
                            transformStyle: 'preserve-3d'
                          }}
                          onClick={() => setSelectedImage(selectedImage === image ? null : image)}
                        >
                          <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                            {image && (
                              <Image
                                src={image}
                                alt={`Book Cover ${originalIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 288px"
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
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-30 rounded-full backdrop-blur-sm transition-all duration-300 ml-2 sm:ml-4 lg:ml-8"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 mb-8 leading-relaxed text-center px-4 sm:px-0"
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
                  className="px-3 py-1 text-xs text-white/60 bg-white/5 rounded-full border border-white/10"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full flex justify-center mb-16">
            <div className="w-1 h-1 bg-white/40 rounded-full" style={{ animation: 'bounce 3s infinite' }}></div>
          </div>

          {/* Premium Fruit Giftbox Section */}
          <div 
            ref={(el) => { sectionRefs.current[`${project.id}-premium-fruit`] = el; }}
            id={`${project.id}-premium-fruit`} 
            className="mb-40 px-4 sm:px-0"
          >
            <h2 className="text-white/60 mb-12 leading-tight text-xs sm:text-sm tracking-widest text-center"
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
                className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-40 sm:h-48 md:h-56 lg:h-64 cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-700"
                onClick={() => setSelectedImage(selectedImage === "/projects/fruit/optimized_giftbox.jpg" ? null : "/projects/fruit/optimized_giftbox.jpg")}
              >
                <Image
                  src="/projects/fruit/optimized_giftbox.jpg"
                  alt="Premium Fruit Gift Collection"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 mb-8 leading-relaxed text-center px-4 sm:px-0"
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
                  className="px-3 py-1 text-xs text-white/60 bg-white/5 rounded-full border border-white/10"
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

  return (
    <section className="min-h-screen w-full bg-black overflow-x-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="flex-1 lg:mr-80 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-4 lg:py-8">
          {/* All Projects in Continuous Scroll */}
          {filteredProjects.map((project) => (
            project.id === 'ecommerce-web' ? 
              <EcommerceProjectSection key={project.id} project={project} /> :
              <ProjectSection key={project.id} project={project} />
          ))}
        </div>

        {/* Table of Contents Sidebar - Right Side - Hidden on mobile/tablet */}
        <div className="hidden xl:block w-64 fixed right-8 top-1/2 transform -translate-y-1/2 h-[70vh] overflow-y-auto scrollbar-hide hover:scrollbar-default">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            
            <nav className="space-y-1 relative" ref={navRef}>
              {/* Single unified dot that moves and bounces */}
              <div 
                className="absolute left-0 w-1 h-1 bg-white/70 rounded-full transition-all duration-500 ease-out"
                style={{
                  top: `${dotPosition}px`,
                  opacity: hoveredItem || activeSection ? 1 : 0,
                  animation: activeSection && !hoveredItem ? 'bounce 2s infinite' : 'none'
                }}
              />

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
                    className={`w-full text-left transition-all duration-300 ${
                      isProject 
                        ? 'px-0 py-2 font-medium text-sm' 
                        : 'px-4 py-1 text-xs ml-0'
                    } ${
                      isActive 
                        ? isProject 
                          ? 'text-white' 
                          : 'text-white/90'
                        : isProject
                          ? 'text-white/80 hover:text-white'
                          : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    <span className={`block transition-all duration-300 leading-snug pl-4`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full w-full">
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1600}
              height={1200}
              className="object-contain max-h-[90vh] w-full h-auto"
            />
            <button
              className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white/90 text-2xl transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* CSS for bouncing animation */}
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
      `}</style>
    </section>
  );
} 