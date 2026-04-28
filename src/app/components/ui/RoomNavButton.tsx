"use client";

export default function RoomNavButton({
  label,
  icon,
  position,
  active,
  onClick,
  activeClassName,
  idleClassName,
}: {
  label: string;
  icon: string;
  position: string;
  active: boolean;
  onClick: () => void;
  activeClassName: string;
  idleClassName: string;
}) {
  return (
<button
  onClick={onClick}
  className={[
    "absolute z-10 -translate-x-1/2 rounded-full border text-white backdrop-blur-md",
    "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
    "min-w-0 sm:min-w-31 transition duration-200 hover:scale-105 sm:hover:scale-110",
    "focus:outline-none focus:ring-2 focus:ring-white/40",
    "shadow-[0_8px_30px_rgba(0,0,0,0.24)]",
    position,
    active ? activeClassName : idleClassName,
  ].join(" ")}
>
<span className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
  <span>{icon}</span>
  <span>{label}</span>
</span>
    </button>
  );
}