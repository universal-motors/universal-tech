"use client";
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
import WhoWeAre from "@/components/whoWeAre";
import WhatWeOffer from "@/components/whatWeOffer";
import Conversation from "@/components/conversation";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <div id="home" className="relative w-full h-[90vh]">
        <Image
          src={img}
          alt="img"
          style={{
            position: "absolute",
            width: "100%",
            height: "90vh",
            objectFit: "cover",
          }}
        />
        <div className="absolute w-full">
          <div className="flex items-center flex-col gap-10 md:gap-0 md:flex-row justify-center md:justify-between mt-40 w-[75%] m-auto">
            <div>
              <div className="grid grid-cols-1 ">
                <h1 className="text-black font-extrabold text-[30px] sm:text-[58px] text-Montserrat lg:text-5xl text-4xl lg:leading-normal leading-normal mb-7 position-relative">
                  We offer modern solutions <br /> for growing your business
                  <span
                    className="typewrite relative text-type-element"
                    id="typed"
                    data-period="2000"
                    data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
                  ></span>
                </h1>
                <p className="text-[#737373] text-[30px]  mb-0 max-w-2xl text-lg">
                  We help businesses digitally transform, build new products,
                  and accelerate digital teams. Contact Us
                </p>
              </div>
              <div className="flex gap-6">
                <div className="relative mt-10 ">
                  <Link
                    href="#"
                    className="w-[130px] text-xs sm:text-base sm:w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#E7EBEE] text-[#ffffff] hover:text-[#00A0C1] pt-4 sm:pt-[12px] hover:border-[#00A0C1]  rounded-full"
                  >
                    Get Quote Now
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image src={left} alt="my gif" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <WhatWeOffer />
      <div>
        <div className="mt-24">
          <div className="text-cyan-500 font-bold text-[18px] flex justify-center mt-5">
            core values
          </div>
          <div className="!text-[20px] sm:!text-[38px] font-bold flex justify-center text-[#012970] ">
            What Sets Us Apart.
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center m-auto gap-14 mt-5">
          <div className="w-[90%] sm:w-[456px] h-[290px] ">
            <Image alt="setUs" src={setUs} />
          </div>
          <div className="flex  flex-col  items-start ">
            <div className="flex flex-col sm:flex-row justify-center  mt-10 gap-10">
              <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center pl-4">
                <div className="bg-[#d6eaf8] border  rounded   hover:bg-blue-700  mr-3">
                  <DoneIcon
                    sx={{ color: "black", ":hover": { color: "white" } }}
                  />
                </div>

                <div>Innovation</div>
              </div>
              <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center  pl-4 mb-5 sm: mb-5">
                <div className="border  bg-[#c4dbea] rounded  hover:bg-blue-700  mr-3">
                  <DoneIcon
                    sx={{ color: "black", ":hover": { color: "white" } }}
                  />
                </div>
                <div>Commitment</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center mt-5 gap-10">
              <div className=" text-[#012970] text-[18px]  font-semibold shadow  w-64 h-16 flex justify-start items-center pl-4">
                <div className="border bg-[#d6eaf8]  rounded  hover:bg-blue-700 mr-3 ">
                  <DoneIcon
                    sx={{ color: "black", ":hover": { color: "white" } }}
                  />
                </div>
                <div>Goals</div>
              </div>
              <div className=" text-[#012970] text-[18px] font-semibold shadow  w-64 h-16 flex justify-start items-center  pl-4 mb-5 sm: mb-5">
                <div className="border bg-[#d6eaf8] rounded  hover:bg-blue-700 mr-3">
                  <DoneIcon
                    sx={{ color: "black", ":hover": { color: "white" } }}
                  />
                </div>
                <div>Team Work</div>
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row  justify-center mt-5 gap-10">
              <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center  pl-4">
                <div className="border bg-[#d6eaf8] rounded  hover:bg-blue-700 mr-3">
                  <DoneIcon
                    sx={{ color: "black", ":hover": { color: "white" } }}
                  />
                </div>
                <div>Responsibility</div>
              </div>
              <div className=" text-[#012970] text-[18px] font-semibold shadow  w-64 h-16 flex justify-start items-center pl-4 ">
                <div className="border bg-[#d6eaf8] rounded  hover:bg-blue-700 mr-3">
                  <DoneIcon
                    sx={{ color: "black", ":hover": { color: "white" } }}
                  />
                </div>
                <div>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Leadership />
      <WhyChooseUs />
      <PracticeAdvise />
      <Providing />
      <Mask />
      <Getintouch />
      <Conversation />
      <Consulting />
    </Box>
  );
}
