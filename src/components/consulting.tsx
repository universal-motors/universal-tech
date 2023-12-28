import FacebookIcon from "@/assets/svgs/facebook";
import InstagramIcon from "@/assets/svgs/instagram";
import Location2Icon from "@/assets/svgs/location2";
import PhoneIcon from "@/assets/svgs/phone";
import Tweeter2Icon from "@/assets/svgs/tweeter2";
import Tweeter3Icon from "@/assets/svgs/tweeter3";
import YoutubeIcon from "@/assets/svgs/youtube";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";

export default function Consulting() {
  AOS.refresh();
  return (
    <div>
      <div className="flex flex-col xl:flex-row  xl:justify-center pl-[35%] sm:pl-[40%] xl:pl-1 text-[#FFFFFF] bg-[#16697A] text-[14px] font-semibold pt-14 pb-14 ">
        <div data-aos="fade-right" className="mr-40">
          <div className="font-bold text-[16px]">Company Info</div>
          <div className="mt-8">About Us</div>
          <div className="mt-4">Carrier</div>
          <div className="mt-4">We are hiring</div>
          <div className="mt-4">Blog</div>
        </div>

        <div data-aos="fade-right" className="mr-40">
          <div className="font-bold text-[16px]">Features</div>
          <div className="mt-8">Business Marketing</div>
          <div className="mt-4">User Analytic</div>
          <div className="mt-4">Live Chat</div>
          <div className="mt-4">Unlimited Support</div>
        </div>
        <div data-aos="fade-left" className=" mr-40 ">
          <div className="font-bold text-[16px]">Resources</div>
          <div className="mt-8">IOS & Android</div>
          <div className="mt-4">Watch a Demo</div>
          <div className="mt-4">Customers</div>
          <div className="mt-4">API</div>
        </div>
        <div data-aos="fade-left">
          <div className="font-bold text-[16px]">Get In Touch</div>
          <div className="flex">
            <div className="mr-3 mt-8">
              <PhoneIcon />
            </div>
            <div className="mt-8">03373244955</div>
          </div>
          <div className="flex mt-4">
            <div className="mr-3">
              <Location2Icon />
            </div>
            <div>Gulshan-e-Iqbal, Block 10, Nipa Chowrangi Karcahi. </div>
          </div>
          <div className="flex mt-4">
            <div className="mr-3 ">
              <Tweeter2Icon />
            </div>
            <div>hrpk@universalmotorsltd.com</div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row animate__animated animate__bounceInRight lg:justify-between pt-8 bg-[#FAFAFA] pb-8">
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
