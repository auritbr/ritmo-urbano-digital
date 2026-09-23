import { ArrowRight, ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { InternalHero } from "@/components/site/InternalHero";
import { SoundWave, UrbanLines, VinylOutline } from "@/components/site/UrbanGraphics";
import { Button } from "@/components/ui/button";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { images, projects, type Project } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/projetos/")({
  head: () =>
    pageMeta(
      "Projetos — Pulso Urbano",
      "Conheça as iniciativas que unem cultura, formação, arte, território e transformação social.",
      "/projetos",
    ),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <>
      <InternalHero
        label="Projetos"
        title="Projetos"
        description="Conheça as iniciativas que unem cultura, formação, arte, território e transformação social."
        image={images.hero}
      />
      <section className="bg-background py-14 md:py-16">
        <div className="container-site mx-auto max-w-[51.25rem] text-center">
          <p className="label-text text-brand-primary">Nossos projetos</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Cultura em movimento
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            Projetos que unem cultura, formação, território e transformação social em percursos
            construídos com a comunidade.
          </p>
          <SoundWave className="mx-auto mt-5 w-24 text-brand-primary" />
        </div>
      </section>
      <section className="overflow-hidden bg-surface py-14 md:py-20">
        <div className="container-site grid gap-20 md:gap-24">
          {projects.map((project, index) => (
            <ProjectEditorial key={project.slug} project={project} index={index} />
          ))}
          <nav className="flex items-center justify-center gap-2" aria-label="Paginação de projetos">
            <IconCircleButton label="Página anterior" size="md" variant="glass-light" disabled>
              <ChevronLeft aria-hidden="true" />
            </IconCircleButton>
            <IconCircleButton label="Página 1" size="md" variant="solid" aria-current="page">
              1
            </IconCircleButton>
            <IconCircleButton label="Próxima página" size="md" variant="glass-light" disabled>
              <ChevronRight aria-hidden="true" />
            </IconCircleButton>
          </nav>
        </div>
      </section>
    </>
  );
}

function ProjectEditorial({ project, index }: { project: Project; index: number }) {
  const imageFirst = index % 2 === 1;

  return (
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
      <div className={imageFirst ? "md:order-2" : ""}>
        <p className="label-text text-brand-primary">
          {String(index + 1).padStart(2, "0")} · {project.area}
        </p>
        <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-bold leading-[1.08] text-foreground md:text-4xl lg:text-5xl">
          {project.name}
        </h2>
        <p className="mt-4 max-w-xl text-lg font-medium leading-7 text-foreground">{project.summary}</p>
        <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{project.description}</p>
        <Button asChild variant="link" className="mt-5 h-auto px-0 font-display font-bold">
          <Link to="/projetos/$slug" params={{ slug: project.slug }}>
            Conhecer projeto <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
      <ProjectVisual project={project} index={index} imageFirst={imageFirst} />
    </article>
  );
}

function ProjectVisual({ project, index, imageFirst }: { project: Project; index: number; imageFirst: boolean }) {
  return (
    <div className={`relative mx-auto w-full max-w-[31rem] ${imageFirst ? "md:order-1" : ""}`}>
      <div className="relative aspect-square">
        <div
          className={`absolute overflow-hidden border border-border bg-card shadow-editorial ${
            index === 0
              ? "inset-[6%] rounded-full"
              : index === 1
                ? "inset-x-[4%] inset-y-[8%] rounded-bl-[45%] rounded-br-[12%] rounded-tl-[12%] rounded-tr-[45%]"
                : "inset-[7%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[18%] rounded-tr-[50%]"
          }`}
        >
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="size-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        {index === 0 ? (
          <VinylOutline className="absolute inset-0 size-full text-brand-primary" />
        ) : index === 1 ? (
          <>
            <SoundWave className="absolute bottom-[5%] left-0 w-36 text-brand-secondary" />
            <div className="absolute right-[2%] top-[8%] flex items-end gap-1" aria-hidden="true">
              {[5, 9, 14, 10, 16, 8].map((height, barIndex) => (
                <span key={`${height}-${barIndex}`} className="w-1.5 bg-brand-primary" style={{ height: `${height * 2}px` }} />
              ))}
            </div>
          </>
        ) : (
          <>
            <UrbanLines className="absolute bottom-[2%] right-0 w-40 text-brand-primary" />
            <MoveUpRight className="absolute left-[2%] top-[8%] size-12 text-brand-secondary" aria-hidden="true" />
            <div className="paper-grid absolute right-[2%] top-[5%] size-24 opacity-50" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}