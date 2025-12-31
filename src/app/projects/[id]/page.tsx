import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";

export async function generateStaticParams() {
  return PORTFOLIO_CONTENT.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ from?: string }> }) {
  const { id } = await params;
  const { from } = await searchParams;
  const project = PORTFOLIO_CONTENT.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Determine back link based on where the user came from
  const backLink = from === "all-projects" ? "/projects" : "/#portfolio";
  const backText = from === "all-projects" ? "Back to All Projects" : "Back to Projects";

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href={backLink} className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {backText}
        </Link>

        <div className="mt-12 space-y-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Using the ImageGallery component */}
          {project.gallery && project.gallery.length > 0 && <ImageGallery images={project.gallery} projectName={project.name} />}

          {project.videos && project.videos.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Project Showcase</h3>
              {project.videos.map((video, idx) => (
                <div key={idx} className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                  <video className="w-full h-full object-contain" controls preload="metadata">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
