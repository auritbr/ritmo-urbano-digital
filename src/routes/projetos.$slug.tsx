import { ArrowLeft, Grid3X3, MoveRight } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { FinalCta } from "@/components/site/FinalCta";
import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { SectionHeading } from "@/components/site/SectionHeading";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { getProject } from "@/data/site";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData, params }) => {
    const project = loaderData ? getProject(loaderData.slug) : undefined;
    const title = project
      ? `${project.name} — Projeto Pulso Urbano`
      : "Projeto não encontrado — Pulso Urbano";
    const description =
      project?.description ?? "Detalhes de projeto do Ponto de Cultura Pulso Urbano.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/projetos/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projetos/${params.slug}` }],
    };
  },
  component: ProjetoPage,
});

function ProjetoPage() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug);
  const lightbox = useLightbox(project?.gallery ?? []);

  if (!project) return null;

  return (
    <>
      <section className="relative min-h-[19rem] overflow-hidden bg-ink text-ink-foreground sm:min-h-[21rem] md:min-h-[24rem] lg:min-h-[26rem]">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/74" aria-hidden="true" />
        <div className="absolute inset-0 urban-grid opacity-25" aria-hidden="true" />
        <div className="container-site relative flex min-h-[19rem] items-end pb-7 pt-24 sm:min-h-[21rem] md:min-h-[24rem] md:pb-9 md:pt-28 lg:min-h-[26rem]">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <IconCircleButton asChild variant="glass-dark" size="md" label="Voltar para projetos">
                <Link to="/projetos">
                  <ArrowLeft
                    className="transition-transform group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </IconCircleButton>
              <Link
                to="/projetos"
                className="font-display text-sm font-semibold text-ink-foreground hover:text-brand-primary"
              >
                Voltar para projetos
              </Link>
            </div>
            <p className="label-text text-brand-secondary">Projeto</p>
            <h1 className="mt-2.5 max-w-[19ch] font-display text-[clamp(2rem,4vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.02em]">
              {project.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink-muted md:text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background py-14 md:py-16">
        <div className="container-site mx-auto max-w-[53.125rem] text-center">
          <SectionHeading label="Sobre o projeto" title={project.name} align="center" />
          <div className="mx-auto mt-5 grid max-w-[51.25rem] gap-4 text-base leading-8 text-muted-foreground md:text-lg">
            {project.longText.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="mx-auto mt-6 h-1 w-20 bg-brand-primary" aria-hidden="true" />
        </div>
      </section>
      <section className="bg-surface py-14 paper-grid md:py-16">
        <div className="container-site">
          <SectionHeading
            label="Atividades"
            title="O que acontece no projeto"
            description="Oficinas e vivências editáveis, pensadas para receber novas modalidades de acordo com cada ciclo."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ...project.activities,
              {
                name: "Registro e memória",
                description:
                  "Documentação dos processos, encontros e criações que constroem a trajetória do projeto.",
                icon: project.slug === "projeto-1" ? MoveRight : Grid3X3,
                image: project.image,
              },
            ]
              .slice(0, project.activities.length <= 3 ? 4 : 6)
              .map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <article
                    key={activity.name}
                    className="group relative min-h-52 overflow-hidden rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-sm font-bold text-brand-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`grid size-10 place-items-center border border-border text-brand-primary ${index % 3 === 0 ? "rounded-full" : index % 3 === 1 ? "rounded-tl-2xl rounded-br-2xl" : "rounded-md"}`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-lg font-bold uppercase leading-tight">
                      {activity.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {activity.description}
                    </p>
                    <div
                      className={`absolute bottom-0 left-5 right-5 h-1 transition-transform duration-300 group-hover:scale-x-105 ${index % 2 === 0 ? "bg-brand-primary" : "bg-brand-secondary"}`}
                      aria-hidden="true"
                    />
                  </article>
                );
              })}
          </div>
        </div>
      </section>
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading label="Registros" title="Galeria do projeto" />
          <div className="mt-10 grid auto-rows-[12rem] gap-3 md:grid-cols-4">
            {project.gallery.map((image, index) => (
              <GalleryButton
                key={`${image.alt}-${index}`}
                image={image}
                onClick={() => lightbox.open(index)}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>
      <FinalCta
        title="A cultura continua em movimento."
        text="Conheça outros projetos e converse com a equipe para fazer parte dessa construção coletiva."
      />
      <Lightbox
        images={project.gallery}
        index={lightbox.index}
        onClose={lightbox.close}
        onPrevious={lightbox.previous}
        onNext={lightbox.next}
      />
    </>
  );
}
