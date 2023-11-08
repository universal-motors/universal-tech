"use client";
import TogglerIcon from "@/assets/svgs/toggler";
import { useState } from "react";
import CustomLink from "../CustomLink";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <nav
      className="navbar bg-white backdrop-blur !bg-opacity-30 py-6"
      id="navbar"
    >
      <div className="flex">
        <div className="w-[83%] m-auto flex gap-48 flex-wrap items-center ">
          <div>
            <svg
              width="99"
              height="24"
              viewBox="0 0 99 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0640001 2.224H3.808V19H0.0640001V2.224ZM11.1618 11.8V19H7.56181V6.088H11.1618V7.528C12.2498 6.424 13.4738 5.872 14.8338 5.872C16.1938 5.872 17.3298 6.352 18.2418 7.312C19.1698 8.272 19.6338 9.552 19.6338 11.152V19H16.0338V11.704C16.0338 9.72 15.3058 8.728 13.8498 8.728C13.1298 8.728 12.4978 8.992 11.9538 9.52C11.4258 10.032 11.1618 10.792 11.1618 11.8ZM28.1499 19.192C26.6299 19.192 25.2699 18.544 24.0699 17.248C22.8699 15.952 22.2699 14.344 22.2699 12.424C22.2699 10.504 22.8539 8.936 24.0219 7.72C25.1899 6.488 26.5579 5.872 28.1259 5.872C29.6939 5.872 30.9739 6.424 31.9659 7.528V1.192H35.5659V19H31.9659V17.296C30.9579 18.56 29.6859 19.192 28.1499 19.192ZM25.8939 12.568C25.8939 13.608 26.2059 14.464 26.8299 15.136C27.4539 15.792 28.1819 16.12 29.0139 16.12C29.8459 16.12 30.5499 15.792 31.1259 15.136C31.7179 14.464 32.0139 13.608 32.0139 12.568C32.0139 11.512 31.7179 10.64 31.1259 9.952C30.5499 9.248 29.8379 8.896 28.9899 8.896C28.1419 8.896 27.4139 9.248 26.8059 9.952C26.1979 10.656 25.8939 11.528 25.8939 12.568ZM42.6743 19H39.0743V6.088H42.6743V19ZM39.3623 4.456C38.9623 4.04 38.7623 3.536 38.7623 2.944C38.7623 2.352 38.9623 1.856 39.3623 1.456C39.7783 1.04 40.2823 0.831999 40.8743 0.831999C41.4663 0.831999 41.9623 1.04 42.3623 1.456C42.7783 1.856 42.9863 2.352 42.9863 2.944C42.9863 3.536 42.7783 4.04 42.3623 4.456C41.9623 4.856 41.4663 5.056 40.8743 5.056C40.2823 5.056 39.7783 4.856 39.3623 4.456ZM52.3741 16C53.5741 16 54.6541 15.4 55.6141 14.2L57.7501 16.6C56.0861 18.328 54.2861 19.192 52.3501 19.192C50.4141 19.192 48.7741 18.584 47.4301 17.368C46.1021 16.136 45.4381 14.536 45.4381 12.568C45.4381 10.584 46.1101 8.976 47.4541 7.744C48.8141 6.496 50.4221 5.872 52.2781 5.872C53.2061 5.872 54.1421 6.064 55.0861 6.448C56.0461 6.832 56.8861 7.4 57.6061 8.152L55.7341 10.6C55.3181 10.104 54.8061 9.72 54.1981 9.448C53.6061 9.176 53.0141 9.04 52.4221 9.04C51.4781 9.04 50.6621 9.352 49.9741 9.976C49.3021 10.584 48.9661 11.44 48.9661 12.544C48.9661 13.632 49.3021 14.48 49.9741 15.088C50.6621 15.696 51.4621 16 52.3741 16ZM62.9199 12.544C62.9199 13.6 63.2159 14.464 63.8079 15.136C64.4159 15.792 65.1839 16.12 66.1119 16.12C67.0559 16.12 67.8239 15.792 68.4159 15.136C69.0239 14.464 69.3279 13.6 69.3279 12.544C69.3279 11.488 69.0239 10.624 68.4159 9.952C67.8239 9.28 67.0559 8.944 66.1119 8.944C65.1839 8.944 64.4159 9.28 63.8079 9.952C63.2159 10.624 62.9199 11.488 62.9199 12.544ZM72.9519 12.544C72.9519 14.416 72.3039 15.992 71.0079 17.272C69.7119 18.552 68.0799 19.192 66.1119 19.192C64.1599 19.192 62.5359 18.552 61.2399 17.272C59.9439 15.992 59.2959 14.416 59.2959 12.544C59.2959 10.672 59.9439 9.096 61.2399 7.816C62.5359 6.52 64.1599 5.872 66.1119 5.872C68.0799 5.872 69.7119 6.52 71.0079 7.816C72.3039 9.096 72.9519 10.672 72.9519 12.544ZM82.5179 9.256C81.4459 9.256 80.6459 9.64 80.1179 10.408C79.5899 11.16 79.3259 12.16 79.3259 13.408V19H75.7259V6.088H79.3259V7.792C79.7899 7.264 80.3659 6.816 81.0539 6.448C81.7579 6.08 82.4699 5.888 83.1899 5.872L83.2139 9.256H82.5179ZM93.2051 5.872C94.7091 5.872 96.0451 6.504 97.2131 7.768C98.3971 9.016 98.9891 10.592 98.9891 12.496C98.9891 14.4 98.3971 15.992 97.2131 17.272C96.0451 18.552 94.6691 19.192 93.0851 19.192C91.5171 19.192 90.2531 18.56 89.2931 17.296V23.656H85.6931V6.088H89.2931V7.528C90.3971 6.424 91.7011 5.872 93.2051 5.872ZM89.2451 12.568C89.2451 13.608 89.5331 14.464 90.1091 15.136C90.7011 15.792 91.4131 16.12 92.2451 16.12C93.0771 16.12 93.8051 15.792 94.4291 15.136C95.0531 14.464 95.3651 13.608 95.3651 12.568C95.3651 11.528 95.0611 10.656 94.4531 9.952C93.8451 9.248 93.1171 8.896 92.2691 8.896C91.4211 8.896 90.7011 9.248 90.1091 9.952C89.5331 10.64 89.2451 11.512 89.2451 12.568Z"
                fill="#252B42"
              />
            </svg>
          </div>

          <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
            <button
              type="button"
              className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu mdi-24px"></i>
            </button>
          </div>

          <div
            className={`${
              isOpen === true ? "hidden" : "block"
            } navigation lg_992:order-1 lg_992:flex`}
            id="menu-collapse"
          >
            <ul
              className="navbar-nav nav-black flex gap-6 "
              id="navbar-navlist"
            >
              <CustomLink text="Home" to="#home" />
              <CustomLink text="About us" to="#aboutus" />
              <CustomLink text="Services" to="#services" />
              <CustomLink text="Portfolio" to="#portfolio" />
              <CustomLink text="Team" to="#team" />
              <CustomLink text="Contact us" to="#contactus" />
            </ul>
          </div>
        </div>
        <div onClick={toggleMenu} className="mr-10">
          <TogglerIcon />
        </div>
      </div>
    </nav>
  );
}
