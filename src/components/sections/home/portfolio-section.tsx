import PortfolioCard from "@/components/portfolio-card";
import { FEATURED_PROJECTS } from "@/content/portfolio";
import Link from "next/dist/client/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent" id="portfolio">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">Featured Projects</h2>
          <p className="max-w-sm sm:ml-auto">A curated selection of my recent work, showcasing creativity and skills in digital design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {FEATURED_PROJECTS.map((item, index) => (
            <div key={index} className={index % 2 === 1 ? "md:mt-20" : ""}>
              <PortfolioCard card={item} />
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm hover:text-accent-foreground transition-colors">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
