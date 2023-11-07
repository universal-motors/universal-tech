import React from "react";
import img from "@/assets/images/new/hero-bg.png";
import left from "@/assets/images/new/mobile-app2.gif";
import about1 from "@/assets/images/new/responsive.gif";
import Consulting from "@/components/consulting";
import Getintouch from "@/components/getintouch";
import Mask from "@/components/mask";
import PracticeAdvise from "@/components/practiceAdvise";
import Providing from "@/components/providing";
import WhyChooseUs from "@/components/whyChooseUs";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Leadership from "@/components/leadership";
import setUs from "@/assets/images/123.png";
import DoneIcon from "@mui/icons-material/Done";

export default function WhoWeAre() {
  return (
    <div
      id="aboutus"
      className="mt-36 sm:mt-16 flex flex-col xl:flex-row justify-center"
    >
      <div className="bg-[#F6F9FF] flex flex-col m-auto xl:m-0 w-[90%] md:w-[560px] xl:w-auto  justify-center p-[40px]">
        <div className="text-cyan-500 text-[14px] ">
          <h3>WHO WE ARE</h3>
        </div>
        <div className=" !text-[20px] sm:!text-[28px] text-[bold] text-black]">
          <h2>
            Unleashing Digital Brilliance: Meet Our <br /> Web App Wizards
          </h2>
        </div>
        <div>
          At Expertizo, we are a passionate team of web app aficionados on a
          mission <br />
          to redefine digital excellence. With a keen eye for design and a flair
          for <br />
          innovation, we craft powerful and user-centric web applications that
          drive <br />
          growth and elevate brands. Our relentless pursuit of perfection and{" "}
          <br />
          commitment to cutting-edge technologies enable us to create seamless,{" "}
          <br />
          scalable, and secure web experiences. Join us on this digital journey
          and <br />
          unlock the true potential of your online presence. Let's turn your
          ideas into <br />
          reality!
        </div>
      </div>
      <div className="w-[90%] m-auto md:w-[558px] xl:m-0 h-[419px]">
        <Image alt="about1" src={about1} />
      </div>
    </div>
  );
}
