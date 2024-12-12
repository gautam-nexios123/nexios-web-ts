"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BlogBody = ({ blogsData }: any) => {
  const router = useRouter();

  const handleViewDetailBlog = (data: any) => {
    router.push(`/blog/${data?.uuid}`);
  };

  return (
    <div className="main-container px-[40px] my-[30px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
      {blogsData?.length > 0 ? (
        blogsData?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-[25px]"
            >
              <div className="w-full">
                {/* Image Section */}
                <div className="w-full h-[200px]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${data?.image}`}
                    alt="Rescue Operation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full p-6">
                  <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-[20px]">
                    {data?.title}
                  </h1>
                  <p className="text-sm text-gray-700 mb-[15px]">
                    {data?.description}
                  </p>
                  <div
                    className="blog-body line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: data?.html }}
                  />
                  <div
                    onClick={() => handleViewDetailBlog(data)}
                    className="text-blue-700 cursor-pointer underline"
                  >
                    show more..
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-black font-semibold text-[20px] text-center my-[100px]">
          No Data Found
        </div>
      )}
    </div>
  );
};

export default BlogBody;
