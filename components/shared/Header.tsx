"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { ThemeToggleButton } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Browse", path: "/browse" },
  { title: "Your Rooms", path: "/your-rooms" },
];

const Header = () => {
  const activePath = usePathname();
  return (
    <header className="fixed z-50 backdrop-blur-sm  top-0 left-0 w-full    border-b">
      <div className="container  h-14 flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <Image src={"/code.png"} alt="" width={40} height={40} />
          <span className="text-2xl text-blue-400 font-bold ">
            CodeTogether
          </span>
        </div>
        <nav className=" flex gap-4 items-center">
          {navLinks.map((nav, i) => (
            <Link
              key={i}
              href={nav.path}
              className={cn(
                "text-base text-slate-800",
                activePath === nav.path && " text-lg text-blue-400 font-medium"
              )}
            >
              {nav.title}
            </Link>
          ))}
        </nav>
        <div className=" flex gap-3 items-center">
          <Button onClick={() => signIn("github")}>SignIn</Button>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
