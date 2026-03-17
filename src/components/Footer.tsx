import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Activity, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary-dark text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-10">
            <Link href="#" className="inline-block group">
              <div className="flex flex-col leading-none">
                <span className="text-3xl md:text-4xl font-black tracking-tighter text-white italic transition-transform group-hover:scale-105 duration-300">
                  PRAV<span className="text-secondary">MIS</span>
                </span>
                <span className="text-[0.65rem] tracking-[0.4em] font-black uppercase text-accent mt-2">
                  Global Co.
                </span>
              </div>
            </Link>
            <p className="max-w-md text-blue-100/60 leading-relaxed font-medium text-lg">
              Empowering healthcare excellence since 2002. ISO Certified distributor of advanced life support technology and rapid ICU solutions.
            </p>
            <div className="flex gap-6">
              {[ShieldCheck, Activity, Award].map((Icon, i) => (
                <div key={i} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon size={28} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-10 pb-4 border-b border-white/10">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'About Us', 'Products', 'Turnkey Projects', 'Clients'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 hover:text-secondary font-bold transition-all flex items-center gap-3 group text-sm uppercase tracking-widest"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-10 pb-4 border-b border-white/10">HQ Reach</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent flex-shrink-0 border border-white/10">
                  <MapPin size={24} />
                </div>
                <span className="text-blue-100/70 font-bold leading-snug">6/201, Aditya Complex, <br /> Preet Vihar, Delhi - 110 092</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent flex-shrink-0 border border-white/10">
                  <Phone size={24} />
                </div>
                <a href="tel:01204101815" className="text-blue-100/90 font-black hover:text-secondary transition-colors text-xl">0120 4101815</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent flex-shrink-0 border border-white/10">
                  <Mail size={24} />
                </div>
                <a href="mailto:info@pravmis.com" className="text-blue-100/90 font-black hover:text-secondary transition-colors underline decoration-secondary decoration-4 underline-offset-8">info@pravmis.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[0.6rem] font-black text-white/30 uppercase tracking-[0.4em]">
          <p>&copy; {currentYear} PRAVMIS Global Co. | Hope for Life Through Technology</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
