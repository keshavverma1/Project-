import React from "react";
import { RiDiscountPercentLine } from "react-icons/ri";

const Header1 = () => {
  return (
    <div className="bg-[#071d2b] w-full h-[60px] p-3 ">
      <div className="flex sm:justify-center items-center">
        <RiDiscountPercentLine className="text-4xl mr-6 text-[#ff7800]" />
        <h2 className="text-white font-bold  border-b-2 hover:border-none">
          {" "}
          Save 50% an Premium Security
        </h2>
      </div>
    </div>
  );
};

export default Header1;
