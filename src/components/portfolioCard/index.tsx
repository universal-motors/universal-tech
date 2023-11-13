import Image from "next/image";
import React from "react";
type Prop = {
  e: ArrType;
};
type ArrType = {
  image: any;
  type: string;
  description: string;
  heading: string;
};
export default function PortfolioCard({ e }: Prop) {
  return (
    <div className="w-[90%] sm:w-[450px] m-auto h-[450px] border  group hover:text-[#1CA9C6]">
      <Image
        alt="bistroChat"
        src={e.image}
        style={{
          position: "absolute",
          width: "440px",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <div className="absolute  hover:bg-white  hover:!bg-opacity-80 w-[449px] h-[445px] flex items-center justify-center flex-col   ">
        <p className=" group-hover:font-bold !hidden group-hover:!flex ">
          {e.heading}
        </p>
        <div className="!hidden group-hover:!flex ">
          <div className="flex flex-col justify-center items-center">
            <div>{e.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
