import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import "react-quill/dist/quill.snow.css";
import axiosInstance from "@/service/axiosInstance";
import { TransitionProps } from "@mui/material/transitions";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    [{ align: [] }],
    ["clean"],
  ],
};

const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
  "align",
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenModel = ({
  open,
  setOpen,
  handleGetBlogs,
  isEditData,
}: any) => {
  const [selectedImgPreview, setSelectedImgPreview] = useState<any>("");

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      content: "",
      image: null,
      imagePreview: "",
    },
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    typeof data.image !== "string" && formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("html", data.content);

    try {
      const res = isEditData?.uuid
        ? await axiosInstance.put(
            `${process.env.NEXT_PUBLIC_API_BASEURL}/blog?id=${isEditData.uuid}`,
            formData
          )
        : await axiosInstance.post(
            `${process.env.NEXT_PUBLIC_API_BASEURL}/blog`,
            formData
          );

      if (res?.data?.status === 200 || res?.data?.status === 201) {
        handleGetBlogs();
        reset();
        setOpen(false);
      } else {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (event: any) => {
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

  React.useEffect(() => {
    if (isEditData?.uuid) {
      reset({
        title: isEditData?.title || "",
        description: isEditData?.description || "",
        content: isEditData?.html || "",
        image: isEditData?.image || null,
      });
      setSelectedImgPreview(
        `${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${isEditData?.image}`
      );
    } else {
      reset({
        title: "",
        description: "",
        content: "",
        image: null,
      });
      setSelectedImgPreview("");
    }
  }, [isEditData, reset]);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {isEditData?.uuid ? "Edit Blog" : "Add Blog"}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full my-[25px]">
            <div className="w-[80%] mx-auto mb-[25px]">
              <Controller
                name="title"
                control={control}
                rules={{ required: "Title is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Blog Title"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="w-[80%] mx-auto mb-[25px]">
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Blog Description"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                    className="w-full min-h-[200px] border-none focus:ring-0 p-3"
                  ></textarea>
                )}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="w-[80%] mx-auto mb-[25px]">
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
                        // {...field}
                        onChange={(event) => {
                          field.onChange(event); // Update react-hook-form's state
                          handleFileChange(event); // Call your custom handler
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
            </div>
            <div
              style={{
                boxShadow: "0px 4px 8px 0px #00000026",
                borderRadius: "20px",
                border: "1px solid #DDDDDD",
              }}
              className="w-[80%] mx-auto"
            >
              <label className="block text-[17px] font-medium text-gray-700 p-[25px]">
                Write Blog<span className="text-red-500">*</span>
              </label>
              <Controller
                name="content"
                control={control}
                rules={{ required: "Content is required" }}
                render={({ field }) => (
                  <ReactQuill
                    style={{ border: "none" }}
                    {...field}
                    modules={modules}
                    formats={formats}
                    placeholder="Enter your text here..."
                  />
                )}
              />
            </div>
            {errors.content && (
              <p className="text-red-500 text-sm mt-2 w-[80%] mx-auto">
                {errors.content.message}
              </p>
            )}
          </form>
        </List>
      </Dialog>
    </div>
  );
};

export default FullScreenModel;
