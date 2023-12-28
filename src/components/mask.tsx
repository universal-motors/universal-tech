import Awsicon from "@/assets/svgs/aws";
import HooliIcon from "@/assets/svgs/hooli";
import LeaveIcon from "@/assets/svgs/leave";
import LyftIcon from "@/assets/svgs/lyft";
import MaskIcon from "@/assets/svgs/mask";
import StripeIcon from "@/assets/svgs/stripe";
import React, { useEffect } from "react";
import AOS from "aos";

export default function Mask() {
  // useEffect(() => {
  //   AOS.init({ duration: 1200 })
  // })
  AOS.refresh();
  return (
    <div className="bg-[#FAFAFA] flex-wrap mt-20 ">
      <div
        data-aos="fade-left"
        className="bg-[#FAFAFA] w-[1440] h-[339] ml-0   flex-col sm:flex-row flex justify-evenly items-center flex-wrap gap-5"
      >
        <div className="mt-20 mb-20">
          <HooliIcon />
        </div>
        <div className="mt-20 mb-20">
          <LyftIcon />
        </div>
        <div className="mt-20 mb-20">
          <LeaveIcon />
        </div>
        <div className="mt-20 mb-20">
          <StripeIcon />
        </div>
        <div className="mt-20 mb-20">
          <Awsicon />
        </div>
        <div className="mt-20 mb-20">
          <MaskIcon />
        </div>
      </div>
      {/* <div className="relative w-full h-[300px]">
        <div className="flex justify-center h-[100px] flex-wrap bg-none xl:bg-[#252B42] mt-20 absolute bottom-0 w-full"></div>
        <div className="absolute bottom-14 w-full flex-wrap justify-start flex lg:justify-center">
          <div className="bg-[#16697A] m-auto w-[320px] sm:w-[500px] md:w-[70%] h-[220px] sm:h-[220px] md:h-[200px] lg:h-[180px] xl:h-[124px] flex-wrap flex justify-between pt-6 pl-10 pr-10  ">
            <div>
              <h1 className="font-bold text-[24px] text-[#FFFFFF]">
                Subscribe For Latest <br />
                Newsletter
              </h1>
            </div>
            <div className="flex border-[1px]  sm:w-[450px] rounded-[5px] h-[58px]">
              <div>
                <input
                  type="text"
                  placeholder="YOUR EMAIL"
                  className="text-[14px] w-[200px] sm:w-[333px] h-[58px] font-normal pl-5"
                />
              </div>
              <div>
                <button className="w-[70px] text-xs sm:text-base sm:w-[117px] h-[58px] text-[#ffffff]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
