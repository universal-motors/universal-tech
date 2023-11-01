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
import Consulting from "@/components/consulting";
import DigitelDiv from "@/components/digitel";
import Getintouch from "@/components/getintouch";
import Mask from "@/components/mask";
import PracticeAdvise from "@/components/practiceAdvise";
import Providing from "@/components/providing";
import WhyChooseUs from "@/components/whyChooseUs";
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
          <div className="flex ml-[30px] md:ml-40 gap-6">
            <div className="relative mt-10 ">
              <Link
                href="#"
                className="w-[130px] text-xs sm:text-base sm:w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#E7EBEE] hover:text-[#00A0C1] pt-4 sm:pt-[12px] hover:border-[#00A0C1] text-white rounded-full"
              >
                Get Quote Now
              </Link>
            </div>
            <div className="relative mt-10">
              <Link
                href="#"
                className="w-[130px] text-xs sm:text-base sm:w-[185px] h-[48px]  btn bg-[#E7EBEE] hover:bg-[#00A0C1] border-[#00A0C1] pt-4 sm:pt-[12px] hover:text-[#FFFFFF] text-[#00A0C1] rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
          <DigitelDiv />
        </div>
      </div>
      <WhyChooseUs />
      <PracticeAdvise />
      <Providing />
      <Mask />
      <Getintouch />
      <Consulting />
    </Box>
  );
}
