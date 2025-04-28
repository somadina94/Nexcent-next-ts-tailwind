import Image from "next/image";
import mobile_login from "../assets/mobile-login.png";

export default function PixelGrade() {
  return (
    <div className="px-4 lg:px-24 flex flex-col md:flex-row items-center justify-center md:space-x-12">
      <div className="w-[307px] h-[301px] flex-shrink-0">
        <Image
          className="w-full h-full object-contain"
          src={mobile_login}
          alt="mobile-login"
        />
      </div>
      <div className="max-w-2xl space-y-6 text-center md:text-start">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <a className="link">Learn More</a>
      </div>
    </div>
  );
}
