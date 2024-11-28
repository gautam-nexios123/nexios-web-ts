"use client";
import CustomButton from "@/common/CustomButton";
import Image from "next/image";
import frame from "../../assets/images/home/Frame.svg";
import { scrollToBottom } from "@/utils";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimationOnScroll } from "../Animations";
const WhoNexios = () => {

  const scrollButtonRef = useRef(null);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="main-container px-[40px] flex flex-col lg:flex-row justify-between my-[7%]">
      <div className="w-[100%] lg:w-[50%]">
        <div
          className={`font-MuseoSans font-light text-[22px] sm:text-[32px] text-[#121212] pb-[40px]`}
        >
          Who is <span className="font-bold">nexios?</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[160px] sm:w-[220px] mt-[-12px] sm:mt-[-15px]"></div>
        </div>
        <div className="font-MuseoSans text-justify font-light text-[16px] sm:text-[18px] text-[#9BA9B4] pb-3">
          From expertise-based services and product development services to
          becoming a one-stop solution for all talent needs, Nexios has indeed
          come a long way. We make it easy for businesses to find the most
          talented developers, designers, and marketers as per their needs
          faster and more efficiently.
        </div>
        <div className="font-MuseoSans text-justify font-light text-[16px] sm:text-[18px] text-[#9BA9B4] pb-3">
          Over the last 8 years, Nexios has worked with over 50+ overseas
          clients..
        </div>
        <div
          ref={scrollButtonRef}
          className="flex flex-col sm:flex-row items-center gap-5 my-5"
        >
          <AnimationOnScroll id="button-fade-in" setIsVisible={setIsVisible}>
            <div className={`${isVisible ? "animation-fadeInLeft" : ""} `}>
              <CustomButton
                onSubmitButton={() => router.push("/about-us")}
                bgColor="#399EFD"
                textColor="white"
                btnWidth="150px"
                text="Know More"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll id="button-fade-in" setIsVisible={setIsVisible}>
            <div className={`${isVisible ? "animation-fadeInRight" : ""} `}>
              <CustomButton
                onSubmitButton={() => scrollToBottom()}
                bgColor="#121212"
                textColor="white"
                btnWidth="190px"
                text="Free Quote"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div className="w-[100%] lg:w-[40%]">
        <Image
          src={frame}
          alt="frame"
          width={400}
          height={200}
          className="lg:ml-5 mx-auto"
        />
      </div>
    </div>
  );
};

export default WhoNexios;
