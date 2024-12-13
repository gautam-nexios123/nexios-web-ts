"use client";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-bg relative w-full pt-[50px] md:pt-[70px] pb-[80px]">
      <div className="main-container relative">
        <h2 className="text-center pb-3 text-[#9BA9B4] font-MuseoSans font-semibold text-[24px]">
          Contact Us
        </h2>
        <h1 className="text-center pb-6 text-[#121212] font-MuseoSans font-semibold text-[28px]">
          Lets Get In Touch Now
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
