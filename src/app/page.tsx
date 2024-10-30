"use client";

import Head from 'next/head';
import { FC, useEffect, useRef } from 'react';

const Home: FC = () => {
  const trailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!trailContainerRef.current) return;

      // Create a new line element for the mouse trail effect
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
        <h1 className="text-4xl font-bold mb-8">DataEcht</h1>

        {/* SVG Text Animation for "Coming Soon" */}
        <svg className="text-line" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            Coming Soon
          </text>
        </svg>
      </main>
      <footer className="p-4 text-center text-sm opacity-75 animate-fadeIn absolute bottom-5">
        <p>founder@dataecht.com</p>
      </footer>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

        /* SVG Text Animation */
        .text-line {
          width: 100%;
          max-width: 80vw;
          height: auto;
          stroke: white;
          stroke-width: 3;
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: dash 8s linear infinite 0.5s, filling 8s ease-in infinite 0.5s;
          overflow: visible;
        }

        .text-line text {
          font-size: 10vw;
          font-family: Helvetica, Arial, sans-serif;
          font-weight: normal;
          font-style: normal;
        }

        /* Mouse trail lines */
        .trail-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .trail-line {
          position: absolute;
          width: 10px;
          height: 2px;
          background-color: white;
          transform: rotate(45deg);
          opacity: 1;
          animation: lineFade 0.6s forwards ease-in-out;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes filling {
          0%, 90% {
            fill: white;
            fill-opacity: 0;
          }
          100% {
            fill: white;
            fill-opacity: 1;
          }
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
