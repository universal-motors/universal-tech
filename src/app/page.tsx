"use client";
import image from "@/assets/images/card-item.png";
import img from "@/assets/images/cover.png";
import img3 from "@/assets/images/media.png";
import img2 from "@/assets/images/organize.png";
import img4 from "@/assets/images/work.png";
import AwardIcon from "@/assets/svg2/award";
import CasesIcon from "@/assets/svg2/cases";
import HappyIcon from "@/assets/svg2/happy";
import SourceIcon from "@/assets/svg2/source";
import ThreeIcon from "@/assets/svg2/three";
import Awsicon from "@/assets/svgs/aws";
import BagIcon from "@/assets/svgs/bag";
import CallIcon from "@/assets/svgs/call";
import DigitalIcon from "@/assets/svgs/digital";
import FacebookIcon from "@/assets/svgs/facebook";
import FirmIcon from "@/assets/svgs/firmIcon";
import HooliIcon from "@/assets/svgs/hooli";
import InstagramIcon from "@/assets/svgs/instagram";
import LeaveIcon from "@/assets/svgs/leave";
import LocationIcon from "@/assets/svgs/location";
import Location2Icon from "@/assets/svgs/location2";
import LyftIcon from "@/assets/svgs/lyft";
import MaskIcon from "@/assets/svgs/mask";
import PhoneIcon from "@/assets/svgs/phone";
import QuickIcon from "@/assets/svgs/quick";
import Quick2Icon from "@/assets/svgs/quick2";
import StripeIcon from "@/assets/svgs/stripe";
import TweetIcon from "@/assets/svgs/tweet";
import Tweeter2Icon from "@/assets/svgs/tweeter2";
import Tweeter3Icon from "@/assets/svgs/tweeter3";
import YoutubeIcon from "@/assets/svgs/youtube";
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
          <div className="grid grid-cols-1 mt-40 ml-[50px] md:ml-40">
            <h1 className="text-black font-extrabold text-[30px] sm:text-[58px] text-Montserrat lg:text-5xl text-4xl lg:leading-normal leading-normal mb-7 position-relative">
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
          <div className="flex ml-[50px] md:ml-40 gap-6">
            <div className="relative mt-10 ">
              <Link
                href="#"
                className="w-[140px] text-xs sm:text-base sm:w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#E7EBEE] hover:text-[#00A0C1] pt-[12px] hover:border-[#00A0C1] text-white rounded-full"
              >
                Get Quote Now
              </Link>
            </div>
            <div className="relative mt-10">
              <Link
                href="#"
                className="w-[140px] text-xs sm:text-base sm:w-[185px] h-[48px]  btn bg-[#E7EBEE] hover:bg-[#00A0C1] border-[#00A0C1] pt-[12px] hover:text-[#FFFFFF] text-[#00A0C1] rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap flex-row gap-y-9 mt-[180px] ml-14 sm:ml-24 md:ml-1 w-[90%] justify-center">
            <div className="bg-[rgb(255,255,255)] w-[328px] h-[210px]  mr-[40px] flex flex-col  justify-center  pl-[40px] shadow-xl">
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
            <div className="bg-[#00A0C1] w-[328px] h-[210px] mr-[40px] flex flex-col  justify-center pl-[40px] shadow-xl">
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
        </div>
      </div>
      <div>
        <div className="text-center">
          <div className="font-bold text-[40px]  mt-[750px] xl:mt-20 ">
            WHY CHOOSE US
          </div>
          <div>
            Problems trying to resolve the conflict between the two major realms
          </div>
          <div>of Classical physics: Newtonian mechanics</div>
        </div>
        <div className="flex flex-wrap justify-center mt-[50px]">
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

      <div className="text-center mt-12">
        <div className="font-bold text-[40px] mt-[50px]">Practice Advice</div>
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

      <div className="mt-[300px]">
        <div className="text-center">
          <div className="text-[40px] font-bold ">
            <h2>
              We are providing best <br />
              business service.
            </h2>
          </div>
          <div>
            <p className="text-[#737373] text-[14px] font-medium mt-5">
              Problems trying to resolve the conflict between the two major
              realms <br />
              of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="flex-col lg:flex items-center justify-center lg:flex-row w-full">
          <div className="   w-[90%] sm:w-[597px] h-[442px] mt-14 m-auto">
            <Image className=" sm:w-[100%] sm:h-[100%]" alt="img" src={image} />
          </div>
          <div className="mt-14 ml-10 lg:ml-1">
            <div className="text-[40px] font-bold">
              <h2>
                Most trusted in <br />
                our field
              </h2>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#737373] mt-5">
                Most calendars are designed for teams. Slate <br />
                is designed for freelancers who want a <br />
                simple way to plan their schedule.
              </p>
            </div>
            <div className="flex mt-10">
              <div>
                <QuickIcon />
              </div>
              <div>
                <h5 className="font-bold ml-3">
                  the quick fox jumps over the lazy <br />
                  dog
                </h5>
              </div>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#737373] ml-10 mt-2">
                Things on a very small scale ...
              </p>
            </div>
            <div className="flex mt-10">
              <div>
                <Quick2Icon />
              </div>
              <div>
                <h5 className="font-bold ml-3">
                  the quick fox jumps over the lazy <br />
                  dog
                </h5>
              </div>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#737373] ml-10 mt-2">
                Things on a very small scale ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex-wrap mt-20">
        <div className="bg-[#FAFAFA] w-[1440] h-[339] ml-[45%] md:ml-0.5 flex-row md:flex justify-evenly flex-wrap gap-5">
          <div className="mt-20">
            <HooliIcon />
          </div>
          <div className="mt-20">
            <LyftIcon />
          </div>
          <div className="mt-20">
            <LeaveIcon />
          </div>
          <div className="mt-20">
            <StripeIcon />
          </div>
          <div className="mt-20">
            <Awsicon />
          </div>
          <div className="mt-20">
            <MaskIcon />
          </div>
        </div>
        <div className="relative w-full h-[300px]">
          <div className="flex justify-center h-[100px] flex-wrap bg-none xl:bg-[#252B42] mt-20 absolute bottom-0 w-full"></div>
          <div className="absolute bottom-14 w-full flex-wrap justify-start flex lg:justify-center">
            <div className="bg-[#16697A] w-full sm:w-[500px] md:w-[70%] h-[220px] sm:h-[220px] md:h-[200px] lg:h-[180px] xl:h-[124px] flex-wrap flex justify-between pt-6 pl-10 pr-10  ">
              <div>
                <h1 className="font-bold text-[24px] text-[#FFFFFF]">
                  Subscribe For Latest <br />
                  Newsletter
                </h1>
              </div>
              <div className="flex border-[1px]  sm:w-[450px] rounded-[5px] h-[40px] sm:h-[58px]">
                <div>
                  <input
                    type="text"
                    placeholder="YOUR EMAIL"
                    className="text-[14px] w-[150px] sm:w-[333px] h-[40px] sm:h-[58px] font-normal pl-5"
                  />
                </div>
                <div>
                  <button className="w-[50px] sm:w-[117px] h-[40px] text-[10px] sm:text-[14px] sm:h-[58px] text-[#ffffff]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] ">
        <div className="text-center">
          <div className="text-[40px] font-bold pt-16">
            <h1>Get In Touch</h1>
          </div>
          <div className="text-[14px] font-medium text-[#737373] mt-1">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="ml-100 sm:ml-[30%]  lg:ml-1 flex-row  lg:flex  justify-center mt-24">
          <div className="w-[250px] sm:w-[328px] h-[333px] bg-[#FFFFFF] flex flex-col   justify-center text-center mt-7">
            <div className="ml-20 sm:ml-32">
              <CallIcon />
            </div>
            <div className="text-[#252B42] mt-2 font-semibold">
              <p>georgia.young@example.com</p>
            </div>
            <div className="text-[#252B42] mt-2 font-semibold">
              georgia.young@ple.com
            </div>
            <div className="font-bold text-[#252B42] mt-4">Get Support</div>
            <div>
              <button className="text-[14px] w-[160px] h-[44px] text-[#FFA62B] border border-[#FFA62B] font-semibold mt-5 rounded hover:bg-[#FFA62B] hover:text-[#FFFFFF]">
                Submit Request
              </button>
            </div>
          </div>
          <div className="w-[250px] sm:w-[328px] h-[393px] bg-[#252B42] flex flex-col justify-center text-center mt-7 lg:mt-1 ">
            <div className="ml-20 sm:ml-32">
              <LocationIcon />
            </div>
            <div className="text-[#FFFFFF] mt-2">
              <p>georgia.young@example.com</p>
            </div>
            <div className="text-[#FFFFFF]">georgia.young@ple.com</div>
            <div className="text-[#FFFFFF] font-bold mt-4">Get Support</div>
            <div>
              <button className="text-[14px] w-[160px] h-[44px] text-[#FFFFFF] border border-[#FFFFFF] mt-5 rounded hover:bg-[#FFFFFF] hover:text-[#252B42]">
                Submit Request
              </button>
            </div>
          </div>
          <div className="w-[250px] sm:w-[328px] h-[333px] bg-[#FFFFFF] flex flex-col justify-center text-center mt-7">
            <div className="ml-20 sm:ml-32">
              <TweetIcon />
            </div>
            <div className="text-[#252B42] mt-2 font-semibold">
              <p>georgia.young@example.com</p>
            </div>
            <div className="text-[#252B42] mt-2 font-semibold">
              georgia.young@ple.com
            </div>
            <div className="font-bold text-[#252B42] mt-4">Get Support</div>
            <div>
              <button className="text-[14px] w-[160px] h-[44px] text-[#FFA62B]  border border-[#FFA62B] font-semibold mt-5 rounded hover:bg-[#FFA62B] hover:text-[#FFFFFF]">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex  justify-evenly bg-[#FAFAFA]  sm:h-[142px] pt-14 ">
        <div>
          <div className="font-bold text-[24px]">
            Consulting Agency For Your Business
          </div>
          <div className="text-[14px] text-[#737373] font-normal mt-3">
            the quick fox jumps over the lazy dog
          </div>
        </div>
        <div>
          <button className="w-[160px] h-[58px] text-[#FFFFFF] bg-[#16697A] border rounded hover:bg-[#FAFAFA]  hover:text-[#16697A] hover:border-[#16697A] ">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row  xl:justify-center pl-[40%] xl:pl-1 text-[#FFFFFF] bg-[#16697A] text-[14px] font-semibold pt-14 pb-14 ">
        <div className="mr-40">
          <div className="font-bold text-[16px]">Company Info</div>
          <div className="mt-8">About Us</div>
          <div className="mt-4">Carrier</div>
          <div className="mt-4">We are hiring</div>
          <div className="mt-4">Blog</div>
        </div>
        <div className="mr-40">
          <div className="font-bold text-[16px]">Legal</div>
          <div className="mt-8">About Us</div>
          <div className="mt-4">Carrier</div>
          <div className="mt-4">We are hiring</div>
          <div className="mt-4">Blog</div>
        </div>
        <div className="mr-40">
          <div className="font-bold text-[16px]">Features</div>
          <div className="mt-8">Business Marketing</div>
          <div className="mt-4">User Analytic</div>
          <div className="mt-4">Live Chat</div>
          <div className="mt-4">Unlimited Support</div>
        </div>
        <div className="mr-40">
          <div className="font-bold text-[16px]">Resources</div>
          <div className="mt-8">IOS & Android</div>
          <div className="mt-4">Watch a Demo</div>
          <div className="mt-4">Customers</div>
          <div className="mt-4">API</div>
        </div>
        <div>
          <div className="font-bold text-[16px]">Get In Touch</div>
          <div className="flex">
            <div className="mr-3 mt-8">
              <PhoneIcon />
            </div>
            <div className="mt-8">(480) 555-0103</div>
          </div>
          <div className="flex mt-4">
            <div className="mr-3">
              <Location2Icon />
            </div>
            <div>4517 Washington Ave. Manchester, Kentucky 39495</div>
          </div>
          <div className="flex mt-4">
            <div className="mr-3 ">
              <Tweeter2Icon />
            </div>
            <div>debra.holt@example.com</div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row  lg:justify-between pt-8 bg-[#FAFAFA] pb-8">
        <div className="ml-0 lg:ml-52">
          Made With Love By Figmaland All Right Reserved
        </div>
        <div className="flex  mr-52 ">
          <div className="mr-7">
            <FacebookIcon />
          </div>
          <div className="mr-7">
            <InstagramIcon />
          </div>
          <div className="mr-7">
            <Tweeter3Icon />
          </div>
          <div className="mr-7">
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </Box>
  );
}
