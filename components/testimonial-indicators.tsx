import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export type TestimonialIndicatorsType = {
  className?: string;
};

const TestimonialIndicators: NextPage<TestimonialIndicatorsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[7081px] left-[255px] w-[625px] h-[104px] text-left text-65xl text-neutral-white font-plus-jakarta-sans ${className}`}
    >
      <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[243px]">
        <b className="absolute top-[0px] left-[0px] tracking-[-0.03em] leading-[150%] mq450:text-6xl mq450:leading-[50px] mq925:text-23xl mq925:leading-[76px]">
          920+
        </b>
        <div className="absolute top-[90px] left-[0px] text-lgi leading-[170%] font-medium">
          Project finish with superbly
        </div>
      </div>
      <Image
        className="absolute top-[34px] left-[324px] rounded-[50%] w-[70px] h-[70px] object-cover"
        width={70}
        height={70}
        alt=""
        src="/indicator-dots@2x.png"
      />
      <Image
        className="absolute top-[34px] left-[401px] rounded-[50%] w-[70px] h-[70px] object-cover"
        width={70}
        height={70}
        alt=""
        src="/indicator-dots1@2x.png"
      />
      <Image
        className="absolute top-[34px] left-[478px] rounded-[50%] w-[70px] h-[70px] object-cover"
        width={70}
        height={70}
        alt=""
        src="/indicator-dots2@2x.png"
      />
      <Image
        className="absolute top-[34px] left-[555px] rounded-[50%] w-[70px] h-[70px] object-cover"
        width={70}
        height={70}
        alt=""
        src="/indicator-dots3@2x.png"
      />
    </div>
  );
};

export default TestimonialIndicators;
