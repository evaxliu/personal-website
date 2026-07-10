import Landing from "./website-sections/Landing";
import Experience from "./website-sections/Experience";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Landing />
        {/* <Marquee texts={marqueeList} /> */}
      </div>

      <div className="flex items-center flex-col gap-10">
        <Experience />
      </div>

      <div className="flex items-center flex-col">
        <Footer />
      </div>
    </>
  );
}