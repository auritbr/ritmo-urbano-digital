import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { InternalHero } from "@/components/site/InternalHero";
import { Button } from "@/components/ui/button";
import { galleryEvents, galleryYears, images } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/galeria")({
  head: () => pageMeta("Galeria — Pulso Urbano", "Memórias em imagem das oficinas, apresentações, rodas culturais e encontros do Ponto de Cultura.", "/galeria"),
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
      <InternalHero label="Galeria" title="Memórias que contam nossa história" description="Registros de oficinas, rodas, apresentações e encontros que preservam a memória do território." image={images.stage} />
      <section className="section-y bg-background">
        <div className="container-site">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 md:mx-0 md:px-0" aria-label="Selecionar ano da galeria">
            {galleryYears.map((item) => (
              <Button key={item} variant={year === item ? "default" : "outline"} className={year === item ? "shrink-0 rounded-full bg-foreground text-background hover:bg-foreground/90" : "shrink-0 rounded-full"} onClick={() => setYear(item)} aria-pressed={year === item}>
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
                  <h2 className="font-display text-3xl font-black leading-tight text-foreground md:text-5xl">{event.title}</h2>
                  <span className="mt-4 block h-1 w-20 bg-brand-primary" aria-hidden="true" />
                  <div className="mt-8 grid auto-rows-[12rem] gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {event.photos.map((image, index) => (
                      <GalleryButton key={`${event.title}-${image.alt}-${index}`} image={image} onClick={() => lightbox.open(start + index)} className={index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <Lightbox images={allImages} index={lightbox.index} onClose={lightbox.close} onPrevious={lightbox.previous} onNext={lightbox.next} />
    </>
  );
}
