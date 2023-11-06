import SourceIcon from "@/assets/svg2/source";
import React from "react";
import img3 from "@/assets/images/media.png";
import img2 from "@/assets/images/organize.png";
import img4 from "@/assets/images/work.png";
import Image from "next/image";

export default function PracticeAdvise() {
  return (
    <div>
      <div className="text-center mt-12">
        <div className="font-bold text-[40px] mt-24">Practice Advice</div>
        <div>Problems trying to resolve the conflict between</div>
        <div>
          the two major realms of Classical physics: Newtonian mechanics
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-[90px]">
        <div className="ml-[30px] sm:mb-5">
          <div className="shadow-lg w-[232px] h-[220px]">
            <div className="font-bold text-[16] ml-[30px] mt-[30px]">
              A single source <br />
              of truth
            </div>
            <div className="text-[14px] font-medium  ml-[30px] mt-[30px] text-[#737373]">
              Newton thought that <br />
              light was made up of <br />
              particles, but then it <br />
              was discovered
            </div>
          </div>

          <div>
            <SourceIcon />
          </div>
        </div>
        <div className=" ml-[30px] sm:mb-5">
          <div className="shadow-lg w-[232px] h-[203px] ">
            <div className="font-bold text-[16px] ml-[30px] mt-[30px] ">
              Fastest way to <br />
              organize
            </div>
            <div className="text-[14px]  ml-[30px] mt-[50px] text-[#737373]">
              “Quantum mechanics” <br />
              is the description of the <br />
              behaviour of matter
            </div>
          </div>
          <div>
            <Image alt="img2" src={img2} />
          </div>
        </div>

        <div className=" ml-[30px] sm:mb-5">
          <div className="shadow-lg w-[232px] h-[203px]">
            <div className="font-bold text-[16px] ml-[30px] mt-[30px]">
              Fastest way to <br />
              take action
            </div>
            <div className="text-[14px]  ml-[30px] mt-[50px] text-[#737373]">
              They describe a <br />
              universe consisting of <br />
              bodies moving
            </div>
          </div>
          <div>
            <Image alt="alt1" src={img3} />
          </div>
        </div>
        <div className="ml-[30px]">
          <div className="shadow-lg w-[232px] h-[203px]  ">
            <div className="font-bold text-[16px] ml-[30px] mt-[30px]">
              Work better <br />
              together
            </div>
            <div className=" text-[14px] ml-[30px] mt-[50px] text-[#737373]">
              They finally obtained <br />
              a consistent description <br />
              of the behaviour
            </div>
          </div>
          <div>
            <Image alt="img" src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}
