"use client";

import { motion } from "framer-motion";

export default function ClientsMarquee() {
  const clients = [
    "AIIMS, New Delhi",
    "AFMC, Pune",
    "Army Hospital R&R",
    "BLK Super Speciality",
    "Command Hospital (CC)",
    "Medanta - The Medicity",
    "PGIMER Chandigarh",
    "Indraprastha Apollo",
    "Sir Ganga Ram Hospital",
    "National Trauma Center",
    "Fortis Escorts Heart",
    "Safdarjung Hospital",
  ];

  return (
    <section id="clients" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.65rem] uppercase tracking-[0.3em] mb-6"
        >
          Global Network
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-primary tracking-tighter"
        >
          Trusted by <span className="text-secondary italic">Industry</span> Leaders.
        </motion.h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-12">
          {clients.concat(clients).concat(clients).map((client, idx) => (
            <div 
              key={idx} 
              className="px-12 py-8 bg-slate-50 border border-slate-100/50 rounded-[2rem] text-slate-400 font-black text-2xl min-w-max hover:bg-primary/5 hover:text-primary hover:border-secondary/30 transition-all duration-500 grayscale hover:grayscale-0 flex items-center justify-center group/client"
            >
              <span className="opacity-40 group-hover/client:opacity-100 transition-opacity">{client}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
