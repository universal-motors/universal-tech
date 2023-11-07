import BagIcon from "@/assets/svgs/bag";
import DigitalIcon from "@/assets/svgs/digital";
import FirmIcon from "@/assets/svgs/firmIcon";
import React from "react";

export default function DigitelDiv() {
  return (
    <div className="flex flex-wrap flex-row gap-y-9 mt-[180px]  m-auto  w-[85%] md:w-[95%] justify-center">
      <div className="bg-[rgb(255,255,255)] w-[328px] h-[210px] mr-[0px] sm:mr-[40px] flex flex-col  justify-center  pl-[40px] shadow-xl">
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
      <div className="bg-[#FFFFFF] w-[328px] h-[210px] mr-[0px] sm:mr-[40px]  flex flex-col  justify-center pl-[40px] shadow-xl ">
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
      <div className="bg-[#00A0C1] w-[328px] h-[210px] mr-[0px] sm:mr-[40px] flex flex-col  justify-center pl-[40px] shadow-xl">
        <div>
          <DigitalIcon />
        </div>
        <div className="mt-[20px]">
          <h1 className="font-bold text-[24px] text-[#FFFFFF]">
            Digital Marketing
          </h1>
        </div>
        <div>
          <p className="text-[14px] text-[#FFFFFF]">
            the quick fox jumps over the <br />
            lazy dog
          </p>
        </div>
      </div>
    </div>
  );
}
