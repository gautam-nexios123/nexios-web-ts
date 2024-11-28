import React from "react";
import TopBanner from "../../assets/images/services/iot-top-rightpng.png";
import CountingBanner from "@/common/CountingBanner";
import ServiceTopMainContent from "@/components/Services/ServiceTopMainContent";
import mobilePic from "../../assets/images/services/ui-ux-mobile.png";
import Image from "next/image";
const QA = () => {
  return (
    <div className="relative">
      <ServiceTopMainContent
        text="Quality assurance"
        description="Quality assurance is a critical part of the software development process. It’s important to ensure that the software you’re developing is of the highest quality and that it meets all the requirements specified by your clients or customers. That’s where quality assurance software comes in – it helps to automate the testing process, so you can focus on developing the software itself."
        banner={TopBanner}
      />
      <div className="main-container px-[40px]">
        <div className="w-full mt-16">
          <div className="font-MuseoSans font-light text-[20px] text-[#9BA9B4] text-justify md:text-center">
            Quality assurance is a critical part of the software development
            process. It’s important to ensure that the software you’re
            developing is of the highest quality and that it meets all the
            requirements specified by your clients or customers. That’s where
            quality assurance software comes in – it helps to automate the
            testing process, so you can focus on developing the software itself.
          </div>
        </div>

        <div className="w-full mt-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%]">
              <Image
                src={mobilePic}
                alt="mobilePic"
                className="mx-auto w-[480px] sm:h-[450px]"
              />
            </div>
            <div className="w-full md:w-[50%]">
              <div className="font-MuseoSans text-[#121212] font-semibold text-[28px] sm:text-[32px] pb-3">
                What We Provides
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-4">
                The benefits of using QA software include:
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-6">
                <ul className="list-disc pl-10">
                  <li>Reduced testing time and costs</li>
                  <li>Increased accuracy and reliability</li>
                  <li>Increased speed and efficiency</li>
                  <li>Reduced risk of errors</li>
                </ul>
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-2">
                In order to ensure that the products and services that are
                delivered to customers are of the highest quality, businesses
                must use QA software. It’s an essential part of ensuring
                customer satisfaction, and it can help to prevent costly
                mistakes from being made.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <CountingBanner />
      </div>
    </div>
  );
};

export default QA;
