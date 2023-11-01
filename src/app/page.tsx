"use client";
import img from "@/assets/images/new/hero-bg.png";
import left from "@/assets/images/new/mobile-app2.gif";
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
import about1 from "@/assets/images/about1.jpg";
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
          <div className="flex items-center flex-col gap-10 md:gap-0 md:flex-row justify-center md:justify-between mt-40 w-[75%] m-auto">
            <div>
              <div className="grid grid-cols-1 ">
                <h1 className="text-black font-extrabold text-[30px] sm:text-[58px] text-Montserrat lg:text-5xl text-4xl lg:leading-normal leading-normal mb-7 position-relative">
                  We offer modern solutions <br /> for growing your business
                  <span
                    className="typewrite relative text-type-element"
                    id="typed"
                    data-period="2000"
                    data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
                  ></span>
                </h1>
                <p className="text-[#737373] text-[30px]  mb-0 max-w-2xl text-lg">
                  We help businesses digitally transform, build new products,
                  and accelerate digital teams. Contact Us
                </p>
              </div>
              <div className="flex gap-6">
                <div className="relative mt-10 ">
                  <Link
                    href="#"
                    className="w-[130px] text-xs sm:text-base sm:w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#E7EBEE] hover:text-[#00A0C1] pt-4 sm:pt-[12px] hover:border-[#00A0C1] text-white rounded-full"
                  >
                    Get Quote Now
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image src={left} alt="my gif" height={500} width={500} />
            </div>
          </div>

          <DigitelDiv />
        </div>
      </div>

      <div className="mt-[1200px] flex flex-col xl:flex-row justify-center">
        <div className="bg-[#F6F9FF] flex flex-col m-auto xl:m-0 w-[560px] xl:w-auto  justify-center p-[40px]">
          <div className="text-[#6486F3] text-[14px] ">
            <h3>WHO WE ARE</h3>
          </div>
          <div className="text-[28px] text-[bold] text-[#012970]">
            <h2>
              Unleashing Digital Brilliance: Meet Our <br /> Web App Wizards
            </h2>
          </div>
          <div>
            At Expertizo, we are a passionate team of web app aficionados on a
            mission <br />
            to redefine digital excellence. With a keen eye for design and a
            flair for <br />
            innovation, we craft powerful and user-centric web applications that
            drive <br />
            growth and elevate brands. Our relentless pursuit of perfection and{" "}
            <br />
            commitment to cutting-edge technologies enable us to create
            seamless, <br />
            scalable, and secure web experiences. Join us on this digital
            journey and <br />
            unlock the true potential of your online presence. Let's turn your
            ideas into <br />
            reality!
          </div>
        </div>
        <div className="w-[558px] m-auto xl:m-0 h-[419px]">
          <Image alt="about1" src={about1} />
        </div>
      </div>
      {/* <WhyChooseUs />
      <PracticeAdvise />
      <Providing />
      <Mask />
      <Getintouch />
      <Consulting /> */}
    </Box>
  );
}
