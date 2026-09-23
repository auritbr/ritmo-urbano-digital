import { ChevronLeft, ChevronRight, Circle, Search } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { NewsCard } from "@/components/site/Cards";
import { InternalHero } from "@/components/site/InternalHero";
import { Input } from "@/components/ui/input";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { images, news } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/noticias/")({
  head: () =>
    pageMeta(
      "Notícias — Pulso Urbano",
      "Acompanhe projetos, eventos, parcerias, atividades e novidades do Ponto de Cultura.",
      "/noticias",
    ),
  component: NoticiasPage,
});

const categories = [
  "Todas",
  "Evento",
  "Institucional",
  "Formação",
  "Ação Social",
  "Parceria",
  "Projeto",
];

type PaginationItem = number | "ellipsis-start" | "ellipsis-end";

function paginationItems(current: number, total: number): PaginationItem[] {
  if (total <= 5) return Array.from({ length: total }, (_, index) => index + 1);
  if (current <= 3) return [1, 2, 3, "ellipsis-end", total];
  if (current >= total - 2) return [1, "ellipsis-start", total - 2, total - 1, total];
  return [1, "ellipsis-start", current - 1, current, current + 1, "ellipsis-end", total];
}

function NoticiasPage() {
  const [category, setCategory] = useState("Todas");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const filtered = useMemo(() => {
    return news.filter((item) => {
      const matchCategory = category === "Todas" || item.category === category;
      const search = `${item.title} ${item.excerpt} ${item.category}`.toLowerCase();
      return matchCategory && search.includes(query.toLowerCase());
    });
  }, [category, query]);
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > pages) setPage(pages);
  }, [page, pages]);

  const selectCategory = (next: string) => {
    setCategory(next);
    setPage(1);
  };

  return (
    <>
      <InternalHero
        label="Notícias"
        title="Histórias, ações e acontecimentos"
        description="Acompanhe projetos, eventos, parcerias, atividades e novidades do Ponto de Cultura."
        image={images.stage}
      />
      <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div
              className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0"
              aria-label="Categorias de notícias"
            >
              {categories.map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    className="group flex h-11 shrink-0 items-center gap-2.5 rounded-full pr-2 font-display text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={() => selectCategory(item)}
                    aria-pressed={active}
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all ${active ? "border-brand-primary bg-brand-primary text-brand-primary-foreground" : "liquid-control text-muted-foreground group-hover:text-foreground"}`}
                      aria-hidden="true"
                    >
                      <Circle className={`size-2.5 ${active ? "fill-current" : ""}`} />
                    </span>
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                className="liquid-control h-10 rounded-full pl-9 focus-visible:border-brand-primary focus-visible:ring-0"
                placeholder="Buscar notícias..."
                aria-label="Buscar notícias"
              />
            </div>
          </div>
          {visible.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Nenhuma notícia encontrada
              </h2>
              <p className="mt-2 text-muted-foreground">
                Tente outra categoria ou uma busca diferente.
              </p>
            </div>
          )}
          {pages > 1 ? (
            <nav
              className="mt-10 flex items-center justify-center gap-1.5"
              aria-label="Paginação de notícias"
            >
              <IconCircleButton
                label="Página anterior"
                size="md"
                onClick={() => setPage((value) => Math.max(1, value - 1))}
                disabled={page === 1}
              >
                <ChevronLeft aria-hidden="true" />
              </IconCircleButton>
              {paginationItems(page, pages).map((item) =>
                typeof item === "number" ? (
                  <IconCircleButton
                    key={item}
                    label={`Página ${item}`}
                    size="md"
                    variant={page === item ? "solid" : "glass-light"}
                    onClick={() => setPage(item)}
                    aria-current={page === item ? "page" : undefined}
                  >
                    {item}
                  </IconCircleButton>
                ) : (
                  <span
                    key={item}
                    className="grid size-7 shrink-0 place-items-center text-sm text-muted-foreground"
                    aria-hidden="true"
                  >
                    …
                  </span>
                ),
              )}
              <IconCircleButton
                label="Próxima página"
                size="md"
                onClick={() => setPage((value) => Math.min(pages, value + 1))}
                disabled={page === pages}
              >
                <ChevronRight aria-hidden="true" />
              </IconCircleButton>
            </nav>
          ) : null}
        </div>
      </section>
    </>
  );
}
