import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Btn from "./Btn";
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroSection4 = () => {
  return (
    <div className="w-full mt-10 container mx-auto rounded-4xl bg-white flex  flex-wrap justify-center items-center flex-col lg:flex-row-reverse">
      {/* firstside */}
      <div className="w-full lg:w-1/2 p-10">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/color/512/avast.png"
            className="size-10"
            alt=""
          />
          <h2 className="text-black font-bold">Avast SecureLine VPN </h2>
        </div>
        <div className="mt-5">
          <h1 className="text-black font-bold text-6xl">
            Choose a VPN for more online privacy
          </h1>
          <p className="text-[20px] font-medium text-black mt-5">
            Help block ISPs from tracking your activity, help avoid
            geo-restrictions from content providers, and ensure public Wi-Fi is
            safer with Avast’s Virtual Private Network (VPN).
          </p>

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
          src="https://www.avast.com/content/dam/avast/features/en/ui-homepage-bait-02.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection4;
