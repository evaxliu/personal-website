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
        "absolute z-10 -translate-x-1/2 rounded-full border px-4 py-2 text-sm font-normal text-white backdrop-blur-md",
        "min-w-31 transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40",
        "shadow-[0_8px_30px_rgba(0,0,0,0.24)]",
        position,
        active ? activeClassName : idleClassName,
      ].join(" ")}
    >
      <span className="inline-flex items-center justify-center gap-2">
        <span>{icon}</span>
        <span>{label}</span>
      </span>
    </button>
  );
}