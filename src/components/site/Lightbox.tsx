import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
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

  useEffect(() => {
    if (index === null) return;
    let touchStartX = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0]?.clientX ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
      const distance = touchEndX - touchStartX;
      if (Math.abs(distance) < 50) return;
      if (distance > 0) onPrevious();
      else onNext();
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, onNext, onPrevious]);

  if (index === null) return null;
  const image = images[index];
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-4" role="dialog" aria-modal="true" aria-label="Visualização ampliada da imagem">
       <IconCircleButton variant="glass-dark" size="md" className="absolute right-4 top-4" onClick={onClose} label="Fechar imagem">
        <X aria-hidden="true" />
      </IconCircleButton>
       <IconCircleButton variant="glass-dark" size="md" className="absolute left-3 top-1/2 -translate-y-1/2 md:left-4" onClick={onPrevious} label="Imagem anterior">
        <ChevronLeft aria-hidden="true" />
      </IconCircleButton>
      <figure className="max-h-[84dvh] w-full max-w-5xl">
        <img src={image.src} alt={image.alt} className="mx-auto max-h-[76dvh] w-full rounded-lg object-contain" />
        <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-ink-muted">
          <span>{image.alt}</span>
          <span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        </figcaption>
      </figure>
       <IconCircleButton variant="glass-dark" size="md" className="absolute right-3 top-1/2 -translate-y-1/2 md:right-4" onClick={onNext} label="Próxima imagem">
        <ChevronRight aria-hidden="true" />
      </IconCircleButton>
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
