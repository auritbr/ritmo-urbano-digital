import { createFileRoute } from "@tanstack/react-router";

import { InternalHero } from "@/components/site/InternalHero";
import { images } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => pageMeta("Política de Privacidade — Pulso Urbano", "Política de privacidade demonstrativa do Ponto de Cultura Pulso Urbano.", "/politica-de-privacidade"),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage label="Política de Privacidade" title="Como cuidamos das informações" imageAlt="Política" sections={["Coletamos apenas informações necessárias para responder contatos, organizar inscrições e melhorar a comunicação institucional.", "Dados enviados pelo formulário são usados exclusivamente para retorno da equipe e não são vendidos ou compartilhados para fins comerciais.", "Você pode solicitar atualização ou remoção de informações entrando em contato pelos canais oficiais."]} />;
}

function LegalPage({ label, title, sections }: { label: string; title: string; imageAlt: string; sections: string[] }) {
  return <><InternalHero label={label} title={title} description="Conteúdo demonstrativo com estrutura clara para futura revisão jurídica e institucional." image={images.team} /><section className="section-y bg-background"><div className="container-site grid gap-8 lg:grid-cols-[16rem_1fr]"><aside className="h-max rounded-lg border border-border bg-card p-5"><h2 className="label-text text-brand-primary">Índice</h2><ol className="mt-4 grid gap-2 text-sm font-semibold text-muted-foreground"><li>1. Informações coletadas</li><li>2. Uso dos dados</li><li>3. Direitos do visitante</li></ol></aside><article className="max-w-3xl rounded-lg border border-border bg-card p-6 leading-8 text-muted-foreground"><h2 className="font-display text-3xl font-black text-foreground">{label}</h2>{sections.map((text, index) => <section key={text} className="mt-6"><h3 className="font-display text-xl font-black text-foreground">{index + 1}. {index === 0 ? "Informações coletadas" : index === 1 ? "Uso dos dados" : "Direitos do visitante"}</h3><p className="mt-2">{text}</p></section>)}</article></div></section></>;
}
