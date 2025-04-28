import Image from "next/image";

import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";

export default function Marketing() {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <div className="text-center max-w-md">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who&apos;s joining the
          community, read about how our community are increasing their
          membership income and lot&apos;s more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-18 md:space-y-0 space-x-3 lg:space-x-24">
        {/* item 1 */}
        <div className="relative w-64 h-52 flex-shrink-0">
          <Image className="w-full h-full" src={m1} alt="marketing" />
          <div className="absolute bg-white text-center w-48 h-32 top-34 right-8 left-8 p-2 rounded-lg shadow-md space-y-4">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <a className="text-green-600" href="#">
              Readmore &rarr;
            </a>
          </div>
        </div>
        {/* item 2 */}
        <div className="relative w-64 h-52 flex-shrink-0">
          <Image className="w-full h-full" src={m2} alt="marketing" />
          <div className="absolute bg-white text-center w-48 h-32 top-34 right-8 left-8 p-2 rounded-lg shadow-md space-y-4">
            <p>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <a className="text-green-600" href="#">
              Readmore &rarr;
            </a>
          </div>
        </div>
        {/* item 3 */}
        <div className="relative w-64 h-52 flex-shrink-0">
          <Image className="w-full h-full" src={m3} alt="marketing" />
          <div className="absolute bg-white text-center w-48 h-32 top-34 right-8 left-8 p-2 rounded-lg shadow-md space-y-4">
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <a className="text-green-600" href="#">
              Readmore &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
