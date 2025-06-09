export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-ebony/20 border-t-ebony rounded-full animate-spin mx-auto mb-4"></div>
        <p className="font-sans font-thin text-ebony/60">Loading...</p>
      </div>
    </div>
  );
} 