import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import bars from "./../../assets/icons/bars.png";
import books from "./../../assets/icons/book.png";
import clock from "./../../assets/icons/clock (1) 1.png";
import globe from "./../../assets/icons/Group 1.png";
import options from "./../../assets/icons/options.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import bigFoot from "./../../assets/big foot player entrys-01.png";
import eliteWave from "./../../assets/eliet wave-01.png";
import physicology from "./../../assets/physicology-01.png";
import greenArrow from "./../../assets/green-arrow.png";
import priceAction from "./../../assets/price action-01-01.png";
import riskManagement from "./../../assets/risk management-01.png";
import advanceOptionStrategies from "./../../assets/Advance option strategies.png";
import astro from "./../../assets/Astro.png";
import dynamicAndStatic from "./../../assets/Dynamic & static.png";
import gann from "./../../assets/WD gann.png";
import time from "./../../assets/Time cycle.png";
import masterofPrice from "./../../assets/Master of price.png";
import elliotwaves from "./../../assets/Elliot wave.png";
import bigfoot from "./../../assets/Bigfoot.png";
import Psychology from "./../../assets/Psycology.png";
import Riskmanagement from "./../../assets/Risk management.png";
import calender from "./../../assets/date-cycle.png";
import dateCycleDetails from "./../../assets/date cycle-details.png";
import dateCyclePC from "./../../assets/Date cycle (1).png";
import gannPhone from "./../../assets/WD gann-details.png";
import psycoPhone from "./../../assets/Psychology-details.png";
import timeCyclePhone from "./../../assets/Time cycle-details.png";
import astroCyclePhone from "./../../assets/Astro cycle-details.png";
import dynStatPhone from "./../../assets/Dynamic and static-details.png";
import advOptPhone from "./../../assets/Advance option-details.png";
import priceActPhone from "./../../assets/master of price-details.png";
import elliotPhone from "./../../assets/Elliott waves-details.png";
import bigfootDetails from "./../../assets/Bigfoot player-details.png";
import riskDetails from "./../../assets/Risk mngmnt-details.png";
import CauseSmall from "../Cause/CauseSmall";
import community from "./../../assets/group.png";
import communitySupport from "./../../assets/community-support.png";
import Videointro from "../Videointro/Videointro";

export const causes = [
  {
    phoneDetails: timeCyclePhone,
    text: "Time Cycle",
    image: clock,
    details: time,
    id: 0,
  },
  {
    phoneDetails: astroCyclePhone,
    text: "Astro Cycle",
    image: globe,
    details: astro,
    id: 1,
  },
  {
    phoneDetails: gannPhone,
    text: "WD Gann Methods",
    image: books,
    details: gann,
    id: 2,
  },
  {
    phoneDetails: dateCycleDetails,
    text: "Date Cycles",
    image: calender,
    details: dateCyclePC,
    id: 3,
  },
  {
    phoneDetails: dynStatPhone,
    text: "Dynamic & Static Levels",
    image: bars,
    details: dynamicAndStatic,
    id: 4,
  },
  {
    phoneDetails: advOptPhone,
    text: "Advance Option Strategies",
    image: options,
    details: advanceOptionStrategies,
    id: 5,
  },
  {
    phoneDetails: elliotPhone,
    text: "Elliott Waves",
    image: eliteWave,
    details: elliotwaves,
    id: 6,
  },
  {
    phoneDetails: priceActPhone,
    text: "Master of Price Action",
    image: priceAction,
    details: masterofPrice,
    id: 7,
  },
  {
    phoneDetails: bigfootDetails,
    text: `Bigfoot Player Entries`,
    image: bigFoot,
    details: bigfoot,
    id: 8,
  },
  {
    phoneDetails: psycoPhone,
    text: "Psychology buildup",
    image: physicology,
    details: Psychology,
    id: 9,
  },
  {
    phoneDetails: riskDetails,
    text: "Risk Management",
    image: riskManagement,
    details: Riskmanagement,
    id: 10,
  },
  {
    phoneDetails: communitySupport,
    text: "Community Support",
    image: community,
    details: communitySupport,
    id: 11,
  },
];

