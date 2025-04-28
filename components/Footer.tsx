import Image from "next/image";

import LogoSvg from "./LogoSvg";
import instagram from "../assets/instagram.svg";
import web from "../assets/web.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import send from "../assets/send.svg";

export default function Footer() {
  return (
    <div className="flex flex-col mt-24 bg-gray-300">
      <div className="max-w-md flex flex-col items-center self-center text-center space-y-4 py-4">
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <a className="link" href="#">
          Get a demo &rarr;
        </a>
      </div>
      <div className="px-6 lg:px-28 py-12 flex flex-col md:flex-row justify-between bg-gray-800 space-y-3 md:space-y-0 text-white">
        <div className="space-y-8">
          <LogoSvg />
          <p className="flex flex-col">
            <span>Copyright &copy; Jahbyte UI Kit.</span>
            <span>All rights reserved</span>
          </p>
          <div className="flex flex-row space-x-2">
            <Image src={instagram} alt="social icon" />
            <Image src={web} alt="social icon" />
            <Image src={twitter} alt="social icon" />
            <Image src={youtube} alt="social icon" />
          </div>
        </div>
        <div className="space-y-3">
          <h2>Company</h2>
          <div className="flex flex-col space-y-2">
            <a href="#">About us</a>
            <a href="#">Blog</a>
            <a href="#">Contact us</a>
            <a href="#">Pricing</a>
            <a href="#">Testmonials</a>
          </div>
        </div>
        <div className="space-y-3">
          <h2>Support</h2>
          <div className="flex flex-col space-y-2">
            <a href="#">Help center</a>
            <a href="#">Terms of service</a>
            <a href="#">Legal</a>
            <a href="#">Privacy policy</a>
            <a href="#">Status</a>
          </div>
        </div>
        <div className="space-y-3">
          <h2>Stay upto date</h2>
          <div className="relative w-72 h-8">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-gray-600 w-full h-full p-2 rounded-lg"
            />
            <Image
              className="absolute right-2 top-1/3"
              src={send}
              alt="send icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
