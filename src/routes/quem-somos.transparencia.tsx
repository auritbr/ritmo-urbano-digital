import { Download, Eye, ShieldCheck } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { InternalHero } from "@/components/site/InternalHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
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
      <section className="section-y bg-background">
        <div className="container-site grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="label-text text-brand-primary">Compromisso institucional</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-foreground">Nosso jeito de fazer</h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-muted-foreground leading-8">
            <p>Acreditamos que uma atuação comunitária forte também se constrói com responsabilidade, organização e transparência.</p>
            <p className="mt-4">Esta página reúne documentos, certificados, reconhecimentos, portfólios, relatórios e registros institucionais organizados por categoria para facilitar a consulta pública.</p>
          </div>
        </div>
      </section>
      <section className="section-y bg-surface">
        <MagnifierContent />
      </section>
    </>
  );
}

function MagnifierContent() {
  return (
    <div className="container-site">
      <div className="mx-auto max-w-3xl text-center">
        <ShieldCheck className="mx-auto size-9 text-brand-primary" aria-hidden="true" />
        <SectionHeading label="Acervo" title="Acervo institucional" align="center" description="Acesse documentos, certificados, reconhecimentos, portfólios e registros organizados por categoria para facilitar a consulta pública." />
      </div>
      <Accordion type="single" collapsible className="mt-10 grid gap-3">
        {transparencyCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <AccordionItem key={category.name} value={category.name} className="rounded-lg border border-border bg-card px-4">
              <AccordionTrigger className="gap-4 py-5 no-underline hover:no-underline">
                <span className="flex min-w-0 items-center gap-4 text-left">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-primary text-brand-primary-foreground"><Icon className="size-5" aria-hidden="true" /></span>
                  <span><span className="block font-display text-lg font-black text-foreground">{category.name}</span><span className="text-sm text-muted-foreground">({category.count} documentos)</span></span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto pb-2">
                  <table className="w-full min-w-[42rem] text-left text-sm">
                    <thead className="border-b border-border text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      <tr><th className="py-3">Nome do documento</th><th>Ano</th><th>Tipo</th><th className="text-right">Ações</th></tr>
                    </thead>
                    <tbody>
                      {category.docs.map((doc, index) => (
                        <tr key={doc} className="border-b border-border/70 last:border-0">
                          <td className="py-3 font-semibold text-foreground">{doc}</td>
                          <td>{2026 - ((categoryIndex + index) % 5)}</td>
                          <td>PDF</td>
                          <td className="py-2 text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="sm" variant="outline"><Eye aria-hidden="true" /> Visualizar</Button>
                              <Button size="sm" variant="ghost"><Download aria-hidden="true" /> Baixar</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
