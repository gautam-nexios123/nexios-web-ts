"use client";
import React from "react";
import logo from "../../assets/images/footer-Logo.svg";
import fbImg from "../../assets/images/facebook.svg";
import instagramImg from "../../assets/images/instagram.svg";
import linkDinIcon from "../../assets/images/icons8-linkedin.svg";

import locationImg from "../../assets/images/location.svg";
import phoneImg from "../../assets/images/phone.svg";
import mailImg from "../../assets/images/mail.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  return (
    <div className="w-full bg-[#1B1C30] mt-auto">
      <div className="main-container px-[40px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-[40px] lg:gap-[60px] py-12">
          <div className="">
            <Image src={logo} alt="logo" className="w-[180px] h-[44px] mb-4" />
            <div className="font-MuseoSans text-justify font-light text-[18px] leading-[30px] text-[#9BA9B4] mb-10 lg:w-[80%]">
              nexios allows businesses to narrow the technology gap in their
              organization and get a competitive edge through innovative
              software development solutions tailored to their goals.
            </div>
            <div className="flex items-center gap-6">
              <Image
                src={fbImg}
                alt="fbImg"
                className="w-[25px] h-[25px] cursor-pointer"
              />
              <Image
                src={instagramImg}
                alt="instagramImg"
                className="w-[25px] h-[25px] cursor-pointer"
              />
              <a
                href="https://www.linkedin.com/company/nexiostechnologies/"
                target="_blank"
              >
                <Image
                  src={linkDinIcon}
                  alt="linkDinIcon"
                  className="w-[30px] h-[30px] cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="text-white font-MuseoSans font-medium text-[17px] pb-4">
              Company
            </div>
            <NavItem path={"/"}>Home</NavItem>
            <NavItem path={"/about-us"}>About Us</NavItem>
            <NavItem path={"/portfolio"}>Portfolio</NavItem>
            <NavItem path={"/career"}>Careers</NavItem>
            <NavItem path={"/blog"}>Blog</NavItem>
            <NavItem path={"/contact-us"}>Contact Us</NavItem>
          </div>
          <div className="">
            <div className="text-white font-MuseoSans font-medium text-[17px] pb-4">
              Services
            </div>
            <NavItem path={"/mobile-app-development"}>
              Mobile App Development
            </NavItem>
            <NavItem path={"/web-development"}>Web Development</NavItem>
            <NavItem path={"/ui-ux"}>UI & UX</NavItem>
            <NavItem path={"/internet-of-things"}>Internet Of Things</NavItem>
            <NavItem path={"/qa"}>Quality Assurance</NavItem>
          </div>
          <div className="">
            <div className="text-white font-MuseoSans font-medium text-[17px] pb-4">
              Get In Touch
            </div>
            <div className="font-MuseoSans flex items-start gap-2 font-light text-[17px] text-[#9BA9B4] pb-4">
              <Image src={locationImg} alt="location" className="mt-1" />
              707, Silver Trade Center, near Oxygen Park, Digital Valley
              (Uttran), Surat, Gujarat 394105
            </div>
            <div className="font-MuseoSans flex items-start gap-2 font-light text-[17px] text-[#9BA9B4] pb-4">
              <Image src={locationImg} alt="location" className="mt-1" />
              107-108, Royal Square, VIP Cir, near Petrol Pump, Uttran, Surat,
              Gujarat 394105
            </div>
            <div className="font-MuseoSans flex items-center hover:text-[#399EFD] cursor-pointer gap-2 font-light text-[16px] text-[#9BA9B4] pb-4">
              <Image src={phoneImg} alt="phoneImg" />
              <a href="tel:+918866856039">+91 88668 56039</a>
            </div>
            <div className="font-MuseoSans hover:text-[#399EFD] cursor-pointer flex items-center gap-2 font-light text-[16px] text-[#9BA9B4]">
              <Image src={mailImg} alt="mailImg" />
              <a href="mailto:info@nexios.in">info@nexios.in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#9BA9B4]"></div>
      <div className="text-[#9BA9B4] font-MuseoSans font-light text-[14px] text-center py-4">
        ©2024 nexios technologies, | All right reserved Terms of Services |
        Privacy Policy
      </div>
    </div>
  );
};

export default Footer;

interface NavItemProps {
  path: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ path, children }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(path)}
      className="font-MuseoSans whitespace-nowrap font-light text-[18px] hover:text-[#399EFD] cursor-pointer text-[#9BA9B4] pb-3"
    >
      {children}
    </div>
  );
};
