import CustomHead from "@/common/CustomHead";
import axios from "axios";
import React from "react";

const fetchBlogDetail = async (id: any) => {
  const res: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/blog/detail?id=${id}`
  );
  return res?.status === 201 ? res?.data?.payload?.data : [];
};

const BlogDetail = async ({ params, searchParams }: any) => {
  const { slug } = params;
  const blogData = await fetchBlogDetail(slug);

  return (
    <div className="main-container px-[40px] my-[30px]">
      <CustomHead
        heading={blogData?.title}
        desc={blogData?.description}
      />
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-[25px]">
        <div className="w-full">
          {/* Text Section */}
          <div className="p-6">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-[20px]">
              {blogData?.title}
            </h1>
            <p className="text-sm text-gray-700 mb-[15px]">
              {blogData?.description}
            </p>
            {/* Image Section */}
            <div className="w-[70%] mx-auto my-[20px]">
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${blogData?.image}`}
                alt="Rescue Operation"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="blog-body"
              dangerouslySetInnerHTML={{ __html: blogData?.html }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
