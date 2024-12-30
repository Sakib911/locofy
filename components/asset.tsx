import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type AssetType = {
  className?: string;
};

const Asset: NextPage<AssetType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-full top-[0px] bottom-[0px] left-[234px] w-[972px] text-left text-5xl text-darkslategray-200 font-outfit ${className}`}
    >
      <div className="absolute top-[49px] left-[29px] [filter:blur(288px)] rounded-[50%] bg-aqua w-[424px] h-[383px]" />
      <Image
        className="absolute top-[104px] left-[113px] rounded-xl w-[695px] h-[711px] object-contain"
        width={695}
        height={711}
        alt=""
        src="/image-2@2x.png"
      />
      <div className="absolute h-full top-[0px] bottom-[0px] left-[394px] w-[542px]">
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] [filter:drop-shadow(16px_55px_120px_rgba(1,_50,_109,_0.2))] w-full h-full">
              <div className="absolute top-[256px] left-[271px] [backdrop-filter:blur(28px)] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-aliceblue-200 flex flex-col items-start justify-start p-8 gap-8">
                <div className="w-[86px] h-[86px] shadow-[0px_19px_56px_rgba(0,_44,_96,_0.16)] rounded-t-37xl rounded-br-37xl rounded-bl-none bg-cadetblue-100" />
                <div className="relative [text-decoration:underline] leading-[32px] font-semibold mq450:text-lgi mq450:leading-[26px]">
                  eCommerce Solution
                </div>
              </div>
              <div className="absolute top-[512px] left-[0px] [backdrop-filter:blur(20px)] rounded-tl-xl rounded-tr-none rounded-b-xl bg-cadetblue-100 flex flex-col items-start justify-start p-8 gap-8 text-neutral-white">
                <div className="shadow-[0px_19px_56px_#1e6d84] rounded-t-37xl rounded-br-37xl rounded-bl-none bg-darkslategray-100 flex flex-row items-start justify-start p-6">
                  <div className="h-12 w-12 relative overflow-hidden shrink-0" />
                </div>
                <div className="w-[207px] relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                  Social Media Marketing
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(66px)] rounded-xl bg-aliceblue-300 border-neutral-white border-[2px] border-solid flex flex-col items-start justify-start py-[29px] px-[30px] gap-8 text-cadetblue-100">
                <div className="h-24 shadow-[0px_19px_56px_rgba(0,_82,_180,_0.16)] rounded-t-37xl rounded-br-37xl rounded-bl-none bg-cadetblue-100 border-cadetblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[22px] px-[23px]">
                  <div className="h-12 w-12 relative overflow-hidden shrink-0" />
                </div>
                <div className="w-[207px] relative [text-decoration:underline] leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                  Domain Registration
                </div>
              </div>
            </div>
            <Image
              className="absolute top-[564px] left-[48px] w-[63px] h-[63px] overflow-hidden"
              width={63}
              height={63}
              alt=""
              src="/socialmedia.svg"
            />
            <Image
              className="absolute top-[59px] left-[56px] w-12 h-12 overflow-hidden"
              loading="lazy"
              width={48}
              height={48}
              alt=""
              src="/webdomain-1.svg"
            />
          </div>
        </div>
        <Image
          className="absolute top-[314px] left-[327px] w-[38px] h-[38px]"
          width={38}
          height={38}
          alt=""
          src="/group-1000001815.svg"
        />
      </div>
    </div>
  );
};

export default Asset;
