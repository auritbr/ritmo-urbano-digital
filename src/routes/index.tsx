import {
  Archive,
  ArrowRight,
  Award,
  BadgeCheck,
  ChartNoAxesColumn,
  CircleDot,
  FileText,
  MapPinned,
  MoveUpRight,
} from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { NewsCard, ProjectFeature } from "@/components/site/Cards";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SoundWave, UrbanLines, VinylOutline } from "@/components/site/UrbanGraphics";
import { Button } from "@/components/ui/button";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import {
  actionAreas,
  hipHopElements,
  images,
  institutionalNumbers,
  news,
  organization,
  projects,
} from "@/data/site";
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

  const transparencyItems = [
    { label: "Documentos institucionais", icon: FileText },
    { label: "Certificados", icon: BadgeCheck },
    { label: "Reconhecimentos", icon: Award },
    { label: "Relatórios", icon: ChartNoAxesColumn },
    { label: "Registros", icon: Archive },
  ];

  return (
    <>
      <section className="relative min-h-[92dvh] overflow-hidden bg-ink text-ink-foreground">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          className="absolute inset-0 size-full object-cover"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-ink/72" aria-hidden="true" />
        <div className="absolute inset-0 urban-grid opacity-30" aria-hidden="true" />
        <div className="container-site relative flex min-h-[92dvh] items-end pb-12 pt-28 md:pb-16">
          <div className="grid w-full gap-8 md:grid-cols-[1fr_18rem] md:items-end">
            <div className="max-w-4xl">
              <p className="label-text text-brand-secondary">{organization.label}</p>
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.8rem)] font-bold leading-[1.03] tracking-[-0.02em]">
                Cultura que nasce da rua e transforma territórios.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted md:text-lg">
                Um ponto de cultura dedicado à formação, produção artística e mobilização
                comunitária por meio do Hip Hop, da educação e da memória do território.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90"
                >
                  <Link to="/quem-somos">
                    Conheça nossa história <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <span className="inline-flex items-center gap-3">
                  <IconCircleButton
                    asChild
                    variant="glass-dark"
                    size="md"
                    label="Conheça os projetos"
                  >
                    <Link to="/projetos">
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </IconCircleButton>
                  <Link
                    to="/projetos"
                    className="font-display text-sm font-semibold text-ink-foreground hover:text-brand-primary"
                  >
                    Conheça os projetos
                  </Link>
                </span>
              </div>
            </div>
            <aside
              className="hidden rounded-lg border border-ink-line bg-ink-soft p-5 backdrop-blur-sm md:block"
              aria-label="Símbolos culturais"
            >
              <p className="label-text text-brand-primary">S23°32' • W46°38'</p>
              <div className="mt-8 grid grid-cols-8 items-end gap-1" aria-hidden="true">
                {["h-8", "h-14", "h-11", "h-20", "h-16", "h-24", "h-12", "h-[4.5rem]"].map(
                  (heightClass) => (
                    <span key={heightClass} className={`bg-brand-primary ${heightClass}`} />
                  ),
                )}
              </div>
              <p className="mt-6 font-display text-4xl font-bold uppercase leading-none text-ink-outline">
                Cultura
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-y bg-background paper-grid">
        <div className="container-site grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative grid grid-cols-[0.72fr_1fr] gap-4">
            <img
              src={images.workshop.src}
              alt={images.workshop.alt}
              className="h-[28rem] w-full rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src={images.team.src}
              alt={images.team.alt}
              className="mt-12 h-[22rem] w-full rounded-lg object-cover"
              loading="lazy"
            />
            <span
              className="absolute -right-3 top-8 h-24 w-24 rounded-full border-[12px] border-brand-primary"
              aria-hidden="true"
            />
          </div>
          <div>
            <SectionHeading
              label="Quem somos"
              title="Arte, formação e transformação social através do Hip Hop"
              description="O Pulso Urbano atua como espaço de encontro, aprendizagem e criação coletiva, fortalecendo juventudes, artistas e comunidades por meio de ações contínuas."
            />
            <div className="mt-6 grid gap-4 text-muted-foreground">
              <p>
                Trabalhamos com oficinas, apresentações, rodas culturais, registros de memória e
                articulações em rede para ampliar o acesso à cultura.
              </p>
              <p>
                Nosso compromisso é unir linguagem contemporânea, responsabilidade institucional e
                escuta ativa do território.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {institutionalNumbers.map((item) => (
                <div key={item.label} className="border-l-2 border-brand-primary pl-3">
                  <strong className="block font-display text-2xl font-bold text-foreground">
                    {item.value}
                  </strong>
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-6 px-0 font-display font-bold">
              <Link to="/quem-somos">
                Conheça nossa trajetória <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="container-site">
          <SectionHeading
            label="Nossa atuação"
            title="Frentes que conectam técnica, convivência e território"
            description="Ações integradas que unem formação, criação artística e participação comunitária."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {actionAreas.map((area, index) => {
              const Icon = area.icon;
              const detail = index % 6;
              return (
                <article
                  key={area.title}
                  className="group relative min-h-48 overflow-hidden rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-foreground/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="label-text text-muted-foreground">{area.number}</span>
                    <span className="h-px flex-1 bg-border" aria-hidden="true" />
                    <Icon className="size-5 text-brand-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 max-w-[80%] font-display text-lg font-bold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 max-w-[88%] text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                  {detail === 0 ? (
                    <SoundWave className="absolute bottom-4 right-3 w-20 text-brand-primary opacity-45 transition-transform group-hover:-translate-x-1" />
                  ) : null}
                  {detail === 1 ? (
                    <VinylOutline className="absolute -bottom-8 -right-8 size-24 text-brand-primary opacity-35 transition-transform group-hover:translate-x-1" />
                  ) : null}
                  {detail === 2 ? (
                    <MoveUpRight
                      className="absolute bottom-4 right-4 size-7 text-brand-secondary opacity-70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  ) : null}
                  {detail === 3 ? (
                    <span
                      className="paper-grid absolute bottom-3 right-3 size-16 border border-border opacity-60"
                      aria-hidden="true"
                    />
                  ) : null}
                  {detail === 4 ? (
                    <span
                      className="absolute bottom-4 right-4 flex h-10 items-end gap-1 opacity-55"
                      aria-hidden="true"
                    >
                      {["h-3", "h-6", "h-4", "h-8", "h-5"].map((height) => (
                        <span key={height} className={`w-1.5 bg-brand-primary ${height}`} />
                      ))}
                    </span>
                  ) : null}
                  {detail === 5 ? (
                    <span
                      className="diagonal-stripe absolute bottom-0 right-0 size-20 opacity-70"
                      aria-hidden="true"
                    />
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="container-site">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading label="Projetos" title="Projetos que colocam a cultura em movimento" />
            <span className="inline-flex items-center gap-3">
              <span className="font-display text-sm font-semibold text-foreground">Ver todos</span>
              <IconCircleButton asChild variant="outline" size="md" label="Ver todos os projetos">
                <Link to="/projetos">
                  <ArrowRight aria-hidden="true" />
                </Link>
              </IconCircleButton>
            </span>
          </div>
          <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <ProjectFeature project={firstProject} index={0} />
            <ProjectFeature project={secondProject} index={1} />
            <ProjectFeature project={thirdProject} index={2} />
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-ink-foreground">
        <div className="container-site">
          <SectionHeading
            label="Cultura Hip Hop"
            title="Quatro elementos, muitas formas de aprender e pertencer"
            description="A cultura aparece como linguagem viva: palavra, som, corpo, imagem pública e organização comunitária."
            dark
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {hipHopElements.map((element) => {
              const Icon = element.icon;
              return (
                <article
                  key={element.name}
                  className="relative min-h-56 overflow-hidden rounded-lg border border-ink-line bg-ink-soft p-5"
                >
                  <Icon className="size-8 text-brand-primary" aria-hidden="true" />
                  <h3 className="mt-10 font-display text-4xl font-bold text-ink-foreground">
                    {element.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">{element.description}</p>
                  <CircleDot
                    className="absolute -bottom-6 -right-6 size-24 text-ink-outline"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground">
        <img
          src={images.stage.src}
          alt={images.stage.alt}
          className="absolute inset-0 size-full object-cover opacity-45"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/68" aria-hidden="true" />
        <div className="container-site relative">
          <MapPinned className="size-9 text-brand-secondary" aria-hidden="true" />
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
            Da rua para a comunidade. Da comunidade para o mundo.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Cultura, identidade, formação, pertencimento e transformação são palavras que organizam
            nossa prática diária.
          </p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading label="Notícias" title="Últimas notícias" />
            <Button asChild variant="outline">
              <Link to="/noticias">
                Ver todas as notícias <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 md:py-20">
        <VinylOutline className="absolute -left-24 top-1/2 size-64 -translate-y-1/2 text-brand-primary opacity-10" />
        <UrbanLines className="absolute right-5 top-8 w-44 text-foreground opacity-10" />
        <p
          className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden text-center font-display text-[clamp(4rem,13vw,10rem)] font-bold leading-none text-foreground opacity-[0.035]"
          aria-hidden="true"
        >
          MEMÓRIAS
        </p>
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="Galeria"
              title="Histórias registradas em imagens"
              description="Registros de oficinas, rodas, apresentações e encontros que constroem a memória do Ponto de Cultura."
              align="center"
            />
            <SoundWave className="mx-auto mt-6 w-36 text-brand-primary" />
            <span className="mt-6 inline-flex items-center gap-3">
              <span className="font-display text-sm font-semibold text-foreground">
                Explorar galeria
              </span>
              <IconCircleButton asChild variant="solid" size="md" label="Explorar galeria">
                <Link to="/galeria">
                  <ArrowRight aria-hidden="true" />
                </Link>
              </IconCircleButton>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="container-site grid gap-9 border-y border-border py-9 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:py-12">
          <div className="relative pl-4">
            <span className="absolute left-0 top-0 h-16 w-1 bg-brand-primary" aria-hidden="true" />
            <p className="label-text text-brand-primary">Compromisso institucional</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-[1.08] text-foreground md:text-4xl">
              Transparência também faz parte da nossa cultura.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Organizamos informações e registros para facilitar a consulta pública e fortalecer uma
              relação de confiança com a comunidade.
            </p>
            <span className="mt-6 inline-flex items-center gap-3">
              <span className="font-display text-sm font-semibold text-foreground">
                Acessar transparência
              </span>
              <IconCircleButton asChild variant="outline" size="md" label="Acessar transparência">
                <Link to="/quem-somos/transparencia">
                  <ArrowRight aria-hidden="true" />
                </Link>
              </IconCircleButton>
            </span>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-5 py-2 md:px-6">
            <span
              className="paper-grid absolute -right-5 -top-5 size-28 opacity-40"
              aria-hidden="true"
            />
            {transparencyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="relative flex min-h-14 items-center gap-3 border-b border-border last:border-b-0"
                >
                  <Icon className="size-4 text-brand-primary" aria-hidden="true" />
                  <span className="flex-1 text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="label-text text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
