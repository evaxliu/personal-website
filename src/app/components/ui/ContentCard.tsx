import { ReactNode } from "react";

export default function ContentCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "transition duration-300",
        hover ? "hover:-translate-y-0.5 hover:bg-white/8" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}