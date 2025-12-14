import React from "react";

const Footer = () => {
  const firstslide = [
    "Support",
    "Security",
    "Privacy",
    "Performance",
    "Blog",
    "Forum",
  ];
  const secondslide = [
    "Business support",
    "Business products",
    "Business partners",
    "Business blog",
    "Affiliates",
  ];
  const thirdslide = ["Mobile Carriers"];
  const fourthslide = [
    "Contact Us",
    "Careers",
    "Press Center",
    "Digital trust",
    "Technology",
    "Research Participation",
  ];
  return (
    <div className="w-full bg-[#071d2b] ">
      <div className="container mx-auto bg-[#071d2b] w-full min-h-[600px]">
        {/* main div */}
        <div className="w-full flex lg:flex-row justify-between pt-30  ">
          <div className="">first</div>
          <div>
            <h2 className="text-white font-bold">for Home</h2>
            <ul className="pt-5">
              {firstslide.map((item, index) => {
                return (
                  <li className="text-white">
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold">for Business</h2>
            <ul className="pt-5">
              {secondslide.map((item, index) => {
                return (
                  <li className="text-white">
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold">for Partner</h2>
            <ul className="pt-5">
              {thirdslide.map((item, index) => {
                return (
                  <li className="text-white">
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold">About</h2>
            <ul>
              {fourthslide.map((item, index) => {
                return (
                  <li className="text-white">
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
