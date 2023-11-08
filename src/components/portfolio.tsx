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
import bistrochat from "src/assets/images/bistroChat.png";
import WhoWeAre from "@/components/whoWeAre";
import WhatWeOffer from "@/components/whatWeOffer";
import Conversation from "@/components/conversation";

export default function Portfolio() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <div id="portfolio">
        <div>
          <div className="mt-24">
            <div className="text-cyan-500  font-bold text-[18px] flex justify-center mt-5">
              PORTFOLIO
            </div>
            <div className=" text-[28px] sm:text-[30px] md:text-[38px] font-bold flex justify-center text-[#012970]">
              Check our latest work
            </div>
          </div>
          <div className="font-semibold flex justify-center items-center gap-14 mt-10 mb-10">
            <div>
              <button className="rounded-full border w-[70px] h-[40px]  hover:border-cyan-500  hover:text-cyan-500">
                All
              </button>{" "}
            </div>
            <div>
              <button className="rounded-full border w-[70px] h-[40px]  hover:border-cyan-500  hover:text-cyan-500">
                {" "}
                App{" "}
              </button>{" "}
            </div>
            <div>
              {" "}
              <button className="rounded-full border w-[70px] h-[40px] hover:border-cyan-500 hover:text-cyan-500">
                Web
              </button>{" "}
            </div>
          </div>
          <div className="flex-wrap  flex-row flex justify-center items-center m-auto gap-5">
            <div className="flex justify-center items-center m-auto w-[90%] sm:w-[450px] h-[450px] border  ">
              <Image alt="bistroChat" src={bistrochat} />
            </div>
            <div className="w-[90%] sm:w-[450px] m-auto h-[450px] border  ">
              <Image alt="bistroChat" src={bistrochat} />
            </div>
            <div className="w-[90%] sm:w-[450px] m-auto h-[450px] border  ">
              <Image alt="bistroChat" src={bistrochat} />
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-5 mt-5">
            <div className="w-[90%] sm:w-[450px] m-auto h-[450px] border ">
              <Image alt="bistroChat" src={bistrochat} />
            </div>
            <div className="w-[90%] sm:w-[450px] m-auto h-[450px] border ">
              <Image alt="bistroChat" src={bistrochat} />
            </div>
            <div className="w-[90%] sm:w-[450px] m-auto h-[450px] border  ">
              <Image alt="bistroChat" src={bistrochat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
