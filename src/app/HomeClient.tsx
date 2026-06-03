import HomeContent from "@/app/components/sections/HomeContent";
import ExperienceContent from "@/app/components/sections/ExperienceContent";
import ProjectsContent from "@/app/components/sections/ProjectsContent";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#080812] text-white">
      <div className="mx-auto max-w-4xl space-y-28 px-6 py-16 md:py-20">
        <section id="home" className="scroll-mt-24">
          <HomeContent />
        </section>

        <section id="experience" className="scroll-mt-24">
          <ExperienceContent />
        </section>

        <section id="projects" className="scroll-mt-24">
          <ProjectsContent />
        </section>
      </div>
    </main>
  );
}