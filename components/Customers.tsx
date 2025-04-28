import Image from "next/image";

import customers from "../assets/customers.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";

export default function Customers() {
  return (
    <div className="px-4 lg:px-24 py-4 flex flex-col md:flex-row items-center justify-center md:space-x-12 bg-gray-200">
      <div className="w-56 h-56 flex-shrink-0">
        <Image
          className="w-full h-full object-contain"
          src={customers}
          alt="mobile-login"
        />
      </div>
      <div className="max-w-3xl space-y-6 text-center md:text-start">
        <div className="space-y-4">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <a className="text-3xl text-green-600">Tim Smith</a>
          <p className="text-gray-400">
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="grid grid-cols-3 md:grid-cols-6 space-x-12 place-items-center">
            <Image src={f1} alt="logo" />
            <Image src={f2} alt="logo" />
            <Image src={f3} alt="logo" />
            <Image src={f4} alt="logo" />
            <Image src={f5} alt="logo" />
            <Image src={f6} alt="logo" />
          </div>
          <div>
            <a className="text-green-600" href="#">
              Meet all customers &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
