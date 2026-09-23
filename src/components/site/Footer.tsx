import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { organization, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-12 text-ink-foreground">
      <div className="absolute inset-0 urban-grid opacity-25" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.2fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-7 text-ink-muted">{organization.description}</p>
          </div>
          <FooterGroup title="Institucional" links={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe", to: "/quem-somos/equipe" }, { label: "Transparência", to: "/quem-somos/transparencia" }]} />
          <FooterGroup title="Conteúdo" links={[{ label: "Projetos", to: "/projetos" }, { label: "Notícias", to: "/noticias" }, { label: "Galeria", to: "/galeria" }]} />
          <div>
            <h2 className="label-text text-brand-secondary">Contato</h2>
            <ul className="mt-4 grid gap-3 text-sm text-ink-muted">
              <li className="flex gap-2"><MapPin className="mt-1 size-4 shrink-0 text-brand-primary" aria-hidden="true" />{organization.address}</li>
              <li className="flex gap-2"><Phone className="mt-1 size-4 shrink-0 text-brand-primary" aria-hidden="true" />{organization.phone}</li>
              <li className="flex gap-2"><Mail className="mt-1 size-4 shrink-0 text-brand-primary" aria-hidden="true" />{organization.email}</li>
            </ul>
          </div>
          <div>
            <h2 className="label-text text-brand-secondary">Redes sociais</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="grid min-h-11 min-w-11 place-items-center rounded-full border border-ink-line bg-ink-soft text-ink-foreground transition hover:border-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={social.name}>
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-ink-line pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 {organization.name}. Conteúdo demonstrativo editável.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-ink-foreground">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-ink-foreground">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterPath = "/quem-somos" | "/quem-somos/equipe" | "/quem-somos/transparencia" | "/projetos" | "/noticias" | "/galeria";

function FooterGroup({ title, links }: { title: string; links: Array<{ label: string; to: FooterPath }> }) {
  return (
    <div>
      <h2 className="label-text text-brand-secondary">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm text-ink-muted">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
