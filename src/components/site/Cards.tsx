import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import type { NewsItem, Project } from "@/data/site";
import { team } from "@/data/site";

export function ProjectFeature({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-lg border border-border bg-card ${featured ? "md:grid md:grid-cols-[1.1fr_0.9fr]" : ""}`}>
      <div className={featured ? "aspect-[4/3] md:aspect-auto" : "aspect-[16/10]"}>
        <img src={project.image.src} alt={project.image.alt} className="size-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
      </div>
      <div className="relative p-5 md:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="label-text text-brand-primary">{project.category}</span>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{project.status}</span>
        </div>
        <h3 className="font-display text-2xl font-black leading-tight text-foreground">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
        <Button asChild variant="link" className="mt-5 px-0 font-display font-bold">
          <Link to="/projetos/$slug" params={{ slug: project.slug }}>
            Ver projeto <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function NewsCard({ item, compact = false }: { item: NewsItem; compact?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:-translate-y-1">
      <Link to="/noticias/$slug" params={{ slug: item.slug }} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className={compact ? "aspect-[16/10]" : "aspect-[16/10]"}>
          <img src={item.image.src} alt={item.image.alt} className="size-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
            <span className="text-brand-primary">{item.category}</span>
            <span className="size-1 rounded-full bg-border" aria-hidden="true" />
            <time className="text-muted-foreground">{item.date}</time>
          </div>
          <h3 className={`mt-3 font-display font-black leading-tight text-foreground ${compact ? "text-lg" : "text-xl"}`}>{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-foreground">
            Ler notícia <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={member.image.src} alt={member.image.alt} className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
      </div>
      <div className="relative p-5">
        <span className="absolute left-5 top-0 h-1 w-16 -translate-y-1/2 bg-brand-primary" aria-hidden="true" />
        <h3 className="font-display text-xl font-black text-foreground">{member.name}</h3>
        <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-brand-primary">{member.role}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
        <Button asChild variant="ghost" size="icon" className="mt-4 min-h-11 min-w-11 rounded-full" aria-label={`Abrir rede social de ${member.name}`}>
          <a href={member.social} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}
