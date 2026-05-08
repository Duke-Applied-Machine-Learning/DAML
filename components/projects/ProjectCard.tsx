import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const screenshotLabel =
    project.screenshotAlt ?? `Screenshot placeholder for “${project.title}”`;

  const showScreenshot = project.hasScreenshot !== false;

  return (
    <Card className="card-elevated flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-0 h-full transition-transform duration-200 ease-out hover:-translate-y-1">
      {showScreenshot && (
        <div className="relative h-48 md:h-60 w-full bg-slate-100/80 flex items-center justify-center text-xs md:text-sm text-slate-500 overflow-hidden">
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
            }}
          />
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={screenshotLabel}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <span className="relative z-10 px-4 text-center">{screenshotLabel}</span>
          )}
        </div>
      )}

      {/* Text content */}
      <div
        className={cn(
          "flex flex-col gap-4 px-8 pb-8 md:px-9 md:pb-9",
          showScreenshot ? "pt-6 md:pt-7" : "pt-8 md:pt-9"
        )}
      >
        <div className="space-y-3">
          <CardTitle className="h3 text-slate-900">{project.title}</CardTitle>
          {project.outcome && (
            <p className="body">{project.outcome}</p>
          )}
        </div>

        {project.stack && (
          <p className="meta">Stack: {project.stack}</p>
        )}

        {(project.meta || project.team || project.repoUrl) && (
          <div className="mt-2 flex items-start justify-between gap-4 meta">
            <div className="space-y-1.5">
              {project.meta && (
                <p className="mb-0 font-semibold">{project.meta}</p>
              )}
              {project.team && (
                <p className="mb-0">Team: {project.team}</p>
              )}
            </div>
            {project.repoUrl && (
              <Button
                asChild
                variant="outline"
                className="mt-1 h-8 md:h-9 rounded-full px-3 md:px-4 text-[11px] md:text-xs font-medium"
              >
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  View repo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

