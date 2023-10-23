"use client";
import img from "@/assets/images/cover.png";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <section
        style={{ backgroundImage: `url(../assets/images/cover.png)` }}
        className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
        id="home"
      >
        
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 mt-12">
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Providing Brilliant Ideas <br />
              For Your{" "}
              <span
                className="typewrite relative text-type-element"
                id="typed"
                data-period="2000"
                data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
              ></span>
            </h4>

            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>

            <div className="relative mt-10">
              <Link
                href="#"
                className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section> */}
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
          {/* <div className="flex w-[100%] justify-between">
            <div className="flex gap-6 mt-[50px]">
              <div className="ml-[44%] ">
                <svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0640001 2.224H3.808V19H0.0640001V2.224ZM11.1618 11.8V19H7.56181V6.088H11.1618V7.528C12.2498 6.424 13.4738 5.872 14.8338 5.872C16.1938 5.872 17.3298 6.352 18.2418 7.312C19.1698 8.272 19.6338 9.552 19.6338 11.152V19H16.0338V11.704C16.0338 9.72 15.3058 8.728 13.8498 8.728C13.1298 8.728 12.4978 8.992 11.9538 9.52C11.4258 10.032 11.1618 10.792 11.1618 11.8ZM28.1499 19.192C26.6299 19.192 25.2699 18.544 24.0699 17.248C22.8699 15.952 22.2699 14.344 22.2699 12.424C22.2699 10.504 22.8539 8.936 24.0219 7.72C25.1899 6.488 26.5579 5.872 28.1259 5.872C29.6939 5.872 30.9739 6.424 31.9659 7.528V1.192H35.5659V19H31.9659V17.296C30.9579 18.56 29.6859 19.192 28.1499 19.192ZM25.8939 12.568C25.8939 13.608 26.2059 14.464 26.8299 15.136C27.4539 15.792 28.1819 16.12 29.0139 16.12C29.8459 16.12 30.5499 15.792 31.1259 15.136C31.7179 14.464 32.0139 13.608 32.0139 12.568C32.0139 11.512 31.7179 10.64 31.1259 9.952C30.5499 9.248 29.8379 8.896 28.9899 8.896C28.1419 8.896 27.4139 9.248 26.8059 9.952C26.1979 10.656 25.8939 11.528 25.8939 12.568ZM42.6743 19H39.0743V6.088H42.6743V19ZM39.3623 4.456C38.9623 4.04 38.7623 3.536 38.7623 2.944C38.7623 2.352 38.9623 1.856 39.3623 1.456C39.7783 1.04 40.2823 0.831999 40.8743 0.831999C41.4663 0.831999 41.9623 1.04 42.3623 1.456C42.7783 1.856 42.9863 2.352 42.9863 2.944C42.9863 3.536 42.7783 4.04 42.3623 4.456C41.9623 4.856 41.4663 5.056 40.8743 5.056C40.2823 5.056 39.7783 4.856 39.3623 4.456ZM52.3741 16C53.5741 16 54.6541 15.4 55.6141 14.2L57.7501 16.6C56.0861 18.328 54.2861 19.192 52.3501 19.192C50.4141 19.192 48.7741 18.584 47.4301 17.368C46.1021 16.136 45.4381 14.536 45.4381 12.568C45.4381 10.584 46.1101 8.976 47.4541 7.744C48.8141 6.496 50.4221 5.872 52.2781 5.872C53.2061 5.872 54.1421 6.064 55.0861 6.448C56.0461 6.832 56.8861 7.4 57.6061 8.152L55.7341 10.6C55.3181 10.104 54.8061 9.72 54.1981 9.448C53.6061 9.176 53.0141 9.04 52.4221 9.04C51.4781 9.04 50.6621 9.352 49.9741 9.976C49.3021 10.584 48.9661 11.44 48.9661 12.544C48.9661 13.632 49.3021 14.48 49.9741 15.088C50.6621 15.696 51.4621 16 52.3741 16ZM62.9199 12.544C62.9199 13.6 63.2159 14.464 63.8079 15.136C64.4159 15.792 65.1839 16.12 66.1119 16.12C67.0559 16.12 67.8239 15.792 68.4159 15.136C69.0239 14.464 69.3279 13.6 69.3279 12.544C69.3279 11.488 69.0239 10.624 68.4159 9.952C67.8239 9.28 67.0559 8.944 66.1119 8.944C65.1839 8.944 64.4159 9.28 63.8079 9.952C63.2159 10.624 62.9199 11.488 62.9199 12.544ZM72.9519 12.544C72.9519 14.416 72.3039 15.992 71.0079 17.272C69.7119 18.552 68.0799 19.192 66.1119 19.192C64.1599 19.192 62.5359 18.552 61.2399 17.272C59.9439 15.992 59.2959 14.416 59.2959 12.544C59.2959 10.672 59.9439 9.096 61.2399 7.816C62.5359 6.52 64.1599 5.872 66.1119 5.872C68.0799 5.872 69.7119 6.52 71.0079 7.816C72.3039 9.096 72.9519 10.672 72.9519 12.544ZM82.5179 9.256C81.4459 9.256 80.6459 9.64 80.1179 10.408C79.5899 11.16 79.3259 12.16 79.3259 13.408V19H75.7259V6.088H79.3259V7.792C79.7899 7.264 80.3659 6.816 81.0539 6.448C81.7579 6.08 82.4699 5.888 83.1899 5.872L83.2139 9.256H82.5179ZM93.2051 5.872C94.7091 5.872 96.0451 6.504 97.2131 7.768C98.3971 9.016 98.9891 10.592 98.9891 12.496C98.9891 14.4 98.3971 15.992 97.2131 17.272C96.0451 18.552 94.6691 19.192 93.0851 19.192C91.5171 19.192 90.2531 18.56 89.2931 17.296V23.656H85.6931V6.088H89.2931V7.528C90.3971 6.424 91.7011 5.872 93.2051 5.872ZM89.2451 12.568C89.2451 13.608 89.5331 14.464 90.1091 15.136C90.7011 15.792 91.4131 16.12 92.2451 16.12C93.0771 16.12 93.8051 15.792 94.4291 15.136C95.0531 14.464 95.3651 13.608 95.3651 12.568C95.3651 11.528 95.0611 10.656 94.4531 9.952C93.8451 9.248 93.1171 8.896 92.2691 8.896C91.4211 8.896 90.7011 9.248 90.1091 9.952C89.5331 10.64 89.2451 11.512 89.2451 12.568Z" fill="#252B42" />
                </svg>
              </div>
              <div className="text-black gap-1">
                <h1>
                  Home
                </h1>
              </div>
              <div className="text-black">
                <h1>
                  products
                </h1>
              </div>
              <div className="text-black">
                <h1>
                  pricing
                </h1>
              </div>
              <div className="text-black">
                <h1>
                  contact
                </h1>
              </div>
            </div>

            <div className="mt-[50px] mr-[50px]">
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.571289 0H23.4284V2.28571H0.571289V0ZM6.28557 5.71429H23.4284V8H6.28557V5.71429ZM13.4284 11.4286H23.4284V13.7143H13.4284V11.4286Z" fill="#252B42" />
              </svg>
            </div>
          </div> */}

          {/* <div className="50px">
            <h1 className="text-black font-extrabold text-[58px] ml-[10%] mt-[7%] ">
              EMPOWER
            </h1>
          </div>
          <div className="text-[58px] font-extrabold ml-[10%]  ">
            <h1>YOUR BUSINESS</h1>
          </div> */}

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

          {/* <div className="text-[30px] text-[#737373] ml-[10%] mt-[20px]">
            we know how large objects will act,
          </div>
          <div className="text-[30px] text-[#737373] ml-[10%]">
            but thing on a small scale
          </div> */}
          <div className="flex ml-40 gap-6">
            {/* <div>
              <button className="ml-[95%] Font-[Montserrat] text-[14px] bg-[#00A0C1] font-bold  w-[185px] h-[48px] rounded-full mt-[30px] text-[#FFFFFF]">
                Get Quote Now
              </button>
            </div> */}
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
          <div className="flex justify-center mt-[100px]">
            <div className="bg-[#FFFFFF] w-[328px] h-[210px]  mr-[40px] flex flex-col  justify-center  pl-[40px] shadow">
              <div>
                <svg
                  width="48"
                  height="41"
                  viewBox="0 0 48 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_993_476)">
                    <path
                      d="M42.5886 8.52554H37.519V3.45592C37.519 2.55955 37.1629 1.6999 36.5291 1.06608C35.8953 0.432251 35.0356 0.0761719 34.1393 0.0761719H13.8608C12.9644 0.0761719 12.1048 0.432251 11.4709 1.06608C10.8371 1.6999 10.481 2.55955 10.481 3.45592V8.52554H5.41142C4.06687 8.52554 2.77739 9.05966 1.82665 10.0104C0.875916 10.9611 0.341797 12.2506 0.341797 13.5952V37.2534C0.341797 38.1497 0.697876 39.0094 1.3317 39.6432C1.96553 40.2771 2.82518 40.6331 3.72154 40.6331H44.2785C45.1749 40.6331 46.0345 40.2771 46.6683 39.6432C47.3022 39.0094 47.6582 38.1497 47.6582 37.2534V13.5952C47.6582 12.2506 47.1241 10.9611 46.1734 10.0104C45.2227 9.05966 43.9332 8.52554 42.5886 8.52554ZM13.8608 3.45592H34.1393V8.52554H13.8608V3.45592ZM44.2785 37.2534H3.72154V22.0445H17.2405V30.4939H30.7595V22.0445H44.2785V37.2534ZM20.6203 22.0445H27.3798V27.1141H20.6203V22.0445ZM3.72154 18.6648V13.5952C3.72154 13.147 3.89958 12.7172 4.2165 12.4002C4.53341 12.0833 4.96323 11.9053 5.41142 11.9053H42.5886C43.0368 11.9053 43.4666 12.0833 43.7836 12.4002C44.1005 12.7172 44.2785 13.147 44.2785 13.5952V18.6648H3.72154Z"
                      fill="#00A0C1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_993_476">
                      <rect width="48" height="40.7089" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
            <div className="bg-[#FFFFFF] w-[328px] h-[210px] mr-[40px]  flex flex-col  justify-center pl-[40px] shadow ">
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_964_18511)">
                    <g clip-path="url(#clip1_964_18511)">
                      <path
                        opacity="0.15"
                        d="M43.6503 13.75H4.35031C4.33231 13.75 4.32031 13.7619 4.32031 13.7796V19.1849C4.32031 22.7291 7.26031 25.6037 10.8783 25.6037C13.3203 25.6037 15.4503 24.2998 16.5843 22.3617C16.7583 22.0594 17.0883 21.8698 17.4423 21.8698C17.7963 21.8698 18.1203 22.0594 18.3003 22.3617C19.4283 24.2998 21.5583 25.6037 24.0003 25.6037C26.4483 25.6037 28.5843 24.2938 29.7063 22.3498C29.8803 22.0535 30.1983 21.8698 30.5403 21.8698H30.5763C30.9243 21.8698 31.2363 22.0535 31.4103 22.3498C32.5383 24.2938 34.6743 25.6037 37.1223 25.6037C40.7403 25.6037 43.6803 22.7291 43.6803 19.1849V13.7796C43.6803 13.7619 43.6683 13.75 43.6503 13.75Z"
                        fill="#00A0C1"
                      />
                      <path
                        d="M46.2 9.48885V1.89659C46.2 0.847537 45.342 0 44.28 0H3.72003C2.65804 0 1.80004 0.847537 1.80004 1.89659V9.48885C0.798037 9.54812 3.71756e-05 10.372 3.71756e-05 11.3795V19.1851C-0.00380525 20.6197 0.290253 22.0398 0.864037 23.3576C1.12204 23.9622 1.44004 24.5311 1.80004 25.0705V45.518C1.80004 46.5612 2.65804 47.4146 3.72003 47.4146H44.28C45.342 47.4146 46.2 46.5671 46.2 45.518V25.0705C46.5657 24.5298 46.879 23.9563 47.136 23.3576C47.706 22.036 48 20.6313 48 19.1851V11.3795C48 10.372 47.202 9.54812 46.2 9.48885ZM6.12003 4.26732H41.88V9.48293H6.12003V4.26732ZM27.84 43.1532H20.16V36.9834H27.84V43.1532ZM41.904 43.1532H31.68V35.0868C31.68 34.0378 30.822 33.1902 29.76 33.1902H18.24C17.178 33.1902 16.32 34.0378 16.32 35.0868V43.1532H6.12003V28.7985C6.29403 28.8814 6.47403 28.9644 6.66003 29.0355C7.99803 29.5927 9.42003 29.8712 10.884 29.8712C12.348 29.8712 13.764 29.5927 15.108 29.0355C15.936 28.6918 16.716 28.2532 17.43 27.7257C17.442 27.7198 17.454 27.7198 17.466 27.7257C18.1822 28.2554 18.9622 28.6954 19.788 29.0355C21.126 29.5927 22.548 29.8712 24.012 29.8712C25.476 29.8712 26.892 29.5927 28.236 29.0355C29.064 28.6918 29.844 28.2532 30.558 27.7257C30.57 27.7198 30.582 27.7198 30.594 27.7257C31.3102 28.2554 32.0902 28.6954 32.916 29.0355C34.254 29.5927 35.676 29.8712 37.14 29.8712C38.604 29.8712 40.02 29.5927 41.364 29.0355C41.544 28.9585 41.724 28.8814 41.904 28.7985V43.1532ZM43.68 19.1851C43.68 22.7294 40.74 25.6039 37.122 25.6039C34.674 25.6039 32.538 24.2941 31.41 22.3501C31.236 22.0537 30.924 21.87 30.576 21.87H30.54C30.198 21.87 29.88 22.0537 29.706 22.3501C29.1304 23.3417 28.2992 24.1652 27.297 24.7367C26.2948 25.3082 25.1572 25.6074 24 25.6039C21.558 25.6039 19.428 24.3 18.3 22.3619C18.12 22.0597 17.796 21.87 17.442 21.87C17.088 21.87 16.758 22.0597 16.584 22.3619C16.005 23.3498 15.1728 24.1695 14.1711 24.7387C13.1694 25.3078 12.0336 25.6062 10.878 25.6039C7.26003 25.6039 4.32003 22.7294 4.32003 19.1851V13.7799C4.32003 13.7621 4.33203 13.7502 4.35003 13.7502H43.65C43.668 13.7502 43.68 13.7621 43.68 13.7799V19.1851Z"
                        fill="#00A0C1"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_964_18511">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_964_18511">
                      <rect width="48" height="47.4146" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
            <div className="bg-[#00A0C1] w-[328px] h-[210px]  flex flex-col  justify-center pl-[40px] shadow">
              <div>
                <svg
                  width="48"
                  height="38"
                  viewBox="0 0 48 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_993_486)">
                    <path
                      d="M29.1416 8.62402H41.1395V12.0693H29.1416V8.62402Z"
                      fill="white"
                    />
                    <path
                      d="M29.1416 17.2373H41.1395V20.6826H29.1416V17.2373Z"
                      fill="white"
                    />
                    <path
                      d="M29.1416 25.8506H41.1395V29.2959H29.1416V25.8506Z"
                      fill="white"
                    />
                    <path
                      d="M44.5674 0.0112305H3.43187C2.52299 0.0121426 1.65161 0.375424 1.00893 1.02135C0.366264 1.66727 0.00481376 2.54307 0.00390625 3.45655V34.4644C0.00481376 35.3779 0.366264 36.2537 1.00893 36.8996C1.65161 37.5455 2.52299 37.9088 3.43187 37.9097H44.5674C45.4761 37.9084 46.3472 37.5449 46.9898 36.8991C47.6324 36.2533 47.994 35.3777 47.9953 34.4644V3.45655C47.9944 2.54307 47.633 1.66727 46.9903 1.02135C46.3477 0.375424 45.4763 0.0121426 44.5674 0.0112305ZM3.43187 3.45655H22.2856V34.4644H3.43187V3.45655ZM25.7136 34.4644V3.45655H44.5674L44.5708 34.4644H25.7136Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_993_486">
                      <rect width="48" height="37.92" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
    </Box>
  );
}
