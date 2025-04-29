"use client";
import { useCallback, useEffect, useRef } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import logo from "../assets/Logo.png";
import Image from "next/image";
import LogoSvg from "./LogoSvg";

export default function Header() {
  const navBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const darkModeHandler = useCallback(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "true");
  }, []);

  const lightModeHandler = useCallback(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "false");
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkMode === "true" || (!isDarkMode && systemDark)) {
      darkModeHandler();
    } else {
      lightModeHandler();
    }
  }, [darkModeHandler, lightModeHandler]);
  function toggleNav() {
    if (!navBtnRef) {
      return;
    }
    navBtnRef.current?.classList.toggle("open");
    mobileMenuRef.current?.classList.toggle("hidden");
    mobileMenuRef.current?.classList.toggle("flex");
  }

  return (
    <div className="z-10 px-4 lg:px-24 py-3 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-950">
      {/* logo */}
      <div className="w-28 h-4 dark:hidden">
        <Image className="w-full h-full" src={logo} alt="logo" />
      </div>
      <div className="hidden dark:block">
        <LogoSvg />
      </div>
      {/* Right full menu */}
      <div className="hidden md:flex justify-items-end items-center">
        {/* tabs */}
        <div className="flex mr-8 gap-6">
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
      <div className="flex flex-row items-center space-x-10">
        {/* menu button */}
        <div className="md:hidden mt-3">
          <button
            className="z-40 hamburger"
            ref={navBtnRef}
            onClick={toggleNav}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Dark/light mode buttons */}
        <div>
          <div className="dark:hidden cursor-pointer" onClick={darkModeHandler}>
            <IoMoon className="w-6 h-6 moon" />
          </div>
          <div
            className="hidden dark:block cursor-pointer"
            onClick={lightModeHandler}
          >
            <IoSunny className="w-6 h-6 sun" />
          </div>
        </div>
      </div>
      {/*mobile menu */}
      <div
        className="hidden flex-col items-center gap-6 min-h-screen absolute py-8 top-14 left-0 right-0 bg-white dark:bg-gray-900"
        ref={mobileMenuRef}
      >
        {/* tabs */}
        <div className="flex flex-col gap-4 text-center">
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
