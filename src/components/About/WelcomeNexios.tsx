"use client";
import Image from "next/image";
import interImg from "../../assets/images/about/international.svg";
import plusyear from "../../assets/images/about/7-plus-year.png";
import dotHalf from "../../assets/images/about/dot-half.svg";
import leftCerve from "../../assets/images/about/left-cerve.svg";
import rightCerve from "../../assets/images/about/right-cerve.svg";
import { AnimationOnScroll } from "../Animations";
import { useState } from "react";

const WelcomeNexios = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="my-[60px] w-full relative">
      <div className="main-container px-[40px]">
        <AnimationOnScroll id="wel-nexios" setIsVisible={setIsVisible}>
          <h1
            className={`${
              isVisible ? "animation-zoomIn" : ""
            } relative font-MuseoSans font-light text-[#121212] text-[32px] sm:text-[48px] text-center pb-[40px]`}
          >
            Welcome To <span className="font-bold">nexios</span>
            <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[280px] sm:w-[420px] mx-auto mt-[-16px] sm:mt-[-24px]"></div>
          </h1>
        </AnimationOnScroll>

        <div className="">
          <div className="font-MuseoSans font-light text-[#9BA9B4] text-[19px] md:text-center text-justify">
            Nexios Technologies is one of the reckoned Software Development
            Company in Surat. Rapidly changing business state of affairs and
            latest technologies being introduced day by day, always raises the
            requirement for change in development which suits the client
            requirement and also alter the existing software’s to match the
            latest technology by not changing the methodologies defined for good
            software. Our teams have 3 years of experience in the development of
            Software Applications & Systems.
          </div>
          <div className="font-MuseoSans font-light text-[#9BA9B4] text-[19px] md:text-center text-justify py-[20px]">
            We have command over the Platforms of Android Development, Angular,
            .Net, PHP, SQL Server, Photoshop, Microsoft Office (Access, Excel,
            and PowerPoint). We also excel in mobile technology and cater to
            your need to develop classy iPad and iPhone application.
          </div>
          <div className="font-MuseoSans font-semibold text-[#399EFD] text-[28px] sm:text-[32px] text-center pb-[20px]">
            We Provide IT Solutions That Help You Succeed
          </div>
        </div>
        <div className="w-full md:flex gap-10 mt-5">
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <Image src={interImg} alt="inter" width={235} />
            <div className="font-MuseoSans font-semibold text-[#121212] text-[28px] text-center py-3">
              International Service Provider
            </div>
            <div className="font-MuseoSans font-light text-[#9BA9B4] text-[18px] text-center">
              Our team is providing IT solutions internationally with great
              communication and accuracy.
            </div>
          </div>
          <div className="w-full md:w-[50%] mt-6 md:mt-0  flex flex-col items-center">
            <Image src={plusyear} alt="plusyear" width={235} />
            <div className="font-MuseoSans font-semibold text-[#121212] text-[28px] text-center py-3">
              8 Plus Years Of Trust
            </div>
            <div className="font-MuseoSans font-light text-[#9BA9B4] text-[18px] text-center">
              nexios believes in a long term relationship with quality of work.
              We have continuously worked with fixed clients for more than 5
              years.
            </div>
          </div>
        </div>
      </div>
      <Image
        src={dotHalf}
        alt="dotHalf"
        className="absolute top-0 left-0"
        width={100}
      />
      <Image
        src={leftCerve}
        alt="leftCerve"
        className="absolute bottom-[15%] left-0"
        width={50}
      />
      <Image
        src={rightCerve}
        alt="rightCerve"
        className="absolute top-0 right-0"
        width={50}
      />
    </div>
  );
};

export default WelcomeNexios;
