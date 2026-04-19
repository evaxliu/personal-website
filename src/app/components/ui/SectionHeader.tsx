import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
          {eyebrow}
        </p>
      )}

      <div className="text-3xl font-semibold">{title}</div>

      {description && (
        <p className="max-w-2xl text-sm md:text-base text-white/65 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}