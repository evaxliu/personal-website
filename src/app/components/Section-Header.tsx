type sectionHeaderProps = {
  label: string,
  id?: string,
  color: string,
}

export default function SectionHeader({label, color, id} : sectionHeaderProps) {
  const labelColor =
    color === "violet"
      ? "fill-violet-300 text-violet-300"
      : "fill-green-300 text-green-300"

  return (
    <div className={`flex items-center pt-5 gap-3 ${labelColor}`} id={id ? id : ""}>
      <p>
        <svg className="h-1.5 w-1.5" viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
      </p>

      <p className="font-mono font-semibold text-sm tracking-[1.5px] whitespace-nowrap">
        {label}
      </p>

      <div className="flex h-px bg-[#2b2148] w-full" />
    </div>
  )
}