export default function Sandbox() {
  return (
    <section className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Under Construction Message */}
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight" 
               style={{ 
                 fontFamily: 'Georgia, serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em'
               }}>
            Sandbox
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '200',
                 letterSpacing: '0.01em'
               }}>
              Under Construction
            </p>
            
            <p className="text-sm text-white/50 leading-relaxed max-w-lg mx-auto"
               style={{ 
                 fontFamily: 'Helvetica Neue, Arial, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.01em'
               }}>
              This space is being prepared for experimental projects and creative explorations. 
              Check back soon for new interactive experiences.
            </p>
          </div>

          {/* Animated Construction Indicator */}
          <div className="flex justify-center items-center space-x-2 mt-12">
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
} 