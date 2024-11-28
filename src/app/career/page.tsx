"use client";
import React, { useState } from "react";
import TopBanner from "../../assets/images/career/career-banner.svg";
import CareerTopMain from "@/components/Career/CareerTopMain";
import { AnimationOnScroll } from "@/components/Animations";
import OpeningPosition from "@/components/Career/OpeningPosition";
import InterViewProcess from "@/components/Career/InterViewProcess";

const Career = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      <CareerTopMain
        text="Join Our Team"
        description="We attract the accurate kind of people like us with Creative Minds and Committed to their Dreams. We offer you to start a transcendent career by joining Webvolty IT Solution."
        banner={TopBanner}
      />
      <div className="main-container px-[40px]">
        <div className="my-12">
          <AnimationOnScroll id="culture-at" setIsVisible={setIsVisible}>
            <div
              className={`${
                isVisible ? "animation-zoomIn" : ""
              } font-MuseoSans font-light text-[22px] sm:text-[32px] text-[#121212] pb-4 text-center`}
            >
              Career & Culture at <span className="font-bold">nexios</span>
              <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[265px] sm:w-[390px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
            </div>
          </AnimationOnScroll>

          <div className="font-MuseoSans font-light text-[16px] sm:text-[18px] text-[#9BA9B4] text-justify md:text-center">
            We are one of the best places to work. nexios makes an atmosphere
            where you can grow your inner self and outer self, show your talent
            It’s a perfect combination between you and nexios when the career
            and your passion come together. We’re always hard at work crafting
            clever and thoughtful digital experiences for our products. We are
            finding for some fresh talents who can add cultural values at
            nexios, someone who has the same mission that is ours but also can
            bring diversity at a similar time.
          </div>
        </div>
      </div>
      <OpeningPosition />
      <InterViewProcess />
    </div>
  );
};

export default Career;
