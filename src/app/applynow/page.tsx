"use client";
import React, { useRef, useState } from "react";
import TopBanner from "../../assets/images/career/career-banner.svg";
import CareerTopMain from "@/components/Career/CareerTopMain";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import CustomButton from "@/common/CustomButton";
import { validateEmail } from "@/utils";
import axios from "axios";

interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
}

const ApplyNow = () => {
  const fileInputRef = useRef<any>(null);
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [error, setError] = useState<Record<string, string>>({});
  const [file, setFile] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleError = () => {
    let isValid = false;

    let newErrors: Record<string, string> = {};

    if (!formData?.firstName) {
      newErrors.firstName = "Please fill out this field.";
      isValid = true;
    }
    if (!formData?.lastName) {
      newErrors.lastName = "Please fill out this field.";
      isValid = true;
    }
    if (!formData?.email) {
      newErrors.email = "Please fill out this field.";
      isValid = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter correct email !";
      isValid = true;
    }

    if (!file) {
      newErrors.file = "Please attach your resume.";
      isValid = true;
    }

    setError(newErrors);
    return isValid;
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const formSubmit = async () => {
    if (!handleError()) {
      setLoading(false);

      const apiFormData = new FormData();
      apiFormData.append("firstName", formData?.firstName);
      apiFormData.append("lastName", formData?.lastName);
      apiFormData.append("email", formData?.email);
      apiFormData.append("phone", formData?.phone);
      apiFormData.append("subject", formData?.subject);
      apiFormData.append("file", file);

      await axios
        .post(`${process.env.NEXT_PUBLIC_API_BASEURL}/apply`, apiFormData)
        .then((res) => {
          console.log('res: ', res);
          if (res?.data?.status === 201) {
            toast.success(res?.data?.message);
            setLoading(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              subject: "",
            });
            setFile("");
            fileInputRef.current.value = "";
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-full relative">
      <Toaster />
      <CareerTopMain
        text="Join Our Team"
        description="We attract the accurate kind of people like us with Creative Minds and Committed to their Dreams. We offer you to start a transcendent career by joining Webvolty IT Solution."
        banner={TopBanner}
      />
      <div className="bg-[#EDF5FF] w-full py-[100px]">
        <div className="main-container w-[80%] lg:w-[50%] xl:w-[40%] bg-white rounded-md shadow p-[35px] mx-auto">
          <div className="font-MuseoSans font-semibold text-[#121212] text-[30px]">
            Apply Now
          </div>
          <div className="mt-3">
            <div className="w-full flex flex-col md:flex-row md:gap-10">
              <div className="w-full md:w-[50%] mb-4 md:mb-0">
                <TextField
                  value={formData.firstName}
                  label="First Name"
                  name="firstName"
                  onChange={handleOnChange}
                  variant="standard"
                  fullWidth
                />
                {error?.firstName && (
                  <div className="font-MuseoSans font-light text-red-600 text-sm">
                    {error?.firstName}
                  </div>
                )}
              </div>
              <div className="w-full md:w-[50%] mb-4 md:mb-0">
                <TextField
                  value={formData.lastName}
                  label="Last Name"
                  name="lastName"
                  onChange={handleOnChange}
                  variant="standard"
                  fullWidth
                />
                {error?.lastName && (
                  <div className="font-MuseoSans font-light text-red-600 text-sm">
                    {error?.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row md:gap-10 md:mt-6">
              <div className="w-full md:w-[50%] mb-4 md:mb-0">
                <TextField
                  value={formData.email}
                  label="Email ID"
                  name="email"
                  onChange={handleOnChange}
                  variant="standard"
                  fullWidth
                />
                {error?.email && (
                  <div className="font-MuseoSans font-light text-red-600 text-sm">
                    {error?.email}
                  </div>
                )}
              </div>
              <div className="w-full md:w-[50%] mb-4 md:mb-0">
                <TextField
                  value={formData.phone}
                  type="number"
                  label="Phone Number"
                  name="phone"
                  onChange={handleOnChange}
                  variant="standard"
                  fullWidth
                />
              </div>
            </div>
            <div className="md:mt-6 mb-4 md:mb-0">
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Subject
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formData?.subject}
                  onChange={handleOnChange}
                  label="Subject"
                  name="subject"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Laravel Developer"}>
                    Laravel Developer
                  </MenuItem>
                  <MenuItem value={"Android Developer"}>
                    Android Developer
                  </MenuItem>
                  <MenuItem value={"IOS Developer"}>IOS Developer</MenuItem>
                  <MenuItem value={"React Developer"}>React Developer</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mt-9 mb-4 md:mb-0">
              <div className="font-MuseoSans font-light text-[#9BA9B4] text-[16px] pb-2">
                Attach resume (required)
              </div>
              <div className="w-full mb-4 md:mb-0">
                <input
                  type="file"
                  name="file"
                  ref={fileInputRef}
                  accept="application/pdf"
                  onChange={(e: any) => {
                    setFile(e.target.files[0]);
                    setError({ ...error, file: "" });
                  }}
                  className="w-full border-b border-black "
                />
                {error?.file && (
                  <div className="font-MuseoSans font-light text-red-600 text-sm">
                    {error?.file}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10">
              <CustomButton
                onSubmitButton={() => formSubmit()}
                bgColor="#399EFD"
                textColor="white"
                btnWidth="150px"
                text="Submit Now"
                process={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
