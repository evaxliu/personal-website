import { ReactNode } from "react";

export default function SectionHeader({
  title,
  description,
}: {
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-3xl font-semibold">{title}</div>

      {description && (
        <p className="max-w-2xl text-sm md:text-base text-white/65 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}