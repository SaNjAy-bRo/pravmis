import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ProductsGrid from "@/components/ProductsGrid";
import ProductShowcase from "@/components/ProductShowcase";
import TurnkeyProjects from "@/components/TurnkeyProjects";
import ClientsMarquee from "@/components/ClientsMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <ProductsGrid />
      <ProductShowcase />
      <TurnkeyProjects />
      <ClientsMarquee />
      <Footer />
    </main>
  );
}
