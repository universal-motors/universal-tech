import QuickIcon from "@/assets/svgs/quick";
import Quick2Icon from "@/assets/svgs/quick2";
import React from "react";
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
import WhyChooseUs from "@/components/whyChooseUs";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Providing() {
  return (
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
            Problems trying to resolve the conflict between the two major realms{" "}
            <br />
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex-col lg:flex items-center justify-center lg:flex-row w-full">
        <div className=" ml-10 md:ml-44 w-[90%] md:w-[597px] h-auto sm:h-[442px] mt-14 m-auto">
          <Image className="w-[90%] sm:h-[100%]" alt="img" src={image} />
        </div>
        <div className="mt-5 sm:mt-14 ml-10 sm:ml-[30%] lg:ml-1">
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
  );
}
