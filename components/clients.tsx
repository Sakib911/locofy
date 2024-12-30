import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type ClientsType = {
  className?: string;
};

const Clients: NextPage<ClientsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[264px] left-[1060px] w-[650.1px] h-[605.3px] text-left text-base text-gray-600 font-outfit ${className}`}
    >
      <Image
        className="absolute top-[36px] left-[0px] rounded-tl-981xl rounded-tr-xl rounded-b-xl w-[362px] h-[328px] object-cover"
        width={362}
        height={328}
        alt=""
        src="/background@2x.png"
      />
      <div className="absolute top-[74px] left-[381.3px] w-[267px] h-[289.6px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_40px_20px_rgba(35,_119,_148,_0.5)] rounded-xl bg-whitesmoke w-full h-full" />
        <Image
          className="absolute top-[241px] left-[24.7px] w-[217.5px] h-[6.6px]"
          width={218}
          height={7}
          alt=""
          src="/image.svg"
        />
        <b className="absolute top-[39.2px] left-[25.8px] text-65xl tracking-[-0.03em] leading-[150%] font-plus-jakarta-sans mq450:text-6xl mq450:leading-[50px] mq925:text-23xl mq925:leading-[76px]">
          230+
        </b>
        <div className="absolute top-[122.2px] left-[25.8px] leading-[150%] font-semibold text-blueviolet inline-block w-[211px]">
          Satisficed Clients
        </div>
        <div className="absolute top-[153.2px] left-[25.8px] leading-[150%] font-medium text-dimgray-200 inline-block w-[211px]">
          some big companies that we work with, and trust us very much
        </div>
      </div>
      <Image
        className="absolute top-[382.6px] left-[44px] w-[606.1px] h-[222.6px]"
        width={606}
        height={223}
        alt=""
        src="/client-one.svg"
      />
      <Image
        className="absolute top-[0px] left-[182px] w-[111.3px] h-[111.3px]"
        loading="lazy"
        width={111}
        height={111}
        alt=""
        src="/group-427320837.svg"
      />
    </div>
  );
};

export default Clients;
