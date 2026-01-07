import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroHeader } from "@/components/header";

//* ALL Projects Page *//

export default function ProjectsPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-lg">Back to Home</span>
          </Link>

          <div className="mt-12 space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">All Projects</h1>
              <p className="text-xl text-muted-foreground">Explore my complete portfolio of design work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {PORTFOLIO_CONTENT.map((item, index) => (
                <div key={index} className={index % 2 === 1 ? "md:mt-20" : ""}>
                  <PortfolioCard card={item} source="all-projects" priority={index < 2} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
