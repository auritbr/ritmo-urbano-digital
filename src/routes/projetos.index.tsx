import { ArrowRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { ProjectFeature } from "@/components/site/Cards";
import { FinalCta } from "@/components/site/FinalCta";
import { InternalHero } from "@/components/site/InternalHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { images, projects } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/projetos/")({
  head: () => pageMeta("Projetos — Pulso Urbano", "Conheça as iniciativas que unem cultura, formação, arte, território e transformação social.", "/projetos"),
  component: ProjetosPage,
});

const steps = ["Escuta", "Planejamento", "Formação", "Realização", "Registro", "Impacto"];

function ProjetosPage() {
  const [first, second, third] = projects;
  if (!first || !second || !third) return null;

  return (
    <>
      <InternalHero label="Projetos" title="Projetos" description="Conheça as iniciativas que unem cultura, formação, arte, território e transformação social." image={images.hero} />
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading label="Iniciativas" title="Três frentes, uma mesma cultura em movimento" description="Cada projeto tem linguagem própria, mas todos partem da escuta comunitária, da formação continuada e do compromisso com o território." />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <ProjectFeature project={first} featured />
            <div className="grid gap-5"><ProjectFeature project={second} /><ProjectFeature project={third} /></div>
          </div>
        </div>
      </section>
      <section className="section-y bg-ink text-ink-foreground">
        <div className="container-site">
          <SectionHeading label="Metodologia" title="Como desenvolvemos nossos projetos" description="Cada ciclo é pensado para ser viável, cuidadoso, documentado e conectado às necessidades reais do território." dark />
          <div className="mt-10 grid gap-3 md:grid-cols-6">
            {steps.map((step, index) => (
              <article key={step} className="relative rounded-lg border border-ink-line bg-ink-soft p-5">
                <span className="font-display text-3xl font-bold text-brand-primary">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-display text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">Etapa acompanhada pela equipe para garantir coerência pedagógica, produção e memória.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="rounded-lg border border-border bg-card p-5">
              <p className="label-text text-brand-primary">{project.area}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold">{project.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <Button asChild variant="link" className="mt-4 px-0 font-display font-bold"><Link to="/projetos/$slug" params={{ slug: project.slug }}>Conhecer projeto <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          ))}
        </div>
      </section>
      <FinalCta title="Projetos são pontes entre cultura e futuro." text="Conheça as ações, acompanhe os registros e converse com a equipe para construir novas parcerias." />
    </>
  );
}
