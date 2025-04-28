import Image from "next/image";

import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";

export default function Statistics() {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-6 items-center px-6 md:px-24 py-12 bg-gray-300">
      <div className="text-center md:text-start">
        <h2>
          Helping a local
          <br />
          <span className="text-green-600">business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and education</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:mr-24">
        <div className="flex flex-row items-center space-x-2">
          <div className="w-8 h-8">
            <Image className="w-full h-ful" src={icon1} alt="icon" />
          </div>
          <div className="-space-y-3">
            <h4>2,245,341</h4>
            <p>Members</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="w-8 h-8">
            <Image className="w-full h-ful" src={icon2} alt="icon" />
          </div>
          <div className="-space-y-3">
            <h4>46,328</h4>
            <p>Clubs</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="w-8 h-8">
            <Image className="w-full h-ful" src={icon3} alt="icon" />
          </div>
          <div className="-space-y-3">
            <h4>828,867</h4>
            <p>Event bokings</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="w-8 h-8">
            <Image className="w-full h-ful" src={icon4} alt="icon" />
          </div>
          <div className="-space-y-3">
            <h4>1,926,436</h4>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
