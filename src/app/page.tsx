"use client";
import img from "@/assets/images/cover.png";
import BagIcon from "@/assets/svgs/bag";
import DigitalIcon from "@/assets/svgs/digital";
import FirmIcon from "@/assets/svgs/firmIcon";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <div className="relative w-full h-[90vh]">
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
          <div className="grid grid-cols-1 mt-40 ml-40">
            <h1 className="text-black font-extrabold text-[58px] text-Montserrat lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              EMPOWER <br />
              YOUR BUSINESS
              <span
                className="typewrite relative text-type-element"
                id="typed"
                data-period="2000"
                data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
              ></span>
            </h1>
            <p className="text-[#737373] text-[30px]  mb-0 max-w-2xl text-lg">
              we know how large objects will act, <br />
              but thing on a small scale
            </p>
          </div>
          <div className="flex ml-40 gap-6">
            <div className="relative mt-10 ">
              <Link
                href="#"
                className="w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#E7EBEE] hover:text-[#00A0C1] pt-[12px] hover:border-[#00A0C1] text-[#FFFFFF] rounded-full"
              >
                Get Quote Now
              </Link>
            </div>
            <div className="relative mt-10">
              <Link
                href="#"
                className="w-[185px] h-[48px]  btn bg-[#E7EBEE] hover:bg-[#00A0C1] border-[#00A0C1] pt-[12px] hover:text-[#FFFFFF] text-[#00A0C1] rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-[180px]">
            <div className="bg-[#FFFFFF] w-[328px] h-[210px]  mr-[40px] flex flex-col  justify-center  pl-[40px] shadow-xl">
              <div>
                <BagIcon />
              </div>
              <div className="text-[24px] font-bold mt-[20px]">
                <h1>Digital Marketing</h1>
              </div>
              <div>
                <p className="text-[#737373] text-[14px]">
                  We focus on ergonomics and <br />
                  meeting you where you work.
                </p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-[328px] h-[210px] mr-[40px]  flex flex-col  justify-center pl-[40px] shadow-xl ">
              <div>
                <FirmIcon />
              </div>
              <div>
                <h1 className="font-bold text-[24px] mt-[20px]">
                  National top 50 firms
                </h1>
              </div>
              <div>
                <p className="text-[#737373] text-[14px]">
                  Just type what's on your mind <br />
                  and we'll get you there.
                </p>
              </div>
            </div>
            <div className="bg-[#00A0C1] w-[328px] h-[210px]  flex flex-col  justify-center pl-[40px] shadow-xl">
              <div>
                <DigitalIcon />
              </div>
              <div className="mt-[20px]">
                <h1 className="font-bold text-[24px] text-[#FFFFFF]">
                  Digital Marketing
                </h1>
              </div>
              <div>
                <p className="text-[#737373] text-[14px] text-[#FFFFFF]">
                  the quick fox jumps over the <br />
                  lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
