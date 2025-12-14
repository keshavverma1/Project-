import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Btn from "./Btn";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWindows } from "react-icons/fa";
const HeroSection6 = () => {
  return (
    <div className="w-full mt-10 container mx-auto rounded-4xl bg-white flex  flex-wrap justify-center items-center flex-col lg:flex-row-reverse">
      {/* firstside */}
      <div className="w-full lg:w-1/2 p-10">
        <div className="mt-5">
          <h1 className="text-black font-bold text-6xl">
            It’s so easy to install — switching to Avast takes seconds
          </h1>
          <p className="text-[20px] font-medium text-black mt-5">
            You can start using Avast’s award-winning antivirus immediately.
            It’s quick and easy to install, and gives you all the protection you
            need to live your online life securely. And it’s totally free — so
            give it a try right now.
          </p>

          <div className="mt-10">
            <Btn logo={<FaWindows />} text="Free downloads"></Btn>
          </div>
        </div>
      </div>
      {/* secondside */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://i0.wp.com/www.channeltech.it/wp-content/uploads/2024/03/Avast.jpg?fit=740,493&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection6;
