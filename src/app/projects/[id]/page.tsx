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

  //* Individual Projects Page *//

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#portfolio" className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mt-12 space-y-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Only show gallery if images exist */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Gallery</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.slice(0, 2).map((img, idx) => (
                  <div key={idx} className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image src={img} alt={`${project.name} ${idx + 1}`} fill className="object-cover transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Only show videos if they exist */}
          {project.videos && project.videos.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Project Showcase</h3>
              {project.videos.map((video, idx) => (
                <div key={idx} className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                  <video className="w-full h-full object-cover" controls preload="metadata">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          )}
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
    </main>
  );
}
