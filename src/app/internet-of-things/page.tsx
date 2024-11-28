import React from "react";
import TopBanner from "../../assets/images/services/iot-top-rightpng.png";
import CountingBanner from "@/common/CountingBanner";
import ServiceTopMainContent from "@/components/Services/ServiceTopMainContent";
import mobilePic from "../../assets/images/services/ui-ux-mobile.png";
import Image from "next/image";

const InternetOfThings = () => {
  return (
    <div className="relative">
      <ServiceTopMainContent
        text="Internet of Things - IOT"
        description="The Internet of Things is a rapidly growing field that involves connecting physical objects – from cars to appliances – to the internet. This allows those objects to be remotely monitored and controlled, making them easier to use and more efficient."
        banner={TopBanner}
      />

      <div className="main-container px-[40px]">
        <div className="w-full mt-16">
          <div className="font-MuseoSans font-light text-[20px] text-[#9BA9B4] text-justify md:text-center mb-4">
            One of the key benefits of the Internet of Things is edge computing.
            Edge computing involves processing tasks on the edge of the network,
            near the devices themselves. This allows devices to access data more
            quickly and easily, eliminating the need for data to travel back to
            central servers.
          </div>
          <div className="font-MuseoSans font-light text-[20px] text-[#9BA9B4] text-justify md:text-center mb-4">
            The Internet of Things (IoT) is a growing trend that refers to the
            interconnectedness of physical devices with the internet. This
            interconnectedness allows devices to communicate with each other and
            with servers, and it enables users to access data from these
            devices. The IoT has many potential benefits, including increased
            efficiency and automation, better customer service, and increased
            safety.
          </div>
          <div className="font-MuseoSans font-light text-[20px] text-[#9BA9B4] text-justify md:text-center mb-4">
            BLE (Bluetooth Low Energy) is another important technology in the
            IoT. BLE is a short-range wireless technology that is used to
            connect devices that are close to each other. It’s especially useful
            in applications like smart homes and retail stores, where you want
            to connect devices like security cameras and sensors to smart
            devices in your home or store.
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
                Narrowband IoT is another important trend in the IoT. Narrowband
                IoT refers to the use of wireless networks that have a limited
                range, typically 10 meters or less. This is important because it
                reduces the amount of data that needs to be transferred between
                devices, which can lead to faster and more efficient
                implementations of the IoT.
              </div>
              <div className="font-MuseoSans text-[#9BA9B4] font-light text-[19px] text-justify pb-2">
                NFC (near-field communication) is also a key technology in the
                IoT. NFC is a short-range wireless technology that enables users
                to easily exchange data between devices by touching them
                together. This is important because it reduces the amount of
                data that needs to be transferred between devices, which can
                lead to faster and more efficient implementations of the IoT.
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

export default InternetOfThings;
