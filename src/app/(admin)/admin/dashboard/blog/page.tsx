"use client";
import DeleteModelBody from "@/common/DeleteModelBody";
import DialogueComp from "@/components/Admin/DialogueComp";
import axiosInstance from "@/service/axiosInstance";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import FullScreenModel from "./FullScreenModel";

const BlogPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogHtmlData, setBlogHtmlData] = useState<any>([]);
  const [isEditData, setIsEditData] = useState<any>({});
  const [delMolOpen, setDelMolOpen] = useState(false);
  const [delId, setDelID] = useState("");

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/blog?id=${delId}`
      );
      if (res?.data?.status === 200) {
        handleGetBlogs();
        setDelMolOpen(false);
      } else {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDelMolOpen(false);
    }
  };

  const handleGetBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/blog??showAll=${true}`
      );
      if (res?.data?.status === 200) {
        setLoading(false);
        setBlogHtmlData(res?.data?.payload?.data);
      } else {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Blog Page</h1>
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            padding: "13px 25px",
            borderRadius: "25px",
            fontSize: { xs: "12px", sm: "13px" },
          }}
          onClick={() => {
            setIsEditData({});
            setOpen(true);
          }}
        >
          Add Blog
        </Button>
      </div>
      <div className="my-[30px]">
        {blogHtmlData?.length > 0 ? (
          blogHtmlData?.map((cont: any, index: number) => {
            return (
              <div
                key={index}
                className="relative w-full lg:max-w-[80%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-[25px]"
              >
                <div className="flex flex-col-reverse md:flex-row justify-between w-full">
                  {/* Text Section */}
                  <div className="w-full md:w-[70%] p-6">
                    <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-[15px]">
                      {cont?.title}
                    </h1>
                    <p className="text-sm text-gray-700 mb-[15px]">
                      {cont?.description}
                    </p>
                    <div
                      className="blog-body line-clamp-1"
                      dangerouslySetInnerHTML={{ __html: cont?.html }}
                    />
                  </div>
                  {/* Image Section */}
                  <div className="w-full md:w-[30%] h-[230px]">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${cont?.image}`}
                      alt="Rescue Operation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute top-0 right-[6px]">
                  <div
                    onClick={() => {
                      setOpen(true);
                      setIsEditData(cont);
                    }}
                    className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center mb-[12px]"
                  >
                    <EditIcon className="cursor-pointer text-blue-800" />
                  </div>
                  <div
                    onClick={() => {
                      setDelID(cont?.uuid);
                      setDelMolOpen(true);
                    }}
                    className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
                  >
                    <DeleteIcon className="cursor-pointer text-red-500" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full text-center py-[100px]">
            {loading ? <CircularProgress /> : "No data found"}
          </div>
        )}
      </div>
      <div>
        <FullScreenModel
          open={open}
          setOpen={setOpen}
          handleGetBlogs={handleGetBlogs}
          isEditData={isEditData}
        />
      </div>

      <DialogueComp open={delMolOpen}>
        <DeleteModelBody
          setOpen={setDelMolOpen}
          handleDelete={handleDelete}
          label={"Blog"}
        />
      </DialogueComp>
    </div>
  );
};

export default BlogPage;
