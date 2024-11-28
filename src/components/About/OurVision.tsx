import Image from "next/image";
import visionImg from "../../assets/images/about/vision-img.svg";
import missionImg from "../../assets/images/about/mission-img.svg";

const OurVision = () => {
  return (
    <div className="ourvision-bg relative bg-cover py-[50px] w-full">
      <div className="main-container px-[40px]">
        <div className="w-full pb-[40px] flex flex-col md:flex-row gap-[10%]">
          <div className="w-full md:w-[45%] mb-5 md:mb-0">
            <Image
              src={visionImg}
              alt="visionImg"
              className="mx-auto w-[500px] h-[381px]"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <div className="text-[#121212] font-MuseoSans font-semibold text-[38px] lg:text-[48px] pb-3 text-justify">
              Our Vision
            </div>
            <div className="text-[#9BA9B4] font-MuseoSans font-light text-[20px] lg:text-[23px] text-justify">
              We envision ourselves as one of the leading technology consulting
              and development firms in the digital space, providing world-class
              services that will propel your business to new heights.
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row gap-[10%]">
          <div className="w-full md:w-[45%]">
            <div className="text-[#121212] font-MuseoSans font-semibold text-[38px] lg:text-[48px] pb-3 text-justify">
              Our Mission
            </div>
            <div className="text-[#9BA9B4] font-MuseoSans font-light text-[20px] lg:text-[23px] text-justify">
              At nexios, we are on a mission to become the preferred choice for
              technology development and consultancy services across the globe,
              powering business innovation and digitalization across multiple
              industries and business domains.
            </div>
          </div>
          <div className="w-full md:w-[45%] mb-8 md:mb-0">
            <Image
              src={missionImg}
              alt="missionImg"
              className="mx-auto w-[500px] h-[381px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
