"use client";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";
import Image from "next/image";
import squreBig from "../../assets/images/contact-us/squre-big.svg";
import circleBlank from "../../assets/images/about/circle-blank.svg";
import squreLight from "../../assets/images/about/squre-light.svg";
import circlesolid from "../../assets/images/about/circle-solid.svg";
import girlImg from "../../assets/images/contact-us/girl-img.svg";
import kamla from "../../assets/images/contact-us/kamla.svg";
import lightCircle from "../../assets/images/contact-us/light-circle.svg";
import peopleImg from "../../assets/images/contact-us/people-img.svg";
import downArrow from "../../assets/images/contact-us/down-arrow.svg";

const ContactUs = () => {
  return (
    <div className="relative bg-[#EDF5FF] min-h-screen w-full pt-[50px] md:pt-[100px] pb-[80px]">
      <div className="main-container relative">
        <h2 className="text-center pb-3 text-[#9BA9B4] font-MuseoSans font-semibold text-[24px]">
          Contact Us
        </h2>
        <h1 className="text-center pb-6 text-[#121212] font-MuseoSans font-semibold text-[28px]">
          Lets Get In Touch Now
        </h1>
        <ContactForm />
      </div>
      <Image
        draggable={false}
        src={squreBig}
        alt="squre"
        className="hidden md:block w-[130px] absolute top-0 left-[8%]"
      />
      <Image
        draggable={false}
        src={circleBlank}
        alt="circleBlank"
        className="hidden md:block w-[18px] absolute top-[40%] left-[8%]"
      />
      <Image
        draggable={false}
        src={girlImg}
        alt="girlImg"
        className="hidden lg:block h-[200px] absolute bottom-0 left-[3%] xl:left-[10%]"
      />
      <Image
        draggable={false}
        src={lightCircle}
        alt="lightCircle"
        className="hidden lg:block w-[130px] absolute bottom-[12%] left-[5%] xl:left-[11%]"
      />
      <Image
        draggable={false}
        src={kamla}
        alt="kamla"
        className="hidden lg:block w-[60px] absolute bottom-0 left-[2%] xl:left-[8%]"
      />
      <Image
        draggable={false}
        src={peopleImg}
        alt="peopleImg"
        className="hidden lg:block h-[200px] absolute right-0 xl:right-[8%] bottom-0"
      />
      <Image
        draggable={false}
        src={downArrow}
        alt="downArrow"
        className="hidden lg:block absolute w-[150px] top-[25%] right-[15%]"
      />
      <Image
        draggable={false}
        src={squreLight}
        alt="squreLight"
        className="hidden md:block w-[20px] absolute top-[5%] right-[50%]"
      />
      <Image
        draggable={false}
        src={squreLight}
        alt="squreLight"
        className="hidden md:block w-[60px] absolute top-[5%] right-[5%]"
      />
      <Image
        draggable={false}
        src={circleBlank}
        alt="circleBlank"
        className="hidden md:block w-[15px] absolute top-[10%] right-[16%]"
      />
      <Image
        draggable={false}
        src={circleBlank}
        alt="circleBlank"
        className="hidden md:block w-[40px] absolute bottom-3 left-[50%]"
      />
      <Image
        draggable={false}
        src={circlesolid}
        alt="circlesolid"
        className="hidden md:block w-[60px] absolute bottom-[40%] right-[10%]"
      />
      {/* <Image
        draggable={false}
        src={mentop}
        alt="mentop"
        className="hidden md:block w-[100px] absolute top-[22%] xl:top-[18%] right-[18%] xl:right-[31%]"
      /> */}
    </div>
  );
};

export default ContactUs;
