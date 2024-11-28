"use client";
import CustomButton from "@/common/CustomButton";
import Image from "next/image";
import expertTeam from "../../assets/images/home/expert-team.svg";
import yearExpImg from "../../assets/images/home/year-exp.svg";
import focusInnoImg from "../../assets/images/home/focus-inno.svg";
import businessServeImg from "../../assets/images/home/business-serve.svg";
import { scrollToBottom } from "@/utils";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimationOnScroll } from "../Animations";

const ChooseNexios = () => {

  const router = useRouter();
  const scrollButtonRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="main-container px-[40px] flex flex-col lg:flex-row justify-between gap-14 w-full">
      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10">
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] w-full sm:w-[180px] h-[210px] flex flex-col justify-between">
            <Image
              src={expertTeam}
              alt="expertTeam"
              className="w-full h-[100px]"
            />
            <p className="text-[#121212] px-[12px] font-MuseoSans font-semibold text-[22px] text-center pt-4 ">
              Experts Team
            </p>
          </div>
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] w-full sm:w-[180px] h-[210px] flex flex-col justify-between md:mt-10">
            <Image
              src={yearExpImg}
              alt="yearExpImg"
              className="w-full h-[100px]"
            />
            <p className="text-[#121212] font-MuseoSans font-semibold text-[22px] text-center pt-3">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 md:ml-9 mt-[32px] sm:mt-0">
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] w-full sm:w-[180px] h-[210px] flex flex-col justify-between">
            <Image
              src={focusInnoImg}
              alt="focusInnoImg"
              className="w-full h-[100px]"
            />
            <p className="text-[#121212]  font-MuseoSans font-semibold text-[22px] text-center pt-3">
              Focus on innovation
            </p>
          </div>
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] w-full sm:w-[180px] h-[210px] flex flex-col justify-between md:mt-10">
            <Image
              src={businessServeImg}
              alt="businessServeImg"
              className="w-full h-[100px]"
            />
            <p className="text-[#121212] font-MuseoSans font-semibold text-[22px] text-center pt-3">
              Business savvy
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%]">
        <div className="font-MuseoSans font-light text-[22px] sm:text-[32px] text-[#121212] pb-[40px]">
          Why Choose <span className="font-bold"> nexios?</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[210px] sm:w-[310px] mt-[-12px] sm:mt-[-15px]"></div>
        </div>
        <div className="font-MuseoSans text-justify font-light text-[16px] sm:text-[18px] text-[#9BA9B4]">
          We take care of your projects from brainstorming an idea to handing it
          over to your dream users. All we need from you is your amazing idea
          and trust. At Nexios, We brainstorm, Design, and Develop so your
          business runs as smoothly as possible. We believe that the key to good
          design is to take things that are difficult to work with or understand
          and make them easy for everyone involved.
        </div>
        <ul className="list-disc pl-[18px] mt-[40px]">
          <li className="font-MuseoSans font-light text-[16px] sm:text-[18px] text-[#9BA9B4] pb-4">
            Skilled and motivated staff
          </li>
          <li className="font-MuseoSans font-light text-[16px] sm:text-[18px] text-[#9BA9B4] pb-4">
            Trained and certified professionals
          </li>
          <li className="font-MuseoSans font-light text-[16px] sm:text-[18px] text-[#9BA9B4] pb-4">
            Fully compatible with existing team
          </li>
          <li className="font-MuseoSans font-light text-[16px] sm:text-[18px] text-[#9BA9B4] pb-4">
            Timely Delivery
          </li>
        </ul>
        <div
          ref={scrollButtonRef}
          className="flex flex-col sm:flex-row items-center gap-5 my-5"
        >
          <AnimationOnScroll id="choose-button" setIsVisible={setIsVisible}>
            <div className={`${isVisible ? "animation-fadeInLeft" : ""} `}>
              <CustomButton
                onSubmitButton={() => router.push("/about-us")}
                bgColor="#399EFD"
                textColor="white"
                btnWidth="120px"
                text="Know More"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll id="choose-button" setIsVisible={setIsVisible}>
            <div className={`${isVisible ? "animation-fadeInRight" : ""} `}>
              <CustomButton
                onSubmitButton={() => scrollToBottom()}
                bgColor="#121212"
                textColor="white"
                btnWidth="160px"
                text="Free Quote"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default ChooseNexios;
