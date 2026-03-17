"use client";

import { motion } from "framer-motion";

export default function InfinityAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none overflow-hidden z-20">
      <svg
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[120%] h-auto max-w-none md:w-[90%]"
      >
        {/* Outer Glow path - very thick */}
        <motion.path
          d="M100,150 C100,30 250,30 300,150 C350,270 500,270 500,150 C500,30 350,30 300,150 C250,270 100,270 100,150 Z"
          stroke="url(#infinity-gradient)"
          strokeWidth="24"
          strokeLinecap="round"
          className="blur-2xl opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Middle Glow path */}
        <motion.path
          d="M100,150 C100,30 250,30 300,150 C350,270 500,270 500,150 C500,30 350,30 300,150 C250,270 100,270 100,150 Z"
          stroke="url(#infinity-gradient)"
          strokeWidth="12"
          strokeLinecap="round"
          className="blur-md opacity-50"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Main animated path - thick and bold */}
        <motion.path
          d="M100,150 C100,30 250,30 300,150 C350,270 500,270 500,150 C500,30 350,30 300,150 C250,270 100,270 100,150 Z"
          stroke="url(#infinity-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <defs>
          <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4068ff" />
            <stop offset="50%" stopColor="#ccff00" />
            <stop offset="100%" stopColor="#4068ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
