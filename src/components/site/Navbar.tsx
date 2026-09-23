import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Projetos", to: "/projetos" },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
] as const;

const aboutItems = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Equipe", to: "/quem-somos/equipe" },
  { label: "Transparência", to: "/quem-somos/transparencia" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !isOpen;

  return (
    <header className={`fixed inset-x-0 top-0 z-[60] border-b transition duration-300 ${transparent ? "border-transparent bg-transparent text-ink-foreground" : "border-border/80 bg-background/88 text-foreground backdrop-blur-md"}`}>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          <Link to="/" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>Início</Link>
          <div className="group relative">
            <Button variant="ghost" className="nav-link gap-1 px-3" aria-haspopup="menu" aria-expanded="false">
              Quem Somos <ChevronDown className="size-4" aria-hidden="true" />
            </Button>
            <div className="invisible absolute left-0 top-full min-w-56 translate-y-2 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-editorial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {aboutItems.map((item) => (
                <Link key={item.to} to={item.to} className="block rounded-md px-3 py-2 text-sm font-semibold text-popover-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" activeProps={{ className: "block rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.slice(1).map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90">
            <Link to="/projetos">Conheça nossos projetos</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {isOpen ? (
        <div className="border-t border-border bg-background/96 backdrop-blur-md lg:hidden">
          <nav className="container-site py-4" aria-label="Navegação mobile">
            <div className="grid gap-1">
              <Link to="/" className="mobile-link">Início</Link>
              <Button variant="ghost" className="mobile-link justify-between" onClick={() => setAboutOpen((value) => !value)} aria-expanded={aboutOpen}>
                Quem Somos <ChevronDown className={`size-4 transition ${aboutOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </Button>
              {aboutOpen ? (
                <div className="ml-3 grid gap-1 border-l border-border pl-3">
                  {aboutItems.map((item) => <Link key={item.to} to={item.to} className="mobile-link text-sm">{item.label}</Link>)}
                </div>
              ) : null}
              {navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="mobile-link">{item.label}</Link>)}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
