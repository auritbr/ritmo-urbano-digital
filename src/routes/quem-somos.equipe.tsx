import { createFileRoute } from "@tanstack/react-router";

import { TeamCard } from "@/components/site/Cards";
import { FinalCta } from "@/components/site/FinalCta";
import { InternalHero } from "@/components/site/InternalHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, team } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => pageMeta("Equipe — Pulso Urbano", "Conheça a equipe de educadores, produtores e articuladores do Ponto de Cultura Pulso Urbano.", "/quem-somos/equipe"),
  component: EquipePage,
});

function EquipePage() {
  return (
    <>
      <InternalHero label="Equipe" title="Quem faz acontecer" description="Uma equipe multidisciplinar formada por educadores, artistas, produtores culturais e comunicadores comprometidos com o território." image={images.team} />
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading title="Quem faz acontecer" align="center" description="Cada ação nasce da combinação entre experiência artística, cuidado pedagógico, gestão responsável e presença comunitária." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => <TeamCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-site grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading label="Construção coletiva" title="Uma construção que vai além da equipe fixa" />
          <div className="text-muted-foreground leading-8">
            <p>Colaboradores, voluntários, artistas convidados, escolas, coletivos e famílias também fazem parte da nossa rede de atuação.</p>
            <p className="mt-4">Essa dimensão coletiva garante diversidade de repertórios, circulação de saberes e continuidade para cada projeto.</p>
          </div>
        </div>
      </section>
      <FinalCta title="Cultura se constrói em equipe." text="Acompanhe as ações, proponha parcerias e fortaleça essa rede de criação comunitária." />
    </>
  );
}
