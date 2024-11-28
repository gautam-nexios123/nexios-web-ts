import CountingBanner from "@/common/CountingBanner";
import ServiceTopMainContent from "@/components/Services/ServiceTopMainContent";
import Image from "next/image";
import React from "react";
import TopBanner from "../../assets/images/services/vec-top-right-web.png";
import mobilePic from "../../assets/images/services/web-development-sec.png";

const Webdevelopment = () => {
  return (
    <div className="relative">
      <ServiceTopMainContent
        text="Website Development"
        description="Web application development is a growing industry, and there are a number of reasons for that. First of all, it’s a great way to create customized and interactive websites."
        banner={TopBanner}
      />

      <div className="main-container px-[40px]">
        <div className="w-full mt-16">
          <div className="font-MuseoSans font-light text-[20px] text-[#9BA9B4] text-justify md:text-center">
            For starters, custom web applications offer a unique way to improve
            your business. By creating a custom web application, you can
            increase efficiency and streamline your operations. You can also use
            a web application to build a CRM or e-commerce platform. This way,
            you can manage your customers and sales more effectively. And
            finally, web application development can help you create an ERP
            system. This is a great way to manage all your business finances and
            data.
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
                Web application development is a growing industry, and there are
                a number of reasons for that. First of all, it’s a great way to
                create customized and interactive websites. Not only that, but
                web application development is also great for CRM (customer
                relationship management), E-commerce, and ERP (enterprise
                resource planning) applications. With web application
                development, you can create a customized website that offers a
                unique service. Plus, with the right software, you can easily
                create and manage your customer relationships. In addition, web
                application development is also a great way to create a strong
                online presence. By creating a custom website, you can build a
                strong online presence and attract more customers. So if you’re
                looking for a way to improve your business, web application
                development is definitely the way to go.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 bg-[#399EFD0D]">
        <div className="main-container px-[40px]">
          <div className="py-[50px]">
            <div className="font-MuseoSans text-[#121212] font-semibold text-[28px] sm:text-[32px] pb-3 text-center">
              Web Development is a Exciting Field
            </div>
            <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify lg:text-center pb-2">
              Web application development is an extremely exciting field, and
              there are plenty of opportunities for those with the skills to
              take advantage of them. With custom web apps, you can create a
              unique and customized solution that meets the needs of your
              business. CRM (customer relationship management) software can help
              you keep track of your customers’ interactions and relationships,
              and E-commerce platforms can help you sell your products online.
              And, of course, ERP (enterprise resource planning) systems can
              help you manage all your business operations from a single
              platform. If you’re interested in learning more about web
              application development, our team at our company can help you get
              started.
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

export default Webdevelopment;
