import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Header2 = () => {
  const [selectd, unselectd] = useState(false);
  const handleevent = () => {
    unselectd(!selectd);
  };
  return (
    <>
      <nav className=" w-full h-[80px]  border-b-2 border-b-gray-400">
        <div className="flex  relative">
          {/* logo */}
          <div className="h-[35px] mt-[20px] ml-[53px]   ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Avast_logo_2021.svg/1280px-Avast_logo_2021.svg.png"
              alt=""
              className="h-full min-w-[126px]"
            />
          </div>
          {/* bars */}
          <div className="lg:hidden absolute right-[44px] top-[20px] text-3xl">
            {selectd ? (
              <RxCross2 onClick={handleevent} className=" z-200" />
            ) : (
              <HiBars3 onClick={handleevent} className="z-200 " />
            )}
          </div>

          {/* navbar */}
          <div className="lg:flex hidden lg:flex-col ml-15 w-full">
            <div className="h-[40px]  justify-between flex items-center text-gray-600 font-light w-full ">
              <div className="flex items-center gap-3 font-medium text-[14px]">
                <a href="">For home</a>
                <a href="">For bussiness</a>
                <a href="">For partner</a>
              </div>
              <div className="flex items-center gap-3 font-medium text-[14px] mr-10">
                <a href="">About us</a>
                <a href="">Blogs</a>
                <a
                  href=""
                  className=" border-l-2 border-gray-500 p-2 flex gap-2 items-center"
                >
                  India
                  <img
                    src="https://t4.ftcdn.net/jpg/08/30/64/47/360_F_830644704_KsVVndLPo5J469yvDCok4M8YvcCiASkJ.jpg"
                    alt=""
                    className="size-6 min-w-24px rounded-full"
                  />
                </a>
              </div>
            </div>
            <div className="h-[40px] flex pb-[18px] justify-between  items-center text-gray-600 font-light w-full">
              <div className="flex items-center gap-3 font-medium text-[14px] ">
                <a href="">Security</a>
                <a href="">Privacy</a>
                <a href="">Performance</a>
                <a
                  href=""
                  className=" border-l-2 border-gray-500 p-2 flex gap-2 items-center"
                >
                  <MdOutlineShoppingCart />
                  Store
                </a>
              </div>
              <div className="flex items-center gap-3 font-medium text-[14px] mr-10">
                <a href="" className="flex items-center gap-2  ">
                  <HiOutlineSupport className="size-5" />
                  Support
                </a>
                <a href="" className="flex items-center gap-2  ">
                  <FaRegUser />
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </nav>
    </>
  );
};

export default Header2;
