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
      <div className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </div>

      {description && (
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}