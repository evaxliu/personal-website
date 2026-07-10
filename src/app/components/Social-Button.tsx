import Link from "next/link";

type socialProps = {
  name: string,
  url: string,
}

export default function SocialButton({name, url} : socialProps){
  return(
    <Link 
      key={name}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="flex h-12 items-center justify-center border border-[#221b39] bg-[#221b39] text-white py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out"
    >
      {name}
    </Link>
  )
}