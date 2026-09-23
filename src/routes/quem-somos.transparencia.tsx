import { Download, Eye, ShieldCheck } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { InternalHero } from "@/components/site/InternalHero";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SoundWave } from "@/components/site/UrbanGraphics";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { images, transparencyCategories } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => pageMeta("Transparência — Pulso Urbano", "Acesse documentos, certificados, reconhecimentos, portfólios e relatórios do Ponto de Cultura Pulso Urbano.", "/quem-somos/transparencia"),
  component: TransparenciaPage,
});

function TransparenciaPage() {
  return (
    <>
      <InternalHero label="Transparência" title="Responsabilidade, organização e transparência." description="Reunimos documentos e registros institucionais para facilitar a consulta pública e fortalecer a confiança com a comunidade." image={images.team} />
       <section className="bg-background py-14 md:py-16">
         <div className="container-site mx-auto max-w-[53.125rem] text-center">
            <p className="label-text text-brand-primary">Compromisso institucional</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">Nosso jeito de fazer</h2>
          <div className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>Acreditamos que uma atuação comunitária forte também se constrói com responsabilidade, organização e transparência.</p>
            <p className="mt-4">Nesta página, reunimos documentos institucionais, certificados, reconhecimentos, portfólios e registros que ajudam a contar nossa trajetória e permitem o acompanhamento público do nosso trabalho.</p>
          </div>
          <SoundWave className="mx-auto mt-6 w-24 text-brand-primary" />
        </div>
      </section>
        <section className="bg-surface py-14 md:py-16">
        <MagnifierContent />
      </section>
       <FinalCta contactOnly title="Transparência fortalece relações." text="Informação acessível faz parte do compromisso com a comunidade, parceiros e pessoas que acompanham nossa trajetória." />
    </>
  );
}

function MagnifierContent() {
  return (
    <div className="container-site max-w-[60rem]">
      <div className="mx-auto max-w-[50rem] text-center">
        <ShieldCheck className="mx-auto size-9 text-brand-primary" aria-hidden="true" />
        <SectionHeading label="Acervo" title="Acervo institucional" align="center" description="Acesse documentos, certificados, reconhecimentos, portfólios e registros organizados por categoria para facilitar a consulta pública." />
      </div>
      <Accordion type="single" collapsible className="mt-8 grid gap-2">
        {transparencyCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <AccordionItem key={category.name} value={category.name} className="rounded-xl border border-border bg-card px-4 md:px-5">
              <AccordionTrigger className="min-h-16 gap-3 py-3 no-underline hover:no-underline md:min-h-[4.5rem]">
                <span className="flex min-w-0 items-center gap-4 text-left">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-primary/15 text-brand-primary"><Icon className="size-[1.125rem]" aria-hidden="true" /></span>
                  <span className="flex min-w-0 flex-col gap-0.5 md:flex-row md:items-center md:gap-3"><span className="font-display text-base font-semibold text-foreground md:text-lg">{category.name}</span><span className="text-sm font-normal text-muted-foreground">{category.count} docs</span></span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="hidden overflow-x-auto pb-2 md:block">
                  <table className="w-full min-w-[42rem] text-left text-sm">
                    <thead className="border-b border-border text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      <tr><th className="py-3">Nome do documento</th><th>Ano</th><th>Tipo</th><th className="text-right">Ações</th></tr>
                    </thead>
                    <tbody>
                      {category.docs.map((doc, index) => (
                         <tr key={doc} className="border-b border-border/70 transition-colors hover:bg-muted/50 last:border-0">
                          <td className="py-3 font-semibold text-foreground">{doc}</td>
                          <td>{2026 - ((categoryIndex + index) % 5)}</td>
                          <td>PDF</td>
                          <td className="py-2 text-right">
                             <div className="flex justify-end gap-2">
                               <IconCircleButton label="Visualizar" size="sm" variant="outline"><Eye aria-hidden="true" /></IconCircleButton>
                               <IconCircleButton label="Baixar" size="sm" variant="outline"><Download aria-hidden="true" /></IconCircleButton>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-3 pb-2 md:hidden">
                  {category.docs.map((doc, index) => (
                     <div key={doc} className="rounded-lg border border-border bg-background p-3.5">
                      <p className="font-semibold text-foreground">{doc}</p>
                      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm text-muted-foreground"><div><dt className="label-text text-[0.65rem]">Ano</dt><dd className="mt-1">{2026 - ((categoryIndex + index) % 5)}</dd></div><div><dt className="label-text text-[0.65rem]">Tipo</dt><dd className="mt-1">PDF</dd></div></dl>
                       <div className="mt-3 flex gap-2"><IconCircleButton label="Visualizar" size="sm" variant="outline"><Eye aria-hidden="true" /></IconCircleButton><IconCircleButton label="Baixar" size="sm" variant="outline"><Download aria-hidden="true" /></IconCircleButton></div>
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
