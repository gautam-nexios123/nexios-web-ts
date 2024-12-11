import axiosInstance from "@/service/axiosInstance";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CancelIcon from "@mui/icons-material/Cancel";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    [{ size: ["small", false, "large", "huge"] }], // Font size dropdown
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    // ["link", "image"],
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
  // "image",
  "align",
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImg, setSelectedImg] = useState<any>("");
  const [selectedImgPreview, setSelectedImgPreview] = useState<any>(null);
  const [errors, setErrors] = useState<{
    title?: string;
    content?: string;
    image?: string;
  }>({});

  const handleChange = (value: any) => {
    setContent(value);
    setErrors({ ...errors, content: "" });
  };

  const handleFileChnage = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImg(file); // Store the file
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImgPreview(reader.result as string); // Set preview URL
      };
      reader.readAsDataURL(file);
      setErrors({ ...errors, image: "" });
    } else {
      setSelectedImg(null);
      setSelectedImgPreview(null);
    }
  };

  const removeImage = () => {
    setSelectedImg(null);
    setSelectedImgPreview(null);
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!content.trim()) {
      newErrors.content = "Content is required";
    }
    if (!selectedImgPreview) {
      newErrors.image = "Image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async () => {
    const payload = {
      title: title,
      html: content,
      image : selectedImgPreview
    };
    if (validateForm()) {
      if (isEditData?.uuid) {
        try {
          const res = await axiosInstance.put(
            `${process.env.NEXT_PUBLIC_API_BASEURL}/blog?id=${isEditData?.uuid}`,
            payload
          );
          if (res?.data?.status === 200) {
            handleGetBlogs();
            setContent("");
            setTitle("");
            setOpen(false);
          } else {
            console.log(res?.data?.message);
          }
        } catch (err) {
          console.error(err);
        } finally {
          // setLoading(false);
        }
      } else {
        try {
          const res = await axiosInstance.post(
            `${process.env.NEXT_PUBLIC_API_BASEURL}/blog`,
            payload
          );
          if (res?.data?.status === 201) {
            handleGetBlogs();
            setContent("");
            setTitle("");
            setOpen(false);
          } else {
            console.log(res?.data?.message);
          }
        } catch (err) {
          console.error(err);
        } finally {
          // setLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    if (isEditData?.uuid) {
      setTitle(isEditData?.title);
      setContent(isEditData?.html);
    }
  }, [isEditData?.uuid]);

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
            <Button autoFocus color="inherit" onClick={() => onSubmit()}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <div className="w-full my-[25px]">
            <div className="w-[80%] mx-auto mb-[25px]">
              <input
                name="title"
                type="text"
                value={title}
                className="mt-1 block w-full rounded-md p-3"
                placeholder="Enter Title"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setErrors({ ...errors, title: "" });
                }}
              />
              {errors?.title && (
                <p className="text-red-500 text-sm mt-2">{errors?.title}</p>
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
                <>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(event) => {
                      handleFileChnage(event); // Call your custom handler
                    }}
                    className="w-full block my-2 p-2 cursor-pointer border border-gray-300 rounded bg-gray-100"
                  />

                  {errors?.image && (
                    <p className="text-red-500 text-sm mt-2">{errors?.image}</p>
                  )}
                </>
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
                Description<span className="text-red-500">*</span>
              </label>

              <ReactQuill
                style={{ border: "none" }}
                value={content}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                placeholder="Enter your text here..."
              />
            </div>
            {errors?.content && (
              <p className="text-red-500 text-sm mt-2 w-[80%] mx-auto">
                {errors?.content}
              </p>
            )}
          </div>
        </List>
      </Dialog>
    </div>
  );
};

export default FullScreenModel;
