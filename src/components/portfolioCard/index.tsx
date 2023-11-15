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
    <div className="w-[90%]  md:w-[450px] m-auto h-[450px] border  group hover:text-[#1CA9C6]">
      <Image
        alt="bistroChat"
        src={e.image}
        className="!w-[80%] md:!w-[440px]"
        style={{
          position: "absolute",
          // width: "440px",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <div className=" relative hover:!bg-white hover:!bg-opacity-80 w-full md:w-[449px] h-[445px] flex items-center justify-center flex-col text-center">
        <p className="group-hover:font-bold !hidden group-hover:!flex">
          {e.heading}
        </p>
        <div className="!hidden group-hover:!flex">
          <div className="flex items-center justify-center flex-col">
            {e.description}
          </div>
        </div>
      </div>
    </div>
  );
}
