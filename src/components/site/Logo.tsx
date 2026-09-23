import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md bg-foreground text-background">
        <span className="absolute inset-x-1 top-2 h-0.5 rotate-[-18deg] bg-brand-primary" />
        <span className="absolute inset-x-2 top-5 h-0.5 rotate-[-18deg] bg-brand-secondary" />
        <span className="font-display text-sm font-bold tracking-normal">PU</span>
      </span>
      {!compact ? (
        <span className="grid leading-none">
          <span className="font-display text-sm font-bold uppercase tracking-normal text-current">Pulso Urbano</span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-current opacity-70">Ponto de Cultura</span>
        </span>
      ) : null}
    </Link>
  );
}
