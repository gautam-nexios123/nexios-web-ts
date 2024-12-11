"use client";
import React, { useState } from "react";
import Logo from "../../../../assets/images/Logo.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
  
      if (response.status === 200) {
        toast.success(response?.data?.message);
        setTimeout(() => {
          router.push("/admin/dashboard/clientReview");
        }, 500);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex sm:flex-row flex-col items-center justify-center">
      {/* Left section - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center flex justify-center mb-6">
            <Image
              src={Logo}
              style={{ width: "150px", height: "170px" }}
              alt="logo"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-[#D3A99C] mb-4">
            Log In
          </h2>

          <form>
            {/* Email Input */}
            <div className="mb-4">
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:ring-[#D3A99C]"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mb-6 ">
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 mt-2 border shadow-md rounded-lg focus:outline-none focus:ring focus:ring-[#D3A99C]"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
              }}
              className="w-full py-3  text-white shadow-md rounded-lg hover:bg-[#D3A99C] transition-colors"
              onClick={(e) => handleLogin(e)}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
