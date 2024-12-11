"use client";
import CustomButton from "@/common/CustomButton";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "../Animations";
import axios from "axios";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const OpeningPosition = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [positionData, setPositionData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiCalled = useRef<boolean>(false); // Ref to track if API has been called

  const handleGetPositionData = async () => {
    if (apiCalled.current) return; // Prevent duplicate calls
    apiCalled.current = true;
    
    setLoading(true);
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BASEURL}/career?showAll=${true}`)
      .then((res) => {
        if (res?.data?.status === 200) {
          setLoading(false);
          setPositionData(res?.data?.payload?.data);
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
    handleGetPositionData();
  }, []);

  return (
    <div className="w-full my-[80px]">
      <AnimationOnScroll id="opening-position" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } font-MuseoSans font-light text-[22px] sm:text-[32px] text-[#121212] pb-4 text-center`}
        >
          Opening <span className="font-bold">Position</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[180px] mx-auto sm:w-[260px] mt-[-12px] sm:mt-[-15px]"></div>
        </div>
      </AnimationOnScroll>

      <div className="flex w-full flex-wrap justify-center gap-6 ">
        {loading ? (
          <div className="text-center my-14">
            <CircularProgress style={{ color: "#399EFD" }} size={35} />
          </div>
        ) : positionData?.length > 0 ? (
          positionData?.map((item, index) => {
            return <PositonCard item={item} index={index} key={index} />;
          })
        ) : (
          <div className="text-black font-MuseoSans font-semibold text-center text-[26px] py-9">
            No data available !
          </div>
        )}
      </div>
    </div>
  );
};

export default OpeningPosition;

interface PositionCardProps {
  item: any;
  index: number;
}

const PositonCard: React.FC<PositionCardProps> = ({ item, index }) => {
  const router = useRouter();

  return (
    <div
      className={`w-[80%] md:w-[330px] ${
        index % 2 !== 0 ? "bg-[#399EFD]" : "bg-[#F2F8FA]"
      }  py-6 shadow-3xl mt-8 px-3 rounded-2xl`}
    >
      <div
        className={`text-center ${
          index % 2 !== 0 ? "text-white" : "text-[#121212]"
        } font-MuseoSans font-semibold text-[28px] sm:text-[32px] pb-6`}
      >
        {item?.name}
      </div>
      <div
        className={`text-center ${
          index % 2 !== 0 ? "text-white" : "text-[#9BA9B4]"
        } font-MuseoSans font-light text-[22px]`}
      >
        Openings Position
      </div>
      <div
        className={`text-center ${
          index % 2 !== 0 ? "text-white" : "text-[#121212]"
        } font-MuseoSans font-light text-[30px] pb-3`}
      >
        {item?.vacancy}
      </div>
      <div
        className={`text-center ${
          index % 2 !== 0 ? "text-white" : "text-[#9BA9B4]"
        } font-MuseoSans font-light text-[22px]`}
      >
        Experience in Year
      </div>
      <div
        className={`text-center ${
          index % 2 !== 0 ? "text-white" : "text-[#121212]"
        } font-MuseoSans font-light text-[30px] pb-3`}
      >
        {item?.experience_year}
      </div>
      <div className="flex justify-center mt-2">
        <CustomButton
          onSubmitButton={() => router.push("/applynow")}
          bgColor={index % 2 !== 0 ? "white" : "#399EFD"}
          textColor={index % 2 !== 0 ? "#399EFD" : "white"}
          btnWidth="130px"
          text="Apply Now"
        />
      </div>
    </div>
  );
};
