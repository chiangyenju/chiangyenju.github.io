"use client";

export default function Sandbox() {
  return (
    <section className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 
          className="text-white text-4xl mb-4"
          style={{ 
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontWeight: '300'
          }}
        >
          Sandbox
        </h1>
        <p 
          className="text-white/60 text-lg"
          style={{ 
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontWeight: '300'
          }}
        >
          Currently under construction
        </p>
      </div>
    </section>
  );
} 