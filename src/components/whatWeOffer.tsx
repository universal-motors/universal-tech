import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function WhatWeOffer() {
  return (
    <div id="services">
      <div className="text-center font-bold mt-40">
        <div className="text-[#00A0C1]">WHAT WE OFFER</div>
        <div className="text-black !text-[20px] md:!text-[38px] font-bold">
          Comprehensive Services and Solutions
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-auto gap-5 mt-28">
        <div className="flex flex-col justify-center  lg:ml-5 text-center items-center  group  w-[90%] lg:w-[356px]  h-[415px] shadow rounded hover:bg-[#2DB6FA] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#2DB6FA]  group-hover:bg-[#ffffff] bg-[#2DB6FA]/40 rounded-lg">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">
            Custom Mobile App Development
          </div>
          <div>
            <div>From scalable web applications to robust </div>
            <div>we have bespoke software solutions </div>
            <div>tailored to your business requirements. </div>
          </div>
        </div>
        <div className="flex flex-col  lg:mr-1 justify-center text-center group items-center w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#F68C09] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#F68C09]  group-hover:bg-[#ffffff] bg-[#F68C09]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">Web Development</div>
          <div>
            <div>Responsive, user-friendly websites with the </div>
            <div>latest technology to ensure your website is </div>
            <div>appealing and enhance your online presence.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center  lg:mr-5 text-center items-center group w-[90%] lg:w-[356px]  h-[415px] shadow rounded hover:bg-[#08DA4E] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#08DA4E]  group-hover:bg-[#ffffff] bg-[#08DA4E]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">E-commerce Solutions</div>
          <div>
            <div>Boosting tailored e-commerce solutions to </div>
            <div>create secure and digital online stores to </div>
            <div>maximize your revenue and attract more customers.</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-auto gap-5 mt-8">
        <div className="flex flex-col justify-center  text-center items-center group w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#E9222C] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#E9222C]  group-hover:bg-[#ffffff] bg-[#E9222C]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">
            Desktop App Development{" "}
          </div>
          <div>
            <div>A diverse range of desktop applications for </div>
            <div>Windows and macOS are made to enhance user </div>
            <div>interaction, improve efficiency, and increase</div>
            <div>the productivity of your business.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center items-center group w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#B50EDF] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#B50EDF]  group-hover:bg-[#ffffff] bg-[#B50EDF]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">
            Cross-Platform App Development
          </div>
          <div>
            <div>Creating seamless user experience by designing</div>
            <div>intuitive apps for both IOS and Android </div>
            <div>platforms to save time and resources for clients.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center  text-center  items-center group w-[90%] lg:w-[356px] h-[415px] shadow rounded hover:bg-[#F51F9C] hover:text-[#ffffff]">
          <div className="w-20 h-20 pt-7 text-[#F51F9C]  group-hover:bg-[#ffffff] bg-[#F51F9C]/40 rounded-lg ">
            <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
          </div>
          <div className="text-[28px] font-bold mt-9">
            CMS Website Development
          </div>
          <div>
            <div>To ensure a customizable and ascendible web </div>
            <div>presence, we provide services in platforms like </div>
            <div>WordPress, Drupal, and Joomla. </div>
          </div>
        </div>
      </div>
    </div>
  );
}
