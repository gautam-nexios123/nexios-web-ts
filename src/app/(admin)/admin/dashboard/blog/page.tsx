"use client";
import { Button, Divider } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import FullScreenModel from "./FullScreenModel";
import NoDataFound from "@/common/noDataFound";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axiosInstance from "@/service/axiosInstance";
import DialogueComp from "@/components/Admin/DialogueComp";
import DeleteModelBody from "@/common/DeleteModelBody";

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
            setOpen(true);
          }}
        >
          Add Blog
        </Button>
      </div>
      <div className="blog-body my-[30px]">
        {blogHtmlData?.length > 0 ? (
          blogHtmlData?.map((cont: any, index: number) => {
            return (
              <div className="mb-[25px]" key={index}>
                <div className="flex justify-between">
                  <div className="flex items-start gap-[20px]">
                    <div className="text-black font-semibold text-[20px]">
                      {index + 1}.
                    </div>
                    <div className="text-black font-semibold text-[20px]">
                      {cont?.title}
                    </div>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: cont?.html }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      onClick={() => {
                        setOpen(true);
                        setIsEditData(cont);
                      }}
                    >
                      <EditIcon className="cursor-pointer text-blue-800" />
                    </div>
                    <div
                      onClick={() => {
                        setDelID(cont?.uuid);
                        setDelMolOpen(true);
                      }}
                      className=""
                    >
                      <DeleteIcon className="cursor-pointer text-red-500" />
                    </div>
                  </div>
                </div>
                <Divider className="!text-black h-2" />
              </div>
            );
          })
        ) : (
          <NoDataFound loading={loading} />
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
