import { createFileRoute } from "@tanstack/react-router";

import { TeamCard } from "@/components/site/Cards";
import { FinalCta } from "@/components/site/FinalCta";
import { InternalHero } from "@/components/site/InternalHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SoundWave } from "@/components/site/UrbanGraphics";
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
          <div className="mx-auto max-w-[46.875rem] text-center">
            <SectionHeading label="Nossa equipe" title="Pessoas que fazem a cultura acontecer" align="center" description="Nossos projetos são construídos coletivamente por educadores, artistas, produtores, comunicadores e pessoas comprometidas com o território." />
            <SoundWave className="mx-auto mt-5 w-24 text-brand-primary" />
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => <TeamCard key={member.name} member={member} index={index} />)}
          </div>
        </div>
      </section>
      <FinalCta title="A cultura se constrói em conjunto." text="Conheça nossos projetos e acompanhe as iniciativas desenvolvidas pela equipe e pela comunidade." />
    </>
  );
}
