"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden bg-primary pt-32 pb-48 px-4">
      {/* Background with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center scale-105" />
        
        {/* Animated decorative circles */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-secondary mb-12 text-[0.65rem] md:text-xs font-black uppercase tracking-[0.4em] shadow-2xl"
          >
            <ShieldCheck size={18} className="text-secondary" />
            <span>ISO 9001:2015 & 13485:2016 Certified Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-black text-white leading-[0.95] tracking-tighter mb-10"
          >
            Delivering <span className="text-secondary italic">Hope for Life</span> <br /> 
            <span className="text-blue-200">Through</span> Technology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-3xl text-blue-100/60 mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Pioneering advanced medical solutions for Critical Care, Anesthesia, and Physiologic simulation since 2002.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <a
              href="#products"
              className="w-full sm:w-auto px-12 py-6 bg-secondary hover:bg-[#a3e64f] text-primary font-black rounded-2xl shadow-[0_25px_50px_-12px_rgba(141,198,63,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group text-lg"
            >
              <span>Explore Portfolio</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-12 py-6 bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-4 group text-lg"
            >
              Learn About Turnkey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
