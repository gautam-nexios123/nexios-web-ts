"use client";
import CountingBanner from "@/common/CountingBanner";
import ShedualeCall from "@/components/ShedualeCall";
import topBanner from "../../assets/images/about/top-banner.png";
import TopMainContent from "@/components/About/TopMainContent";
import WelcomeNexios from "@/components/About/WelcomeNexios";
import OurVision from "@/components/About/OurVision";
import CoreValue from "@/components/About/CoreValue";
import MeetOurTeam from "@/components/About/MeetOurTeam";

const About = () => {
  return (
    <div className="">
      <TopMainContent
        text="Powering Businesses with Innovative Technological Solutions, Since
          2015"
        banner={topBanner}
        page="about"
      />
      <WelcomeNexios />
      <OurVision />
      <CoreValue />
      <div className="mb-[70px] mt-[70px]">
        <CountingBanner />
      </div>
      <MeetOurTeam />
      <ShedualeCall />
    </div>
  );
};

export default About;
