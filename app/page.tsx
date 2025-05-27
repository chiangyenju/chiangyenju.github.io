"use client";


export default function Home() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Ethereal Light Animation */}
      <div className="absolute w-full h-full flex items-center justify-center" style={{ transform: 'translateY(5%)' }}>
        <div className="light-container">
          <div className="light-beam light-beam-1"></div>
          <div className="light-beam light-beam-2"></div>
          <div className="light-beam light-beam-3"></div>
          <div className="light-beam light-beam-4"></div>
          <div className="light-beam light-beam-5"></div>
          <div className="light-beam light-beam-6"></div>
          <div className="tunnel-light"></div>
        </div>
      </div>
      
      <div className="w-full flex justify-center z-20 pointer-events-none">
        <p
          className="text-[8px] md:text-[10px] tracking-wider text-center"
          style={{
            color: "#e0e6f0",
            opacity: 0.95,
            fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
            fontWeight: 100,
            fontStyle: "italic",
            letterSpacing: "0.15em",
            lineHeight: 1.8,
            textShadow: "0 0 2px #fff, 0 0 8px #bdbdbd, 0 1px 0 #757575",
            filter: "blur(0.2px) contrast(1.2)",
            maxWidth: "30vw",
            transform: "translateY(60px)",
            background: "linear-gradient(180deg, #1a1a2a22 40%, transparent 100%)",
            borderRadius: "0.7em",
            padding: "0.3em 0.8em",
            boxShadow: "0 0 8px 1px #2224 inset",
            mixBlendMode: "screen"
          }}
        >
          &ldquo;All that is gold does not glitter,<br />
          Not all those who wander are lost.&rdquo;
        </p>
      </div>
    </section>
  );
}