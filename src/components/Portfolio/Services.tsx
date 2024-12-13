"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CircularProgress, Skeleton } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

interface ServiceDataProps {
  title: string;
  description: string;
  image: string;
}

interface ServicesContentProps {
  service: any;
  index: number;
  loadedImages: boolean[];
  handleImageLoaded: (index: number) => void;
}

const Services = () => {
  const [servicesData, setServicesData] = useState<ServiceDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiCalled = useRef<boolean>(false); // Ref to track if API has been called

  const [loadedImages, setLoadedImages] = useState<any>(
    Array(servicesData?.length).fill(false)
  );

  const handleImageLoaded = (index: number) => {
    setLoadedImages((prev: any) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleGetServicesData = async () => {
    if (apiCalled.current) return; // Prevent duplicate calls
    apiCalled.current = true;

    setLoading(true);
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BASEURL}/portfolio?showAll=${true}`)
      .then((res) => {
        if (res?.data?.status === 200) {
          setLoading(false);
          setServicesData(res?.data?.payload?.data);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetServicesData();
  }, []);

  return (
    <div className="main-container px-[40px] xl:px-[20px] mt-10 w-full">
      {loading ? (
        <div className="text-center">
          <CircularProgress style={{ color: "#399EFD" }} size={35} />
        </div>
      ) : servicesData?.length > 0 ? (
        servicesData?.map((service, index) => (
          <ServicesContent
            service={service}
            index={index}
            loadedImages={loadedImages}
            handleImageLoaded={handleImageLoaded}
          />
        ))
      ) : (
        <div className="text-black font-MuseoSans font-semibold text-center text-[26px]">
          No data available !
        </div>
      )}
    </div>
  );
};

export default Services;

const ServicesContent: React.FC<ServicesContentProps> = ({
  service,
  index,
  loadedImages,
  handleImageLoaded,
}) => {
  return (
    <div
      key={index}
      className={`w-[100%] h-full mx-auto flex ${
        index % 2 === 0 ? "flex-col" : "flex-col-reverse"
      } md:flex-row lg:flex-row items-center max-sm:mb-[25px] bg-white max-sm:shadow-xl  max-sm:p-2 `}
    >
      {index % 2 === 0 ? (
        <>
          <div className="w-full  lg:w-[50%] pb-4 md:pb-0 lg:pb-0 ">
            {!loadedImages[index] && (
              <Skeleton
                variant="rectangular"
                className="w-full h-[241px] lg:h-[378px]"
              />
            )}
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${service?.image}`}
              alt={service.title}
              width={100}
              height={100}
              className={`!w-fit !h-full ${
                loadedImages[index] ? "visible" : "invisible"
              }`}
              onLoadingComplete={() => handleImageLoaded(index)}
              style={{ visibility: loadedImages[index] ? "visible" : "hidden" }}
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-[50%] m-auto  pb-4 md:pb-0 lg:pb-0">
            <div className="font-MuseoSans font-semibold text-[#121212] text-[24px] md:text-[26px] lg:text-[32px] text-center pb-3">
              {service.title}
            </div>
            <div className="sm:px-10 font-MuseoSans font-light text-[#9BA9B4] text-[16px] text-justify lg:text-center md:line-clamp-6 lg:line-clamp-none">
              {service.description}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-[50%] m-auto  pb-4 md:pb-0 lg:pb-0">
            <div className="font-MuseoSans font-semibold text-[#121212] text-[24px] md:text-[26px] lg:text-[32px] text-center pb-3">
              {service.title}
            </div>
            <div className="sm:px-10 font-MuseoSans font-light text-[#9BA9B4] text-[16px] text-justify lg:text-center md:line-clamp-6 lg:line-clamp-none">
              {service.description}
            </div>
          </div>
          <div className="w-full lg:w-[50%] pb-4 md:pb-0 lg:pb-0">
            {!loadedImages[index] && (
              <Skeleton
                variant="rectangular"
                className="w-full h-[241px] lg:h-[378px]"
              />
            )}
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${service?.image}`}
              alt={service.title}
              width={100}
              height={100}
              className={`!w-fit !h-full ${
                loadedImages[index] ? "visible" : "invisible"
              }`}
              onLoadingComplete={() => handleImageLoaded(index)}
              loading="lazy"
            />
          </div>
        </>
      )}
    </div>
  );
};
