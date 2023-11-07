import FacebookIcon from "@/assets/svgs/facebook";
import InstagramIcon from "@/assets/svgs/instagram";
import Location2Icon from "@/assets/svgs/location2";
import PhoneIcon from "@/assets/svgs/phone";
import Tweeter2Icon from "@/assets/svgs/tweeter2";
import Tweeter3Icon from "@/assets/svgs/tweeter3";
import YoutubeIcon from "@/assets/svgs/youtube";
import React from "react";

export default function Consulting() {
  return (
    <div>
      {/* <div className=" flex  justify-evenly bg-[#FAFAFA]  sm:h-[142px] pt-14 ">
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
      </div> */}

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
    </div>
  );
}
