"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import InfinityAnimation from "./InfinityAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden bg-primary-dark pt-32 pb-48 px-4">
      {/* Background with Infinity Animation */}
      <div className="absolute inset-0 z-0 bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-electric/5 to-primary-dark" />
        <InfinityAnimation />
        
        {/* Animated decorative glows */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-primary-electric/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="max-w-5xl mx-auto text-center">

          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter"
            >
              Delivering <br />
              <span className="text-secondary italic">Hope for Life</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 inline-block"
            >
              <span className="text-2xl md:text-5xl lg:text-6xl font-bold text-primary-electric uppercase tracking-[0.3em] opacity-90">
                Through Technology
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-2xl text-blue-100/60 mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Pioneering advanced medical solutions for Critical Care, Anesthesia, and Physiologic simulation since 2002.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <a
              href="#products"
              className="w-full sm:w-auto px-12 py-6 bg-secondary hover:bg-white text-primary-dark font-black rounded-2xl shadow-[0_25px_50px_-12px_rgba(195,224,49,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group text-lg"
            >
              <span>Explore Service</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-12 py-6 bg-primary-electric/10 hover:bg-primary-electric/20 backdrop-blur-2xl border border-primary-electric/30 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-4 group text-lg"
            >
              Learn About Turnkey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
