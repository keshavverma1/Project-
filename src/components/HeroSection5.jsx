import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Btn from "./Btn";
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroSection5 = () => {
  return (
    <div className="w-full mt-10 container mx-auto rounded-4xl bg-white flex  flex-wrap justify-center items-center flex-col lg:flex-row">
      {/* firstside */}
      <div className="w-full lg:w-1/2 p-10">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/color/512/avast.png"
            className="size-10"
            alt=""
          />
          <h2 className="text-black font-bold">Avast Cleanup Premium </h2>
        </div>
        <div className="mt-5">
          <h1 className="text-black font-bold text-6xl">
            Enjoy more storage space and a faster device
          </h1>
          <p className="text-[20px] font-medium text-black mt-5">
            Reclaim gigabytes of storage space and get your device working like
            new by removing junk like leftover files, bloatware, and unwanted
            programs. Avast Cleanup also updates your software automatically,
            hibernates resource-draining apps, and more.
          </p>

          <div className="mt-10">
            <Btn text="Discover Clean" logo={<IoIosArrowRoundForward />}></Btn>
          </div>
        </div>
      </div>
      {/* secondside */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://www.avast.com/content/dam/avast/features/en/ui-homepage-row-bait-03.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection5;
