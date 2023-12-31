"use client";
import img from "@/assets/images/new/hero-bg.png";
import left from "@/assets/images/new/mobile-app2.gif";
import Consulting from "@/components/consulting";
import Conversation from "@/components/conversation";
import Getintouch from "@/components/getintouch";
import Leadership from "@/components/leadership";
import Mask from "@/components/mask";
import Portfolio from "@/components/portfolio";
import WhatWeOffer from "@/components/whatWeOffer";
import WhoWeAre from "@/components/whoWeAre";
import WhyChooseUs from "@/components/whyChooseUs";
import { Box, easing } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Setusapart from "./dashboard/components/Setusapart";
import Testominal from "./dashboard/components/testominal";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  });
  AOS.refresh();

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <div
        id="home"
        data-aos="fade-left"
        className="relative w-full h-[100vh] "
      >
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
          <div className="flex items-center gap-10 md:gap-0 flex-col sm:flex-row justify-center  mt-40 w-[75%] m-auto">
            <div>
              <div className="grid grid-cols-1 ">
                <h1 className="text-black font-extrabold !text-[20px] sm:!text-[30px] lg:!text-[58px] text-Montserrat lg:text-5xl text-4xl lg:leading-normal leading-normal mb-7 position-relative">
                  We offer Digital Solutions <br /> That Empower Businesses and
                  Individuals.
                  <span
                    className="typewrite relative text-type-element"
                    id="typed"
                    data-period="2000"
                    data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
                  ></span>
                </h1>
                <p className="text-[#737373] text-[20px] lg:text-[30px]  mb-0 max-w-2xl text-lg">
                  We deliver software services tailored to meet your unique
                  needs and to transform your businesses digitally.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="relative mt-10 ">
                  <Link
                    href="#"
                    className="w-[130px] text-xs sm:text-base sm:w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#F1F5FD] text-[#ffffff] hover:text-[#00A0C1] pt-4 sm:pt-[12px] hover:border-[#00A0C1]  rounded-full"
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
      <Setusapart />
      <WhatWeOffer />
      <Portfolio />
      <Leadership />
      <WhyChooseUs />
      {/* <PracticeAdvise /> */}
      {/* <Providing /> */}
      <Mask />
      <Testominal />
      <Getintouch />
      <Conversation />
      <Consulting />
    </Box>
  );
}
