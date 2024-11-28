"use client";
import Image from "next/image";
import React, { useState } from "react";
import transImg from "../../assets/images/about/transImg.svg";
import contiImg from "../../assets/images/about/conti-groth.svg";
import serviceImg from "../../assets/images/about/service-img.svg";
import valueImg from "../../assets/images/about/value-img.svg";
import { AnimationOnScroll } from "../Animations";

const CoreValue = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const cardData = [
    {
      image: transImg,
      title: "Transparency",
      description:
        "We value the confidence our clients put in us to deliver quality services and always give our clients full visibility over their projects so they always know what they are paying for.",
    },
    {
      image: contiImg,
      title: "Continuous Growth",
      description:
        "We are dedicated to serving you better and always keep ourselves on the pulse of emerging technology to ensure that our services evolve as we grow while keeping up with its dynamic nature.",
    },
    {
      image: serviceImg,
      title: "Service",
      description:
        "Everything we do revolves around our clients and we take our time to capture their vision to ensure that our services not only go beyond their expectations but also align with their goals.",
    },
    {
      image: valueImg,
      title: "Value",
      description:
        "We lead our clients along the shortest path to business success through cost-effective solutions, drawing from the best talent, emerging technology, products, and tools that add value to their business.",
    },
  ];

  return (
    <div className="main-container px-[40px] my-[100px] w-full relative">
      <AnimationOnScroll id="ourcore-value" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } relative font-MuseoSans font-semibold text-[#121212] text-[32px] sm:text-[48px] text-center pb-[15px]`}
        >
          Our Core Values
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[250px] sm:w-[380px] mx-auto mt-[-16px] sm:mt-[-24px]"></div>
        </div>
      </AnimationOnScroll>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-between gap-5 my-12">
        {cardData?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-3xl flex flex-col xl:flex-row gap-6 w-full  p-6 rounded-2xl"
          >
            <Image
              src={item?.image}
              alt="trans"
              className="mx-auto w-[168px] h-[166px]"
            />
            <div className="">
              <div className="font-MuseoSans font-semibold text-center md:text-start text-[28px] text-black pb-2">
                {item?.title}
              </div>
              <div className="font-MuseoSans font-light text-[16px] text-[#9BA9B4] text-justify">
                {item?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
