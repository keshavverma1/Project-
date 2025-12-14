import React from "react";

const HeroSection2 = () => {
  return (
    <>
      <div className="w-full container mx-auto pt-20">
        <div className="flex flex-col  items-center  mx-4 md:mx-2 lg:mx-0 ">
          <h1 className="text-center text-2xl lg:text-5xl font-bold pt-10 pb-10 ">
            Get free{" "}
            <span className="bg-gradient-to-l to-orange-400 from-orange-800 text-transparent bg-clip-text">
              antivirus
            </span>{" "}
            that comes with <br /> advanced privacy and security tools
          </h1>
          <p className="text-center font-normal pb-15">
            Avast Free Antivirus is more than just an antivirus — it also
            includes these specialist tools. Plus, use <br /> our new Avast
            Assistant’s real-time guidance against potential scams.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
