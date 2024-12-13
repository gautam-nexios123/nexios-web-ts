import TopMainContent from "@/components/About/TopMainContent";
import React from "react";
import portTopBanner from "../../assets/images/portfolio/portfolio-top-banner.svg";
import CountingBanner from "@/common/CountingBanner";
import dotHalf from "../../assets/images/about/dot-half.svg";
import Image from "next/image";
import Services from "@/components/Portfolio/Services";

const Portfolio = () => {
  return (
    <div className="relative">
      <TopMainContent
        page="portfolio"
        text="We work your ideas"
        banner={portTopBanner}
      />

      <div className="relative w-full">
        <div className="main-container px-[40px] xl:px-[20px] md:flex md:gap-16 lg:gap-24 w-full py-[60px] my-6">
          <div>
            <div className="font-MuseoSans text-[36px] sm:text-[46px] text-[#121212] font-semibold pb-3 md:pb-0 whitespace-nowrap leading-none">
              Our, Successful
            </div>
            <div className="font-MuseoSans text-[36px] sm:text-[46px] text-[#121212] font-semibold pb-3 md:pb-0 whitespace-nowrap">
              client products
            </div>
          </div>
          <div className="font-MuseoSans text-[16px] sm:text-[19px] text-[#9BA9B4] font-light text-justify">
            nexios Technologies is one of the reckoned Software Development
            Company in Surat. Rapidly changing business state of affairs and
            latest technologies being introduced day by day, always raises the
            requirement for
          </div>
        </div>
        <Image
          src={dotHalf}
          alt="dotHalf"
          className="w-[80px] absolute top-0 left-0"
        />
      </div>
      <Services />
      <div className="mt-[100px]">
        <CountingBanner />
      </div>
    </div>
  );
};

export default Portfolio;
