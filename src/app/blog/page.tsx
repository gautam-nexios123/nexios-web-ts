import TopMainContent from "@/components/About/TopMainContent";
import topBanner from "../../assets/images/about/top-banner.png";
import axios from "axios";
import BlogBody from "@/components/blog/BlogBody";

const fetchBlogs = async () => {
  const res: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/blog?showAll=true`
  );
  return res?.status === 200 ? res?.data?.payload?.data : [];
};

const Blog = async ({ params, searchParams }: any) => {
  const blogsData = await fetchBlogs();

  return (
    <div className="">
      {/* <CustomHead heading={"myGB"} desc="myDescriptionGGGGG" /> */}
      {/* <TopMainContent
        text="Powering Businesses with Innovative Technological Solutions, Since
          2015"
        banner={topBanner}
        page="about"
      /> */}
      <div
        className={`font-MuseoSans font-light text-[28px] sm:text-[32px] text-[#121212] text-center mt-[25px] pb-[40px]`}
      >
        Our <span className="font-bold">Blogs</span>
        <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[140px] sm:w-[160px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
      </div>
      <BlogBody blogsData={blogsData} />
    </div>
  );
};

export default Blog;
