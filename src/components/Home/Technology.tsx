"use client";
import Image from "next/image";
import pattern from "../../assets/images/home/Patern.jpg";
import appleIcon from "../../assets/images/home/apple-icon.svg";
import androidIcon from "../../assets/images/home/android.svg";
import flutterIcon from "../../assets/images/home/flutter.svg";

import tOne from "../../assets/images/home/t1.svg";
import tTwo from "../../assets/images/home/t2.svg";
import angularIcon from "../../assets/images/home/angular.svg";
import tThree from "../../assets/images/home/t3.svg";

import laravelIcon from "../../assets/images/home/laravel.svg";
import mySqlIcon from "../../assets/images/home/mySql.svg";
import bootstrapIcon from "../../assets/images/home/bootstrap.svg";
import phpIcon from "../../assets/images/home/php.svg";
import tFour from "../../assets/images/home/t4.svg";
import { useState } from "react";
import { AnimationOnScroll } from "../Animations";

const Technology = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative mt-[100px]">
      <AnimationOnScroll id="weuse-technology" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } w-full text-center font-MuseoSans font-light text-[22px] sm:text-[32px]`}
        >
          We Use <span className="font-bold">Technologies</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[220px] sm:w-[325px] mx-auto mt-[-12px] sm:mt-[-15px]"></div>
        </div>
      </AnimationOnScroll>

      <div className="">
        <Image
          draggable={false}
          src={pattern}
          alt="pattern"
          className="w-[100%] h-auto"
        />
      </div>

      <div className="absolute left-[48%] top-[22%] bg-white shadow-3xl rounded-full w-[55px] h-[55px] md:w-[75px] md:h-[75px] xl:w-[160px] xl:h-[160px] flex items-center justify-center">
        <Image
          draggable={false}
          src={appleIcon}
          alt="appleIcon"
          className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] xl:w-[90px] xl:h-[90px]"
        />
      </div>
      <div className="absolute left-[22%] top-[30%] bg-white shadow-3xl rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[140px] xl:h-[140px] flex items-center justify-center">
        <Image
          draggable={false}
          src={androidIcon}
          alt="androidIcon"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[80px] xl:h-[80px]"
        />
      </div>
      <div className="absolute  left-[70%] top-[30%] bg-white shadow-3xl rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] xl:w-[120px] xl:h-[120px] flex items-center justify-center">
        <Image
          draggable={false}
          src={flutterIcon}
          alt="flutterIcon"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[70px] xl:h-[70px]"
        />
      </div>

      <div className="absolute  left-[12%] top-[52%] bg-white shadow-3xl rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] xl:w-[110px] xl:h-[110px] flex items-center justify-center">
        <Image
          draggable={false}
          src={tOne}
          alt="tOne"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[70px] xl:h-[70px]"
        />
      </div>
      <div className="absolute  left-[38%] top-[45%] bg-white shadow-3xl rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] xl:w-[100px] xl:h-[100px] flex items-center justify-center">
        <Image
          draggable={false}
          src={tTwo}
          alt="tTwo"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[60px] xl:h-[60px]"
        />
      </div>
      <div className="absolute  left-[55%] top-[55%] bg-white shadow-3xl rounded-full w-[45px] h-[45px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
        <Image
          draggable={false}
          src={angularIcon}
          alt="angularIcon"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[80px] xl:h-[80px]"
        />
      </div>
      <div className="absolute  left-[84%] top-[45%] bg-white shadow-3xl rounded-full w-[40px] h-[40px] md:w-[55px] md:h-[55px] xl:w-[110px] xl:h-[110px] flex items-center justify-center">
        <Image
          draggable={false}
          src={tThree}
          alt="tThree"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[70px] xl:h-[70px]"
        />
      </div>

      <div className="absolute  left-[22%] top-[75%] bg-white shadow-3xl rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[160px] xl:h-[160px] flex items-center justify-center">
        <Image
          draggable={false}
          src={laravelIcon}
          alt="laravelIcon"
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] xl:w-[110px] xl:h-[110px]"
        />
      </div>
      <div className="absolute  left-[38%] top-[65%] bg-white shadow-3xl rounded-full w-[50px] h-[50px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
        <Image
          draggable={false}
          src={mySqlIcon}
          alt="mySqlIcon"
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] xl:w-[100px] xl:h-[100px]"
        />
      </div>
      <div className="absolute  left-[48%] top-[85%] bg-white shadow-3xl rounded-full w-[35px] h-[35px] md:w-[50px] md:h-[50px] xl:w-[100px] xl:h-[100px] flex items-center justify-center">
        <Image
          draggable={false}
          src={bootstrapIcon}
          alt="bootstrapIcon"
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[50px] xl:h-[50px]"
        />
      </div>
      <div className="absolute  left-[65%] top-[72%] bg-white shadow-3xl rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] xl:w-[100px] xl:h-[100px] flex items-center justify-center">
        <Image
          draggable={false}
          src={phpIcon}
          alt="phpIcon"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[80px] xl:h-[80px]"
        />
      </div>
      <div className="absolute  left-[84%] top-[75%] bg-white shadow-3xl rounded-full w-[45px] h-[45px] md:w-[60px] md:h-[60px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
        <Image
          draggable={false}
          src={tFour}
          alt="tFour"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[90px] xl:h-[90px]"
        />
      </div>
    </div>
  );
};

export default Technology;
