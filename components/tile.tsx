import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type TileType = {
  className?: string;
  websiteDesign?: string;
  icArrow: string;
  image6: string;
  image7: string;
  dOnlineDesignIsolatedIconIllu: string;

  /** Style props */
  tileLeft?: CSSProperties["left"];
  dOnlineDesignIsolatedIconTop?: CSSProperties["top"];
  dOnlineDesignIsolatedIconHeight?: CSSProperties["height"];
};

const Tile: NextPage<TileType> = ({
  className = "",
  tileLeft,
  websiteDesign,
  icArrow,
  image6,
  image7,
  dOnlineDesignIsolatedIconIllu,
  dOnlineDesignIsolatedIconTop,
  dOnlineDesignIsolatedIconHeight,
}) => {
  const tileStyle: CSSProperties = useMemo(() => {
    return {
      left: tileLeft,
    };
  }, [tileLeft]);

  const dOnlineDesignIsolatedIconStyle: CSSProperties = useMemo(() => {
    return {
      top: dOnlineDesignIsolatedIconTop,
      height: dOnlineDesignIsolatedIconHeight,
    };
  }, [dOnlineDesignIsolatedIconTop, dOnlineDesignIsolatedIconHeight]);

  return (
    <div
      className={`absolute h-[calc(100%_-_9297px)] top-[3470px] bottom-[5827px] left-[calc(50%_-_750px)] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] w-[369px] text-left text-base text-midnightblue font-plus-jakarta-sans ${className}`}
      style={tileStyle}
    >
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] rounded-xl bg-neutral-white" />
      <div className="absolute top-[268px] left-[calc(50%_-_158.5px)] w-[316px] h-[141px]">
        <div className="absolute top-[0px] left-[calc(50%_-_158px)] w-[316px] h-5">
          <b className="absolute top-[0px] left-[calc(50%_-_158px)] inline-block w-full h-full">
            {websiteDesign}
          </b>
        </div>
        <div className="absolute top-[27px] left-[calc(50%_-_158px)] leading-[23px] font-outfit text-gray-200 text-justify">{`Designing your website seems daunting & intimidating, right? Let our expert web designers evaluate your business & have custom website design done at affordable prices!`}</div>
      </div>
      <div className="absolute top-[427px] left-[26px] flex flex-row items-center justify-start gap-5 text-xl text-cadetblue-100 font-outfit">
        <a className="[text-decoration:none] relative font-semibold text-[inherit] mq450:text-base">
          Learn More
        </a>
        <div className="w-10 rounded-21xl border-cadetblue-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 px-2">
          <Image
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
            width={14}
            height={14}
            alt=""
            src={icArrow}
          />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_21px)] top-[10px] right-[11px] left-[10px] h-[237px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-aliceblue-100 w-full h-full" />
        <Image
          className="absolute top-[0px] right-[0px] rounded-tl-3xs rounded-tr-none rounded-br-xl rounded-bl-none w-[105px] h-[194px] object-cover"
          width={105}
          height={194}
          alt=""
          src={image6}
        />
        <Image
          className="absolute top-[43px] right-[243px] rounded-tl-3xs rounded-tr-none rounded-br-2xl rounded-bl-none w-[105px] h-[194px] object-contain"
          width={105}
          height={194}
          alt=""
          src={image7}
        />
      </div>
      <Image
        className="absolute top-[55px] left-[94px] w-[182px] h-[147px] object-cover"
        width={182}
        height={147}
        alt=""
        src={dOnlineDesignIsolatedIconIllu}
        style={dOnlineDesignIsolatedIconStyle}
      />
    </div>
  );
};

export default Tile;
