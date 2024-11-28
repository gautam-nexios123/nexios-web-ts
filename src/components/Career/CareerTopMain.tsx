import Image from "next/image";

interface CareerProps {
  text: string;
  description: string;
  banner: any;
}
const CareerTopMain: React.FC<CareerProps> = ({
  text,
  description,
  banner,
}) => {
  return (
    <div className="w-full bg-[#F8FBFF]">
      <div className="main-container px-[40px]">
        <div className="w-full flex md:flex-row flex-col mx-auto">
          <div className="w-full md:w-[50%] relative h-[300px] md:h-[380px]">
            <div className="flex flex-col justify-center h-full">
              <h1
                className={`font-MuseoSans font-semibold text-[30px] md:text-[46px] pb-4  text-[#121212]`}
              >
                {text}
              </h1>
              <p
                className={`font-MuseoSans font-light text-[19px] text-justify text-[#9BA9B4]`}
              >
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] relative flex items-center pl-10">
            <Image src={banner} alt="banner" className="w-[410px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTopMain;
