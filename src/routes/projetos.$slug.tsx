import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { FinalCta } from "@/components/site/FinalCta";
import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { getProject } from "@/data/site";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.project ? `${loaderData.project.name} — Projeto Pulso Urbano` : "Projeto não encontrado — Pulso Urbano";
    const description = loaderData?.project?.description ?? "Detalhes de projeto do Ponto de Cultura Pulso Urbano.";
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
  const { project } = Route.useLoaderData();
  const lightbox = useLightbox(project.gallery);

  return (
    <>
      <section className="relative min-h-[78dvh] overflow-hidden bg-ink text-ink-foreground">
        <img src={project.image.src} alt={project.image.alt} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-ink/74" aria-hidden="true" />
        <div className="absolute inset-0 urban-grid opacity-25" aria-hidden="true" />
        <div className="container-site relative flex min-h-[78dvh] items-end pb-12 pt-32">
          <div className="max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 border border-ink-line bg-ink-soft text-ink-foreground hover:bg-ink-line"><Link to="/projetos"><ArrowLeft aria-hidden="true" /> Voltar para projetos</Link></Button>
            <p className="label-text text-brand-secondary">Projeto</p>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight md:text-7xl">{project.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">{project.description}</p>
            <dl className="mt-8 grid gap-3 sm:grid-cols-4">
              {[{ label: "Público", value: project.audience }, { label: "Área", value: project.area }, { label: "Local", value: project.location }, { label: "Situação", value: project.status }].map((item) => <div key={item.label} className="rounded-lg border border-ink-line bg-ink-soft p-4"><dt className="label-text text-brand-primary">{item.label}</dt><dd className="mt-2 text-sm text-ink-muted">{item.value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>
      <section className="section-y bg-background">
        <div className="container-site grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <img src={project.gallery[1]?.src ?? project.image.src} alt={project.gallery[1]?.alt ?? project.image.alt} className="h-[28rem] w-full rounded-lg object-cover" loading="lazy" />
          <div>
            <SectionHeading label="Sobre o projeto" title="Sobre o projeto" />
            <div className="mt-5 grid gap-4 leading-8 text-muted-foreground">{project.longText.map((text) => <p key={text}>{text}</p>)}</div>
          </div>
        </div>
      </section>
      <section className="section-y bg-surface paper-grid">
        <div className="container-site">
          <SectionHeading label="Atividades" title="O que acontece no projeto" description="Oficinas e vivências editáveis, pensadas para receber novas modalidades de acordo com cada ciclo." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {project.activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <article key={activity.name} className="relative overflow-hidden rounded-lg border border-border bg-card p-4">
                  <div className="aspect-[16/10] overflow-hidden rounded-md"><img src={activity.image.src} alt={activity.image.alt} className="size-full object-cover" loading="lazy" /></div>
                  <div className="mt-4 flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-background"><Icon className="size-5 text-brand-primary" aria-hidden="true" /></span>
                    <div><h3 className="font-display text-lg font-black">{activity.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{activity.description}</p></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-y bg-ink text-ink-foreground">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading label="Metodologia" title="Aprender, experimentar, criar e compartilhar" dark />
            <div className="mt-8 grid gap-3">
              {["Aprender", "Experimentar", "Criar", "Compartilhar"].map((step, index) => <div key={step} className="flex gap-4 rounded-lg border border-ink-line bg-ink-soft p-4"><span className="font-display text-2xl font-black text-brand-primary">{String(index + 1).padStart(2, "0")}</span><p className="font-display text-lg font-black">{step}</p></div>)}
            </div>
          </div>
          <div>
            <SectionHeading label="Impacto" title="Indicadores do ciclo" dark />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {project.stats.map((stat) => <div key={stat.label} className="rounded-lg border border-ink-line bg-ink-soft p-5"><strong className="font-display text-4xl font-black text-ink-foreground">{stat.value}</strong><p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-ink-muted">{stat.label}</p></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading label="Galeria" title="Registros do projeto" />
          <div className="mt-10 grid auto-rows-[12rem] gap-3 md:grid-cols-4">
            {project.gallery.map((image, index) => <GalleryButton key={`${image.alt}-${index}`} image={image} onClick={() => lightbox.open(index)} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""} />)}
          </div>
        </div>
      </section>
      <section className="bg-surface py-16">
        <div className="container-site">
          <figure className="relative overflow-hidden rounded-lg border border-border bg-card p-8">
            <Quote className="absolute right-8 top-6 size-20 text-muted" aria-hidden="true" />
            <blockquote className="relative max-w-3xl font-display text-2xl font-black leading-tight text-foreground">“{project.quote}”</blockquote>
            <figcaption className="relative mt-5 text-sm font-bold uppercase tracking-[0.12em] text-brand-primary">{project.quoteAuthor}</figcaption>
          </figure>
        </div>
      </section>
      <FinalCta title="A cultura continua quando a gente participa." text="Conheça outros projetos, acompanhe os registros e fale com a equipe para fazer parte dessa construção." />
      <Lightbox images={project.gallery} index={lightbox.index} onClose={lightbox.close} onPrevious={lightbox.previous} onNext={lightbox.next} />
    </>
  );
}
