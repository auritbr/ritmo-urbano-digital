import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { ImageRef } from "@/data/site";

export function useLightbox(images: ImageRef[]) {
  const [index, setIndex] = useState<number | null>(null);
  const open = (nextIndex: number) => setIndex(nextIndex);
  const close = () => setIndex(null);
  const previous = () => setIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
  const next = () => setIndex((current) => (current === null ? current : (current + 1) % images.length));
  return { index, open, close, previous, next, image: index === null ? undefined : images[index] };
}

export function Lightbox({
  images,
  index,
  onClose,
  onPrevious,
  onNext,
}: {
  images: ImageRef[];
  index: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onNext, onPrevious]);

  if (index === null) return null;
  const image = images[index];
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-4" role="dialog" aria-modal="true" aria-label="Visualização ampliada da imagem">
      <Button variant="ghost" size="icon" className="absolute right-4 top-4 min-h-11 min-w-11 rounded-full bg-ink-soft text-ink-foreground hover:bg-ink-line" onClick={onClose} aria-label="Fechar imagem">
        <X aria-hidden="true" />
      </Button>
      <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-ink-soft text-ink-foreground hover:bg-ink-line" onClick={onPrevious} aria-label="Imagem anterior">
        <ChevronLeft aria-hidden="true" />
      </Button>
      <figure className="max-h-[84dvh] w-full max-w-5xl">
        <img src={image.src} alt={image.alt} className="mx-auto max-h-[76dvh] w-full rounded-lg object-contain" />
        <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-ink-muted">
          <span>{image.alt}</span>
          <span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        </figcaption>
      </figure>
      <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-ink-soft text-ink-foreground hover:bg-ink-line" onClick={onNext} aria-label="Próxima imagem">
        <ChevronRight aria-hidden="true" />
      </Button>
    </div>
  );
}

export function GalleryButton({ image, onClick, className = "" }: { image: ImageRef; onClick: () => void; className?: string }) {
  return (
    <Button variant="ghost" className={`group relative h-auto overflow-hidden rounded-lg border border-border bg-card p-0 ${className}`} onClick={onClick} aria-label={`Ampliar imagem: ${image.alt}`}>
      <img src={image.src} alt={image.alt} className="size-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
      <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition group-hover:bg-ink/35 group-hover:opacity-100">
        <Maximize2 className="size-6 text-ink-foreground" aria-hidden="true" />
      </span>
    </Button>
  );
}
