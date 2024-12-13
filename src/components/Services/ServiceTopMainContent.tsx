import Image from "next/image";
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
    <div className="top-service-Banner-bg w-full bg-[#F8FBFF] py-[50px]">
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
          </div>
          <div className="w-full md:w-[45%] relative flex items-center pl-10">
            <Image
              draggable={false}
              src={banner}
              alt="banner"
              className="w-[380px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTopMainContent;
