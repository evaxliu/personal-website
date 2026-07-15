import Image from "next/image";
import Link from "next/link";

export default function Surprise() {
  return (
    <Link
      aria-label="View live LeetCode stats"
      className="
        inline-flex cursor-pointer rounded-full
        transition-transform hover:scale-110
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-300
        focus-visible:ring-offset-4
        focus-visible:ring-offset-violet-950
      "
      rel="noopener noreferrer"
      target="_blank"
      href="/leetcode"
    >
      <Image
        alt=""
        className="animate-bounce"
        height={50}
        src="/purple-star.png"
        width={50}
      />
    </Link>
  );
}