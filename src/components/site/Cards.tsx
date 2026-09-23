import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { SoundWave, VinylOutline } from "@/components/site/UrbanGraphics";
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
        <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">{project.name}</h3>
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
    <article className="news-glass-card group overflow-hidden transition duration-300 hover:-translate-y-0.5 hover:border-foreground/20">
      <Link to="/noticias/$slug" params={{ slug: item.slug }} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className={compact ? "aspect-[16/10]" : "aspect-[16/10]"}>
          <img src={item.image.src} alt={item.image.alt} className="size-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em]">
            <span className="text-brand-primary">{item.category}</span>
            <span className="size-1 rounded-full bg-border" aria-hidden="true" />
            <time className="text-muted-foreground">{item.date}</time>
          </div>
          <h3 className={`mt-3 font-display font-semibold leading-tight tracking-[-0.015em] text-foreground ${compact ? "text-lg" : "text-xl"}`}>{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-3 font-display text-sm font-semibold text-foreground">
            Ler notícia <span className="liquid-control grid size-9 place-items-center rounded-full"><ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function TeamCard({ member, index = 0 }: { member: (typeof team)[number]; index?: number }) {
  const detail = index % 6;
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-brand-primary/70">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img src={member.image.src} alt={member.image.alt} className="size-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden="true" />
        {detail === 0 ? <span className="absolute right-4 top-4 h-16 w-1 bg-brand-primary transition-transform group-hover:translate-y-1" aria-hidden="true" /> : null}
        {detail === 1 ? <VinylOutline className="absolute -right-8 -top-8 size-28 text-brand-primary opacity-75 transition-transform group-hover:translate-x-1" /> : null}
        {detail === 2 ? <SoundWave className="absolute bottom-5 right-4 w-24 text-brand-primary transition-transform group-hover:-translate-x-1" /> : null}
        {detail === 3 ? <ArrowRight className="absolute right-5 top-5 size-8 text-brand-primary transition-transform group-hover:translate-x-1" aria-hidden="true" /> : null}
        {detail === 4 ? <span className="paper-grid absolute right-4 top-4 size-16 border border-ink-foreground/30" aria-hidden="true" /> : null}
        {detail === 5 ? <span className="absolute right-4 top-4 block size-10 rotate-6 border-2 border-brand-secondary bg-ink/30 transition-transform group-hover:translate-x-1" aria-hidden="true" /> : null}
      </div>
      <div className="relative p-5 pt-6">
        <span className="absolute inset-x-0 top-0 h-1 bg-brand-primary transition-colors group-hover:bg-brand-secondary" aria-hidden="true" />
        <span className="label-text text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-2 font-display text-xl font-bold text-foreground">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary">{member.role}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
        <IconCircleButton asChild variant="outline" size="md" className="mt-4 opacity-75 group-hover:opacity-100" label={`Abrir rede social de ${member.name}`}>
          <a href={member.social} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" />
          </a>
        </IconCircleButton>
      </div>
    </article>
  );
}
