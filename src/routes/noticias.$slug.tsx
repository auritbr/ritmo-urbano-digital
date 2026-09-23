import { ArrowLeft, Copy, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { NewsCard } from "@/components/site/Cards";
import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { getNews, relatedNews } from "@/data/site";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const article = getNews(params.slug);
    if (!article) throw notFound();
    return { article, related: relatedNews(params.slug) };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.article ? `${loaderData.article.title} — Pulso Urbano` : "Notícia não encontrada — Pulso Urbano";
    const description = loaderData?.article?.excerpt ?? "Notícia do Ponto de Cultura Pulso Urbano.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
      scripts: loaderData?.article ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: loaderData.article.title, description: loaderData.article.excerpt, datePublished: loaderData.article.date, author: { "@type": "Organization", name: "Pulso Urbano" } }) }] : [],
    };
  },
  component: NoticiaPage,
});

function NoticiaPage() {
  const { article, related } = Route.useLoaderData();
  const lightbox = useLightbox(article.gallery);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    if (navigator.clipboard) await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <section className="relative min-h-[72dvh] overflow-hidden bg-ink text-ink-foreground">
        <img src={article.image.src} alt={article.image.alt} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-ink/76" aria-hidden="true" />
        <div className="container-site relative flex min-h-[72dvh] items-end pb-12 pt-32">
          <div className="max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 border border-ink-line bg-ink-soft text-ink-foreground hover:bg-ink-line"><Link to="/noticias"><ArrowLeft aria-hidden="true" /> Voltar para Notícias</Link></Button>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.12em]"><span className="text-brand-secondary">{article.category}</span><time className="text-ink-muted">{article.date}</time></div>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">{article.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">{article.excerpt}</p>
          </div>
        </div>
      </section>
      <article className="section-y bg-background">
        <div className="container-site max-w-3xl">
          <div className="grid gap-6 text-lg leading-9 text-foreground">
            {article.content.map((block, index) => {
              if (block.type === "heading") return <h2 key={index} className="font-display text-3xl font-black leading-tight">{block.text}</h2>;
              if (block.type === "quote") return <blockquote key={index} className="border-l-4 border-brand-primary pl-5 font-display text-2xl font-black leading-tight">“{block.text}”</blockquote>;
              if (block.type === "list") return <ul key={index} className="list-disc space-y-2 pl-5">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
              if (block.type === "image") return <figure key={index}><img src={block.image.src} alt={block.image.alt} className="rounded-lg" loading="lazy" /><figcaption className="mt-2 text-sm text-muted-foreground">{block.caption}</figcaption></figure>;
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>
      <section className="bg-surface py-16">
        <div className="container-site">
          <SectionHeading title="Galeria de fotos" />
          <div className="mt-8 grid auto-rows-[11rem] gap-3 md:grid-cols-5">
            {article.gallery.map((image, index) => <GalleryButton key={`${image.alt}-${index}`} image={image} onClick={() => lightbox.open(index)} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""} />)}
          </div>
        </div>
      </section>
      <section className="bg-background py-12">
        <div className="container-site max-w-4xl">
          <h2 className="font-display text-2xl font-black">Compartilhe esta notícia</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <ShareButton href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`} icon={MessageCircle} label="WhatsApp" />
            <ShareButton href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} icon={Facebook} label="Facebook" />
            <ShareButton href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`} icon={Linkedin} label="LinkedIn" />
            <Button variant="ghost" className="glass-panel rounded-full" onClick={copyLink}><Copy aria-hidden="true" /> Copiar link</Button>
          </div>
          {copied ? <p className="mt-3 text-sm font-semibold text-brand-primary" aria-live="polite">Link copiado!</p> : null}
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading title="Você também pode gostar" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">{related.map((item) => <NewsCard key={item.slug} item={item} compact />)}</div>
        </div>
      </section>
      <Lightbox images={article.gallery} index={lightbox.index} onClose={lightbox.close} onPrevious={lightbox.previous} onNext={lightbox.next} />
    </>
  );
}

function ShareButton({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return <Button asChild variant="ghost" className="glass-panel rounded-full"><a href={href} target="_blank" rel="noreferrer"><Icon aria-hidden="true" /> {label}</a></Button>;
}
