import { createFileRoute } from "@tanstack/react-router";

import { InternalHero } from "@/components/site/InternalHero";
import { images } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => pageMeta("Termos de Uso — Pulso Urbano", "Termos de uso demonstrativos do site institucional Pulso Urbano.", "/termos-de-uso"),
  component: TermsPage,
});

function TermsPage() {
  const sections = [
    "Este site apresenta informações institucionais, projetos, notícias e registros culturais em caráter informativo.",
    "Textos, imagens e materiais publicados devem ser utilizados com respeito aos créditos, autorizações e finalidades culturais indicadas pela instituição.",
    "Links externos podem direcionar para redes sociais ou serviços de mensagem, que possuem políticas próprias de funcionamento.",
  ];
  return <><InternalHero label="Termos de Uso" title="Condições de navegação" description="Conteúdo demonstrativo com linguagem clara para futura revisão jurídica e institucional." image={images.hero} /><section className="section-y bg-background"><div className="container-site grid gap-8 lg:grid-cols-[16rem_1fr]"><aside className="h-max rounded-lg border border-border bg-card p-5"><h2 className="label-text text-brand-primary">Índice</h2><ol className="mt-4 grid gap-2 text-sm font-semibold text-muted-foreground"><li>1. Uso do site</li><li>2. Conteúdo</li><li>3. Links externos</li></ol></aside><article className="max-w-3xl rounded-lg border border-border bg-card p-6 leading-8 text-muted-foreground"><h2 className="font-display text-3xl font-bold text-foreground">Termos de Uso</h2>{sections.map((text, index) => <section key={text} className="mt-6"><h3 className="font-display text-xl font-semibold text-foreground">{index + 1}. {index === 0 ? "Uso do site" : index === 1 ? "Conteúdo" : "Links externos"}</h3><p className="mt-2">{text}</p></section>)}</article></div></section></>;
}
