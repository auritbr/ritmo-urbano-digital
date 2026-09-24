import { Accessibility, Check, Cookie, Minus, Plus, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/BrandIcons";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { organization } from "@/data/site";

export function FloatingControls() {
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [fontScale, setFontScale] = useState(0);
  const [contrast, setContrast] = useState(false);
  const [gray, setGray] = useState(false);
  const [links, setLinks] = useState(false);
  const [readable, setReadable] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--access-font-scale", `${fontScale * 0.04}rem`);
    document.documentElement.classList.toggle("high-contrast", contrast);
    document.documentElement.classList.toggle("grayscale-mode", gray);
    document.documentElement.classList.toggle("highlight-links", links);
    document.documentElement.classList.toggle("readable-font", readable);
  }, [fontScale, contrast, gray, links, readable]);

  const reset = () => {
    setFontScale(0);
    setContrast(false);
    setGray(false);
    setLinks(false);
    setReadable(false);
  };

  return (
    <>
      <div className="floating-accessibility-controls fixed bottom-[1.125rem] left-4 z-[70] flex flex-col items-center gap-2.5 sm:bottom-6 sm:left-6 sm:gap-3">
        <div className="relative">
          <IconCircleButton
            variant="solid"
            className="size-10 bg-ink text-ink-foreground shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-ink/90 sm:size-11"
            onClick={() => setCookiesOpen((value) => !value)}
            label="Abrir preferências de cookies"
          >
            <Cookie aria-hidden="true" className="size-4 sm:size-[1.15rem]" />
          </IconCircleButton>
          <span className="floating-tooltip">Cookies</span>
          {cookiesOpen ? (
            <div className="glass-panel absolute bottom-[calc(100%+0.6rem)] left-0 w-[min(82vw,22rem)] p-4">
              <h2 className="font-display text-base font-semibold text-foreground">Cookies</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Usamos cookies essenciais e métricas simples para melhorar a navegação neste site
                demonstrativo.
              </p>
              {accepted ? (
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-primary">
                  <Check className="size-4" aria-hidden="true" /> Preferências salvas.
                </p>
              ) : null}
              <div className="mt-4 flex gap-2">
                <Button
                  size="sm"
                  className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90"
                  onClick={() => setAccepted(true)}
                >
                  Aceitar
                </Button>
                <Button size="sm" variant="outline" onClick={() => setAccepted(true)}>
                  Preferências
                </Button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="relative">
          <IconCircleButton
            variant="solid"
            className="size-10 bg-ink text-ink-foreground shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-ink/90 sm:size-11"
            onClick={() => setAccessOpen((value) => !value)}
            label="Abrir recursos de acessibilidade"
          >
            <Accessibility aria-hidden="true" className="size-4 sm:size-[1.15rem]" />
          </IconCircleButton>
          <span className="floating-tooltip">Acessibilidade</span>
          {accessOpen ? (
            <div className="glass-panel absolute bottom-[calc(100%+0.6rem)] left-0 w-[min(86vw,24rem)] p-4">
              <h2 className="font-display text-base font-semibold text-foreground">
                Acessibilidade
              </h2>
              <div className="mt-4 grid gap-2">
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => setFontScale((value) => Math.min(value + 1, 3))}
                >
                  <Plus aria-hidden="true" /> Aumentar fonte
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => setFontScale((value) => Math.max(value - 1, -2))}
                >
                  <Minus aria-hidden="true" /> Diminuir fonte
                </Button>
                <ToggleRow
                  label="Alto contraste"
                  active={contrast}
                  onClick={() => setContrast((value) => !value)}
                />
                <ToggleRow
                  label="Tons de cinza"
                  active={gray}
                  onClick={() => setGray((value) => !value)}
                />
                <ToggleRow
                  label="Destacar links"
                  active={links}
                  onClick={() => setLinks((value) => !value)}
                />
                <ToggleRow
                  label="Fonte legível"
                  active={readable}
                  onClick={() => setReadable((value) => !value)}
                />
                <Button variant="ghost" className="justify-start" onClick={reset}>
                  <RotateCcw aria-hidden="true" /> Resetar configurações
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="group fixed bottom-5 right-4 z-[70] sm:right-5">
        <a
          className="grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:size-[3.625rem]"
          href={`https://wa.me/${organization.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar pelo WhatsApp"
        >
          <WhatsAppIcon className="size-7 sm:size-8" />
        </a>
        <span className="pointer-events-none absolute right-0 bottom-[calc(100%+0.5rem)] whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100">
          Conversar pelo WhatsApp
        </span>
      </div>
    </>
  );
}

function ToggleRow({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      className={
        active
          ? "justify-start bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90"
          : "justify-start"
      }
      onClick={onClick}
      aria-pressed={active}
    >
      {active ? <Check aria-hidden="true" /> : null}
      {label}
    </Button>
  );
}
