import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { images } from "@/data/site";

export function FinalCta({ title = "Faça parte desse movimento.", text = "Conheça nossos projetos, acompanhe nossas ações e fortaleça a cultura produzida no território." }: { title?: string; text?: string }) {
  return (
    <section className="section-y bg-ink text-ink-foreground">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-lg border border-ink-line bg-ink-soft p-6 md:p-10">
          <img src={images.stage.src} alt="Apresentação cultural em palco comunitário" className="absolute inset-0 size-full object-cover opacity-35 mix-blend-luminosity" loading="lazy" />
          <div className="absolute inset-0 diagonal-stripe opacity-25" aria-hidden="true" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="label-text text-brand-secondary">CULTURA EM MOVIMENTO</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">{title}</h2>
              <p className="mt-4 text-base leading-8 text-ink-muted md:text-lg">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90">
                <Link to="/projetos">Conheça nossos projetos <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-ink-line bg-ink-soft text-ink-foreground hover:bg-ink-line">
                <Link to="/contato">Entre em contato</Link>
              </Button>
            </div>
          </div>
          <span className="pointer-events-none absolute -bottom-4 right-4 font-display text-7xl font-bold uppercase leading-none text-ink-outline opacity-20 md:text-9xl">Cultura</span>
        </div>
      </div>
    </section>
  );
}
