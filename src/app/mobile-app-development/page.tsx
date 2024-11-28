import React from "react";
import TopBanner from "../../assets/images/services/top-banner.png";
import CountingBanner from "@/common/CountingBanner";
import mobilePic from "../../assets/images/services/mobile1.png";
import Image from "next/image";
import ServiceTopMainContent from "@/components/Services/ServiceTopMainContent";

const MobileAppDevelopment = () => {
  return (
    <div className="relative">
      <ServiceTopMainContent
        text="Mobile App Development"
        description="Mobile application development is one of the most exciting and growing fields in the tech industry today. With so many people using mobile devices to access the internet, there’s never been a better time to develop a mobile app."
        banner={TopBanner}
      />
      <div className="main-container px-[40px]">
        <div className="w-full mt-16">
          <div className="font-MuseoSans font-light text-[20px] text-[#9BA9B4] text-justify md:text-center">
            If you’re looking for a way to increase your business’ reach,
            consider developing a mobile application. There’s a growing trend of
            people using mobile apps to access information and services, and
            businesses that don’t have mobile applications are at a
            disadvantage. Not only that, but mobile apps are a great way to keep
            customers engaged and attached to your business. By developing a
            mobile application, you can provide your customers with convenient
            access to your products and services wherever they are. And since
            most people use their smartphones more than their laptops or
            desktops, developing a mobile app is a great way to reach more
            people.
          </div>
        </div>
        <div className="w-full mt-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%]">
              <Image
                src={mobilePic}
                alt="mobilePic"
                className="mx-auto w-[540px] sm:h-[510px]"
              />
            </div>
            <div className="w-full md:w-[50%]">
              <div className="font-MuseoSans text-[#121212] font-semibold text-[28px] sm:text-[32px] pb-3">
                What We Provides
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-2">
                There are a variety of different mobile app development
                platforms to choose from, and each has its own strengths and
                weaknesses. For example, iOS apps are usually more user-friendly
                and sophisticated than Android apps. However, Android apps are
                often more versatile and can be used to create applications that
                run on a wider range of devices, including smart TVs and
                vehicles.
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-2">
                Regardless of which platform you choose, we’ll be able to help
                you choose the right platform and develop your app to meet your
                specific needs.
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-2">
                If you follow our tips, you’ll have a successful business.
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

export default MobileAppDevelopment;
