import React from "react";
import { PiUsersFourBold } from "react-icons/pi";
import { GiCheckedShield } from "react-icons/gi";
import { GiCompactDisc } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";
const Header3 = () => {
  const headeritems = [
    {
      logo: <GiCheckedShield className="size-20 text-orange-400" />,
      title: "Get AI-powered anti-scam guidance",
    },
    {
      logo: <FaUserSecret className="size-20 text-orange-400" />,
      title: "Block hidden web scams",
    },
    {
      logo: <GiCompactDisc className="size-20 text-orange-400" />,
      title: "Easy to install, effortless to use",
    },
    {
      logo: <PiUsersFourBold className="size-20 text-orange-400" />,
      title: "Millions of users worldwide",
    },
  ];
  return (
    <div className="w-full mx-auto container">
      <div className="mx-4 md:mx-2 lg:mx-0  flex flex-wrap bg-[#fff1e5] px-5 py-4 rounded-3xl">
        {headeritems.map((item, index) => {
          return (
            <div className="w-full sm:w-1/2 lg:w-1/4 pt-3 flex items-center gap-2">
              <div>{item.logo}</div>
              <div className="font-bold ">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header3;
