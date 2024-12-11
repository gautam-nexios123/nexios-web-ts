import axiosInstance from "@/service/axiosInstance";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const AddCareerForm = ({ setOpen, handleGetCareer, isEditData }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      vacancy: "",
      experience_year: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log("dattta", data);
    if (isEditData?.uuid) {
      setLoading(true);
      try {
        const res = await axiosInstance.put(
          `${process.env.NEXT_PUBLIC_API_BASEURL}/career?id=${isEditData?.uuid}`,
          data
        );
        if (res?.data?.status === 200) {
          setLoading(false);
          handleGetCareer();
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
          `${process.env.NEXT_PUBLIC_API_BASEURL}/career`,
          data
        );
        if (res?.data?.status === 201) {
          setLoading(false);
          handleGetCareer();
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
      setValue("name", isEditData?.name);
      setValue("vacancy", isEditData?.vacancy);
      setValue("experience_year", isEditData?.experience_year);
      // setValue("image" , isEditData?.image)
    }
  }, [isEditData?.uuid]);

  return (
    <form className="bg-white py-4 px-[30px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          {isEditData?.uuid ? "Edit" : "Create"} Career
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

            {/* Vacancy */}
            <Grid item xs={12} md={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Vacancy<span className="text-red-500">*</span>
              </label>
              <Controller
                name="vacancy"
                control={control}
                rules={{
                  required: "Vacancy is required",
                  pattern: {
                    value: /^[0-9]+$/, // Regex for numbers only
                    message: "Only numbers are allowed",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Enter Vacancy"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors?.vacancy && (
                <span className="text-red-500 text-[14px]">
                  {errors.vacancy.message}
                </span>
              )}
            </Grid>

            <Grid item xs={12} md={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Experience<span className="text-red-500">*</span>
              </label>
              <Controller
                name="experience_year"
                control={control}
                rules={{ required: "Experience is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Enter Experience"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors?.experience_year && (
                <span className="text-red-500 text-[14px]">
                  {errors.experience_year.message}
                </span>
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

export default AddCareerForm;
