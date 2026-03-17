"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Zap } from "lucide-react";

export default function TurnkeyProjects() {
  const highlightPoints = [
    { title: "Rapid Execution", desc: "Completed within 30 days during Corona Pandemic", icon: Zap },
    { title: "Advance Medical ICU", desc: "Motorized ICU beds, High-end Ventilators, Multi-para monitors", icon: ShieldCheck },
    { title: "Complete Setup", desc: "Inclusive of ABG Analysis, Defibrillators, and Central Monitoring", icon: Clock },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.65rem] uppercase tracking-[0.3em] mb-6">
              Project Lifecycle
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-10 leading-[1.1] tracking-tight">
              Rapid ICU <span className="text-secondary italic">Strategic</span> Delivery.
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-xl">
              We specialize in the complete setup of Advance Medical ICUs. Demonstrated exceptional capability by establishing functional ICU wards rapidly when the nation needed them the most.
            </p>

            <div className="space-y-8 mb-16">
              <div className="bg-primary p-12 rounded-[3rem] text-white shadow-[0_40px_80px_-15px_rgba(46,49,146,0.3)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-secondary/20 transition-all duration-700" />
                <p className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-secondary mb-4">Case Study #01</p>
                <h4 className="text-3xl font-black mb-2 tracking-tight">S.M.S. Medical College</h4>
                <p className="text-blue-200/80 font-bold mb-10 italic text-lg decoration-secondary/30 underline underline-offset-8">Advance Medical ICUs (18, 12 & 20 Beds)</p>
                <ul className="grid grid-cols-1 gap-6">
                  {highlightPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2.5 rounded-2xl text-secondary">
                        <pt.icon size={20} />
                      </div>
                      <div>
                        <span className="block font-black text-base tracking-tight">{pt.title}</span>
                        <span className="block text-sm text-blue-200/60 font-medium mt-1">{pt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white px-12 py-6 rounded-2xl font-black transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 group"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </motion.div>

          {/* Visual Showcase Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="/images/turnkey-1.jpg" 
                alt="ICU Setup 1" 
                className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-lg border-4 border-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop';
                }}
              />
              <img 
                src="/images/turnkey-2.jpg" 
                alt="ICU Setup 2" 
                className="w-full h-32 md:h-48 object-cover rounded-3xl shadow-lg border-4 border-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1382502690947-f58c70417acc?q=80&w=2070&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="space-y-4 mt-8 md:mt-16">
              <img 
                src="/images/turnkey-3.jpg" 
                alt="Equipment Setup" 
                className="w-full h-32 md:h-48 object-cover rounded-3xl shadow-lg border-4 border-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://plus.unsplash.com/premium_photo-1661667468641-52b834925eaf?q=80&w=2070&auto=format&fit=crop';
                }}
              />
              <img 
                src="/images/turnkey-4.jpg" 
                alt="Monitoring Station" 
                className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-lg border-4 border-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2021&auto=format&fit=crop';
                }}
              />
            </div>
            {/* Background Blob behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-100 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
