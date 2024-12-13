import Image from "next/image";
interface TopMainContentProps {
  text: string;
  banner: any;
  page: string;
}

const TopMainContent: React.FC<TopMainContentProps> = ({
  text,
  banner,
  page,
}) => {
  return (
    <div className="topBanner-bg w-full bg-[#F8FBFF]">
      <div className="main-container px-[40px] flex md:flex-row flex-col">
        <div className="w-full md:w-[50%] relative h-[300px] md:h-[450px]">
          <h2
            className={`font-MuseoSans font-semibold ${
              page === "portfolio"
                ? "text-[42px]  w-[260px]"
                : "text-[28px] md:text-[32px] md:w-[360px] lg:w-[490px]"
            } text-[#121212]  flex items-center h-full`}
          >
            {text}
          </h2>
        </div>
        <div className="w-full md:w-[50%] relative">
          <Image
            draggable={false}
            src={banner}
            alt="banner"
            width={520}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopMainContent;
