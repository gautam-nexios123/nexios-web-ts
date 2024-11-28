import Image from "next/image";
import squreImg from "../../assets/images/about/squere.svg";
import circleBlank from "../../assets/images/about/circle-blank.svg";
import tringleLight from "../../assets/images/about/tringle-light.svg";
import squreLight from "../../assets/images/about/squre-light.svg";
import circleSolid from "../../assets/images/about/circle-solid.svg";
import lineThree from "../../assets/images/about/line-three.svg";

interface ServiceProps {
  text: string;
  description: string;
  banner: any;
}

const ServiceTopMainContent: React.FC<ServiceProps> = ({
  text,
  description,
  banner,
}) => {
  return (
    <div className="w-full bg-[#F8FBFF] py-[50px]">
      <div className="main-container px-[40px]">
        <div className="w-full flex md:flex-row flex-col">
          <div className="w-full md:w-[55%] my-[30px] sm:my-0 relative h-[300px] md:h-[380px]">
            <div className="flex flex-col justify-center h-full">
              <h1
                className={`font-MuseoSans font-semibold text-[30px] md:text-[46px] pb-4  text-[#121212]`}
              >
                {text}
              </h1>
              <p
                className={`font-MuseoSans font-light text-[19px] text-[#9BA9B4] text-justify`}
              >
                {description}
              </p>
            </div>
            <Image
              draggable={false}
              src={squreImg}
              alt="squre"
              className="absolute top-[10%] left-[10%]"
              width={15}
            />
            <Image
              draggable={false}
              src={circleBlank}
              alt="circle"
              className="absolute top-[50%] left-[-50px]"
              width={15}
            />
            <Image
              draggable={false}
              src={tringleLight}
              alt="trungle"
              className="absolute top-[14%] left-[40%]"
              width={20}
            />
            <Image
              draggable={false}
              src={circleBlank}
              alt="circle"
              className="absolute top-[30%] left-[55%]"
              width={15}
            />
            <Image
              draggable={false}
              src={squreLight}
              alt="squreLight"
              className="absolute top-[6%] right-0"
              width={15}
            />
            <Image
              draggable={false}
              src={lineThree}
              alt="lineThree"
              className="absolute top-[75%] right-[2%]"
              width={80}
            />
          </div>
          <div className="w-full md:w-[45%] relative flex items-center pl-10">
            <Image
              draggable={false}
              src={banner}
              alt="banner"
              className="w-[380px] mx-auto"
            />
            <Image
              draggable={false}
              src={squreLight}
              alt="squreLight"
              className="absolute top-[10%] right-[15%]"
              width={15}
            />
            <Image
              draggable={false}
              src={circleSolid}
              alt="circleSolid"
              className="absolute top-[74%] right-[5%]"
              width={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTopMainContent;
