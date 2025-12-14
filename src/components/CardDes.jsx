import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { FaLaptopMedical } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FaWindows } from "react-icons/fa";
import Btn from "./Btn";
const CardDes = () => {
  const carddesc = [
    {
      logo: <IoShieldCheckmarkSharp className="size-20 pb-5 text-orange-400" />,
      title: "Get anti-scam guidance, powered by AI ",
      description:
        "Decide if online messages or offers are scams, supported by our Avast Assistant’s real-time guidance about suspicious online messages, offers, and more.",
    },
    {
      logo: <FaLaptopCode className="size-20 pb-5 text-orange-400" />,
      title: "Easy to install and use",
      description:
        "It only takes a moment to install Avast Free Antivirus and once it’s done, it’ll run quietly in the background, helping to protect you against viruses and other malware in real time, 24/7.",
    },
    {
      logo: <IoWifi className="size-20 pb-5 text-orange-400" />,
      title: "Wi-Fi network security ",
      description:
        "Connect more safely to any Wi-Fi network, even unsecured public networks, plus see who’s using your home Wi-Fi and help block intruders with a click.",
    },
    {
      logo: <FaLaptopMedical className="size-20 pb-5 text-orange-400" />,
      title: "Protection against ransomware attacks",
      description:
        "Help protect your information. Don't let your personal photos, files, and documents fall victim to hackers using ransomware.",
    },
  ];
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:flex-row pb-15">
        {carddesc.map((item, indes) => {
          return (
            <div className="w-full lg:w-1/4 p-2 ">
              <div className="border-gray-300 rounded-3xl border-2 p-5 flex flex-col items-center">
                {item.logo}
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="pt-2 text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-4 pb-10">
        <Btn logo={<FaWindows />} text="Free downloads"></Btn>
        <button className="w-fit flex items-center gap-2 border-2 border-blue-500 text-blue-500  font-bold px-9 py-2 rounded-3xl">
          Learn More <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CardDes;
