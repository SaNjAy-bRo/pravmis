"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Handshake, ShieldAlert } from "lucide-react";

export default function About() {
  const values = [
    { title: "Efficiency", icon: TrendingUp },
    { title: "Consistency", icon: CheckCircle2 },
    { title: "Honesty", icon: Handshake },
    { title: "Integrity", icon: ShieldAlert },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image/Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(46,49,146,0.15)] border-[12px] border-slate-50/50">
              <img
                src="/images/about-medical.jpg" 
                alt="Pravmis Global Excellence"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 right-8 z-30 bg-secondary p-8 rounded-[2rem] shadow-2xl shadow-secondary/30">
                <p className="text-6xl font-black text-primary tracking-tighter italic">22+</p>
                <p className="text-xs font-black text-primary/70 uppercase tracking-[0.25em] mt-2">Years of Trust</p>
              </div>
            </div>
            
            {/* Background decorative square */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-2/3 h-2/3 bg-slate-100 rounded-[3rem]" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.65rem] uppercase tracking-[0.3em] mb-6">
              Establish Since 2002
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-10 leading-[1.1] tracking-tight">
              Pioneering <span className="text-secondary italic">Healthcare</span> Excellence.
            </h2>
            <div className="space-y-8 text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
              <p>
                Established in India, <span className="text-primary font-black">PRAVMIS Global Co.</span> has been dedicated to serving the medical fraternity for over two decades. We are not just suppliers; we are architects of clinical precision.
              </p>
              <p>
                Our expertise spans Difficult Airway Management, Anesthesia, Tourniquet Systems, and Military Medical Products. We proudly represent world leaders like Origin Medical Devices (USA) and IMT Medical.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-5 bg-slate-50 p-6 rounded-[2rem] border border-slate-100/80 hover:border-secondary/50 group transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    <v.icon size={24} />
                  </div>
                  <span className="font-black text-slate-800 text-xs uppercase tracking-widest">{v.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
