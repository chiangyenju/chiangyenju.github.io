export default function Loading() {
  return (
    <section className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">
        
        <div className="space-y-8">
          <h1 className="text-2xl sm:text-3xl text-white/60 leading-tight" 
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.02em'
               }}>
            Loading...
          </h1>
          
          {/* Animated Loading Indicator */}
          <div className="flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
} 