"use client";
import CustomButton from "@/common/CustomButton";
import { scrollToBottom } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import bgBannerOne from "../assets/images/bg-1.png";
import bgBannertwo from "../assets/images/Rectangle-61-1.png";
import settingGif from "../assets/images/home/setting-gif.gif";
import WhoNexios from "@/components/Home/WhoNexios";
import ChooseNexios from "@/components/Home/ChooseNexios";
import DiscoverService from "@/components/Home/DiscoverService";
import Technology from "@/components/Home/Technology";
import OurClient from "@/components/Home/OurClient";
import ShedualeCall from "@/components/ShedualeCall";

export default function Home() {
  const scrollButtonRef = useRef(null);
  const router = useRouter();

  return (
    <div className="relative">
      <div className="main-container px-[40px]">
        <h1 className="font-MuseoSans text-[30px] sm:text-[40px] text-[#121212] font-light text-center mx-8 my-[20px]">
          <span className="font-bold">We Create Simple Solution</span> <br></br>{" "}
          For Your Complex Business Task
        </h1>
        <div className="w-full">
          <p className="font-MuseoSans text-[18px] sm:text-[20px] text-[#9BA9B4] font-medium md:text-center text-justify lg:mx-auto lg:w-[80%]">
            Nexios is a global technology partner that enables long-lasting
            value for businesses via the latest technologies. It provides a
            complete solution from concept to reality. We've worked with
            different industries creating mobile and web apps that solved
            business intricate problems in innovative ways that ease their
            operations.
          </p>
        </div>
      </div>

      <div
        ref={scrollButtonRef}
        className="flex flex-col sm:flex-row items-center justify-center gap-5 my-[30px]"
      >
        <div className="animation-fadeInLeft">
          <CustomButton
            onSubmitButton={() => router.push("/portfolio")}
            bgColor="#399EFD"
            textColor="white"
            btnWidth="200px"
            text="Explore Our Portfolio"
          />
        </div>
        <div className="animation-fadeInRight">
          <CustomButton
            onSubmitButton={() => scrollToBottom()}
            bgColor="#121212"
            textColor="white"
            btnWidth="200px"
            text="Free Quote"
          />
        </div>
      </div>

      <div className="w-full relative">
        <div className="main-container relative">
          <Image
            src={bgBannerOne}
            alt="bgBannerOne"
            className="mx-auto w-[260px] h-[140px] md:w-[501px] md:h-[270px] lg:w-[750px] lg:h-[405px]"
          />
          <Image
            src={settingGif}
            alt="settingGif"
            className="hidden sm:block absolute bottom-[38%] left-[8%] xl:left-[10%]"
            width={100}
            height={100}
          />
        </div>
        <Image
          src={bgBannertwo}
          alt="bgBannertwo"
          className="absolute bottom-0 w-full"
        />
      </div>
      <WhoNexios />
      <ChooseNexios />
      <DiscoverService />
      <Technology />
      <OurClient />
      <ShedualeCall />
    </div>
  );
}
