import { ReactNode } from "react";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="w-full flex items-start justify-center">
      <div className="w-full max-w-3xl space-y-6 sm:space-y-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </div>
    </div>
  );
}