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
  const [selectedImgPreview, setSelectedImgPreview] = useState<string | null>(
    ""
  );
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: null,
    },
  });

  const handleFileChnage = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setValue("image", file); // Store the file
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImgPreview(reader.result as string); // Set preview URL
      };
      reader.readAsDataURL(file);
    } else {
      setValue("image", null);
      setSelectedImgPreview("");
    }
  };

  const removeImage = () => {
    setValue("image", null);
    setSelectedImgPreview("");
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    typeof data?.image !== "string" && formData.append("image", data?.image);
    formData.append("title", data?.title);
    formData.append("description", data?.description);

    try {
      const res = isEditData?.uuid
        ? await axiosInstance.put(
            `${process.env.NEXT_PUBLIC_API_BASEURL}/portfolio?id=${isEditData.uuid}`,
            formData
          )
        : await axiosInstance.post(
            `${process.env.NEXT_PUBLIC_API_BASEURL}/portfolio`,
            formData
          );

      if (res?.data?.status === 200 || res?.data?.status === 201) {
        handleGetPortfolioList();
        reset();
        setOpen(false);
      } else {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isEditData?.uuid) {
      reset({
        title: isEditData?.title || "",
        description: isEditData?.description || "",
        image: isEditData?.image || null,
      });
      setSelectedImgPreview(
        `${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${isEditData?.image}`
      );
    } else {
      reset();
      setSelectedImgPreview("");
    }
  }, [isEditData, reset]);

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
