"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "@/utils";
import { AnimationOnScroll } from "../Animations";
import axios from "axios";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

const MeetOurTeam = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isHoveredID, setIsHoveredID] = useState<number | undefined | string>(
    undefined
  );
  const [isVisible, setIsVisible] = useState(false);

  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiCalled = useRef<boolean>(false); // Ref to track if API has been called

  const handleGetClient = async () => {
    if (apiCalled.current) return; // Prevent duplicate calls
    apiCalled.current = true;

    setLoading(true);
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BASEURL}/team?showAll=${true}`)
      .then((res) => {
        if (res?.data?.status === 200) {
          setLoading(false);
          setTeamData(res?.data?.payload?.data);
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
    handleGetClient();
  }, []);

  return (
    <div className="w-full px-[40px]">
      <div className="main-container mb-12">
        <AnimationOnScroll id="meet-team" setIsVisible={setIsVisible}>
          <div
            className={`${
              isVisible ? "animation-zoomIn" : ""
            } relative font-MuseoSans font-semibold text-[#121212] text-[32px] sm:text-[48px] text-center pb-[15px]`}
          >
            Meet Our Team
            <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[240px] sm:w-[350px] mx-auto mt-[-16px] sm:mt-[-24px]"></div>
          </div>
        </AnimationOnScroll>
        <div className="text-[#9BA9B4] font-light text-[20px] text-justify lg:text-center py-5">
          At nexios, we believe in the spirit of teamwork, creativity, and
          innovation to accomplish tasks quickly, seamlessly, and effectively.
          We are dedicated to creating work environments for our employees that
          encourage diversity in skill, talent, and culture, allowing us to come
          up with products ideated from different perspectives.
        </div>
        <div className="text-[#9BA9B4] font-light text-[20px] text-justify lg:text-center">
          From concept to product release, our team of experienced professionals
          delivers intelligent, highly functional, interoperable, and scalable
          technology solutions that not only bring our clients' vision to life
          but also align with their business goals. We also work hard to
          establish and maintain a positive work environment for our employees
          that encourages growth, creativity, collaboration, and better service.
        </div>
      </div>
      <div className="w-full lg:w-[80%] my-11 mx-auto">
        {loading ? (
          <div className="text-center">
            <CircularProgress style={{ color: "#399EFD" }} size={35} />
          </div>
        ) : teamData?.length > 0 ? (
          <Carousel
            arrows={true}
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            transitionDuration={500}
            customDot={<CustomDot />}
          >
            {teamData?.map((item, index) => (
              <div key={index} className="mb-8 w-full">
                <div
                  className="relative cursor-pointer h-[380px] sm:mx-[12px]"
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setIsHoveredID(index);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setIsHoveredID("");
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    className="!h-full !w-[100%] object-cover"
                    src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${item?.image}`}
                    alt="teemOne"
                    draggable={false}
                  />
                  <div className="absolute top-0 w-full h-full bg-transparent hover:bg-[rgba(57,158,253,0.5)] transition-all duration-500"></div>
                  {isHovered && isHoveredID === index && (
                    <div className="absolute bottom-[30px] w-full">
                      <div className="text-white text-center font-MuseoSans font-semibold text-lg">
                        {item?.name}
                      </div>
                      <div className="text-white text-center font-MuseoSans font-semibold text-sm">
                        {item?.designation}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="text-black font-MuseoSans font-semibold text-center text-[26px]">
            No data available !
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetOurTeam;
