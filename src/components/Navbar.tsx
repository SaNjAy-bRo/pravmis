"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Turnkey Projects", href: "#projects" },
    { name: "Clients", href: "#clients" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[999] transition-all duration-500 py-4 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-blue-900/5 py-3 border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="group relative">
            <div className="flex flex-col leading-none">
              <span className={`text-2xl md:text-3xl font-black tracking-tighter italic transition-colors duration-300 ${scrolled ? "text-primary-electric" : "text-white"}`}>
                PRAV<span className="text-secondary">MIS</span>
              </span>
              <span className={`text-[0.6rem] tracking-[0.35em] font-black uppercase mt-1 transition-colors duration-300 ${scrolled ? "text-accent" : "text-primary-electric/80"}`}>
                Global Co.
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-secondary relative group ${
                  scrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex">
            <a
              href="mailto:info@pravmis.com"
              className={`px-7 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg ${
                scrolled 
                  ? "bg-primary-electric text-white hover:bg-primary-dark shadow-primary-electric/20" 
                  : "bg-secondary text-primary-dark hover:bg-white shadow-secondary/20"
              }`}
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-[#0a192f] flex flex-col p-8 lg:hidden h-screen w-full overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16 px-2">
              <span className="text-3xl font-black italic text-white tracking-tighter">
                PRAV<span className="text-secondary">MIS</span>
              </span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 items-start px-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black text-white hover:text-secondary transition-all uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-10"
              >
                <a
                  href="mailto:info@pravmis.com"
                  className="block w-full bg-secondary text-primary-dark px-8 py-6 rounded-[2rem] font-black text-center text-xl shadow-2xl shadow-secondary/30 hover:bg-white transition-all active:scale-95"
                >
                  Request Quote
                </a>
              </motion.div>
            </nav>

            <div className="mt-auto px-2 pb-8 border-t border-white/5 pt-12 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-secondary/80 font-bold tracking-widest text-[0.65rem] uppercase">
                <span>ISO Certified</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>Established 2002</span>
              </div>
              <div className="text-white/30 font-bold tracking-widest text-[0.6rem] uppercase">
                &copy; {new Date().getFullYear()} PRAVMIS Global Co.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