const causesSmall = [
  {
    phoneDetails: timeCyclePhone,
    text: "Time Cycle",
    image: clock,
    details: time,
    id: 0,
  },
  {
    phoneDetails: gannPhone,
    text: "WD Gann Methods",
    image: books,
    details: gann,
    id: 2,
  },
  {
    phoneDetails: astroCyclePhone,
    text: "Astro Cycle",
    image: globe,
    details: astro,
    id: 1,
  },
  {
    phoneDetails: dynStatPhone,
    text: "Dynamic & Static Levels",
    image: bars,
    details: dynamicAndStatic,
    id: 4,
  },
  {
    phoneDetails: dateCycleDetails,
    text: "Date Cycles",
    image: calender,
    details: dateCyclePC,
    id: 3,
  },
  {
    phoneDetails: advOptPhone,
    text: "Adv. Option Strategies",
    image: options,
    details: advanceOptionStrategies,
    id: 5,
  },
  {
    phoneDetails: elliotPhone,
    text: "Elliott Waves",
    image: eliteWave,
    details: elliotwaves,
    id: 6,
  },
  {
    phoneDetails: priceActPhone,
    text: "Master of Price Action",
    image: priceAction,
    details: masterofPrice,
    id: 7,
  },
  {
    phoneDetails: bigfootDetails,
    text: `Bigfoot Player Entries`,
    image: bigFoot,
    details: bigfoot,
    id: 8,
  },
  {
    phoneDetails: psycoPhone,
    text: "Psychology buildup",
    image: physicology,
    details: Psychology,
    id: 9,
  },
  {
    phoneDetails: riskDetails,
    text: "Risk Management",
    image: riskManagement,
    details: Riskmanagement,
    id: 10,
  },
  {
    phoneDetails: communitySupport,
    text: "Community Support",
    image: community,
    details: communitySupport,
    id: 11,
  },
];

