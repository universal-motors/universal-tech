import CallIcon from "@/assets/svgs/call";
import LocationIcon from "@/assets/svgs/location";
import TweetIcon from "@/assets/svgs/tweet";

export default function Getintouch() {
  return (
    <div className="bg-[#F3F3F3] ">
      <div className="text-center">
        <div className="text-[40px] font-bold pt-16">
          <h1>Get In Touch</h1>
        </div>
        <div className="text-[14px] font-medium text-[#737373] mt-1">
          Ready to embark on your digital journey with Universal Tech? Get in
          touch to get <br />
          your desired service now. We’d love to hear from you.
        </div>
      </div>
      <div className=" flex-col md:flex-row  flex justify-center mt-24 items-end pb-10">
        <div className="m-auto md:m-0  w-[95%] md:w-[328px] h-[333px] bg-[#FFFFFF] flex flex-col justify-center text-center mt-7">
          <div className="ml-32">
            <CallIcon />
          </div>
          <div className="text-[#252B42] mt-2 font-semibold">
            <p>03373244955</p>
          </div>

          <div className="font-bold text-[#252B42] mt-4">Get Support</div>
          <div>
            <button className="text-[14px] w-[160px] h-[44px] text-[#FFA62B] border border-[#FFA62B] font-semibold mt-5 rounded hover:bg-[#FFA62B] hover:text-[#FFFFFF]">
              Submit Request
            </button>
          </div>
        </div>
        <div className="m-auto md:m-0  w-[95%] md:w-[328px] h-[393px] bg-[#252B42] flex flex-col justify-center text-center mt-7 lg:mt-1 ">
          <div className="ml-32">
            <LocationIcon />
          </div>
          <div className="text-[#FFFFFF] mt-2">
            <p>
              Suit 109 & 110 Mezzanine Floor, Maqbool Heights Gulshan-e-Iqbal,
              Block 10, Nipa Chowrangi, Karachi Pakistan.
            </p>
          </div>

          <div className="text-[#FFFFFF] font-bold mt-4">Get Support</div>
          <div>
            <button className="text-[14px] w-[160px] h-[44px] text-[#FFFFFF] border border-[#FFFFFF] mt-5 rounded hover:bg-[#FFFFFF] hover:text-[#252B42]">
              Submit Request
            </button>
          </div>
        </div>
        <div className="m-auto md:m-0 w-[95%] md:w-[328px] h-[333px] bg-[#FFFFFF] flex flex-col justify-center text-center mt-7">
          <div className="ml-32">
            <TweetIcon />
          </div>
          <div className="text-[#252B42] mt-2 font-semibold">
            <p>hrpk@universalmotorsltd.com</p>
          </div>

          <div className="font-bold text-[#252B42] mt-4">Get Support</div>
          <div>
            <button className="text-[14px] w-[160px] h-[44px] text-[#FFA62B]  border border-[#FFA62B] font-semibold mt-5 rounded hover:bg-[#FFA62B] hover:text-[#FFFFFF]">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
