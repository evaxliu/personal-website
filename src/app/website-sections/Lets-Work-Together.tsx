import ContactForm from "../components/Contact-Form";

export default function LetsWorkTogether() {
  return(
    <section className="border border-[#322851] bg-[#1F1838] rounded-2xl py-5 px-7 md:py-10 md:px-20" id="contact">
      <div className="flex flex-col items-start md:items-center gap-5">
        <h2 className="text-3xl text-white font-bold md:text-center text-left">
          Let&apos;s work together
        </h2>
        
        <p className="text-violet-200 font-semibold md:text-center text-left">
          Hiring or need a site built? I&apos;d love to hear from you.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}