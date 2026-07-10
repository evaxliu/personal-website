type servicesCardProps = {
  title: string,
  description: string
}

export default function ServicesCard({title, description} : servicesCardProps) {
  return (
    <section className="flex flex-col px-7 py-5 gap-3 grow w-full bg-[#1F1838] rounded-2xl border border-[#322851] hover:-translate-y-1 duration-300 ease-in-out">
      <h2 className="text-md text-white font-bold">
        {title}
      </h2>

      <p className="text-sm text-violet-200 font-semibold">
        {description}
      </p>
    </section>
  );
}