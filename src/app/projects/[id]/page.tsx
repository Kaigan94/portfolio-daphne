import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return PORTFOLIO_CONTENT.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PORTFOLIO_CONTENT.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#portfolio" className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mt-12 space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2>About the Project</h2>
              <br />
              <p>
                This project showcases a comprehensive approach to modern web design and development. The focus was on creating an engaging user experience
                while maintaining clean, maintainable code and optimal performance.
              </p>
              <br />
              {/* <h2>Key Features</h2>
              <ul>
                <li>Responsive design that works seamlessly across all devices</li>
                <li>Optimized performance and loading times</li>
                <li>Modern UI/UX principles and accessibility standards</li>
                <li>Clean, maintainable codebase</li>
              </ul>

              <h2>Technologies Used</h2>
              <p>Built with modern web technologies including Next.js, TypeScript, and Tailwind CSS, ensuring a robust and scalable foundation.</p> */}
            </div>
            <Image src={project.img} alt={project.name} width={1200} height={800} className="rounded-lg w-full object-cover" />
          </div>

          {project.url !== "#" && (
            <div className="pt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                View Live Project
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
