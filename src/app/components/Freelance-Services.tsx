import ServicesCard from "./Services-Card";
import StartAProject from "./Start-A-Project";

export default function FreelanceServices() {
  return(
    <section className="flex flex-col gap-4 grow w-full">
      <h2 className="text-xl text-white font-semibold">
        Freelance Services
      </h2>

      <p className="text-[#8f82b0] font-medium">
        Websites, web applications, and custom software built around your goals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServicesCard title={"Websites & web applications"} description={"Responsive, maintainable experiences designed for your business and users."} />

        <ServicesCard title={"Features & integrations"} description={"New functionality, APIs, third-party services, and improvements to existing software."} />

        <ServicesCard title={"Launch & technical support"} description={"Deployment, performance, SEO, troubleshooting, and ongoing improvements."} />
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