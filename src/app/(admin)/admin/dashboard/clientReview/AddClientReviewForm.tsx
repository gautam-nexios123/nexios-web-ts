import { Box, Button, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddClientReviewForm = ({ setOpen }: any) => {
  const [selectedImg, setSelectedImg] = useState<any>("");

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      designation: "",
      description: "",
      image: "",
    },
  });

  const handleFileChnage = (event: any) => {
    setSelectedImg(event.target.files[0]);
  };

  const onSubmit = async (data: any) => {
    console.log("dattta", data);
  };

  return (
    <form className="bg-white py-4 px-[30px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Create Review</h1>
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
                Name<span className="text-red-500">*</span>
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Enter Name"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors?.name && (
                <span className="text-red-500 text-[14px]">
                  {errors.name.message}
                </span>
              )}
            </Grid>

            {/* Designation */}
            <Grid item xs={12} md={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Designation<span className="text-red-500">*</span>
              </label>
              <Controller
                name="designation"
                control={control}
                rules={{ required: "Designation is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Enter Designation"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors?.designation && (
                <span className="text-red-500 text-[14px]">
                  {errors.designation.message}
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
              <Controller
                name="image"
                control={control}
                rules={{ required: "Image is required" }}
                render={({ field, fieldState }) => (
                  <div>
                    <input
                      type="file"
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
          Create
        </Button>
      </Box>
    </form>
  );
};

export default AddClientReviewForm;
