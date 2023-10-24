"use client";
import img from "@/assets/images/cover.png";
import BagIcon from "@/assets/svgs/bag";
import DigitalIcon from "@/assets/svgs/digital";
import FirmIcon from "@/assets/svgs/firmIcon";
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
          <div className="shadow w-[230px] h-[209px]  flex flex-col items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_965_120)">
                  <g clip-path="url(#clip1_965_120)">
                    <path
                      d="M24.8406 22.8025C29.1448 22.8025 32.4925 19.3071 32.4925 15.0173C32.4925 10.7276 28.9854 7.39111 24.6812 7.39111C20.377 7.39111 17.0293 10.8865 17.0293 15.0173C17.0293 19.3071 20.5364 22.8025 24.8406 22.8025ZM24.6812 10.5687C24.8406 10.5687 24.8406 10.5687 24.6812 10.5687C27.2318 10.5687 29.3042 12.6342 29.3042 15.1762C29.3042 17.7183 27.2318 19.6249 24.6812 19.6249C22.1306 19.6249 20.2176 17.5594 20.2176 15.1762C20.2176 12.6342 22.29 10.5687 24.6812 10.5687Z"
                      fill="#00A0C1"
                    />
                    <path
                      d="M48.4335 21.8487C45.4046 19.1477 41.4193 17.7178 37.2745 17.8767H35.9992C35.6804 19.1477 35.2021 20.2599 34.5645 21.2132C35.5209 21.0543 36.318 21.0543 37.2745 21.0543C40.3034 20.8954 43.3323 21.8487 45.7235 23.5964V35.0357H48.9118V22.3253L48.4335 21.8487Z"
                      fill="#00A0C1"
                    />
                    <path
                      d="M33.6088 7.70826C34.4058 5.8017 36.6376 4.84842 38.71 5.64282C40.623 6.43722 41.5795 8.66154 40.7824 10.727C40.1448 12.1569 38.71 13.1102 37.2753 13.1102C36.9565 13.1102 36.4782 13.1102 36.1594 12.9513C36.3188 13.7457 36.3188 14.5401 36.3188 15.1756V16.1289C36.6376 16.1289 36.9565 16.2878 37.2753 16.2878C41.2607 16.2878 44.449 13.1102 44.449 9.29706C44.449 5.32506 41.2607 2.14746 37.4347 2.14746C34.8841 2.14746 32.6523 3.4185 31.377 5.64282C32.174 6.11946 32.9711 6.75498 33.6088 7.70826Z"
                      fill="#00A0C1"
                    />
                    <path
                      d="M15.4352 21.3724C14.7975 20.4191 14.3193 19.3069 14.0005 18.0359H12.7252C8.58037 17.877 4.59501 19.3069 1.56613 21.849L1.08789 22.3257V35.0361H4.27618V23.5967C6.82681 21.849 9.69628 20.8957 12.7252 21.0546C13.6816 21.0546 14.6381 21.2135 15.4352 21.3724Z"
                      fill="#00A0C1"
                    />
                    <path
                      d="M12.7246 16.1295C13.0435 16.1295 13.3623 16.1295 13.6811 15.9706V15.0174C13.6811 14.223 13.6811 13.4286 13.8405 12.793C13.5217 12.9519 13.0435 12.9519 12.7246 12.9519C10.6522 12.9519 8.89869 11.2042 8.89869 9.1388C8.89869 7.07336 10.6522 5.32568 12.7246 5.32568C14.3188 5.32568 15.7535 6.27896 16.3912 7.70888C17.0288 6.91448 17.9853 6.12008 18.7824 5.48456C16.71 2.14809 12.4058 1.03593 9.0581 3.10136C5.7104 5.1668 4.59449 9.45656 6.66688 12.793C7.9422 14.8585 10.174 16.1295 12.7246 16.1295Z"
                      fill="#00A0C1"
                    />
                    <path
                      d="M37.9128 31.3817L37.594 30.9051C34.4057 27.4097 29.9421 25.3443 25.1596 25.5032C20.3772 25.3443 15.7542 27.4097 12.5659 30.9051L12.2471 31.3817V43.4566C12.2471 44.8865 13.363 46.1576 14.9571 46.1576H35.3622C36.7969 46.1576 38.0722 44.8865 38.0722 43.4566V31.3817H37.9128ZM34.7245 42.98H15.4354V32.4939C17.986 29.9518 21.4931 28.6808 25.1596 28.6808C28.6668 28.5219 32.1739 29.9518 34.7245 32.4939V42.98Z"
                      fill="#00A0C1"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_965_120">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                  <clipPath id="clip1_965_120">
                    <rect
                      width="48"
                      height="44.2105"
                      fill="white"
                      transform="translate(1 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="font-bold text-[30px] mt-[10px]">3K</div>
            <div className=" text-[16px] text-[#737373] font-bold">
              CASES DONE
            </div>
          </div>

          <div className="shadow w-[230px] h-[209px] ml-[30px] flex flex-col items-center justify-center">
            <div>
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_965_127)">
                  <path
                    d="M44.1506 22.2819C43.5751 22.2861 43.005 22.3959 42.4678 22.6061L36.7275 17.8214C36.8687 17.2998 36.9692 16.7587 36.9692 16.1883C36.9692 12.81 34.3026 10.0947 30.9848 10.0947C27.667 10.0947 25.0003 12.81 25.0003 16.1883C25.0003 17.1536 25.2397 18.053 25.6275 18.8622L18.664 27.2421C18.3852 27.189 18.1025 27.1605 17.819 27.1568C17.3905 27.1568 16.9859 27.23 16.5934 27.3372L10.4581 21.09C10.5658 20.6927 10.6376 20.2808 10.6376 19.8445C10.6376 17.1438 8.50238 14.9696 5.85006 14.9696C3.19775 14.9696 1.0625 17.1438 1.0625 19.8445C1.0625 22.5452 3.19775 24.7194 5.85006 24.7194C6.27855 24.7194 6.6831 24.6463 7.07568 24.539L13.2109 30.7862C13.0959 31.1911 13.0355 31.6102 13.0314 32.0317C13.0314 34.7324 15.1667 36.9066 17.819 36.9066C20.4713 36.9066 22.6065 34.7324 22.6065 32.0317C22.6065 31.454 22.4916 30.9105 22.3121 30.3962L29.2852 22.0065C29.8286 22.1674 30.3911 22.2819 30.9848 22.2819C31.9295 22.2766 32.8593 22.0418 33.6969 21.597L39.4396 26.3817C39.3946 26.6377 39.369 26.8968 39.363 27.1568C39.363 29.8575 41.4983 32.0317 44.1506 32.0317C46.8029 32.0317 48.9381 29.8575 48.9381 27.1568C48.9381 24.4561 46.8029 22.2819 44.1506 22.2819Z"
                    fill="#00A0C1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_965_127">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="font-bold text-[30px] mt-[10px]">45</div>
            <div className="text-[#737373] text-[16px] font-bold">
              HAPPY CUSTOMERS
            </div>
          </div>

          <div className="shadow w-[230px] h-[209px] ml-[30px] flex flex-col items-center justify-center">
            <div>
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_965_134)">
                  <path
                    d="M16.0637 33.9949C15.2527 33.1802 15.6755 33.4099 13.7192 32.8839C12.8316 32.6449 12.0513 32.1855 11.3457 31.6352L7.11121 42.0639C6.70147 43.0736 7.46681 44.1705 8.55134 44.1292L13.4691 43.9408L16.8515 47.5296C17.5981 48.3208 18.9085 48.0742 19.3183 47.0646L24.1763 35.1002C23.1645 35.6664 22.0417 35.9983 20.8807 35.9983C19.0607 35.9983 17.3508 35.2867 16.0637 33.9949ZM42.7272 42.0639L38.4927 31.6352C37.7871 32.1864 37.0068 32.6449 36.1192 32.8839C34.1527 33.4127 34.5839 33.1821 33.7747 33.9949C32.4876 35.2867 30.7768 35.9983 28.9568 35.9983C27.7957 35.9983 26.6729 35.6655 25.6612 35.1002L30.5192 47.0646C30.9289 48.0742 32.2403 48.3208 32.986 47.5296L36.3693 43.9408L41.2871 44.1292C42.3716 44.1705 43.1369 43.0727 42.7272 42.0639ZM31.5459 31.8733C32.972 30.4155 33.1353 30.5411 35.1663 29.9852C36.4627 29.6299 37.4763 28.5939 37.8235 27.2683C38.5216 24.6058 38.3405 24.9274 40.2455 22.9792C41.1947 22.0089 41.5652 20.5942 41.218 19.2686C40.5208 16.608 40.5199 16.9792 41.218 14.3158C41.5652 12.9902 41.1947 11.5755 40.2455 10.6052C38.3405 8.65706 38.5216 8.97769 37.8235 6.31613C37.4763 4.9905 36.4627 3.95456 35.1663 3.59925C32.5641 2.88581 32.8777 3.07238 30.9709 1.12331C30.0217 0.153002 28.6376 -0.226685 27.3412 0.128627C24.74 0.841127 25.1031 0.842064 22.4972 0.128627C21.2008 -0.226685 19.8167 0.152065 18.8675 1.12331C16.9625 3.07144 17.2761 2.88581 14.6731 3.59925C13.3767 3.95456 12.3631 4.9905 12.0159 6.31613C11.3187 8.97769 11.4988 8.65706 9.59387 10.6052C8.64467 11.5755 8.27321 12.9902 8.62134 14.3158C9.31854 16.9746 9.31947 16.6033 8.62134 19.2677C8.27414 20.5933 8.64467 22.008 9.59387 22.9792C11.4988 24.9274 11.3177 24.6058 12.0159 27.2683C12.3631 28.5939 13.3767 29.6299 14.6731 29.9852C16.7619 30.5571 16.9177 30.4671 18.2925 31.8733C19.5273 33.1361 21.4509 33.3621 22.9349 32.4189C23.5284 32.0405 24.2168 31.8396 24.9197 31.8396C25.6226 31.8396 26.311 32.0405 26.9044 32.4189C28.3875 33.3621 30.3111 33.1361 31.5459 31.8733ZM16.1141 16.4946C16.1141 11.523 20.0565 7.49269 24.9192 7.49269C29.7819 7.49269 33.7243 11.523 33.7243 16.4946C33.7243 21.4661 29.7819 25.4964 24.9192 25.4964C20.0565 25.4964 16.1141 21.4661 16.1141 16.4946Z"
                    fill="#00A0C1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_965_134">
                    <rect
                      width="35.84"
                      height="48"
                      fill="white"
                      transform="translate(7)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="font-bold text-[30px] mt-[10px]">12+</div>
            <div className="text-[#737373] font-bold">AWARD WINNING</div>
          </div>

          <div className="shadow w-[230px] h-[209px] ml-[30px] flex flex-col items-center justify-center">
            <div>
              <svg
                width="48"
                height="41"
                viewBox="0 0 48 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.5886 8.52554H37.519V3.45592C37.519 2.55955 37.1629 1.6999 36.5291 1.06608C35.8953 0.432251 35.0356 0.0761719 34.1393 0.0761719H13.8608C12.9644 0.0761719 12.1048 0.432251 11.4709 1.06608C10.8371 1.6999 10.481 2.55955 10.481 3.45592V8.52554H5.41142C4.06687 8.52554 2.77739 9.05966 1.82665 10.0104C0.875916 10.9611 0.341797 12.2506 0.341797 13.5952V37.2534C0.341797 38.1497 0.697876 39.0094 1.3317 39.6432C1.96553 40.2771 2.82518 40.6331 3.72154 40.6331H44.2785C45.1749 40.6331 46.0345 40.2771 46.6683 39.6432C47.3022 39.0094 47.6582 38.1497 47.6582 37.2534V13.5952C47.6582 12.2506 47.1241 10.9611 46.1734 10.0104C45.2227 9.05966 43.9332 8.52554 42.5886 8.52554ZM13.8608 3.45592H34.1393V8.52554H13.8608V3.45592ZM44.2785 37.2534H3.72154V22.0445H17.2405V30.4939H30.7595V22.0445H44.2785V37.2534ZM20.6203 22.0445H27.3798V27.1141H20.6203V22.0445ZM3.72154 18.6648V13.5952C3.72154 13.147 3.89958 12.7172 4.2165 12.4002C4.53341 12.0833 4.96323 11.9053 5.41142 11.9053H42.5886C43.0368 11.9053 43.4666 12.0833 43.7836 12.4002C44.1005 12.7172 44.2785 13.147 44.2785 13.5952V18.6648H3.72154Z"
                  fill="#00A0C1"
                />
              </svg>
            </div>
            <div className="font-bold text-[30px] mt-[10px]">1.5K</div>
            <div className="text-[#737373] font-bold">CASES DONE</div>
          </div>
        </div>
        <div></div>
      </div>
    </Box>
  );
}
