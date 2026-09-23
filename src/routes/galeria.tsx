import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { InternalHero } from "@/components/site/InternalHero";
import { SoundWave, VinylOutline } from "@/components/site/UrbanGraphics";
import { Button } from "@/components/ui/button";
import { galleryEvents, galleryYears, images } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/galeria")({
  head: () =>
    pageMeta(
      "Galeria — Pulso Urbano",
      "Memórias em imagem das oficinas, apresentações, rodas culturais e encontros do Ponto de Cultura.",
      "/galeria",
    ),
  component: GaleriaPage,
});

function GaleriaPage() {
  const [year, setYear] = useState(2026);
  const events = galleryEvents[year] ?? [];
  const allImages = useMemo(() => events.flatMap((event) => event.photos), [events]);
  const lightbox = useLightbox(allImages);
  let offset = 0;

  return (
    <>
      <InternalHero
        label="Galeria"
        title="Memórias que contam nossa história"
        description="Registros de oficinas, rodas, apresentações e encontros que preservam a memória do território."
        image={images.stage}
      />
      <section className="section-y relative overflow-hidden bg-background">
        <VinylOutline className="absolute -right-16 top-16 size-64 text-foreground opacity-[0.035]" />
        <div className="container-site relative">
          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 md:mx-0 md:px-0"
            aria-label="Selecionar ano da galeria"
          >
            {galleryYears.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={`liquid-control h-10 shrink-0 rounded-full px-4 ${year === item ? "border-foreground bg-foreground text-background hover:bg-foreground/90" : ""}`}
                onClick={() => setYear(item)}
                aria-pressed={year === item}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-10 grid gap-12">
            {events.map((event) => {
              const start = offset;
              offset += event.photos.length;
              return (
                <section key={event.title}>
                  <h2 className="max-w-4xl font-display text-2xl font-bold leading-[1.15] tracking-[-0.015em] text-foreground sm:text-3xl lg:text-4xl">
                    {event.title}
                  </h2>
                  <SoundWave className="mt-4 w-28 text-brand-primary" />
                  <div className="mt-7 grid auto-rows-[10rem] grid-cols-2 gap-3 md:auto-rows-[12rem] lg:grid-cols-4">
                    {event.photos.map((image, index) => (
                      <GalleryButton
                        key={`${event.title}-${image.alt}-${index}`}
                        image={image}
                        onClick={() => lightbox.open(start + index)}
                        className={index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <Lightbox
        images={allImages}
        index={lightbox.index}
        onClose={lightbox.close}
        onPrevious={lightbox.previous}
        onNext={lightbox.next}
      />
    </>
  );
}
