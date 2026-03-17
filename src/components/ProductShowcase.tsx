"use client";

import { motion } from "framer-motion";

export default function ProductShowcase() {
  const showcaseImages = [
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.03 PM.jpeg", alt: "Medical Solution 1" },
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.04 PM.jpeg", alt: "Medical Solution 2" },
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.06 PM.jpeg", alt: "Medical Solution 3" },
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.11 PM.jpeg", alt: "Medical Solution 4" },
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.21 PM.jpeg", alt: "Medical Solution 5" },
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.36 PM.jpeg", alt: "Medical Solution 6" },
    { src: "/images/WhatsApp Image 2025-12-18 at 12.36.50 PM.jpeg", alt: "Medical Solution 7" },
    { src: "/images/laryngoscope.png", alt: "Laryngoscope" }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.65rem] uppercase tracking-[0.3em] mb-6"
          >
            Product Gallery
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter">
            Our <span className="text-secondary italic">Medical</span> Solutions in Action.
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            A comprehensive look at our high-precision medical equipment and clinical integrations across healthcare facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-black uppercase text-xs tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
