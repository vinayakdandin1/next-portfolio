"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const [color, setColor] = useState<string>("black");
  const [textColor, setTextColor] = useState<string>("black");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `#ffffff` }}
      className="fixed left-0 top-0 w-full z-20 ease-in duration-200"
    >
      <div className="sm:flex justify-center items-center hidden border-b-2">
        <div
          className="flex justify-between items-center text-black"
              
        >
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="p-4">
              <Link href="/#hero">Home</Link>
            </li>
            <li className="p-4">
              <Link href="/#about">About me</Link>
            </li>
            <li className="p-4">
              <Link href="/#demo">Contact</Link>
            </li>
            <li className="p-4">
              <Link href="/#testimonials">Projects</Link>
            </li>
            <li className="p-4">
              <Link href="/#faq">Resume</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 flex justify-end mx-6 sm:hidden">
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 right-0">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
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
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/home">Home</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#about">About me</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#demo">Contact</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#testimonials">Projects</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#contact">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
