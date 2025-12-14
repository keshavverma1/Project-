import React from "react";
import { FaWindows } from "react-icons/fa";
import hp from "../assets/hp.svg";
import Btn from "./Btn";

const HeroSection = () => {
  return (
    <>
      <div className="width container mx-auto pt-20 pb-20 ">
        <div className="flex  flex-col  lg:flex-row ">
          {/* firstdiv */}
          <div className="w-full lg:w-1/2 ">
            <h1 className="font-bold lg:text-5xl text-[35px]  text-center lg:text-start mx-4 md:mx-2 lg:mx-0 lg:leading-[60px] leading-[50px]  text-[#071d2b]">
              Top-rated free{" "}
              <span className="bg-gradient-to-l to-orange-400 from-orange-800 text-transparent bg-clip-text">
                antivirus
              </span>{" "}
              now with online scam and{" "}
              <span className="bg-gradient-to-l to-red-400 from-red-800 text-transparent bg-clip-text">
                malware
              </span>{" "}
            </h1>
            <p className="text-[#071d2b] pt-4 mx-4 md:mx-2 lg:mx-0 ">
              Join millions of others using our free antivirus. Boost your
              defense against today’s cyberthreats and online scams. Get
              AI-powered anti-scam guidance from our new <b>Avast Assistant</b>.
            </p>
            <div className="mt-5 mb-5 flex justify-center lg:justify-start  ">
              {/* bbbbbbbbbbbbbb */}
              <Btn logo={<FaWindows />} text="Free downloads"></Btn>
            </div>
            <p className="mx-4 md:mx-2 lg:mx-0 text-center lg:text-start">
              Also available for <b>Mac</b>,<b>Android</b>,and <b>iOS</b>
            </p>
          </div>
          {/* seconddiv */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="mt-10 lg:mt-0 ">
              <img src={hp} alt="" className="relative top-10" />
            </div>
          </div>
        </div>
        <div className="flex lg:mt-0 mt-12">
          <div className="flex mx-2 gap-2">
            <img
              src="https://www.avast.com/content/dam/avast/awards/consumer/2024/av-comparatives-top-rated-2024.png"
              alt=""
              className="h-[40px]"
            />
            <div>
              <p className="text-[12px]">January 2025</p>
              <h2 className="text-[12px]">Top Rated Product 2024</h2>
            </div>
          </div>
          <div className="flex mx-2 gap-2">
            <img
              src="https://www.avast.com/content/dam/avast/logo/9_16/Av-test-2023-9_16.png"
              alt=""
              className="h-[40px]"
            />
            <div>
              <p className="text-[12px]">January 2025</p>
              <h2 className="text-[12px]">Best Protection</h2>
            </div>
          </div>
          <div className="flex mx-2 gap-2">
            <img
              src="https://salsa-tropical.com/wp-content/uploads/2019/03/trustpilotreview.png"
              alt=""
              className="h-[55px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
