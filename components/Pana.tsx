import Image from "next/image";
import pana from "../assets/pana.png";

export default function Pana() {
  return (
    <div className="px-4 lg:px-24 flex flex-col md:flex-row items-center justify-center md:space-x-12">
      <div className="w-[307px] h-[301px] flex-shrink-0">
        <Image className="w-full h-full object-contain" src={pana} alt="pana" />
      </div>
      <div className="max-w-2xl space-y-6 text-center md:text-start">
        <h3>How to design your site footer like we did</h3>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <a className="link" href="#">
          Learn More
        </a>
      </div>
    </div>
  );
}
