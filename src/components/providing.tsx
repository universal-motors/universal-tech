import image from "@/assets/images/card-item.png";
import QuickIcon from "@/assets/svgs/quick";
import Quick2Icon from "@/assets/svgs/quick2";
import Image from "next/image";

export default function Providing() {
  return (
    <div className="mt-24">
      <div className="text-center">
        <div className="text-[40px] font-bold">
          <h2>
            We are providing best <br />
            Digital Business Services
          </h2>
        </div>
        <div>
          <p className="text-[#737373] text-[14px] font-medium mt-5">
            Problems trying to resolve the conflict between the two major realms{" "}
            <br />
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex-col flex items-center justify-center lg:flex-row w-[90%] md:w-[50%] m-auto">
        <div className=" w-[90%] md:w-[597px] h-auto sm:h-[442px] mt-14 m-auto">
          <Image className="w-[90%] sm:h-[100%]" alt="img" src={image} />
        </div>
        <div className="mt-5 sm:mt-14 ml-10 lg:ml-1">
          <div className="text-[40px] font-bold">
            <h2>
              Most trusted in <br />
              our field
            </h2>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#737373] mt-5">
              Universal Tech is the platform you can trust with <br />
              your programming concerns to grow your <br />
              business digitally.
            </p>
          </div>
          <div className="flex mt-10">
            <div>
              <QuickIcon />
            </div>
            <div>
              <h5 className="font-bold ml-3">
                the quick fox jumps over the lazy <br />
                dog
              </h5>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#737373] ml-10 mt-2">
              Things on a very small scale ...
            </p>
          </div>
          <div className="flex mt-10">
            <div>
              <Quick2Icon />
            </div>
            <div>
              <h5 className="font-bold ml-3">
                the quick fox jumps over the lazy <br />
                dog
              </h5>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#737373] ml-10 mt-2">
              Things on a very small scale ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
