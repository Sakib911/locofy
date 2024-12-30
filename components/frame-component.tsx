import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] flex flex-row items-center justify-center gap-9 mq1825:flex-wrap ${className}`}
    >
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/plesk@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/smartermail@2x.png"
      />
      <Image
        className="h-[78px] w-[155px] relative object-cover"
        loading="lazy"
        width={155}
        height={78}
        alt=""
        src="/cloudlinux@2x.png"
      />
      <Image
        className="h-[78px] w-[155px] relative object-cover"
        loading="lazy"
        width={155}
        height={78}
        alt=""
        src="/facebook@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/aws@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/virtualizor@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/plesk@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/smartermail@2x.png"
      />
      <Image
        className="h-[78px] w-[155px] relative object-cover"
        width={155}
        height={78}
        alt=""
        src="/cloudlinux@2x.png"
      />
      <Image
        className="h-[78px] w-[155px] relative object-cover"
        width={155}
        height={78}
        alt=""
        src="/facebook@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/aws@2x.png"
      />
      <Image
        className="h-[78px] w-[154px] relative object-cover"
        width={154}
        height={78}
        alt=""
        src="/virtualizor@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
