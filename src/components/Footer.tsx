import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Activity, Award, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-electric/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Centered Brand Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6 group cursor-pointer">
            <span className="text-4xl md:text-6xl font-black italic tracking-tighter transition-transform group-hover:scale-105 inline-block">
              PRAV<span className="text-secondary">MIS</span>
            </span>
            <div className="text-[0.65rem] md:text-sm tracking-[0.5em] font-black uppercase mt-2 text-primary-electric/80">
              Global Co.
            </div>
          </div>
          <p className="max-w-xl text-blue-100/40 text-sm md:text-base font-medium leading-relaxed">
            Leading the way in medical excellence since 2002. Delivering high-precision clinical solutions across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mb-20 border-t border-white/5 pt-20">
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Turnkey Projects', 'Clients'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-blue-100/60 hover:text-secondary transition-colors font-bold text-sm uppercase tracking-widest">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-blue-100/30 text-[0.6rem] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <MapPin size={12} className="text-secondary" /> Corporate Office
                </p>
                <p className="text-blue-100/80 font-bold leading-relaxed text-sm">
                  6/201, Aditya Complex, <br />
                  Preet Vihar, Delhi - 110 092
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-blue-100/30 text-[0.6rem] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Mail size={12} className="text-secondary" /> Email Us
                </p>
                <a href="mailto:info@pravmis.com" className="text-xl font-black hover:text-secondary transition-colors text-white tracking-tight italic">info@pravmis.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter/Action */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
            <h4 className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-8">Certification</h4>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 w-full group hover:border-secondary/30 transition-colors">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-primary-dark transition-all">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-white">ISO 9001:2015</p>
                  <p className="text-[0.6rem] text-blue-100/40 font-bold uppercase tracking-widest">Certified Excellence</p>
                </div>
              </div>
              <p className="text-xs text-blue-100/40 font-medium leading-relaxed">
                Adhering to international standards for medical device quality management and distribution.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center text-center gap-8">
          <div className="flex gap-6">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 hover:bg-secondary hover:text-primary-dark hover:scale-110 transition-all duration-300">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[0.65rem] font-black text-blue-100/20 uppercase tracking-[0.5em]">
              &copy; {currentYear} PRAVMIS Global Co. | All Rights Reserved
            </p>
            <div className="flex gap-8 text-[0.6rem] font-bold uppercase tracking-[0.4em] text-blue-100/10">
              <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-secondary transition-colors">Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
