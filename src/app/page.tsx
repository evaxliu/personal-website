import Marquee from "./components/Marquee/Marquee";
import { marqueeList } from "./components/Marquee/Marquee-text";
import Landing from "./components/website-sections/Landing";

export default function Page() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <Landing />
        <Marquee texts={marqueeList} />
      </div>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <Landing />
        <Marquee texts={marqueeList} />
      </div>
    </>
  );
}