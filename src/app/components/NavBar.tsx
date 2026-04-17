"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconButton, Collapse } from "@material-tailwind/react";

export default function NavBar() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  ];

  const isActive = (path: string) => pathname === path;

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* 🌸 Logo */}
        <Link href="/" className="text-lg font-semibold tracking-wide group">
          <span className="text-white group-hover:text-purple-300 transition">
            Eva Liu
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "transition relative",
                isActive(item.href)
                  ? "text-purple-300"
                  : "text-white/70 hover:text-purple-200",
              ].join(" ")}
            >
              {item.label}

              {/* active underline */}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-300 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <IconButton
          variant="text"
          className="md:hidden text-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Nav */}
      <Collapse open={openNav} className="md:hidden">
        <nav className="flex flex-col gap-4 px-6 pb-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpenNav(false)}
              className={[
                "py-2 transition",
                isActive(item.href)
                  ? "text-purple-300"
                  : "text-white/70 hover:text-purple-200",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Collapse>
    </header>
  );
}