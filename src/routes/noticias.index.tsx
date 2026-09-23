import { Search } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { NewsCard } from "@/components/site/Cards";
import { InternalHero } from "@/components/site/InternalHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { images, news } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/noticias/")({
  head: () => pageMeta("Notícias — Pulso Urbano", "Acompanhe projetos, eventos, parcerias, atividades e novidades do Ponto de Cultura.", "/noticias"),
  component: NoticiasPage,
});

const categories = ["Todas", "Evento", "Institucional", "Formação", "Ação Social", "Parceria", "Projeto"];

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

  const selectCategory = (next: string) => {
    setCategory(next);
    setPage(1);
  };

  return (
    <>
      <InternalHero label="Notícias" title="Histórias, ações e acontecimentos" description="Acompanhe projetos, eventos, parcerias, atividades e novidades do Ponto de Cultura." image={images.stage} />
      <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0" aria-label="Categorias de notícias">
              {categories.map((item) => (
                <Button key={item} variant="ghost" className={`glass-panel h-10 shrink-0 rounded-full px-4 ${category === item ? "bg-brand-primary text-brand-primary-foreground" : ""}`} onClick={() => selectCategory(item)} aria-pressed={category === item}>
                  {item}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} className="h-10 rounded-full bg-card pl-9" placeholder="Buscar notícias..." aria-label="Buscar notícias" />
            </div>
          </div>
          {visible.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => <NewsCard key={item.slug} item={item} />)}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
              <h2 className="font-display text-2xl font-black text-foreground">Nenhuma notícia encontrada</h2>
              <p className="mt-2 text-muted-foreground">Tente outra categoria ou uma busca diferente.</p>
            </div>
          )}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Paginação de notícias">
            <Button variant="ghost" className="glass-panel h-10 rounded-full" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1}>←</Button>
            {Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
              <Button key={number} variant="ghost" className={`glass-panel h-10 min-w-10 rounded-full ${page === number ? "bg-brand-primary text-brand-primary-foreground" : ""}`} onClick={() => setPage(Math.min(number, pages))} aria-current={page === number ? "page" : undefined}>
                {number}
              </Button>
            ))}
            <Button variant="ghost" className="glass-panel h-10 rounded-full" onClick={() => setPage((value) => Math.min(pages, value + 1))} disabled={page === pages}>→</Button>
          </nav>
        </div>
      </section>
    </>
  );
}