const Header = () => {
  const text =
    "We believe that knowledge is power, and we strive to empower our users with a deep understanding of trading practices, including chart patterns and market analysis. Our team of experienced professionals has years of experience in the field and is passionate about sharing their expertise with others. Whether you're a seasoned trader or just starting, Growcial Bull is the perfect place to develop your skills and gain a competitive edge in the market. Join us today and take your trading game to the next level.";
  const [length, setLength] = useState(text.length / 2);

  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const reasonRef = useRef(null);
  const buttonRef = useRef(null);



  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      reasonRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
      }
    );
  }, []);

  return (
    <>
      <header
        className="z-10 relative bg-[length:120vw] lg:bg-[length:77vw] pt-[13%]"
        id="homepage"
      >
        <h1
          className="text-[38px] -z-10 relative uppercase lg:text-[107px] pt-10 lg:pt-0 font-black text-[#83FF8F] text-center mb-[14px] leading-[48px] lg:leading-[116px] drop-shadow-[0_0_4px_#83FF8F]"
          ref={headerRef}
        >
          Growcial Bull
        </h1>
        <h6
          className="text-white -z-10 font-light uppercase lg:font-bold text-[14px] lg:text-[28px] tracking-[0.3em] text-center relative drop-shadow-[0_0_6px_#fff]"
          ref={subHeaderRef}
        >
          Learn Gain & Grow
        </h6>
        <div className="text-center mt-[38px] lg:mb-[100px] relative z-1 mx-auto">
          <a
            href="https://chat.whatsapp.com/LYZFkiXpuJTF0J5Cxh9lSW"
            className="px-[18px] py-[11px] text-[12px] lg:text-[22px] text-[#83FF8FC9] rounded-full drop-shadow-[0_0_6px_#83FF8FB2] border-[1px] tracking-[0.3em] border-[#83FF8FB2] focus:text-white hover:drop-shadow-[0_0_0_#fff] focus:bg-[#83FF8F69] transition"
            target="_blank"
            rel="noreferrer"
            ref={buttonRef}
          >
            Join Community
          </a>
        </div>

        <div
          className="mt-[20px] lg:mt-[40px] flex flex-col lg:flex-row lg:px-[116px] items-center relative"
          ref={reasonRef}
        >
          <div className="w-11/12 lg:w-5/12 lg:text-left">
            <h1 className="hidden lg:block text-[22px] lg:text-[38px] font-black">
              A few reasons why you choose
              <span className="text-[#83FF8F] lg:hidden"> US.</span>
              <span className="text-[#83FF8F] hidden lg:block">
                {" "}
                Growcial Bull.
              </span>
              {/* Why Choose <span className='text-[#83FF8F]'>Growcial Bull</span> for  Trading Success */}
            </h1>

            <h1 className="lg:hidden text-[48px] font-black pl-[28px] leading-[58px]">
              A few <br />
              reasons why <br />
              you choose <br />
              <span className="text-[#83FF8F]"> US.</span>
              {/* Why Choose <span className='text-[#83FF8F]'>Growcial Bull</span> for  Trading Success */}
            </h1>

            <div className="font-medium text-[12px] lg:text-[20px] lg:w-full w-10/12 ml-auto lg:ml-0 bg-[#07072480] lg:bg-transparent px-[14px] lg:p-0 py-[20px]">
              {length === text.length / 2 ? (
                <>{text.slice(0, length)}...</>
              ) : (
                text.slice(0, length)
              )}
              <div className="lg:hidden gap-x-3 flex w-fit ml-auto">
                <button
                  onClick={() => {
                    length === text.length / 2
                      ? setLength(text.length)
                      : setLength(text.length / 2);
                  }}
                >
                  {/* <img src="" alt="" /> */}
                  {length === text.length / 2 ? (
                    <img src={greenArrow} className="w-[18px] h-auto" alt="" />
                  ) : (
                    <img
                      src={greenArrow}
                      className="w-[18px] h-auto rotate-180"
                      alt=""
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="lg:flex gap-x-3 hidden">
              <button
                onClick={() => {
                  length === text.length / 2
                    ? setLength(text.length)
                    : setLength(text.length / 2);
                }}
                className="text-white px-[19px] mt-[20px] py-[7px] rounded-full font-medium bg-[#D9D9D90F] border-[1px] border-[#83FF8F]"
              >
                {length === text.length / 2 ? "more..." : "less."}
              </button>
            </div>
          </div>
          <div className="px-10 lg:w-7/12 lg:mt-0 text-white overflow-visible causes">
            {/* for large device
                    <div className="hidden lg:block">
                        <OwlCarousel className='owl-theme pt-[70px] pb-[100px]' items={1} autoplay={false} loop>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full lg:pl-[80px] item overflow-visible">
                                {causes.slice(0, 6).map(({ image, text, details, phoneDetails }, id) => <Cause img={image} title={text} details={details} id={id} phoneDetails={phoneDetails} />)}
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full lg:pl-[80px] item overflow-visible">
                                {causes.slice(6, causes.length).map(({ image, text, details, phoneDetails }, id) => <Cause img={image} title={text} details={details} id={id} phoneDetails={phoneDetails} />)}
                            </div>
                        </OwlCarousel>
                    </div> */}

            {/* For Small Device */}
            {/* <div className="causes"> */}
            <div className="hidden lg:block">
              <OwlCarousel
                className="owl-theme"
                items={1}
                autoplay={2}
                loop
                autoplayHoverPause
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full py-10 lg:pl-[60px] item overflow-x-visible overflow-y-hidden">
                  {causes
                    .slice(0, 6)
                    .map(({ image, text, details, phoneDetails, id }) => (
                      <CauseSmall
                        key={id}
                        img={image}
                        title={text}
                        details={details}
                        id={id}
                        phoneDetails={phoneDetails}
                      />
                    ))}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full py-10 lg:pl-[60px] item overflow-x-visible overflow-y-hidden">
                  {causes
                    .slice(6, causes.length)
                    .map(({ image, text, details, phoneDetails, id }) => (
                      <CauseSmall
                        key={id}
                        img={image}
                        title={text}
                        details={details}
                        id={id}
                        phoneDetails={phoneDetails}
                      />
                    ))}
                </div>
              </OwlCarousel>
            </div>

            <div className="lg:hidden">
              <OwlCarousel
                className="owl-theme lg:hidden"
                items={1}
                autoplay={2}
                autoplayHoverPause
                loop
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full py-10 lg:pl-[60px] item overflow-x-visible overflow-y-hidden">
                  {causesSmall
                    .slice(0, 6)
                    .map(({ image, text, details, phoneDetails, id }) => (
                      <CauseSmall
                        key={id}
                        img={image}
                        title={text}
                        details={details}
                        id={id}
                        phoneDetails={phoneDetails}
                      />
                    ))}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full py-10 lg:pl-[60px] item overflow-x-visible overflow-y-hidden">
                  {causesSmall
                    .slice(6, causesSmall.length)
                    .map(({ image, text, details, phoneDetails, id }) => (
                      <CauseSmall
                        key={id}
                        img={image}
                        title={text}
                        details={details}
                        id={id}
                        phoneDetails={phoneDetails}
                      />
                    ))}
                </div>
              </OwlCarousel>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* <Videointro /> */}

        {/* {headerDetailsView && <HeaderDetails item={causes[headerDetails]} setHeaderDetailsView={setHeaderDetailsView} />} */}
      </header>
    </>
  );
};

export default Header;
