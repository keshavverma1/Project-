import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carosal = () => {
  const cardcro = [
    {
      img: "https://f.hubspotusercontent40.net/hubfs/4650993/New_Avast_Academy/Computer%20Virus/Academy-Computer-Virus-Thumb.jpg?width=600",
      heading: "What Is a Computer Virus and How Does It Work?",
      para: "A computer virus is designed to infect programs & files with malicious code, changing how a computer operates and spreading across systems.",
      butt: "Learn more",
    },
    {
      img: "https://4650993.fs1.hubspotusercontent-na1.net/hubfs/4650993/New_Avast_Academy/what_is_a_vpn_and_how_does_it_work_academy_refresh_2025/What_is_a_VPN_and_how_does_it_work-Your_Essential_Guide-Thumb.png?width=600",
      heading: "What Is a VPN and How Does It Work?",
      para: "You can use a VPN connection to protect online privacy and access content. Learn how a VPN works, what VPN means, and the benefits of a VPN.",
      butt: "Learn more",
    },
    {
      img: "https://4650993.fs1.hubspotusercontent-na1.net/hubfs/4650993/New_Avast_Academy/how_to_speed_up_your_internet_connection_academy_refresh/Academy-How-to-Increase-Your-Internet-Speed-Thumb.jpg?width=600",
      heading: "Why Is My Internet So Slow & How to Speed It Up?",
      para: "Wondering why your internet is so slow? Learn how to speed up your internet connection & make your download speeds faster",
      butt: "Learn more",
    },
    {
      img: "https://f.hubspotusercontent40.net/hubfs/4650993/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png?width=600",
      heading: "What Is Hacking?",
      para: "We all have some concept of hacking - but do you really know what it is? Read our full hacking definition here.",
      butt: "Learn more",
    },
    {
      img: "https://4650993.fs1.hubspotusercontent-na1.net/hubfs/4650993/New_Avast_Academy/what_is_the_dark_web_refresh_2024_academy/What-is-the-dark-web-Thumb.jpg?width=600",
      heading: "What Is the Dark Web and How to Access It?",
      para: "The dark web isn't indexed by search engines. Learn how to access the dark web with Tor browser & get black net safety tips.",
      butt: "Learn more",
    },
    {
      img: "https://4650993.fs1.hubspotusercontent-na1.net/hubfs/4650993/New_Avast_Academy/how_to_delete_your_instagram_account_academy/Academy-How-to-Delete-or-Deactivate-Your-Instagram-Account-Thumb.jpg?width=600",
      heading: "How to Delete or Deactivate Your Instagram Account",
      para: "Find out how to permanently delete Instagram or deactivate your account on your phone or computer with this step-by-step guide",
      butt: "Learn more",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full hidden lg:block mx-auto container pb-10 p-10">
        <Slider {...settings}>
          {cardcro.map((item, index) => {
            return (
              <div className="hover:border-1 hover:border-gray-400 rounded-3xl flex flex-col justify-center items-center">
                <img src={item.img} alt="" className=" rounded-4xl p-4" />
                <div className="p-5">
                  <h2 className="font-bold pb-2">{item.heading}</h2>
                  <p>{item.para}</p>
                  <button className="font-bold pt-2 flex justify-end w-full">
                    {item.butt}
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="w-full lg:hidden  mx-auto container pb-10 p-10">
        <Slider {...settings2}>
          {cardcro.map((item, index) => {
            return (
              <div className="hover:border-1 hover:border-gray-400 rounded-3xl flex flex-col justify-center items-center">
                <img src={item.img} alt="" className=" rounded-4xl p-4" />
                <div className="p-5">
                  <h2 className="font-bold pb-2">{item.heading}</h2>
                  <p>{item.para}</p>
                  <button className="font-bold pt-2 flex justify-end w-full">
                    {item.butt}
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carosal;
