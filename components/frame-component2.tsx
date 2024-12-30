import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[6583px] left-[983px] w-[727px] flex flex-col items-center justify-start gap-5 max-w-full text-left text-6xl text-gray-600 font-plus-jakarta-sans ${className}`}
    >
      <div className="self-stretch bg-neutral-white border-cadetblue-100 border-t-[1px] border-solid border-cadetblue-100 border-b-[1px] border-solid box-border flex flex-col items-start justify-start pt-6 px-6 pb-[3px] gap-12 max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5">
          <div className="h-[57px] w-[448px] relative leading-[150%] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-xl mq450:leading-[30px]">
            Why is digital marketing important for my business?
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/minus.svg"
          />
        </div>
        <div className="relative text-lg leading-[180%] font-medium font-outfit text-gray-100 text-justify">
          Digital marketing allows businesses to reach and engage with a wider
          audience, generate leads, drive website traffic, and increase brand
          visibility. It provides measurable results, allows for targeted
          marketing efforts, and enables businesses to adapt and optimize their
          strategies based on data and insights.
        </div>
      </div>
      <div className="self-stretch bg-neutral-white border-cadetblue-100 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[26px] px-6 pb-6 max-w-full gap-5">
        <div className="h-[57px] w-[596px] relative leading-[150%] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-xl mq450:leading-[30px]">
          How can digital marketing help improve my website's visibility?
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src="/plus.svg"
        />
      </div>
      <div className="self-stretch bg-neutral-white border-cadetblue-100 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[26px] px-6 pb-6 max-w-full gap-5">
        <div className="h-[57px] w-[570px] relative leading-[150%] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-xl mq450:leading-[30px]">
          How long does it take to see results from digital marketing efforts?
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src="/plus.svg"
        />
      </div>
      <div className="self-stretch bg-neutral-white border-cadetblue-100 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[26px] px-6 pb-6 max-w-full gap-5">
        <div className="h-[57px] w-[534px] relative leading-[150%] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-xl mq450:leading-[30px]">
          How do you measure the success of digital marketing campaigns?
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src="/plus.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
