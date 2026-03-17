"use client";

import { motion } from "framer-motion";
import { Stethoscope, Activity, FileDigit, Settings2, ArrowRight } from "lucide-react";

export default function ProductsGrid() {
  const products = [
    {
      title: "Ventilators & Analyzers",
      description: "Representing Origin Medical Devices for PANTHER critical care ventilators and IMT Medical flow analyzers like CITREX and PF300.",
      icon: Activity,
      color: "from-blue-500 to-cyan-400",
      bgClass: "bg-blue-50/50",
      iconCol: "text-blue-500",
      delay: 0.1
    },
    {
      title: "Difficult Airway & Scopes",
      description: "Assembled in India products: Difficult Airway Carts, i VIEW Flexible Intubation Scopes, and i SCOPE Video Laryngoscopes.",
      icon: Stethoscope,
      color: "from-teal-500 to-emerald-400",
      bgClass: "bg-teal-50/50",
      iconCol: "text-[#8DC63F]",
      image: "/images/laryngoscope.png",
      delay: 0.2
    },
    {
      title: "Alveo Lung Simulation",
      description: "Advanced physiological lung simulation adapting mechanics from pediatric to adult, including spontaneous breathing and leak simulation.",
      icon: FileDigit,
      color: "from-orange-500 to-amber-400",
      bgClass: "bg-orange-50/50",
      iconCol: "text-orange-500",
      delay: 0.3
    },
    {
      title: "Repair & Support Network",
      description: "Nationwide support network in partnership with LT technologies GmbH & Co. KG Germany for Endoscopes, Cameras, and Instruments repair.",
      icon: Settings2,
      color: "from-purple-500 to-indigo-400",
      bgClass: "bg-purple-50/50",
      iconCol: "text-purple-500",
      delay: 0.4
    }
  ];

  return (
    <section id="products" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.65rem] uppercase tracking-[0.3em] mb-6"
          >
            Clinical Portfolio
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter"
          >
            Precision <span className="text-secondary italic">Medical</span> Solutions.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-medium"
          >
            Representing global leaders and manufacturing high-quality solutions for critical care, diagnostics, and physiological modeling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: prod.delay }}
              className={`group relative p-12 rounded-[3rem] bg-white border border-slate-100 hover:border-secondary/50 hover:shadow-[0_40px_80px_-15px_rgba(195,224,49,0.15)] transition-all duration-700 hover:-translate-y-3`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-primary/5 text-primary group-hover:bg-secondary group-hover:text-primary transition-all duration-500`}>
                    <prod.icon size={32} />
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-slate-200 group-hover:text-secondary transition-colors">
                    REF-0{idx + 1}
                  </div>
                </div>

                {(prod as any).image && (
                  <div className="mb-10 rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100/50 aspect-video flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                    <img 
                      src={(prod as any).image} 
                      alt={prod.title} 
                      className="w-full h-full object-contain p-6 scale-95 group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                )}
                
                <h4 className="text-3xl font-black text-primary mb-6 tracking-tight">
                  {prod.title}
                </h4>
                
                <p className="text-slate-500 leading-relaxed mb-12 font-medium text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                  {prod.description}
                </p>

                <a href="#contact" className="inline-flex items-center gap-3 text-xs font-black text-primary hover:text-secondary transition-all group/link uppercase tracking-[0.25em]">
                  Technical Specs
                  <ArrowRight size={18} className="translate-x-0 group-hover/link:translate-x-2 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
