import { Box, Button, CircularProgress, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import axiosInstance from "@/service/axiosInstance";

const AddPortfolioForm = ({
  setOpen,
  handleGetPortfolioList,
  isEditData,
}: any) => {
  const [selectedImg, setSelectedImg] = useState<any>("");
  const [selectedImgPreview, setSelectedImgPreview] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  const handleFileChnage = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImg(file); // Store the file
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImgPreview(reader.result as string); // Set preview URL
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImg(null);
      setSelectedImgPreview(null);
    }
  };

  const removeImage = () => {
    setSelectedImg(null);
    setSelectedImgPreview(null);
    setValue("image", "");
  };

  const onSubmit = async (data: any) => {
    console.log("dattta", data);
    if (isEditData?.uuid) {
      setLoading(true);
      try {
        const res = await axiosInstance.put(
          `${process.env.NEXT_PUBLIC_API_BASEURL}/portfolio?id=${isEditData?.uuid}`,
          data
        );
        if (res?.data?.status === 200) {
          setLoading(false);
          handleGetPortfolioList();
          setOpen(false);
        } else {
          console.log(res?.data?.message);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(true);
      try {
        const res = await axiosInstance.post(
          `${process.env.NEXT_PUBLIC_API_BASEURL}/portfolio`,
          data
        );
        if (res?.data?.status === 201) {
          setLoading(false);
          handleGetPortfolioList();
          setOpen(false);
        } else {
          console.log(res?.data?.message);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isEditData?.uuid) {
      setValue("title", isEditData?.title);
      setValue("description", isEditData?.description);
      // setValue("image" , isEditData?.image)
    }
  }, [isEditData?.uuid]);

  return (
    <form className="bg-white py-4 px-[30px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          {isEditData?.uuid ? "Edit" : "Create"} Portfolio
        </h1>
      </div>
      <Box
        display="flex"
        // flexDirection={isMobile ? "column" : "row"}
        justifyContent="start"
        // gap={isMobile ? "20px" : "50px"}
        maxWidth={"1400px"}
      >
        {/* Left Section: Form */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Grid container spacing={2}>
            {/* Name Input */}
            <Grid item xs={12} md={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Title<span className="text-red-500">*</span>
              </label>
              <Controller
                name="title"
                control={control}
                rules={{ required: "Title is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Enter Title"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors?.title && (
                <span className="text-red-500 text-[14px]">
                  {errors.title.message}
                </span>
              )}
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Description<span className="text-red-500">*</span>
              </label>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Enter Description"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                    className="w-full min-h-[200px] border-none focus:ring-0 p-3"
                  ></textarea>
                )}
              />
              {errors?.description && (
                <span className="text-red-500 text-[14px]">
                  {errors.description.message}
                </span>
              )}
            </Grid>

            {/* Upload File */}
            <Grid item xs={12} md={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Upload Image<span className="text-red-500">*</span>
              </label>
              {selectedImgPreview ? (
                <div className="relative w-fit">
                  <img
                    src={selectedImgPreview}
                    alt="Image Preview"
                    className="mt-4 w-32 h-32 object-cover rounded"
                  />
                  <div
                    onClick={() => removeImage()}
                    className="absolute top-0 right-0 cursor-pointer"
                  >
                    <CancelIcon />
                  </div>
                </div>
              ) : (
                <Controller
                  name="image"
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event); // Update react-hook-form's state
                          handleFileChnage(event); // Call your custom handler
                        }}
                        className="w-full block my-2 p-2 cursor-pointer border border-gray-300 rounded bg-gray-100"
                      />
                      {errors?.image && (
                        <span className="text-red-500 text-[14px]">
                          {errors.image.message}
                        </span>
                      )}
                    </div>
                  )}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="flex items-center m-[16px] justify-start gap-[20px] max-sm:flex-col ">
        <Button
          variant="contained"
          sx={{
            background: "#ffffff",
            boxShadow:
              "6.22px 6.22px 15px 0px #0000001A,-6.22px -6.22px 15px 0px #F9FCFF",
            padding: "7px 20px",
            color: "#454545",
            textTransform: "unset",
          }}
          className="max-sm:w-full hover:!bg-transparent"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            boxShadow:
              "8px 8px 12.8px 0px #FFFFFF1A inset, -8px -8px 12.8px 0px #0000004D inset, 0px 3.46px 3.46px 0px #00000040 inset",
            padding: "7px 20px",
            textTransform: "unset",
          }}
          className="max-sm:w-full"
        >
          {isEditData?.uuid ? "Edit" : "Create"}
          {loading && (
            <CircularProgress size={16} className="!text-white ml-3" />
          )}
        </Button>
      </Box>
    </form>
  );
};

export default AddPortfolioForm;
