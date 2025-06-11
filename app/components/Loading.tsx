interface LoadingProps {
  theme?: 'light' | 'dark';
}

export default function Loading({ theme = 'light' }: LoadingProps) {
  const styles = {
    light: {
      bg: 'bg-ivory',
      text: 'text-ebony/60',
      spinner: 'border-ebony/20 border-t-ebony'
    },
    dark: {
      bg: 'bg-black',
      text: 'text-white/60',
      spinner: 'border-white/20 border-t-white'
    }
  };

  const currentTheme = styles[theme];

  return (
    <div className={`min-h-screen flex items-center justify-center ${currentTheme.bg}`}>
      <div className="text-center">
        <div className={`w-8 h-8 border-2 ${currentTheme.spinner} rounded-full animate-spin mx-auto mb-4`}></div>
        <p className={`font-sans font-thin ${currentTheme.text}`}>Loading...</p>
      </div>
    </div>
  );
} 