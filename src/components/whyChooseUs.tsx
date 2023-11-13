import AwardIcon from "@/assets/svg2/award";
import CasesIcon from "@/assets/svg2/cases";
import HappyIcon from "@/assets/svg2/happy";
import ThreeIcon from "@/assets/svg2/three";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div>
      <div className="text-center">
        <div className="font-bold !text-[30px] sm:!text-[40px]  ">
          WHY CHOOSE US
        </div>
        <div className="text-[12px] sm:text-[14px]">
          <div>
            Due to our high-end services, each project highlights our commitment
            to excellence and
          </div>
          <div>showcases the impact of our work to clients worldwide. </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-2 justify-center mt-[50px]">
        <div className="shadow w-[230px] h-[209px] ml-0 sm:ml-[30px]  flex flex-col items-center justify-center">
          <div className="w-[50px] h-[50px]">
            <ThreeIcon />
          </div>
          <div className="font-bold text-[30px] mt-[10px]">3K</div>
          <div className=" text-[16px] text-[#737373] font-bold">
            Satisfied Customers
          </div>
        </div>

        <div className="shadow w-[230px] h-[209px] ml-0 sm:ml-[30px] flex flex-col items-center justify-center ">
          <div>
            <HappyIcon />
          </div>
          <div className="font-bold text-[30px] mt-[10px]">45</div>
          <div className="text-[#737373] text-[16px] font-bold">
            Web Solutions
          </div>
        </div>

        <div className="shadow w-[230px] h-[209px] ml-0 sm:ml-[30px] flex flex-col items-center justify-center">
          <div>
            <AwardIcon />
          </div>
          <div className="font-bold text-[30px] mt-[10px]">12+</div>
          <div className="text-[#737373] font-bold">
            Seamless User Experience
          </div>
        </div>

        <div className="shadow w-[230px] h-[209px] ml-0 sm:ml-[30px] flex flex-col items-center justify-center">
          <div>
            <CasesIcon />
          </div>
          <div className="font-bold text-[30px] mt-[10px]">1.5K</div>
          <div className="text-[#737373] font-bold">Expert Team   </div>
        </div>
      </div>
    </div>
  );
}
