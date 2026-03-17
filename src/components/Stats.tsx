"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Heart } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "Years of Excellence", value: "22+", icon: Clock },
    { label: "Certified Quality", value: "ISO", icon: Award },
    { label: "Trusted Partners", value: "100+", icon: Users },
    { label: "Lives Touched", value: "Millions", icon: Heart },
  ];

  return (
    <section className="relative z-30 md:-mt-12 mb-12 -mt-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-slate-100 p-6 md:p-12 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-2 md:space-y-3"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary-electric/5 flex items-center justify-center text-primary-electric group-hover:scale-110 transition-transform">
                  <stat.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-black text-primary-dark mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
