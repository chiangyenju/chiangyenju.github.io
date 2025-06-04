export default function ProjectsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/60 text-sm" 
           style={{ 
             fontFamily: 'Helvetica Neue, Arial, sans-serif',
             fontWeight: '200'
           }}>
          Loading projects...
        </p>
      </div>
    </div>
  )
} 