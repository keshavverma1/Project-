import React from "react";
import { ImQuotesLeft } from "react-icons/im";
const CardSection2 = () => {
  const carddetails = [
    {
      logo: <ImQuotesLeft className="size-10 text-orange-500" />,
      para: "I have used Avast for a few years. The protection is the best for the money. I also cover my phones with Avast and I haven’t had any problems yet.offer when needed, like Avast Cleanup",
      name: "Carol J.",
      date: "2023-09-12",
      secondlogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1280px-5_stars.svg.png",
    },
    {
      logo: <ImQuotesLeft className="size-10 text-orange-500" />,
      para: "I have used Avast for many years. The reason is very simple: you offer a great free version that actually works. This lets me afford the other amazing services you offer when needed, like Avast Cleanup.",
      name: "James M.",
      date: "2023-08-29",
      secondlogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1280px-5_stars.svg.png",
    },
    {
      logo: <ImQuotesLeft className="size-10 text-orange-500" />,
      para: "I've used Avast Free Antivirus on my computers, tablets, and smart phones for many years. It updates frequently and automatically. It automatically scans and  protects me from malicio",
      name: "OB",
      date: "2023-06-10",
      secondlogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1280px-5_stars.svg.png",
    },
  ];
  return (
    <div className="container mx-auto w-full">
      <div className="flex lg:flex-row items-center flex-col pb-10">
        {carddetails.map((item, index) => {
          return (
            <div className="w-full lg:w-1/3  ">
              <div className="p-2 ">
                <div className="border-1 border-gray-400 rounded-3xl p-10 ">
                  <div className="pb-15">{item.logo}</div>
                  <p className="text-gray-500 text-xl pb-30">{item.para}</p>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>{item.date}</p>
                  <img className="w-40 pt-2" src={item.secondlogo} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection2;
