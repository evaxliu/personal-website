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
        "rounded-3xl border border-white/10 bg-[#10101a]",
        "transition duration-200",
        hover ? "hover:-translate-y-0.5 hover:border-purple-300/30" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}