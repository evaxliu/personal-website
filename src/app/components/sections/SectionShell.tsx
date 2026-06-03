import { ReactNode } from "react";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function SectionShell({
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
    <div className="flex w-full items-start justify-center">
      <div className="w-full max-w-3xl space-y-4 sm:space-y-5">
        <SectionHeader title={title} description={description} />
        {children}
      </div>
    </div>
  );
}