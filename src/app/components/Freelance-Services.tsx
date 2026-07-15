import ServicesCard from "./Services-Card";
import StartAProject from "./Start-A-Project";

export default function FreelanceServices() {
  return(
    <section className="flex flex-col gap-4 grow w-full">
      <h2 className="text-xl text-white font-semibold">
        Freelance Services
      </h2>

      <p className="text-[#8f82b0] font-medium">
        Websites that work as hard as you do.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServicesCard title={"Marketing & business sites"} description={"Polished, responsive websites that organize your services clearly and turn visitors into inquiries."} />

        <ServicesCard title={"Design → live site"} description={"Site structure, responsive UI, and content organization — translating what your business needs into a real web experience."} />

        <ServicesCard title={"Deploy, SEO & performance"} description={"Fast, discoverable deployment with SEO and performance care so your site works from day one."} />
      </div>

      <div className="flex items-center gap-3 text-sm">
        <StartAProject />
        
        <p className="text-[#8F82B0]">
          Free intro chat — tell me what your business needs.
        </p>
      </div>
    </section>
  );
}