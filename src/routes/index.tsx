import { ArrowRight, CircleDot, MapPinned, Play, Radio, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { NewsCard, ProjectFeature } from "@/components/site/Cards";
import { FinalCta } from "@/components/site/FinalCta";
import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { actionAreas, hipHopElements, images, institutionalNumbers, news, organization, projects } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta(
      "Pulso Urbano — Ponto de Cultura de Hip Hop",
      "Cultura Hip Hop, formação, território e atuação comunitária em um ponto de cultura urbano e profissional.",
      "/",
    ),
  }),
  component: Index,
});

function Index() {
  const firstProject = projects[0];
  const secondProject = projects[1];
  const thirdProject = projects[2];
  if (!firstProject || !secondProject || !thirdProject) return null;
  const galleryPreview = [images.stage, images.breaking, images.dj, images.graffiti, images.craft];
  const lightbox = useLightbox(galleryPreview);

  return (
    <>
      <section className="relative min-h-[92dvh] overflow-hidden bg-ink text-ink-foreground">
        <img src={images.hero.src} alt={images.hero.alt} className="absolute inset-0 size-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-ink/72" aria-hidden="true" />
        <div className="absolute inset-0 urban-grid opacity-30" aria-hidden="true" />
        <div className="container-site relative flex min-h-[92dvh] items-end pb-12 pt-28 md:pb-16">
          <div className="grid w-full gap-8 md:grid-cols-[1fr_18rem] md:items-end">
            <div className="max-w-4xl">
              <p className="label-text text-brand-secondary">{organization.label}</p>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] tracking-normal md:text-7xl">
                Cultura que nasce da rua e transforma territórios.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted md:text-lg">
                Um ponto de cultura dedicado à formação, produção artística e mobilização comunitária por meio do Hip Hop, da educação e da memória do território.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90">
                  <Link to="/quem-somos">Conheça nossa história <ArrowRight aria-hidden="true" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-ink-line bg-ink-soft text-ink-foreground hover:bg-ink-line">
                  <Link to="/projetos">Conheça os projetos</Link>
                </Button>
              </div>
            </div>
            <aside className="hidden rounded-lg border border-ink-line bg-ink-soft p-5 backdrop-blur-sm md:block" aria-label="Símbolos culturais">
              <p className="label-text text-brand-primary">S23°32' • W46°38'</p>
              <div className="mt-8 grid grid-cols-8 items-end gap-1" aria-hidden="true">
                {["h-8", "h-14", "h-11", "h-20", "h-16", "h-24", "h-12", "h-18"].map((heightClass) => <span key={heightClass} className={`bg-brand-primary ${heightClass}`} />)}
              </div>
              <p className="mt-6 font-display text-4xl font-black uppercase leading-none text-ink-outline">Cultura</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-y bg-background paper-grid">
        <div className="container-site grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative grid grid-cols-[0.72fr_1fr] gap-4">
            <img src={images.workshop.src} alt={images.workshop.alt} className="h-[28rem] w-full rounded-lg object-cover" loading="lazy" />
            <img src={images.team.src} alt={images.team.alt} className="mt-12 h-[22rem] w-full rounded-lg object-cover" loading="lazy" />
            <span className="absolute -right-3 top-8 h-24 w-24 rounded-full border-[12px] border-brand-primary" aria-hidden="true" />
          </div>
          <div>
            <SectionHeading label="Quem somos" title="Arte, formação e transformação social através do Hip Hop" description="O Pulso Urbano atua como espaço de encontro, aprendizagem e criação coletiva, fortalecendo juventudes, artistas e comunidades por meio de ações contínuas." />
            <div className="mt-6 grid gap-4 text-muted-foreground">
              <p>Trabalhamos com oficinas, apresentações, rodas culturais, registros de memória e articulações em rede para ampliar o acesso à cultura.</p>
              <p>Nosso compromisso é unir linguagem contemporânea, responsabilidade institucional e escuta ativa do território.</p>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {institutionalNumbers.map((item) => (
                <div key={item.label} className="border-l-2 border-brand-primary pl-3">
                  <strong className="block font-display text-2xl font-black text-foreground">{item.value}</strong>
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-6 px-0 font-display font-bold"><Link to="/quem-somos">Conheça nossa trajetória <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading label="Nossa atuação" title="Frentes que conectam técnica, convivência e território" />
          <div className="mt-10 grid gap-4 md:grid-cols-6">
            {actionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className={`relative overflow-hidden rounded-lg border border-border bg-card p-5 ${index === 0 || index === 3 ? "md:col-span-3" : "md:col-span-2"}`}>
                  <span className="font-display text-5xl font-black text-muted">{area.number}</span>
                  <Icon className="absolute right-5 top-5 size-7 text-brand-primary" aria-hidden="true" />
                  <h3 className="mt-8 font-display text-xl font-black text-foreground">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading label="Projetos" title="Projetos que colocam a cultura em movimento" />
            <Button asChild variant="outline"><Link to="/projetos">Ver todos <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <ProjectFeature project={firstProject} featured />
            <div className="grid gap-5">
              <ProjectFeature project={secondProject} />
              <ProjectFeature project={thirdProject} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-ink-foreground">
        <div className="container-site">
          <SectionHeading label="Cultura Hip Hop" title="Quatro elementos, muitas formas de aprender e pertencer" description="A cultura aparece como linguagem viva: palavra, som, corpo, imagem pública e organização comunitária." dark />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {hipHopElements.map((element) => {
              const Icon = element.icon;
              return (
                <article key={element.name} className="relative min-h-56 overflow-hidden rounded-lg border border-ink-line bg-ink-soft p-5">
                  <Icon className="size-8 text-brand-primary" aria-hidden="true" />
                  <h3 className="mt-10 font-display text-4xl font-black text-ink-foreground">{element.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">{element.description}</p>
                  <CircleDot className="absolute -bottom-6 -right-6 size-24 text-ink-outline" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground">
        <img src={images.stage.src} alt={images.stage.alt} className="absolute inset-0 size-full object-cover opacity-45" loading="lazy" />
        <div className="absolute inset-0 bg-ink/68" aria-hidden="true" />
        <div className="container-site relative">
          <MapPinned className="size-9 text-brand-secondary" aria-hidden="true" />
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight md:text-5xl">Da rua para a comunidade. Da comunidade para o mundo.</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">Cultura, identidade, formação, pertencimento e transformação são palavras que organizam nossa prática diária.</p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading label="Notícias" title="Últimas notícias" />
            <Button asChild variant="outline"><Link to="/noticias">Ver todas as notícias <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {news.slice(0, 3).map((item) => <NewsCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading label="Galeria" title="Histórias registradas em imagens" description="Registros de oficinas, rodas, apresentações e encontros que constroem a memória do Ponto de Cultura." />
            <Button asChild className="mt-6 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90"><Link to="/galeria">Explorar galeria <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="grid h-[28rem] grid-cols-4 grid-rows-3 gap-3">
            {galleryPreview.map((image, index) => (
              <GalleryButton key={image.alt} image={image} onClick={() => lightbox.open(index)} className={index === 0 ? "col-span-2 row-span-3" : "col-span-2"} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site grid gap-8 rounded-lg border border-border bg-card p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="label-text text-brand-primary">Compromisso institucional</p>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight text-foreground md:text-5xl">Transparência também faz parte da nossa cultura.</h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-8">Organizamos documentos, certificados, reconhecimentos, relatórios e registros para facilitar a consulta pública e fortalecer uma relação de confiança com a comunidade.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Documentos institucionais",
                "Certificados",
                "Reconhecimentos",
                "Relatórios",
              ].map((item) => <span key={item} className="rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold">{item}</span>)}
            </div>
            <Button asChild variant="link" className="mt-5 px-0 font-display font-bold"><Link to="/quem-somos/transparencia">Acessar transparência <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <FinalCta />
      <Lightbox images={galleryPreview} index={lightbox.index} onClose={lightbox.close} onPrevious={lightbox.previous} onNext={lightbox.next} />
    </>
  );
}
