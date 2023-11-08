import about1 from "@/assets/images/new/responsive.gif";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div
      id="aboutus"
      className="mt-36 sm:mt-16 flex flex-col xl:flex-row justify-center"
    >
      <div className="bg-[#F6F9FF] flex flex-col m-auto xl:m-0 w-[90%] md:w-[560px] xl:w-auto  justify-center p-[40px]">
        <div className="text-cyan-500 text-[14px] ">
          <h3>WHO WE ARE</h3>
        </div>
        <div className=" !text-[20px] sm:!text-[28px] text-[bold] text-black]">
          <h2>
            Embark your Digital Journey with Our <br /> Web App, Maestros
          </h2>
        </div>
        <div>
          Universal Tech is a digital platform where innovation meets expertise.
          We are a leading <br />
          software development agency that empowers clients to embrace modern
          technology. <br /> With a innovation, we craft powerful and
          user-centric web applications that team of <br /> passionate and
          skilled professionals, we deliver cutting-edge software services. We{" "}
          <br />
          craft transformational digital products like web applications and UX
          designs that drive
          <br />
          growth and elevate brands. With modernized vital systems, we enable
          enterprises to
          <br />
          transform data into business advantages. Explore our world of
          technology, and let us <br />
          transform your ideas into reality.
        </div>
      </div>
      <div className="w-[90%] m-auto md:w-[558px] xl:m-0 h-[419px]">
        <Image alt="about1" src={about1} />
      </div>
    </div>
  );
}
