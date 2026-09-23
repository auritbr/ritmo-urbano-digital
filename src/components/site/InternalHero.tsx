import { ArrowUpRight } from "lucide-react";

import type { ImageRef } from "@/data/site";

export function InternalHero({
  label,
  title,
  description,
  image,
}: {
  label: string;
  title: string;
  description: string;
  image?: ImageRef;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 urban-grid opacity-35" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-1/2 diagonal-stripe opacity-25" aria-hidden="true" />
      <div className="container-site relative grid gap-8 py-24 pt-32 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-28 md:pt-36">
        <div className="max-w-3xl">
          <p className="label-text text-brand-secondary">{label}</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.35rem,5vw,4.6rem)] font-bold leading-[1.03] tracking-[-0.02em] text-ink-foreground">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted md:text-lg">{description}</p>
        </div>
        <div className="relative min-h-32 overflow-hidden rounded-lg border border-ink-line bg-ink-soft p-5 md:min-h-56">
          {image ? (
            <img src={image.src} alt={image.alt} className="absolute inset-0 size-full object-cover opacity-70 mix-blend-luminosity" loading="lazy" />
          ) : null}
          <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
          <div className="relative flex h-full items-end justify-between gap-4">
            <span className="max-w-44 font-display text-5xl font-bold uppercase leading-none text-ink-outline opacity-45 md:text-7xl">Cultura</span>
            <ArrowUpRight className="size-9 text-brand-primary" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
