import { ArrowUpRight } from "lucide-react";

import { UrbanLines } from "@/components/site/UrbanGraphics";
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
      <div
        className="absolute right-0 top-0 h-full w-1/2 diagonal-stripe opacity-25"
        aria-hidden="true"
      />
      <div className="container-site relative grid min-h-[18rem] gap-6 pb-8 pt-24 sm:min-h-[20rem] md:min-h-[23rem] md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-10 md:pt-28 lg:min-h-[25rem]">
        <div className="max-w-3xl">
          <p className="label-text text-brand-secondary">{label}</p>
          <h1 className="mt-3 max-w-[24ch] font-display text-[clamp(2rem,4vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.02em] text-ink-foreground">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted md:text-lg">
            {description}
          </p>
          <UrbanLines className="mt-5 w-28 text-brand-primary opacity-70" />
        </div>
        <div className="relative hidden min-h-40 overflow-hidden rounded-lg border border-ink-line bg-ink-soft p-5 sm:block md:min-h-44">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 size-full object-cover opacity-70 mix-blend-luminosity"
              loading="lazy"
            />
          ) : null}
          <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
          <div className="relative flex h-full items-end justify-between gap-4">
            <span className="max-w-44 font-display text-4xl font-bold uppercase leading-none text-ink-outline opacity-45 md:text-6xl">
              Cultura
            </span>
            <ArrowUpRight className="size-9 text-brand-primary" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
