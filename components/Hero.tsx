import Image from "next/image";
import illustration from "../assets/Illustration.png";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="px-12 md:px-24 py-16 flex justify-between flex-col-reverse md:flex-row items-center bg-gray-200">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="font-semibold text-2xl md:text-5xl">
            Lessons and insights <br />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <a className="px-6 py-2 bg-green-500 text-white rounded" href="#">
            Register
          </a>
        </div>
        <div className="w-64 h-72">
          <Image
            className="w-full h-full"
            src={illustration}
            alt="illustration"
          />
        </div>
      </div>
    </>
  );
}
