"use client"; // Treat this entire component as a client component

import Head from 'next/head';
import { FC, useEffect, useRef } from 'react';

const Home: FC = () => {
  const trailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!trailContainerRef.current) return;

      // Create a new dot element for the mouse trail effect
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;

      // Append the dot to the trail container
      trailContainerRef.current.appendChild(dot);

      // Remove the dot after animation ends (0.5s)
      setTimeout(() => {
        if (trailContainerRef.current && dot) {
          trailContainerRef.current.removeChild(dot);
        }
      }, 500); // Ensure each dot disappears after 0.5s
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="container bg-black text-white font-poppins overflow-hidden relative">
      <Head>
        <title>DataEcht - Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      {/* Mouse trail container */}
      <div ref={trailContainerRef} className="trail-container absolute inset-0 pointer-events-none"></div>

      <main className="flex flex-col items-center justify-center text-center z-10 w-full h-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">DataEcht</h1>

        {/* SVG Text Animation for "Coming Soon" */}
        <svg className="text-line" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            Coming Soon
          </text>
        </svg>
      </main>
      <footer className="absolute bottom-5 w-full text-center text-sm opacity-75 animate-fadeIn">
        <p>Email: founder@dataecht.com</p>
      </footer>
      <style jsx global>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        /* SVG Text Animation */
        .text-line {
          width: 100%;
          max-width: 80vw;
          height: auto;
          stroke: white;
          stroke-width: 3;
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: dashFillEaseOut 10s ease-in-out infinite;
          overflow: visible;
        }

        .text-line text {
          font-size: clamp(8vw, 10vw, 100px);
          font-family: Helvetica, Arial, sans-serif;
          font-weight: normal;
          font-style: normal;
        }

        /* Mouse trail dots */
        .trail-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .trail-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          opacity: 1;
          pointer-events: none;
          animation: dotFade 0.5s forwards ease-in-out;
        }

        @keyframes dashFillEaseOut {
          0% {
            stroke-dashoffset: 3000;
            fill-opacity: 0;
          }
          30% {
            stroke-dashoffset: 0;
            fill-opacity: 0;
          }
          50% {
            fill-opacity: 1;
          }
          80% {
            fill-opacity: 1;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 3000;
            fill-opacity: 0;
          }
        }

        @keyframes dotFade {
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
