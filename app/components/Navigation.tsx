import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-ivory/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="text-3xl text-red hover:opacity-80 transition-opacity font-chinese">
              江
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <a 
              href="/projects" 
              className="text-ebony hover:text-olive transition-colors text-xs font-sans font-extrabold uppercase tracking-wider"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 