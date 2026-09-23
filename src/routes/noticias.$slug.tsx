import { ArrowLeft, Copy, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { NewsCard } from "@/components/site/Cards";
import { GalleryButton, Lightbox, useLightbox } from "@/components/site/Lightbox";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SoundWave, UrbanLines, VinylOutline } from "@/components/site/UrbanGraphics";
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
      <section className="relative min-h-[68dvh] overflow-hidden bg-ink text-ink-foreground md:min-h-[72dvh]">
        <img src={article.image.src} alt={article.image.alt} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-ink/76" aria-hidden="true" />
        <div className="container-site relative flex min-h-[68dvh] items-end pb-10 pt-28 md:min-h-[72dvh] md:pb-14 md:pt-32">
          <div className="max-w-5xl">
            <Button asChild variant="ghost" className="liquid-button group mb-7 h-11 px-4"><Link to="/noticias"><ArrowLeft className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true" /> Voltar para Notícias</Link></Button>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em]"><span className="text-brand-secondary">{article.category}</span><time className="text-ink-muted">{article.date}</time></div>
            <h1 className="mt-4 max-w-[17ch] font-display text-[clamp(2.35rem,5vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.02em]">{article.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted md:text-lg">{article.excerpt}</p>
          </div>
        </div>
      </section>
      <article className="relative overflow-hidden bg-background py-14 md:py-16">
        <UrbanLines className="absolute right-6 top-12 hidden w-40 text-brand-primary opacity-20 lg:block" />
        <div className="container-site max-w-[52rem]">
          <div className="mb-8 flex items-center gap-3 text-brand-primary" aria-hidden="true"><span className="h-10 w-1 bg-current" /><SoundWave className="w-24" /></div>
          <div className="grid gap-6 text-[1.0625rem] leading-[1.75] text-foreground md:text-lg">
            {article.content.map((block, index) => {
              if (block.type === "heading") return <h2 key={index} className="font-display text-3xl font-bold leading-tight tracking-[-0.02em]">{block.text}</h2>;
              if (block.type === "quote") return <blockquote key={index} className="relative border-l-4 border-brand-primary bg-surface px-5 py-6 font-display text-xl font-semibold leading-snug md:text-2xl">“{block.text}”</blockquote>;
              if (block.type === "list") return <ul key={index} className="list-disc space-y-2 pl-5">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
              if (block.type === "image") return <figure key={index}><img src={block.image.src} alt={block.image.alt} className="rounded-lg" loading="lazy" /><figcaption className="mt-2 text-sm text-muted-foreground">{block.caption}</figcaption></figure>;
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>
      <section className="relative overflow-hidden bg-surface py-14 md:py-16">
        <VinylOutline className="absolute -right-12 top-8 size-56 text-foreground opacity-[0.045]" />
        <div className="container-site relative">
          <SectionHeading label="Registros" title="Galeria de fotos" />
          <SoundWave className="mt-5 w-28 text-brand-primary" />
          <div className="mt-7 grid auto-rows-[9rem] grid-cols-2 gap-3 md:auto-rows-[10rem] md:grid-cols-4">
            {article.gallery.map((image, index) => {
              const shape = index === 0 ? "col-span-2 row-span-2 md:row-span-3" : index === 3 ? "col-span-2 row-span-2" : "row-span-1 md:row-span-2";
              return <GalleryButton key={`${image.alt}-${index}`} image={image} onClick={() => lightbox.open(index)} className={shape} />;
            })}
          </div>
        </div>
      </section>
      <section className="bg-background py-12">
        <div className="container-site max-w-4xl">
          <div className="flex items-center gap-4"><h2 className="font-display text-2xl font-bold tracking-[-0.02em]">Compartilhe esta notícia</h2><UrbanLines className="hidden w-28 text-brand-primary opacity-60 sm:block" /></div>
          <div className="mt-5 flex flex-wrap gap-3">
            <ShareButton href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`} icon={MessageCircle} label="WhatsApp" />
            <ShareButton href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} icon={Facebook} label="Facebook" />
            <ShareButton href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`} icon={Linkedin} label="LinkedIn" />
            <Button variant="ghost" className="liquid-control" onClick={copyLink}><Copy aria-hidden="true" /> Copiar link</Button>
          </div>
          {copied ? <p className="mt-3 text-sm font-semibold text-brand-primary" aria-live="polite">Link copiado!</p> : null}
        </div>
      </section>
      <section className="section-y relative overflow-hidden bg-surface">
        <VinylOutline className="absolute -left-16 top-10 size-64 text-foreground opacity-[0.035]" />
        <div className="container-site relative">
          <SectionHeading label="Continue explorando" title="Outras histórias do nosso movimento" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">{related.map((item) => <NewsCard key={item.slug} item={item} compact />)}</div>
        </div>
      </section>
      <Lightbox images={article.gallery} index={lightbox.index} onClose={lightbox.close} onPrevious={lightbox.previous} onNext={lightbox.next} />
    </>
  );
}

function ShareButton({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return <Button asChild variant="ghost" className="liquid-control"><a href={href} target="_blank" rel="noreferrer"><Icon aria-hidden="true" /> {label}</a></Button>;
}
