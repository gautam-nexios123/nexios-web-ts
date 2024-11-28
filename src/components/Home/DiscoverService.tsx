import Image from "next/image";
import webDevImg from "../../assets/images/home/ic-web-devlopment.png";
import mobileDevImg from "../../assets/images/home/Group-54-mobile-1.png";
import internetThingsImg from "../../assets/images/home/internetThings.png";
import softImg from "../../assets/images/home/Layer-1-soft-1.png";
import uiUXImg from "../../assets/images/home/uiux.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimationOnScroll } from "../Animations";
import { useState } from "react";
import { CustomDot } from "@/utils";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1480 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1480, min: 1024 },
    items: 4,
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

interface CarouselDataItem {
  name: string;
  image: any;
}

const carouselData: CarouselDataItem[] = [
  {
    name: "Website Development",
    image: webDevImg,
  },
  {
    name: "UI & UX Design",
    image: uiUXImg,
  },
  {
    name: "Mobile App Development",
    image: mobileDevImg,
  },
  {
    name: "Software Developing",
    image: softImg,
  },
  {
    name: "Internet Of Things",
    image: internetThingsImg,
  },
];

const DiscoverService: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="mt-11">
      <AnimationOnScroll id="discover-service" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } text-center font-MuseoSans font-light text-[22px] sm:text-[32px] mt-[60px] mb-[30px]`}
        >
          Discover Our <span className="font-bold">Services</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[225px] sm:w-[325px] mx-auto mt-[-12px] sm:mt-[-15px]"></div>
        </div>
      </AnimationOnScroll>

      <div className="mx-8">
        <Carousel
          arrows={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          customDot={<CustomDot />}
        >
          {carouselData?.map((item, index) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DiscoverService;

interface CardProps {
  data: CarouselDataItem;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="select-none mx-3 bg-white shadow-3xl  px-2 py-4 rounded-[20px] h-[350px] flex flex-col justify-between items-center mt-5 mb-9 cursor-pointer">
      <div className="w-[90%] h-[230px]">
        <Image
          src={data?.image}
          alt="focusInnoImg"
          className="my-4 w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <p className="text-[#121212] font-MuseoSans font-semibold text-[20px] text-center w-[50%] mx-auto ">
        {data?.name}
      </p>
    </div>
  );
};
