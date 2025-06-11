'use client';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  theme?: 'light' | 'dark';
}

export default function ErrorBoundary({ error, reset, theme = 'light' }: ErrorBoundaryProps) {
  const styles = {
    light: {
      bg: 'bg-ivory',
      text: 'text-ebony',
      button: 'bg-ebony text-ivory hover:bg-olive',
      subtext: 'text-ebony/60'
    },
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-white/10 hover:bg-white/20',
      subtext: 'text-white/60'
    }
  };

  const currentTheme = styles[theme];

  return (
    <div className={`min-h-screen flex items-center justify-center ${currentTheme.bg} ${currentTheme.text}`}>
      <div className="text-center">
        <h2 className="font-serif text-2xl mb-4">Something went wrong</h2>
        <p className={`font-sans font-thin mb-8 ${currentTheme.subtext}`}>
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className={`px-6 py-3 rounded-lg transition-colors ${currentTheme.button}`}
        >
          Try again
        </button>
      </div>
    </div>
  );
} 