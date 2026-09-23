import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { InternalHero } from "@/components/site/InternalHero";
import { WhatsAppIcon } from "@/components/site/BrandIcons";
import { Button } from "@/components/ui/button";
import { IconCircleButton } from "@/components/ui/icon-circle-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { images, organization } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageMeta(
      "Contato — Pulso Urbano",
      "Entre em contato para projetos, ações, parcerias, oficinas e atividades culturais.",
      "/contato",
    ),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <InternalHero
        label="Contato"
        title="Vamos conversar?"
        description="Entre em contato para saber mais sobre projetos, ações, parcerias, oficinas e atividades culturais."
        image={images.team}
      />
      <section className="bg-background py-14 md:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-14">
          <aside>
            <p className="label-text text-brand-primary">Informações</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Canais de contato
            </h2>
            <p className="mt-3 text-muted-foreground">
              Nossa equipe responderá o mais breve possível.
            </p>
            <div className="mt-7 grid gap-3">
              <ContactCard icon={MapPin} label="Endereço" value={organization.address} />
              <ContactCard icon={Phone} label="Telefone" value={organization.phone} />
              <ContactCard
                icon={WhatsAppIcon}
                label="WhatsApp"
                value="Clique no botão para conversar"
                href={`https://wa.me/${organization.whatsapp}`}
              />
              <ContactCard
                icon={Mail}
                label="E-mail"
                value={organization.email}
                href={`mailto:${organization.email}`}
              />
              <ContactCard icon={Clock} label="Atendimento" value={organization.hours} />
            </div>
            <div className="mt-6 flex gap-3" aria-label="Redes sociais">
              <IconCircleButton asChild variant="solid" size="md" label="Instagram">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram aria-hidden="true" />
                </a>
              </IconCircleButton>
              <IconCircleButton asChild variant="solid" size="md" label="Facebook">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook aria-hidden="true" />
                </a>
              </IconCircleButton>
              <IconCircleButton asChild variant="solid" size="md" label="YouTube">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Youtube aria-hidden="true" />
                </a>
              </IconCircleButton>
            </div>
          </aside>
          <form
            className="rounded-[1.125rem] border border-border bg-card p-6 md:p-9"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Envie uma mensagem
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field id="nome" label="Nome">
                  <Input
                    id="nome"
                    required
                    className="h-[3.125rem] rounded-xl bg-background shadow-none focus-visible:border-brand-primary focus-visible:ring-0"
                    placeholder="Seu nome"
                  />
                </Field>
              </div>
              <Field id="email" label="E-mail">
                <Input
                  id="email"
                  type="email"
                  required
                  className="h-[3.125rem] rounded-xl bg-background shadow-none focus-visible:border-brand-primary focus-visible:ring-0"
                  placeholder="seu@email.com"
                />
              </Field>
              <Field id="telefone" label="Telefone">
                <Input
                  id="telefone"
                  className="h-[3.125rem] rounded-xl bg-background shadow-none focus-visible:border-brand-primary focus-visible:ring-0"
                  placeholder="(00) 00000-0000"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field id="assunto" label="Assunto">
                  <Input
                    id="assunto"
                    required
                    className="h-[3.125rem] rounded-xl bg-background shadow-none focus-visible:border-brand-primary focus-visible:ring-0"
                    placeholder="Parceria, oficina, visita..."
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="mensagem" label="Mensagem">
                  <Textarea
                    id="mensagem"
                    required
                    className="min-h-40 resize-y rounded-xl bg-background shadow-none focus-visible:border-brand-primary focus-visible:ring-0"
                    placeholder="Conte como podemos conversar."
                  />
                </Field>
              </div>
            </div>
            <label className="mt-5 flex gap-3 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 size-4 accent-brand-primary" />{" "}
              <span>
                Li e aceito a{" "}
                <Link
                  to="/politica-de-privacidade"
                  className="font-semibold text-foreground underline underline-offset-4"
                >
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>
            <Button
              className="mt-6 h-14 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              type="submit"
            >
              <Send aria-hidden="true" /> Enviar mensagem
            </Button>
            {sent ? (
              <p className="mt-4 text-sm font-semibold text-brand-primary" aria-live="polite">
                Mensagem registrada nesta versão demonstrativa.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin | typeof WhatsAppIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-primary/15 text-brand-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="label-text block text-[0.65rem] text-brand-primary">{label}</span>
        <span className="mt-1 block text-sm font-medium leading-6 text-foreground">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("https") ? "_blank" : undefined}
      rel={href.startsWith("https") ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4 transition hover:border-brand-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4">
      {content}
    </div>
  );
}
