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

export default function Setusapart() {
  return (
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
  );
}
