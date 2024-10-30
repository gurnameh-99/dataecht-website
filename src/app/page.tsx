"use client";

import Head from 'next/head';
import { FC, useEffect, useRef } from 'react';

const Home: FC = () => {
  const trailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!trailContainerRef.current) return;

      // Create a new line element
      const line = document.createElement("div");
      line.className = "trail-line";
      line.style.left = `${event.clientX}px`;
      line.style.top = `${event.clientY}px`;

      // Append to container
      trailContainerRef.current.appendChild(line);

      // Remove the line after animation
      setTimeout(() => {
        if (trailContainerRef.current) {
          trailContainerRef.current.removeChild(line);
        }
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white font-poppins overflow-hidden relative">
      <Head>
        <title>DataEcht - Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div ref={trailContainerRef} className="trail-container absolute inset-0 pointer-events-none"></div>
      <main className="flex flex-col items-center justify-center z-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">DataEcht</h1>
        <h2 className="text-5xl sm:text-8xl font-semibold animate-stroke">Coming Soon</h2>
      </main>
      <footer className="p-2 sm:p-4 text-center text-xs sm:text-sm opacity-75 animate-fadeIn absolute bottom-5">
        {/*on clicking mail redirect to mail*/}

        <p><a href="mailto:founder@dataecht.com">founder@dataecht.com</a></p>
      </footer>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

        /* Infinite Stroke text animation */
        .animate-stroke {
          position: relative;
          color: transparent;
          -webkit-text-stroke: 1px white;
          animation: textStroke 3s ease infinite;
        }

        @keyframes textStroke {
          0% {
            -webkit-text-stroke: 1px white;
          }
          50% {
            -webkit-text-stroke: 1px transparent;
          }
          100% {
            -webkit-text-stroke: 1px white;
          }
        }

        /* Mouse trail lines */
        .trail-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .trail-line {
          position: absolute;
          width: 8px;
          height: 1.5px;
          background-color: white;
          transform: rotate(45deg);
          opacity: 1;
          animation: lineFade 0.6s forwards ease-in-out;
        }

        @keyframes lineFade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
