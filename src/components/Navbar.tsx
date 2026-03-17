"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-xl shadow-blue-900/5 py-3 border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="group relative">
          <div className="flex flex-col leading-none">
            <span className={`text-2xl md:text-3xl font-black tracking-tighter italic transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
              PRAV<span className="text-secondary">MIS</span>
            </span>
            <span className={`text-[0.6rem] tracking-[0.35em] font-black uppercase mt-1 transition-colors duration-300 ${scrolled ? "text-accent" : "text-blue-200"}`}>
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
            className={`px-7 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10 ${
              scrolled 
                ? "bg-primary text-white hover:bg-primary-dark" 
                : "bg-white text-primary hover:bg-blue-50"
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
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-50 bg-primary flex flex-col p-8 lg:hidden"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-black italic text-white">
              PRAV<span className="text-secondary">MIS</span>
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-white/90 hover:text-secondary transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:info@pravmis.com"
              className="mt-4 bg-secondary text-primary px-8 py-5 rounded-2xl font-black text-center text-xl shadow-2xl shadow-secondary/20"
            >
              Request Quote
            </a>
          </div>
          <div className="mt-auto text-blue-200/50 font-bold tracking-widest text-xs uppercase">
            &copy; {new Date().getFullYear()} PRAVMIS Global Co.
          </div>
        </motion.div>
      )}
    </header>
  );
}
