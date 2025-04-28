"use client";
import { useRef } from "react";
import logo from "../assets/Logo.png";
import Image from "next/image";

export default function Header() {
  const navBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  function toggleNav() {
    if (!navBtnRef) {
      return;
    }
    navBtnRef.current?.classList.toggle("open");
    mobileMenuRef.current?.classList.toggle("hidden");
    mobileMenuRef.current?.classList.toggle("flex");
  }
  return (
    <div className="z-10 px-24 py-3 flex justify-between items-center sticky top-0 bg-white">
      {/* logo */}
      <div className="w-28 h-4">
        <Image className="w-full h-full" src={logo} alt="logo" />
      </div>
      {/* Right full menu */}
      <div className="hidden md:flex justify-items-end items-center">
        {/* tabs */}
        <div className="flex mr-8 gap-4 text-gray-600 hover:text-gray-900">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>
        {/* Register button */}
        <a className="px-6 py-2 text-white bg-green-500 rounded" href="#">
          Register now &rarr;
        </a>
      </div>
      {/* menu button */}
      <div className="md:hidden">
        <button className="z-40 hamburger" ref={navBtnRef} onClick={toggleNav}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/*mobile menu */}
      <div
        className="hidden flex-col items-center gap-6 min-h-screen absolute py-8 top-10 left-0 right-0 bg-white"
        ref={mobileMenuRef}
      >
        {/* tabs */}
        <div className="flex flex-col gap-4 text-gray-600 hover:text-gray-900 text-center">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>
        {/* Register button */}
        <a className="link">Register now &rarr;</a>
      </div>
    </div>
  );
}
