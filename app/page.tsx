"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Navigation Menu */}
      <nav className="absolute top-8 right-8 z-30">
        <ul className="flex gap-8">
          <li>
            <Link 
              href="/projects"
              className="text-[8px] md:text-[10px] tracking-wider hover:opacity-100 transition-opacity duration-300"
              style={{
                color: "#e0e6f0",
                opacity: 0.7,
                fontFamily: "'Playfair Display', 'Zhi Mang Xing', serif, cursive",
                fontWeight: 100,
                fontStyle: "italic",
                letterSpacing: "0.15em",
                textShadow: "0 0 2px #fff, 0 0 8px #bdbdbd, 0 1px 0 #757575",
                filter: "blur(0.2px) contrast(1.2)",
              }}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>

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
          "All that is gold does not glitter,<br />
          Not all those who wander are lost."
        </p>
      </div>

      <style jsx>{`
        .light-container {
          position: relative;
          width: 80%;
          height: 60vh;
          overflow: hidden;
        }

        .light-beam {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 20%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.8) 80%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(2px);
          transform-origin: center;
          opacity: 0;
          box-shadow: 
            0 0 40px rgba(255, 255, 255, 0.6),
            0 0 60px rgba(255, 255, 255, 0.4),
            0 0 80px rgba(255, 255, 255, 0.2);
        }

        .tunnel-light {
          position: absolute;
          left: 50%;
          top: 5%;
          transform: translate(-50%, -50%);
          width: 1.6%;
          height: 1.6%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.9) 10%,
            rgba(255, 255, 255, 0.7) 30%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.2) 70%,
            rgba(255, 255, 255, 0.1) 85%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(4px);
          animation: 
            tunnelPulse 15s ease-in-out infinite,
            randomMove 15s ease-in-out infinite;
          mix-blend-mode: screen;
          border-radius: 50%;
          box-shadow: 
            0 0 10px rgba(255, 255, 255, 0.6),
            0 0 20px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(255, 255, 255, 0.2),
            0 0 40px rgba(255, 255, 255, 0.1);
        }

        /* Left side beams */
        .light-beam-1 {
          left: 10%;
          height: 100%;
          width: 2px;
          animation: beamFloatLeft1 15s ease-in-out infinite;
          animation-delay: 3s;
        }

        .light-beam-2 {
          left: 27%;
          height: 60%;
          width: 1.5px;
          animation: beamFloatLeft2 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        .light-beam-3 {
          left: 40%;
          height: 30%;
          width: 1px;
          animation: beamFloatLeft3 15s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Right side beams (mirrored) */
        .light-beam-4 {
          left: 60%;
          height: 30%;
          width: 1px;
          animation: beamFloatRight3 15s ease-in-out infinite;
          animation-delay: 1s;
        }

        .light-beam-5 {
          left: 73%;
          height: 60%;
          width: 1.5px;
          animation: beamFloatRight2 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        .light-beam-6 {
          left: 90%;
          height: 100%;
          width: 2px;
          animation: beamFloatRight1 15s ease-in-out infinite;
          animation-delay: 3s;
        }

        @keyframes tunnelPulse {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(0.6);
            filter: blur(4px) brightness(0.6);
          }
          25% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
            filter: blur(4px) brightness(1.2);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(0.9);
            filter: blur(4px) brightness(0.9);
          }
          75% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.1);
            filter: blur(4px) brightness(1.1);
          }
        }

        @keyframes randomMove {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
          }
          25% {
            transform: translate(-50%, -50%) translate(5px, -3px);
          }
          50% {
            transform: translate(-50%, -50%) translate(-4px, 4px);
          }
          75% {
            transform: translate(-50%, -50%) translate(3px, 2px);
          }
          100% {
            transform: translate(-50%, -50%) translate(0, 0);
          }
        }

        /* Left side animations */
        @keyframes beamFloatLeft1 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
            opacity: 0;
          }
          15%, 85% {
            transform: translateX(-15px) scaleY(1.2);
            opacity: 0.95;
          }
          50% {
            transform: translateX(0) scaleY(1);
            opacity: 1;
          }
        }

        @keyframes beamFloatLeft2 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
            opacity: 0;
          }
          15%, 85% {
            transform: translateX(-12px) scaleY(1.1);
            opacity: 0.9;
          }
          50% {
            transform: translateX(0) scaleY(1);
            opacity: 0.95;
          }
        }

        @keyframes beamFloatLeft3 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
            opacity: 0;
          }
          15%, 85% {
            transform: translateX(-10px) scaleY(1.1);
            opacity: 0.95;
          }
          50% {
            transform: translateX(0) scaleY(1);
            opacity: 1;
          }
        }

        /* Right side animations (mirrored) */
        @keyframes beamFloatRight1 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
            opacity: 0;
          }
          15%, 85% {
            transform: translateX(15px) scaleY(1.2);
            opacity: 0.95;
          }
          50% {
            transform: translateX(0) scaleY(1);
            opacity: 1;
          }
        }

        @keyframes beamFloatRight2 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
            opacity: 0;
          }
          15%, 85% {
            transform: translateX(12px) scaleY(1.1);
            opacity: 0.9;
          }
          50% {
            transform: translateX(0) scaleY(1);
            opacity: 0.95;
          }
        }

        @keyframes beamFloatRight3 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
            opacity: 0;
          }
          15%, 85% {
            transform: translateX(10px) scaleY(1.1);
            opacity: 0.95;
          }
          50% {
            transform: translateX(0) scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}