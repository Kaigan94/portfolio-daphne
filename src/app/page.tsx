import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
