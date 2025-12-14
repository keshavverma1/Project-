import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Btn from "./Btn";
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroSection3 = () => {
  const information = [
    {
      logo: <FaRegCheckCircle className="text-orange-400 size-5" />,
      des: "New: Get AI-powered anti-scam guidance fast with Avast Assistant.",
    },
    {
      logo: <FaRegCheckCircle className="text-orange-400 size-5" />,
      des: "Block scam websites and emails to stay away from them, backed by AI.",
    },
    {
      logo: <FaRegCheckCircle className="text-orange-400 size-5" />,
      des: "Protect your personal data and webcam from hackers.",
    },
  ];
  return (
    <div className="w-full container mx-auto rounded-4xl bg-[#071d2b] flex  flex-wrap justify-center items-center flex-col lg:flex-row">
      {/* firstside */}
      <div className="w-full lg:w-1/2 p-10">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/color/512/avast.png"
            className="size-10"
            alt=""
          />
          <h2 className="text-white font-bold">Avast Premium Security </h2>
        </div>
        <div className="mt-5">
          <h1 className="text-white font-bold text-6xl">
            Enhanced digital security for PCs, macOS, and mobile devices
          </h1>
          <p className="text-[20px] font-medium text-gray-300 mt-5">
            Want to feel more confident in your digital world? Use our automatic
            cybersecurity shields against scams, viruses, ransomware, zero-day
            threats, and other types of malware.
          </p>
          <p className="text-[20px] font-medium text-gray-300 mt-5">
            Plus, we can also help you to:
          </p>
          <div>
            {information.map((item, index) => {
              return (
                <div className="flex gap-3 items-center text-[20px] font-medium text-gray-300 mt-5">
                  {item.logo}
                  {item.des}
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Btn
              text="Get Premium Security"
              logo={<IoIosArrowRoundForward />}
            ></Btn>
          </div>
        </div>
      </div>
      {/* secondside */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://www.avast.com/content/dam/avast/features/en/ui-homepage-row-bait-01.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection3;
