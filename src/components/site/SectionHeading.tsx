export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label ? <p className="label-text text-brand-primary">{label}</p> : null}
      <h2 className={`mt-3 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] md:text-5xl ${dark ? "text-ink-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 md:text-lg ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>{description}</p>
      ) : null}
    </div>
  );
}
