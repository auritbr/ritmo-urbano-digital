type GraphicProps = {
  className?: string;
};

export function SoundWave({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 132 28" fill="none" aria-hidden="true">
      {[8, 16, 24, 12, 22, 28, 18, 10, 20].map((height, index) => (
        <path key={`${height}-${index}`} d={`M${8 + index * 14} ${14 - height / 2}V${14 + height / 2}`} stroke="currentColor" strokeWidth="3" />
      ))}
    </svg>
  );
}

export function VinylOutline({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <circle cx="80" cy="80" r="69" stroke="currentColor" strokeWidth="2" strokeDasharray="250 36" />
      <circle cx="80" cy="80" r="47" stroke="currentColor" strokeWidth="1.5" opacity=".55" />
      <circle cx="80" cy="80" r="18" stroke="currentColor" strokeWidth="3" />
      <circle cx="80" cy="80" r="4" fill="currentColor" />
    </svg>
  );
}

export function UrbanLines({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 180 52" fill="none" aria-hidden="true">
      <path d="M2 9H142M28 26H178M2 43H110" stroke="currentColor" strokeWidth="2" />
      <circle cx="151" cy="9" r="5" fill="currentColor" />
      <path d="m120 38 11 5-11 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SectionMarker({ label, className = "" }: GraphicProps & { label: string }) {
  return (
    <div className={`flex items-center gap-3 text-brand-primary ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-current" />
      <span className="size-1.5 rounded-full bg-current" />
      <span className="label-text">{label}</span>
    </div>
  );
}