import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { InternalHero } from "@/components/site/InternalHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { images, organization } from "@/data/site";
import { pageMeta } from "@/components/site/Seo";

export const Route = createFileRoute("/contato")({
  head: () => pageMeta("Contato — Pulso Urbano", "Entre em contato para projetos, ações, parcerias, oficinas e atividades culturais.", "/contato"),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <InternalHero label="Contato" title="Vamos conversar?" description="Entre em contato para saber mais sobre projetos, ações, parcerias, oficinas e atividades culturais." image={images.team} />
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading title="Vamos conversar?" align="center" description="A equipe está disponível para dialogar com escolas, coletivos, organizações, artistas e pessoas interessadas em fortalecer a cultura no território." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-2xl font-black">Informações</h2>
              <ul className="mt-6 grid gap-5 text-muted-foreground">
                <li className="flex gap-3"><MapPin className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden="true" /><span>{organization.address}</span></li>
                <li className="flex gap-3"><Mail className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden="true" /><span>{organization.email}</span></li>
                <li className="flex gap-3"><Phone className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden="true" /><span>{organization.phone}</span></li>
                <li className="flex gap-3"><Phone className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden="true" /><span>WhatsApp: {organization.phone}</span></li>
                <li className="flex gap-3"><Send className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden="true" /><span>{organization.hours}</span></li>
              </ul>
            </aside>
            <form className="rounded-lg border border-border bg-card p-6" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="nome" label="Nome"><Input id="nome" required placeholder="Seu nome" /></Field>
                <Field id="email" label="E-mail"><Input id="email" type="email" required placeholder="seu@email.com" /></Field>
                <Field id="telefone" label="Telefone"><Input id="telefone" placeholder="(00) 00000-0000" /></Field>
                <Field id="assunto" label="Assunto"><Input id="assunto" required placeholder="Parceria, oficina, visita..." /></Field>
                <div className="sm:col-span-2"><Field id="mensagem" label="Mensagem"><Textarea id="mensagem" required className="min-h-36" placeholder="Conte como podemos conversar." /></Field></div>
              </div>
              <label className="mt-5 flex gap-3 text-sm text-muted-foreground"><input type="checkbox" required className="mt-1 size-4 accent-brand-primary" /> Li e concordo com a Política de Privacidade.</label>
              <Button className="mt-6 bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90" type="submit"><Send aria-hidden="true" /> Enviar mensagem</Button>
              {sent ? <p className="mt-4 text-sm font-semibold text-brand-primary" aria-live="polite">Mensagem registrada nesta versão demonstrativa.</p> : null}
            </form>
          </div>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading title="Encontre a gente nas redes" align="center" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[{ name: "Instagram", icon: Instagram }, { name: "Facebook", icon: Facebook }, { name: "YouTube", icon: Youtube }, { name: "WhatsApp", icon: Phone }].map((item) => {
              const Icon = item.icon;
              return <a key={item.name} href={item.name === "WhatsApp" ? `https://wa.me/${organization.whatsapp}` : "https://example.com"} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-card p-5 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Icon className="size-7 text-brand-primary" aria-hidden="true" /><h2 className="mt-5 font-display text-xl font-black">{item.name}</h2><p className="mt-2 text-sm text-muted-foreground">Acompanhe agendas, registros e chamadas públicas.</p></a>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-bold text-foreground">{label}</label>{children}</div>;
}
