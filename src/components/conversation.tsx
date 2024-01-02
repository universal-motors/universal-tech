import React, { useRef } from "react";
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
import { useEffect } from "react";
import AOS from "aos";

export default function Conversation() {
  // function onSubmit(e: { preventDefault: () => void; stopPropagation: () => void; }) {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   fetch("https://formcarry.com/s/NBLpgGBQ0L", {
  //     method: 'POST',
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ name, email, message })
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response.code === 200) {
  //         alert("We received your submission, thank you!");
  //       }
  //       else if (response.code === 422) {
  //         // Field validation failed
  //         setError(response.message)
  //       }
  //       else {
  //         // other error from formcarry
  //         setError(response.message)
  //       }
  //     })
  //     .catch(error => {
  //       // request related error.
  //       setError(error.message ? error.message : error);
  //     });
  // }
  AOS.refresh();
  return (
    <div id="contactus" className="mt-10 m-auto w-[90%] mb-10">
      <div className="text-center">
        <div className="text-[#00A0C1] font-bold">CONTACT</div>
        <div className="text-black text-[25px] sm:text-[38px] font-bold">
          Let's start a conversation
        </div>
      </div>
      <div className="flex flex-col xl:flex-row  justify-center items-center m-auto ">
        <div data-aos="fade-right">
          <div className="flex flex-col sm:flex-row justify-center gap-4 m-auto items-center">
            <div className="bg-[#FAFBFF] w-[306px] h-[201px]  flex flex-col justify-center ">
              <div>
                <PlaceIcon sx={{ fontSize: "70px", color: "#00A0C1" }} />
              </div>
              <div className="ml-5 mt-5">
                <div className="text-[#00A0C1] font-bold text-[14px] sm:text-[20px]">
                  Address
                </div>
                <div className="text-[12px] sm:text-[14px] text-[#444444]">
                  Suit 109 & 110 Mezzanine Floor, Maqbool Heights
                  Gulshan-e-Iqbal, Block 10, Nipa Chowrangi
                </div>
                <div className="text-[12px] sm:text-[14px]">
                  Karachi, Pakistan
                </div>
              </div>
            </div>
            <div className="bg-[#FAFBFF] w-[306px] animate__animated animate__bounceInDown h-[201px] flex flex-col justify-center ">
              <div className="ml-5">
                <AccessTimeIcon sx={{ fontSize: "50px", color: "#00A0C1" }} />
              </div>
              <div className="ml-5 mt-5">
                <div className="text-[#00A0C1] font-bold text-[14px] sm:text-[20px]">
                  Open Hours
                </div>
                <div className="text-[#444444] text-[12px] sm:text-[14px]">
                  Monday - Friday
                </div>
                <div className="text-[#444444] text-[12px] sm:text-[14px]">
                  9:30AM-10:00PM
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  justify-center gap-4 items-center m-auto mt-3">
            <div className="bg-[#FAFBFF] w-[306px] h-[201px] animate__animated animate__bounceInLeft flex flex-col justify-center ">
              <div className="ml-5">
                <MailOutlineIcon sx={{ fontSize: "50px", color: "#00A0C1" }} />
              </div>
              <div className="ml-5 mt-5">
                <div className="text-[#00A0C1] font-bold text-[14px] sm:text-[20px]]">
                  Email Us
                </div>
                <div className="text-[#444444] text-[12px] sm:text-[14px]">
                  hrpk@universalmotorsltd.com
                </div>
              </div>
            </div>
            <div className="bg-[#FAFBFF] w-[306px] h-[201px] animate__animated animate__bounceInUp flex flex-col justify-center ">
              <div className="ml-5">
                <PhoneIcon sx={{ fontSize: "50px", color: "#00A0C1" }} />
              </div>
              <div className="ml-5 mt-5">
                <div className="text-[#00A0C1] font-bold text-[14px] sm:text-[20px]">
                  Contact
                </div>
                <div className="text-[#444444] text-[12px] sm:text-[14px]">
                  03373244955
                </div>
                <div className="text-[#444444] text-[12px] sm:text-[14px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="ml-0 xl:ml-5 bg-[#FAFBFF] w-[90%]  md:w-[636px] h-[426px] pt-6 md:pt-0 mt-12 xl:mt-0 flex flex-col justify-center items-center  "
        >
          <form
            action="https://formcarry.com/s/NBLpgGBQ0L"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="text-center">
              <div className="flex w-full flex-col md:flex-row gap-5 ">
                <div>
                  <input
                    id="fc-generated-1-name"
                    name="name"
                    className="w-[90%] sm:w-[276px] h-[43px] border pl-5 text-[14px]"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    id="fc-generated-1-email"
                    className="w-[90%] sm:w-[276px] h-[43px] border pl-5 text-[14px]"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <input
                  className="w-[90%] sm:w-[276px] md:w-[576px] h-[43px] border pl-5 text-[14px]"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label>
                  <textarea
                    id="fc-generated-1-message"
                    className="border w-[163px] sm:w-[276px]  md:w-[576px] h-[152px] mr-5 sm:mr-0 sm:m-0 pl-5 pt-3 text-[14px]"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="border  w-[166px] h-[44px] rounded bg-[#00A0C1] hover:bg-[#16697A]  hover:border-[#00A0C1] text-[#ffffff]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
