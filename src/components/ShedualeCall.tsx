"use client";
import Image from "next/image";
import logo from "../assets/images/shedule-call.svg";
import CustomButton from "@/common/CustomButton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { validateEmail } from "@/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  brief: string;
}

const ShedualeCall = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    brief: "",
  });
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleError = () => {
    let isValid: boolean = false;

    let newErrors: Record<string, string> = {};

    if (!formData?.name) {
      newErrors.name = "Name is required*";
      isValid = true;
    }
    if (!formData?.email) {
      newErrors.email = "Email is required*";
      isValid = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter correct email !";
      isValid = true;
    }

    if (!formData?.phone) {
      newErrors.phone = "Phone is required*";
      isValid = true;
    }
    setError(newErrors);
    return isValid;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const formSubmit = async () => {
    if (!handleError()) {
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_BASEURL}/schedule`, formData)
        .then((res) => {
          if (res?.data?.status === 201) {
            toast.success(res?.data?.message);
            setLoading(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              brief: "",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-full md:flex">
      <Toaster />
      <div className="w-full md:w-[50%] flex items-center justify-center py-[50px]">
        <Image
          src={logo}
          alt="24hour_logo"
          className="mx-auto w-[520px] h-[450px]"
        />
      </div>
      <div className="bg-[#399EFD] w-full md:w-[50%] pl-6 pt-12">
        <div className="text-[#FFFFFF] font-MuseoSans font-semibold underline text-[42px] pb-8">
          Schedule a Call
        </div>
        <div className="w-[100%]">
          <div className="mb-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name*"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[16px] font-light border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            />
            {error?.name && (
              <div className="font-MuseoSans font-light text-red-600 text-[18px]">
                {error?.name}
              </div>
            )}
          </div>
          <div className="mb-8">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Work Email"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[16px] font-light border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
              required
            />
            {error?.email && (
              <div className="font-MuseoSans font-light text-red-600 text-[18px]">
                {error?.email}
              </div>
            )}
          </div>
          <div className="mb-8">
            <input
              type="number"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[16px] font-light border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            />
            {error?.phone && (
              <div className="font-MuseoSans font-light text-red-600 text-[18px]">
                {error?.phone}
              </div>
            )}
          </div>
          <div className="mb-2">
            {/* <input
              type="text"
              name="brief"
              value={formData.brief}
              placeholder="Share your requirements in brief"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[16px] font-light border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            /> */}
            <textarea
              name="brief"
              value={formData.brief}
              placeholder="Share your requirements in brief"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[16px] font-light border-b outline-none placeholder-white p-2"
              onChange={(e: any) => handleOnChange(e)}
            />
          </div>
          <div className="pt-4 pb-11">
            <CustomButton
              onSubmitButton={formSubmit}
              bgColor="#FFFF"
              textColor="#399EFD"
              btnWidth="120px"
              text="SUBMIT"
              process={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShedualeCall;
