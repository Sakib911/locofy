import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export type BackgroundBorderType = {
  className?: string;
  bgRemove1: string;
  icArrowDownPrimarysvg: string;
  resellerHosting?: string;
  image6: string;
  hosting: string;

  /** Style props */
  backgroundBorderRight?: CSSProperties["right"];
  backgroundBorderLeft?: CSSProperties["left"];
  resellerHostingDisplay?: CSSProperties["display"];
  resellerHostingMinWidth?: CSSProperties["minWidth"];
  buttonBoxShadow?: CSSProperties["boxShadow"];
};

const BackgroundBorder: NextPage<BackgroundBorderType> = ({
  className = "",
  backgroundBorderRight,
  backgroundBorderLeft,
  bgRemove1,
  icArrowDownPrimarysvg,
  resellerHosting,
  resellerHostingDisplay,
  resellerHostingMinWidth,
  buttonBoxShadow,
  image6,
  hosting,
}) => {
  const backgroundBorderStyle: CSSProperties = useMemo(() => {
    return {
      right: backgroundBorderRight,
      left: backgroundBorderLeft,
    };
  }, [backgroundBorderRight, backgroundBorderLeft]);

  const resellerHostingStyle: CSSProperties = useMemo(() => {
    return {
      display: resellerHostingDisplay,
      minWidth: resellerHostingMinWidth,
    };
  }, [resellerHostingDisplay, resellerHostingMinWidth]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: buttonBoxShadow,
    };
  }, [buttonBoxShadow]);

  return (
    <div
      className={`absolute w-[calc(100%_-_1558px)] top-[1466px] right-[969px] left-[589px] rounded-xl bg-neutral-white border-cadetblue-200 border-[1px] border-solid box-border h-[521px] text-left text-sm text-branding-hostinger-meteorite font-outfit ${className}`}
      style={backgroundBorderStyle}
    >
      <Image
        className="absolute top-[107px] left-[0px] w-[345px] h-[392px] object-cover"
        width={345}
        height={392}
        alt=""
        src={bgRemove1}
      />
      <div className="absolute top-[1195.5px] left-[calc(50%_-_16.6px)] flex flex-row items-start justify-start">
        <div className="flex flex-col items-start justify-center py-0 pl-2 pr-0">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-center">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 max-w-[24px]"
                width={24}
                height={24}
                alt=""
                src={icArrowDownPrimarysvg}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[137px] left-[32px] w-[296px] h-[353px]">
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <b
            className="absolute top-[0px] left-[0px] text-xl leading-[32px] font-plus-jakarta-sans text-black mq450:text-base mq450:leading-[26px]"
            style={resellerHostingStyle}
          >
            {resellerHosting}
          </b>
          <div className="absolute top-[36px] left-[0px] leading-[24px] text-dimgray-100">
            Everything you need to create your website.
          </div>
          <div className="absolute top-[73px] left-[calc(50%_-_145.5px)] flex flex-row items-center justify-start gap-1 min-h-[32px] text-branding-hostinger-storm-gray font-fonts-hostingercom-dm-sans-regular-14">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative [text-decoration:line-through] leading-[24px]">
                  $
                </div>
              </div>
              <div className="flex flex-col items-start justify-start font-outfit">
                <div className="relative [text-decoration:line-through] leading-[24px]">
                  11.99
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-aliceblue-100 flex flex-row items-start justify-start py-1 px-3 text-cadetblue-100 font-outfit">
              <div className="relative leading-[24px] font-semibold">
                Save 75%
              </div>
            </div>
          </div>
          <div className="absolute top-[137px] left-[0px] text-xl leading-[34px] font-fonts-hostingercom-dm-sans-regular-14 flex items-center min-w-[12px] mq450:text-base mq450:leading-[27px]">
            $
          </div>
          <div className="absolute top-[137px] left-[110.8px] text-xl leading-[34px] flex items-center min-w-[37.5px] mq450:text-base mq450:leading-[27px]">
            /mo
          </div>
          <b className="absolute top-[118px] left-[11.6px] text-29xl leading-[56px] flex text-black items-center min-w-[99.6px] mq450:text-10xl mq450:leading-[34px] mq925:text-19xl mq925:leading-[45px]">
            2.99
          </b>
          <div className="absolute top-[173px] left-[0px] leading-[24px] inline-block min-w-[121px]">
            For 48-month term
          </div>
          <div className="absolute top-[173px] left-[166px] h-6 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border text-lg text-mediumblue-100">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-semibold">
                  +3 months free
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[274px] left-[0px] flex flex-col items-start justify-start text-branding-hostinger-storm-gray">
            <div className="flex flex-row items-start justify-start gap-1">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start font-fonts-hostingercom-dm-sans-regular-14">
                  <div className="relative leading-[24px]">$</div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">7.99</div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">/mo</div>
                </div>
              </div>
              <div className="relative leading-[24px]">when you renew</div>
            </div>
          </div>
          <div className="absolute w-full top-[315px] right-[0px] left-[0px] border-branding-hostinger-periwinkle border-t-[1px] border-solid box-border h-px" />
          <div className="absolute top-[329px] left-[91px] text-base leading-[24px] font-semibold text-mediumblue-100 text-center inline-block min-w-[112px]">
            See all features
          </div>
          <Button
            className="absolute top-[210px] left-[calc(50%_-_148px)] min-h-[48px]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#2f8eaa",
              fontSize: "16",
              borderColor: "#2f8eaa",
              borderRadius: "100px",
              "&:hover": { borderColor: "#2f8eaa" },
              width: 296,
            }}
            style={buttonStyle}
          >
            Choose plan
          </Button>
        </div>
      </div>
      <Image
        className="absolute top-[194px] right-[0px] rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none w-[105px] h-[194px] object-cover"
        width={105}
        height={194}
        alt=""
        src={image6}
      />
      <Image
        className="absolute top-[42px] left-[32px] w-20 h-20 overflow-hidden"
        width={80}
        height={80}
        alt=""
        src={hosting}
      />
    </div>
  );
};

export default BackgroundBorder;
