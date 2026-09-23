import { Download, FileText, ShieldCheck } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SoundWave } from "@/components/site/UrbanGraphics";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { images, transparencyCategories } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () =>
    pageMeta(
      "Transparência — Pulso Urbano",
      "Acesse documentos, certificados, reconhecimentos, portfólios e relatórios do Ponto de Cultura Pulso Urbano.",
      "/quem-somos/transparencia",
    ),
  component: TransparenciaPage,
});

function TransparenciaPage() {
  return (
    <>
      <InternalHero
        label="Transparência"
        title="Responsabilidade, organização e transparência."
        description="Reunimos documentos e registros institucionais para facilitar a consulta pública e fortalecer a confiança com a comunidade."
        image={images.team}
      />
      <section className="bg-background py-14 md:py-16">
        <div className="container-site mx-auto max-w-[53.125rem] text-center">
          <p className="label-text text-brand-primary">Compromisso institucional</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Nosso jeito de fazer
          </h2>
          <div className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              Acreditamos que uma atuação comunitária forte também se constrói com responsabilidade,
              organização e transparência.
            </p>
            <p className="mt-4">
              Nesta página, reunimos documentos institucionais, certificados, reconhecimentos,
              portfólios e registros que ajudam a contar nossa trajetória e permitem o
              acompanhamento público do nosso trabalho.
            </p>
          </div>
          <SoundWave className="mx-auto mt-6 w-24 text-brand-primary" />
        </div>
      </section>
      <section className="bg-surface py-14 md:py-16">
        <MagnifierContent />
      </section>
      <FinalCta
        contactOnly
        title="Transparência fortalece relações."
        text="Informação acessível faz parte do compromisso com a comunidade, parceiros e pessoas que acompanham nossa trajetória."
      />
    </>
  );
}

function MagnifierContent() {
  const fileSizes = ["147.4 KB", "314.9 KB", "32.2 KB", "228.6 KB"];

  return (
    <div className="container-site max-w-[60rem]">
      <div className="mx-auto max-w-[50rem] text-center">
        <ShieldCheck className="mx-auto size-9 text-brand-primary" aria-hidden="true" />
        <SectionHeading
          label="Acervo"
          title="Acervo institucional"
          align="center"
          description="Acesse documentos, certificados, reconhecimentos, portfólios e registros organizados por categoria para facilitar a consulta pública."
        />
      </div>
      <Accordion type="single" collapsible className="mt-8 grid gap-2">
        {transparencyCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <AccordionItem
              key={category.name}
              value={category.name}
              className="overflow-hidden rounded-xl border border-border bg-card px-4 transition-colors duration-300 data-[state=open]:border-foreground/20 md:px-5"
            >
              <AccordionTrigger className="min-h-16 gap-3 py-3 no-underline hover:no-underline md:min-h-[4.5rem]">
                <span className="flex min-w-0 items-center gap-4 text-left">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-primary/15 text-brand-primary">
                    <Icon className="size-[1.125rem]" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5 md:flex-row md:items-center md:gap-3">
                    <span className="font-display text-base font-semibold text-foreground md:text-lg">
                      {category.name}
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {category.count} docs
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-1">
                <div className="border-t border-border">
                  {category.docs.map((doc, index) => (
                    <div
                      key={doc}
                      className="flex flex-col gap-4 border-b border-border/70 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground">
                          <FileText className="size-[1.125rem]" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-sm font-semibold leading-6 text-foreground md:text-base">
                            {doc}
                          </p>
                          <span className="mt-1.5 inline-flex rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                            Arquivo PDF • {fileSizes[(categoryIndex + index) % fileSizes.length]}
                          </span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        className="h-[2.625rem] w-full shrink-0 rounded-full bg-ink px-5 text-ink-foreground hover:bg-ink/90 sm:w-auto"
                        aria-label={`Baixar ${doc}`}
                      >
                        Baixar Documento <Download aria-hidden="true" />
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
