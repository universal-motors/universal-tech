"use client";
import img from "@/assets/images/new/hero-bg.png";
import left from "@/assets/images/new/mobile-app2.gif";
import about1 from "@/assets/images/new/responsive.gif";
import Consulting from "@/components/consulting";
import Getintouch from "@/components/getintouch";
import Mask from "@/components/mask";
import PracticeAdvise from "@/components/practiceAdvise";
import Providing from "@/components/providing";
import WhyChooseUs from "@/components/whyChooseUs";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import setUs from "@/assets/images/123.png";
import DoneIcon from "@mui/icons-material/Done";

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
        </div>
      </div>

      <div className="mt-36 sm:mt-16 flex flex-col xl:flex-row justify-center">
        <div className="bg-[#F6F9FF] flex flex-col m-auto xl:m-0 w-[90%] md:w-[560px] xl:w-auto  justify-center p-[40px]">
          <div className="text-cyan-500 text-[14px] ">
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
        <div className="w-[90%] m-auto md:w-[558px] xl:m-0 h-[419px]">
          <Image alt="about1" src={about1} />
        </div>
      </div>
      <div className="text-center font-bold mt-40">
        <div className="text-cyan-500">WHAT WE OFFER</div>
        <div className="text-[#012970] text-[38px] font-bold">
          Comprehensive Services and Solutions
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-auto gap-5 mt-28">
        <div className="flex flex-col justify-center  lg:ml-5 text-center items-center  group  w-[90%] lg:w-[356px]  h-[415px] shadow rounded hover:bg-[#2DB6FA] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#2DB6FA]  group-hover:bg-[#ffffff] bg-[#2DB6FA]/40 rounded-lg">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">Web App Development</div>
          <div>
            <div>Efficient, innovative web app development</div>
            <div>bringing your ideas to life with cutting-edge</div>
            <div>technology and design.</div>
          </div>
        </div>
        <div className="flex flex-col  lg:mr-1 justify-center text-center group items-center w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#F68C09] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#F68C09]  group-hover:bg-[#ffffff] bg-[#F68C09]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">
            Blockchain Development
          </div>
          <div>
            <div>Empower projects with secure, transparent,</div>
            <div>and efficient blockchain solutions.</div>
            <div>Transforming industries through innovative</div>
            <div>development.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center  lg:mr-5 text-center items-center group w-[90%] lg:w-[356px]  h-[415px] shadow rounded hover:bg-[#08DA4E] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#08DA4E]  group-hover:bg-[#ffffff] bg-[#08DA4E]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">
            Mobile App Development
          </div>
          <div>
            <div>Crafting innovative mobile apps to elevate user</div>
            <div>experiences, transforming ideas into seamless</div>
            <div>digital realities.</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-auto gap-5 mt-8">
        <div className="flex flex-col justify-center  text-center items-center group w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#E9222C] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#E9222C]  group-hover:bg-[#ffffff] bg-[#E9222C]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">Graphics Designing</div>
          <div>
            <div>Transforming ideas into stunning visuals - your</div>
            <div>partner for creative, impactful, and tailored</div>
            <div>graphic designs.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center items-center group w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#B50EDF] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#B50EDF]  group-hover:bg-[#ffffff] bg-[#B50EDF]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">Trainings</div>
          <div>
            <div>Master web & app development through our</div>
            <div>comprehensive training. Code, design, and</div>
            <div>deploy with expert guidance.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center  text-center  items-center group w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#F51F9C] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#F51F9C]  group-hover:bg-[#ffffff] bg-[#F51F9C]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">Spaces</div>
          <div>
            <div>We provide well designed & equipped spaces</div>
            <div>for training programs, meetings, conferances,</div>
            <div>workshops & other events</div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="text-cyan-500 font-bold text-[18px] flex justify-center mt-5">
          core values
        </div>
        <div className="!text-[20px] sm:!text-[38px] font-bold flex justify-center text-[#012970] ">
          What Sets Us Apart.
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center m-auto gap-14 mt-5">
        <div className="w-[90%] sm:w-[456px] h-[290px] ">
          <Image alt="setUs" src={setUs} />
        </div>
        <div className="flex  flex-col  items-start ">
          <div className="flex flex-col sm:flex-row justify-center  mt-10 gap-10">
            <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center pl-4">
              <div className="bg-[#d6eaf8] border  rounded   hover:bg-blue-700  mr-3">
                <DoneIcon
                  sx={{ color: "black", ":hover": { color: "white" } }}
                />
              </div>

              <div>Innovation</div>
            </div>
            <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center  pl-4 mb-5 sm: mb-5">
              <div className="border  bg-[#c4dbea] rounded  hover:bg-blue-700  mr-3">
                <DoneIcon
                  sx={{ color: "black", ":hover": { color: "white" } }}
                />
              </div>
              <div>Commitment</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center mt-5 gap-10">
            <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center pl-4">
              <div className="border bg-[#d6eaf8]  rounded hover:bg-blue-700 mr-3 ">
                <DoneIcon
                  sx={{ color: "black", ":hover": { color: "white" } }}
                />
              </div>
              <div>Goals</div>
            </div>
            <div className=" text-[#012970] text-[18px] font-semibold shadow  w-64 h-16 flex justify-start items-center  pl-4 mb-5 sm: mb-5">
              <div className="border bg-[#d6eaf8] rounded  hover:bg-blue-700 mr-3">
                <DoneIcon
                  sx={{ color: "black", ":hover": { color: "white" } }}
                />
              </div>
              <div>Team Work</div>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row  justify-center mt-5 gap-10">
            <div className=" text-[#012970] text-[18px] font-semibold shadow w-64 h-16 flex justify-start items-center  pl-4">
              <div className="border bg-[#d6eaf8] rounded  hover:bg-blue-700 mr-3">
                <DoneIcon
                  sx={{ color: "black", ":hover": { color: "white" } }}
                />
              </div>
              <div>Responsibility</div>
            </div>
            <div className=" text-[#012970] text-[18px] font-semibold shadow  w-64 h-16 flex justify-start items-center pl-4 ">
              <div className="border bg-[#d6eaf8] rounded  hover:bg-blue-700 mr-3">
                <DoneIcon
                  sx={{ color: "black", ":hover": { color: "white" } }}
                />
              </div>
              <div>Satisfaction</div>
            </div>
          </div>
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
