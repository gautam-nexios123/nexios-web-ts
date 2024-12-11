"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CustomButton from "@/common/CustomButton";
import toast, { Toaster } from "react-hot-toast";
import { validateEmail } from "@/utils";
import axios from "axios";

interface FormDataprops {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataprops>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleError = () => {
    let isValid = false;

    let newErrors: any = {};

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
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_BASEURL}/contact`, formData)
        .then((res) => {
          if (res?.data?.status === 201) {
            toast.success(res?.data?.message);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
            setLoading(false);
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
    <div className="w-[80%] md:w-[70%] lg:w-[70%] bg-white rounded-md shadow py-[60px] px-[40px] mx-auto mt-[30px]">
      <Toaster />
      <div className="mt-3">
        <div className="w-full flex flex-col md:flex-row md:gap-10">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <TextField
              label="First Name"
              name="firstName"
              value={formData?.firstName}
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
              label="Last Name"
              name="lastName"
              value={formData?.lastName}
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
              label="Email ID"
              name="email"
              value={formData?.email}
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
              label="Phone Number"
              value={formData?.phone}
              name="phone"
              onChange={handleOnChange}
              variant="standard"
              fullWidth
            />
          </div>
        </div>

        <div className="mt-10 w-full">
          <textarea
            className="w-full border-b-2 p-2 outline-none"
            name="message"
            value={formData?.message}
            rows={4}
            cols={50}
            placeholder="Type Your Message"
            onChange={handleOnChange}
          ></textarea>
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
  );
};

export default ContactForm;
