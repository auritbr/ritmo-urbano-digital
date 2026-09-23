import { ArrowRight, Quote } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { FinalCta } from "@/components/site/FinalCta";
import { InternalHero } from "@/components/site/InternalHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { hipHopElements, images, timeline } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/quem-somos")({
  head: () => pageMeta("Quem Somos — Pulso Urbano", "Conheça a história, missão e atuação comunitária do Ponto de Cultura Pulso Urbano.", "/quem-somos"),
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <>
      <InternalHero label="Quem somos" title="Uma história construída com cultura, território e participação." description="O Pulso Urbano nasce da articulação entre artistas, educadores, coletivos e moradores que reconhecem o Hip Hop como ferramenta de formação e transformação." image={images.team} />
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading label="Nossa história" title="Conheça nossa história" align="center" description="Antes de ser uma instituição, o Pulso Urbano foi uma roda: gente reunida para criar, aprender, cuidar e ocupar a cidade com cultura." />
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <img src={images.hero.src} alt={images.hero.alt} className="h-[26rem] w-full rounded-lg object-cover" loading="lazy" />
            <div className="rounded-lg border border-border bg-card p-6">
              <Quote className="size-10 text-brand-primary" aria-hidden="true" />
              <p className="mt-4 text-lg leading-8 text-foreground">A cultura que praticamos nasce do encontro entre memória, linguagem, técnica e compromisso com o território.</p>
              <p className="mt-5 text-muted-foreground leading-8">Ao longo dos anos, a organização estruturou ciclos de oficinas, apresentações públicas, articulações com escolas, ações sociais e um acervo institucional aberto à consulta.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-y bg-ink text-ink-foreground">
        <div className="container-site">
          <SectionHeading label="Linha do tempo" title="Uma trajetória em movimento" dark />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {timeline.map((item) => (
              <article key={item.year} className="relative border-l border-ink-line pl-5">
                <span className="absolute -left-2 top-0 size-4 rounded-full bg-brand-primary" aria-hidden="true" />
                <strong className="font-display text-5xl font-black text-ink-outline">{item.year}</strong>
                <h3 className="mt-4 font-display text-xl font-black text-ink-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading label="Princípios" title="Missão, visão e valores" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="rounded-lg border border-border bg-card p-6 lg:row-span-2">
              <p className="label-text text-brand-primary">Missão</p>
              <h3 className="mt-4 font-display text-2xl font-black">Fortalecer pessoas e territórios pela cultura Hip Hop.</h3>
              <p className="mt-4 leading-7 text-muted-foreground">Promover formação, criação e circulação cultural com responsabilidade, escuta e participação comunitária.</p>
            </article>
            <article className="rounded-lg border border-border bg-ink p-6 text-ink-foreground lg:col-span-2">
              <p className="label-text text-brand-secondary">Visão</p>
              <h3 className="mt-4 font-display text-2xl font-black">Ser referência em práticas culturais urbanas que unem educação, memória e transformação social.</h3>
            </article>
            <article className="rounded-lg border border-border bg-card p-6 lg:col-span-2">
              <p className="label-text text-brand-primary">Valores</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Cultura", "Diversidade", "Respeito", "Participação", "Educação", "Território", "Transformação social"].map((value) => <span key={value} className="rounded-full border border-border bg-background px-3 py-2 text-sm font-bold">{value}</span>)}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section-y bg-background">
        <div className="container-site grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <SectionHeading label="Hip Hop como ferramenta" title="Educação, juventude e território no mesmo compasso" description="O Hip Hop organiza uma pedagogia da presença: a palavra vira autoria, o som vira pesquisa, o corpo vira linguagem e o muro vira memória pública." />
            <Button asChild className="mt-6 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90"><Link to="/projetos">Conheça os projetos <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {hipHopElements.map((item) => {
              const Icon = item.icon;
              return <article key={item.name} className="rounded-lg border border-border bg-card p-5"><Icon className="size-7 text-brand-primary" aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-black">{item.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p></article>;
            })}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
