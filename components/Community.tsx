import Image from "next/image";

import member from "../assets/member.png";
import national from "../assets/national.png";
import clubs from "../assets/clubs.png";

export default function Community() {
  return (
    <div className="flex flex-col items-center p-2 dark:bg-gray-900">
      <div className="flex flex-col items-center text-center max-w-sm">
        <h2 className="mb-4">
          Manage your entire community in a single system
        </h2>
        <p>Who is NextCent suitable for?</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around space-x-3">
        {/* Item 1 */}
        <div className="max-w-sm px-6 py-4 shadow-md rounded-lg">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-11 h-10">
              <Image className="w-full h-full" src={member} alt="community" />
            </div>
            <h3>Membership Organiazations</h3>
          </div>
          <p className="text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        {/* Item 2 */}
        <div className="max-w-sm px-6 py-4 shadow-md rounded-lg">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-11 h-10">
              <Image className="w-full h-full" src={national} alt="community" />
            </div>
            <h3>National Assoociation</h3>
          </div>
          <p className="text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        {/* Item 3 */}
        <div className="max-w-sm p-4 shadow-md rounded-lg">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-11 h-10">
              <Image className="w-full h-full" src={clubs} alt="community" />
            </div>
            <h3>Clubs and Groups</h3>
          </div>
          <p className="text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
