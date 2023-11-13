"use client";
import img from "@/assets/images/new/hero-bg.png";
import left from "@/assets/images/new/mobile-app2.gif";
import Consulting from "@/components/consulting";
import Conversation from "@/components/conversation";
import Getintouch from "@/components/getintouch";
import Leadership from "@/components/leadership";
import Mask from "@/components/mask";
import Portfolio from "@/components/portfolio";
import WhatWeOffer from "@/components/whatWeOffer";
import WhoWeAre from "@/components/whoWeAre";
import WhyChooseUs from "@/components/whyChooseUs";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Setusapart from "./dashboard/components/Setusapart";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <div id="home" className="relative w-full h-[90vh]">
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
                  We offer Digital Solutions <br /> That Empower Businesses and
                  Individuals.
                  <span
                    className="typewrite relative text-type-element"
                    id="typed"
                    data-period="2000"
                    data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
                  ></span>
                </h1>
                <p className="text-[#737373] text-[30px]  mb-0 max-w-2xl text-lg">
                  We deliver software services tailored to meet your unique
                  needs and to transform your businesses digitally.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="relative mt-10 ">
                  <Link
                    href="#"
                    className="w-[130px] text-xs sm:text-base sm:w-[185px] h-[48px] btn bg-[#00A0C1] hover:bg-[#E7EBEE] text-[#ffffff] hover:text-[#00A0C1] pt-4 sm:pt-[12px] hover:border-[#00A0C1]  rounded-full"
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
      <WhoWeAre />
      <Setusapart />
      <WhatWeOffer />
      <Portfolio />
      <Leadership />
      <WhyChooseUs />
      {/* <PracticeAdvise /> */}
      {/* <Providing /> */}
      <Mask />

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

          <div
            id="carouselExampleCaptions"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide
          >
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <div
                className="relative float-left -mr-[100%]  w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">Maria Kate</h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      Photographer
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      Working with Universal Tech was a game-changing experience
                      for our business. Their team not only delivered the
                      cutting-edge mobile app within our deadline but also made
                      our business more efficient.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="inline-block w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>
                    <ul className="mb-0 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg"
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">John Smith </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      Web Developer
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      Collaborating with Universal Tech on our complex website
                      development project was a seamless experience. Their
                      developers showcased exceptional technical skills and a
                      deep understanding of our requirements. They made a
                      fantastic website that streamlined our operations and
                      enhanced efficiency. We look forward to working with them
                      again. 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="inline-block w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>
                    <ul className="mb-0 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">David Bing </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      UX Designer
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      Choosing Universal Tech was one of the best decisions we
                      made. Their team’s professionalism and dedication to
                      delivering the best solution are unmatched. They
                      understood our unique business challenges and provided
                      solutions accordingly; we will work with them next time.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="inline-block w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>
                    <ul className="mb-0 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  <path
                    fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  <path
                    fill="currentColor"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </section>
      </div>
      <Getintouch />
      <Conversation />
      <Consulting />
    </Box>
  );
}
