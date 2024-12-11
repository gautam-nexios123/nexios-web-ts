"use client";
import Image from "next/image";
import hrInterviewPic from "../../assets/images/career/hr-interview.svg";
import practicalRoundPic from "../../assets/images/career/practical-round.svg";
import { useEffect, useState } from "react";
import { AnimationOnScroll } from "../Animations";
const InterViewProcess = () => {
  const [active, setActive] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("process-interview");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window?.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          setActive(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="process-interview"
      className="w-full main-container px-[40px] mb-[150px]"
    >
      <div className="">
        <AnimationOnScroll id="process-interview" setIsVisible={setIsVisible}>
          <div
            className={`${
              isVisible ? "animation-zoomIn" : ""
            } font-MuseoSans font-light text-[22px] sm:text-[32px] text-[#121212] pb-5 text-center`}
          >
            Process of <span className="font-bold">Interview</span>
            <div className="bg-[#399EFD] opacity-[25%] h-[6px] w-[210px] sm:w-[300px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
          </div>
        </AnimationOnScroll>

        <div className="font-MuseoSans font-light text-[16px] sm:text-[18px] text-[#9BA9B4] text-justify md:text-center">
          We are one of the best places to work. nexios makes an atmosphere
          where you can grow your inner self and outer self, show your talent
          It’s a perfect combination between you and nexios when the career and
          your passion come together. We’re always hard at work crafting clever
          and thoughtful digital experiences for our products. We are finding
          for some fresh talents who can add cultural values at nexios, someone
          who has the same mission that is ours but also can bring diversity at
          a similar time.
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center mt-12 pr-[40%] lg:pr-0">
        <div className="relative">
          <div className="border-[8px] border-[#399EFD] rounded-full w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] flex justify-center items-center">
            <Image
              src={hrInterviewPic}
              alt="hrInterviewPic"
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]"
            />
          </div>
        </div>

        <div className="hidden lg:block relative h-[7px] w-full  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-horizontalLine-show"
            } `}
          ></div>
        </div>

        <div className="lg:hidden relative h-[80px] w-[7px]  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-verticalLine-show"
            }`}
          ></div>
        </div>

        <div className="relative">
          <div className="border-[8px] border-[#399EFD] rounded-full w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] flex justify-center items-center">
            <Image
              src={hrInterviewPic}
              alt="hrInterviewPic"
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]"
            />
          </div>
        </div>

        <div className="hidden lg:block relative h-[7px] w-full  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-horizontalLine-show"
            } `}
          ></div>
        </div>

        <div className="lg:hidden relative h-[80px] w-[7px]  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-verticalLine-show"
            }`}
          ></div>
        </div>

        <div className="relative lg:mr-[28px]">
          <div className="border-[8px] border-[#399EFD] rounded-full w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] flex justify-center items-center">
            <Image
              src={practicalRoundPic}
              alt="practicalRoundPic"
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]"
            />
          </div>
        </div>

        <div className="w-[80px] sm:w-auto text-center sm:text-left absolute top-[8%] right-0 lg:top-[100%] lg:left-[0%] py-3 text-[#121212] font-MuseoSans font-semibold text-[16px] md:text-[28px] xl:text-[30px]">
          HR Interview
        </div>
        <div className="w-[80px] sm:w-auto text-center sm:text-left absolute top-[46%] right-0 lg:top-[100%] lg:left-[38%] py-3 text-[#121212] font-MuseoSans font-semibold text-[16px] md:text-[28px] xl:text-[30px]">
          Personal Interview
        </div>
        <div className="w-[80px] sm:w-auto text-center sm:text-left absolute top-[85%] right-0 lg:top-[100%] lg:right-[0px] py-3 text-[#121212] font-MuseoSans font-semibold text-[16px] md:text-[28px] xl:text-[30px]">
          Practical Round
        </div>
      </div>
    </div>
  );
};

export default InterViewProcess;
