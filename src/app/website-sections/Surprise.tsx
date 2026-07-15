"use client"

import { ReactNode, useState } from "react";
import Image from "next/image";
import SectionHeader from "../components/Section-Header";

type SurpriseProps = {
  children: ReactNode;
};

export default function Surprise({ children }: SurpriseProps) {
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  return(
    <>
      <Image 
        key="LandingIcon"
        src={"/purple-star.png"}
        width={50}
        height={50} alt={"icon of purple star"}   
        className="animate-bounce cursor-pointer"
        onClick={() => {setSurpriseOpen(true)}}
      />
      {surpriseOpen && (
        <section 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" 
          role="dialog"
          aria-modal="true"
          onClick={() => setSurpriseOpen(false)}
        >
          <div className="flex flex-col gap-7 w-full max-w-3xl px-10" onClick={(event) => event.stopPropagation()}>
            <SectionHeader label={"FUN / SHOWCASE"} color={"violet"} />
            {children}
          </div>
        </section>
      )}
    </>
  );
}