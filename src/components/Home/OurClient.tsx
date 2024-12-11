"use client";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dotImg from "../../assets/images/home/dot-dot.svg";
import quateIcon from "../../assets/images/home/quateIcon.svg";
import { AnimationOnScroll } from "../Animations";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface ClientData {
  name: string;
  image: string;
  description: string;
  designation: string;
}

const OurClient = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [clientData, setClientData] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const apiCalled = useRef<boolean>(false); // Ref to track if API has been called

  const handleGetClient = async () => {
    if (apiCalled.current) return; // Prevent duplicate calls
    apiCalled.current = true; // Mark as called

    setLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASEURL}/client?showAll=${true}`);
      if (res?.data?.status === 200) {
        setClientData(res?.data?.payload?.data);
        setLoading(false);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetClient();
  }, []);

  const CustomLeftArrow = ({ onClick }: any) => (
    <button
      className="absolute bottom-0 left-[60%] md:left-[80%] lg:left-[70%] xl:left-[80%] bg-[#c2e1f9]  px-[10px] text-[20px] rounded-lg"
      onClick={onClick}
    >
      <WestIcon
        className="text-[#399EFD] font-semibold lg:text-[60px]"
        fontSize="large"
      />
    </button>
  );

  const CustomRightArrow = ({ onClick }: any) => (
    <button
      className="absolute bottom-0 right-0 lg:right-[0%] bg-[#c2e1f9]  px-[10px] text-[20px] rounded-lg"
      onClick={onClick}
    >
      <EastIcon
        className="text-[#399EFD] font-semibold lg:text-[60px]"
        fontSize="large"
      />
    </button>
  );

  return (
    <div className="relative w-full bg-[#F2F8FA]">
      <AnimationOnScroll id="whatour-client" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } text-[#121212] font-MuseoSans font-semibold text-[22px] sm:text-[40px] text-center pt-[60px] mt-16`}
        >
          What our clients have to say
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[300px] sm:w-[530px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
        </div>
      </AnimationOnScroll>
      <Image
        src={dotImg}
        alt="dotImg"
        className="w-[220px] h-[220px] absolute sm:left-[20%] sm:top-[15%] lg:left-[15%] lg:top-[20%]"
      />
      <div className="main-container w-[80%] lg:w-[60%] mx-auto py-[80px]">
        {loading ? (
          <div className="text-center">
            <CircularProgress style={{ color: "#399EFD" }} size={35} />
          </div>
        ) : clientData?.length > 0 ? (
          <Carousel
            arrows={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            transitionDuration={500}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {clientData?.map((item, index) => (
              <CarouselCard item={item} key={index} />
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

export default OurClient;

interface CarouselCardProps {
  item: ClientData;
}
const CarouselCard: React.FC<CarouselCardProps> = ({ item }) => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-[40px] w-full mb-[45px] cursor-pointer">
      <div className="w-[200px] h-[200px] bg-[#399EFD] relative mr-[30px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${item?.image}`}
          alt="manImg"
          width={100}
          height={100}
          className="!w-full object-cover ml-[35px] mt-[20px]"
        />
        {/* <img src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${item?.image}`}
          alt="manImg" className="!w-full object-cover ml-[35px] mt-[20px]" /> */}
      </div>
      <div className="w-full lg:w-[70%]">
        <Image src={quateIcon} alt="quate" width={45} height={45} />
        <div className="text-[#121212] mb-2 text-justify font-MuseoSans font-medium text-[21px] py-6 italic">
          {item?.description}
        </div>
        <div className="text-[#121212] font-MuseoSans font-semibold text-[16px] pb-2 italic">
          {item?.name}
        </div>
        <div className="text-[#9BA9B4] font-MuseoSans font-light text-[16px] pb-2 italic">
          {item?.designation}
        </div>
      </div>
    </div>
  );
};
