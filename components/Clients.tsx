import Image from "next/image";

import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";

export default function Clients() {
  return (
    <>
      {/* Clients */}
      <div className="px-6 md:px-24 my-12">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">Our clients</h1>
          <p className="text-center">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 place-items-center mt-6">
          <Image src={f1} alt="logo" />
          <Image src={f2} alt="logo" />
          <Image src={f3} alt="logo" />
          <Image src={f4} alt="logo" />
          <Image src={f5} alt="logo" />
          <Image src={f6} alt="logo" />
          <Image src={f7} alt="logo" />
        </div>
      </div>
    </>
  );
}
