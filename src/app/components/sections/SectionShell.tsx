import { ReactNode } from "react";

export default function SectionShell({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="h-full w-full flex items-start justify-center px-6 md:px-10 py-10">
      <div className="w-full max-w-3xl space-y-8">{children}</div>
    </div>
  );
}