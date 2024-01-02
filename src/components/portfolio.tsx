import React from "react";
import Image from "next/image";
import image from "@/assets/images/image.png";
import cars from "@/assets/images/cars.png";
import auto from "@/assets/images/auto.png";
import imgzone from "@/assets/images/imgzone.png";
import imgstud from "@/assets/images/imgstud.png";
import graph from "@/assets/images/graph.png";
import react, { useState } from "react";
import PortfolioCard from "./portfolioCard";
import AOS from "aos";

type ArrType = {
  image: any;
  type: string;
  description: string;
  heading: string;
};
export default function Portfolio() {
  AOS.refresh();
  const [Arrtype, setArrType] = useState("all");
  console.log(Arrtype);

  const arr: ArrType[] = [
    {
      image: image,
      type: "app",
      heading: "Bistro Chat",
      description:
        "WITH BISTROCHAT YOU CAN BOOK A RESTAURANT IN HONGKONG WITHIN 10 SEC! JUST CHAT DIRECTLY WITH THE STAFF AND CONFIRM YOUR BOOKING.",
    },
    {
      image: cars,
      type: "app",
      heading: "Bistro Chat",
      description:
        "WITH BISTROCHAT YOU CAN BOOK A RESTAURANT IN HONGKONG WITHIN 10 SEC! JUST CHAT DIRECTLY WITH THE STAFF AND CONFIRM YOUR BOOKING.",
    },
    {
      image: auto,
      type: "app",
      heading: "Bistro Chat",
      description:
        "WITH BISTROCHAT YOU CAN BOOK A RESTAURANT IN HONGKONG WITHIN 10 SEC! JUST CHAT DIRECTLY WITH THE STAFF AND CONFIRM YOUR BOOKING.",
    },
    {
      image: imgzone,
      type: "app",
      heading: "Bistro Chat",
      description:
        "WITH BISTROCHAT YOU CAN BOOK A RESTAURANT IN HONGKONG WITHIN 10 SEC! JUST CHAT DIRECTLY WITH THE STAFF AND CONFIRM YOUR BOOKING.",
    },
    {
      image: imgstud,
      type: "web",
      heading: "Bistro Chat",
      description:
        "WITH BISTROCHAT YOU CAN BOOK A RESTAURANT IN HONGKONG WITHIN 10 SEC! JUST CHAT DIRECTLY WITH THE STAFF AND CONFIRM YOUR BOOKING.",
    },
    {
      image: graph,
      type: "web",
      heading: "Bistro Chat",
      description:
        "WITH BISTROCHAT YOU CAN BOOK A RESTAURANT IN HONGKONG WITHIN 10 SEC! JUST CHAT DIRECTLY WITH THE STAFF AND CONFIRM YOUR BOOKING.",
    },
  ];

  const all = () => {
    setArrType("all");
  };
  const app = () => {
    setArrType("app");
  };
  const web = () => {
    setArrType("web");
  };
  return (
    <div
      data-aos="fade-left"
      className="m-auto flex flex-col justify-center items-center "
    >
      <div id="portfolio">
        <div>
          <div className="mt-24">
            <div className="text-cyan-500  font-bold text-[18px] flex justify-center mt-5">
              PORTFOLIO
            </div>
            <div className=" text-[28px] sm:text-[30px] md:text-[38px] font-bold flex justify-center text-[#012970]">
              Check our latest work
            </div>
          </div>
          <div className="font-semibold flex justify-center items-center gap-14 mt-10 mb-10">
            <div>
              <button
                className={`rounded-full  w-[70px] h-[40px] ${
                  Arrtype === "all" ? " border border-cyan-500" : ""
                } hover:border hover:border-cyan-500  hover:text-cyan-500`}
                onClick={all}
              >
                All
              </button>{" "}
            </div>
            <div>
              <button
                className={`rounded-full hover:border w-[70px] h-[40px] ${
                  Arrtype === "app" ? "border border-cyan-500" : ""
                }  hover:border-cyan-500  hover:text-cyan-500`}
                onClick={app}
              >
                {" "}
                App{" "}
              </button>{" "}
            </div>
            <div>
              {" "}
              <button
                className={`rounded-full hover:border w-[70px] h-[40px]  ${
                  Arrtype === "web" ? "border border-cyan-500" : ""
                } hover:border-cyan-500 hover:text-cyan-500`}
                onClick={web}
              >
                Web
              </button>{" "}
            </div>
          </div>
          <div className="w-[90%]  grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-14 m-auto">
            {arr.map((e, i) => {
              if (e.type === Arrtype) {
                return (
                  <>
                    <PortfolioCard e={e} />
                  </>
                );
              }
              if (Arrtype === "all") {
                return (
                  <>
                    <PortfolioCard e={e} />
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
