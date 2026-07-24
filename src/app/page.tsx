import Landing from "./website-sections/Landing";
import Experience from "./website-sections/Experience";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Landing />
      </div>

      <div className="flex items-center flex-col gap-10">
        <Experience />
      </div>
    </>
  );
}