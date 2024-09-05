"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Resume",
      link: "/resume",
    },
  ];

  return (
    <div
      style={{ backgroundColor: `#ffffff` }}
      className="fixed left-0 top-0 w-full z-20 ease-in duration-200"
    >
      <div className="sm:flex justify-center items-center hidden border-b-2">
        <div className="flex justify-between items-center">
          <ul
            style={{ color: "black" }}
            className="hidden sm:flex justify-between sm:min-w-[600px] lg:min-w-[1000px]"
          >
            {navLinks.map(({ link, name }) => {
              return (
                <li key={name} className="p-4">
                  <Link
                    className={`${
                      pathname === link ? "text-black" : "text-gray-400"
                    }`}
                    href={link}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="pt-6 flex justify-end mx-6 sm:hidden">
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 right-0">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "black" }} />
          )}
        </div>
      </div>
      {/* MObile menu */}
      <div
        className={
          nav
            ? "sm:hidden absolute text-white top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] text-white right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <ul>
          {navLinks.map(({ link, name }) => {
            return (
              <li onClick={handleNav} key={name} className="p-4 text-4xl">
                <Link href={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
