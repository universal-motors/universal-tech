"use client";
import img from "@/assets/images/cover.png";
import AwardIcon from "@/assets/svg2/award";
import CasesIcon from "@/assets/svg2/cases";
import HappyIcon from "@/assets/svg2/happy";
import SourceIcon from "@/assets/svg2/source";
import ThreeIcon from "@/assets/svg2/three";
import BagIcon from "@/assets/svgs/bag";
import DigitalIcon from "@/assets/svgs/digital";
import FirmIcon from "@/assets/svgs/firmIcon";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import img2 from "@/assets/images/organize.png";
import img3 from "@/assets/images/media.png";
import img4 from "@/assets/images/work.png";
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
      <div>
        <div className="text-center">
          <div className="font-bold text-[40px] mt-[50px] ">WHY CHOOSE US</div>
          <div>
            Problems trying to resolve the conflict between the two major realms
          </div>
          <div>of Classical physics: Newtonian mechanics</div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="shadow w-[230px] h-[209px] ml-[30px]  flex flex-col items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <ThreeIcon />
            </div>
            <div className="font-bold text-[30px] mt-[10px]">3K</div>
            <div className=" text-[16px] text-[#737373] font-bold">
              CASES DONE
            </div>
          </div>

          <div className="shadow w-[230px] h-[209px] ml-[30px] flex flex-col items-center justify-center ">
            <div>
              <HappyIcon />
            </div>
            <div className="font-bold text-[30px] mt-[10px]">45</div>
            <div className="text-[#737373] text-[16px] font-bold">
              HAPPY CUSTOMERS
            </div>
          </div>

          <div className="shadow w-[230px] h-[209px] ml-[30px] flex flex-col items-center justify-center">
            <div>
              <AwardIcon />
            </div>
            <div className="font-bold text-[30px] mt-[10px]">12+</div>
            <div className="text-[#737373] font-bold">AWARD WINNING</div>
          </div>

          <div className="shadow w-[230px] h-[209px] ml-[30px] flex flex-col items-center justify-center">
            <div>
              <CasesIcon />
            </div>
            <div className="font-bold text-[30px] mt-[10px]">1.5K</div>
            <div className="text-[#737373] font-bold">CASES DONE</div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[10%]">
        <div className="font-bold text-[40px] mt-[50px]">Practice Advice</div>
        <div>Problems trying to resolve the conflict between</div>
        <div>
          the two major realms of Classical physics: Newtonian mechanics
        </div>
      </div>
      <div className="flex justify-center mt-[90px]">
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

          <div className="">
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
    </Box>
  );
}
