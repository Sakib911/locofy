import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute w-[calc(100%_-_600px)] top-[8305px] right-[300px] left-[300px] h-[677px] overflow-hidden text-left text-smi-7 text-neutral-white font-outfit ${className}`}
    >
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[2215px] left-[-1305px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[176.4px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[1775px] left-[-865px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[176.4px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[1335px] left-[-425px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[96.2px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[895px] left-[15px] rounded-xl border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-full top-[301px] right-[1px] left-[1px] bg-cadetblue-100 h-[50px] font-inter">
          <div className="absolute top-[17px] left-[34px] tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[22px]">
            by
          </div>
          <div className="absolute top-[17px] left-[57.4px] text-smi-6 tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[54px]">
            admin
          </div>
          <div className="absolute top-[12px] left-[111.5px] text-lg font-public-sans flex items-center min-w-[13.9px]">{`_ `}</div>
          <div className="absolute top-[17px] left-[122.1px] text-smi-4 tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[95px]">
            Marketing
          </div>
        </div>
        <div className="absolute w-full top-[1px] right-[1px] left-[1px] h-[300px] overflow-hidden text-center text-16xl font-public-sans">
          <Image
            className="absolute w-full top-[calc(50%_-_150px)] right-[0px] left-[0px] rounded-t-xl rounded-b-none max-w-full overflow-hidden h-full object-cover"
            loading="lazy"
            width={408}
            height={300}
            alt=""
            src="/link--p7816x600webp@2x.png"
          />
          <div className="absolute right-[19px] bottom-[16px] [backdrop-filter:blur(10px)] rounded-8xs bg-gray-900 w-[71px] h-[90px]">
            <div className="absolute top-[11px] left-[calc(50%_-_21.8px)] leading-[45px] font-medium flex items-center justify-center min-w-[44px] mq450:text-2xl mq450:leading-[27px] mq925:text-9xl mq925:leading-[36px]">
              23
            </div>
            <a className="[text-decoration:none] absolute top-[57px] left-[calc(50%_-_12.7px)] text-mini leading-[33px] text-[inherit] flex items-center justify-center min-w-[26px]">
              Apr
            </a>
          </div>
        </div>
        <div className="absolute top-[488px] left-[35px] text-lg leading-[25px] capitalize text-dimgray-300 flex items-center">
          <span className="w-full">
            <p className="m-0">Quisque consectetur purus ut suscipit</p>
            <p className="m-0">faucibus. Sed at ornare ligula. Quisque</p>
            <p className="m-0">dignissim justo arcu, ut…</p>
          </span>
        </div>
        <div className="absolute w-[calc(100%_-_70px)] top-[373px] right-[35px] left-[35px] border-lightgray-100 border-b-[1px] border-solid box-border h-[88px] text-xl text-gray-400 font-plus-jakarta-sans">
          <div className="absolute top-[3px] left-[0px] w-[270.8px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] leading-[33px] capitalize font-semibold flex items-center w-full h-full mq450:text-base mq450:leading-[26px]">
              <span className="w-full">
                <p className="m-0">5 Impactful Elements That</p>
                <p className="m-0">Promote IT and Business</p>
              </span>
            </div>
          </div>
          <div className="absolute bottom-[0px] left-[0px] bg-cadetblue-100 w-[60px] h-px" />
        </div>
        <div className="absolute top-[582px] left-[35px] w-[204px] h-9 overflow-hidden text-lg-3 text-gray-400">
          <div className="absolute top-[6.5px] left-[0px] tracking-[0.16px] capitalize">
            Continue Reading
          </div>
          <Image
            className="absolute top-[calc(50%_-_18px)] left-[157px] w-9 h-9"
            loading="lazy"
            width={36}
            height={36}
            alt=""
            src="/svg.svg"
          />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[455px] left-[455px] rounded-xl border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-full top-[301px] right-[1px] left-[1px] bg-cadetblue-100 h-[50px] font-inter">
          <div className="absolute top-[17px] left-[34px] tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[22px]">
            by
          </div>
          <div className="absolute top-[17px] left-[57.4px] text-smi-6 tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[54px]">
            admin
          </div>
          <div className="absolute top-[12px] left-[111.5px] text-lg font-public-sans flex items-center min-w-[13.9px]">{`_ `}</div>
          <div className="absolute top-[17px] left-[122.1px] text-xs tracking-[2.4px] leading-[26px] uppercase flex items-center">
            Startup Consulting
          </div>
        </div>
        <div className="absolute w-full top-[1px] right-[1px] left-[1px] rounded-t-3xs rounded-b-none h-[300px] overflow-hidden text-center text-16xl font-public-sans">
          <Image
            className="absolute w-full top-[calc(50%_-_150px)] right-[0px] left-[0px] rounded-t-xl rounded-b-none max-w-full overflow-hidden h-full object-cover"
            loading="lazy"
            width={408}
            height={300}
            alt=""
            src="/link--p6816x600webp@2x.png"
          />
          <div className="absolute right-[19px] bottom-[16px] [backdrop-filter:blur(10px)] rounded-8xs bg-gray-900 w-[71px] h-[90px]">
            <div className="absolute top-[11px] left-[calc(50%_-_21.8px)] leading-[45px] font-medium flex items-center justify-center min-w-[44px] mq450:text-2xl mq450:leading-[27px] mq925:text-9xl mq925:leading-[36px]">
              23
            </div>
            <div className="absolute top-[57px] left-[calc(50%_-_12.7px)] text-mini leading-[33px] flex items-center justify-center min-w-[26px]">
              Apr
            </div>
          </div>
        </div>
        <div className="absolute top-[488px] left-[35px] text-lg leading-[25px] capitalize text-dimgray-300 flex items-center">
          <span className="w-full">
            <p className="m-0">Quisque consectetur purus ut suscipit</p>
            <p className="m-0">faucibus. Sed at ornare ligula. Quisque</p>
            <p className="m-0">dignissim justo arcu, ut…</p>
          </span>
        </div>
        <div className="absolute w-[calc(100%_-_70px)] top-[373px] right-[35px] left-[35px] border-lightgray-100 border-b-[1px] border-solid box-border h-[88px] text-xl text-gray-400 font-plus-jakarta-sans">
          <div className="absolute top-[3px] left-[0px] w-[304px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] leading-[33px] capitalize font-semibold flex items-center w-full h-full mq450:text-base mq450:leading-[26px]">
              <span className="w-full">
                <p className="m-0">Revolutionizing the Future of</p>
                <p className="m-0">Financial Services</p>
              </span>
            </div>
          </div>
          <div className="absolute bottom-[0px] left-[0px] bg-cadetblue-100 w-[60px] h-px" />
        </div>
        <div className="absolute top-[582px] left-[35px] w-[204px] h-9 overflow-hidden text-lg-3 text-gray-400">
          <div className="absolute top-[6.5px] left-[0px] tracking-[0.16px] capitalize">
            Continue Reading
          </div>
          <Image
            className="absolute top-[calc(50%_-_18px)] left-[157px] w-9 h-9"
            width={36}
            height={36}
            alt=""
            src="/svg.svg"
          />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[15px] left-[895px] rounded-xl border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-full top-[301px] right-[1px] left-[1px] bg-cadetblue-100 h-[50px] font-inter">
          <div className="absolute top-[17px] left-[34px] tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[22px]">
            by
          </div>
          <div className="absolute top-[17px] left-[57.4px] text-smi-6 tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[54px]">
            admin
          </div>
          <div className="absolute top-[12px] left-[111.5px] text-lg font-public-sans flex items-center min-w-[13.9px]">{`_ `}</div>
          <div className="absolute top-[17px] left-[122.1px] text-smi-8 tracking-[2.4px] leading-[26px] uppercase flex items-center min-w-[99px]">
            Corporate
          </div>
        </div>
        <div className="absolute w-full top-[1px] right-[1px] left-[1px] h-[300px] overflow-hidden text-center text-16xl font-public-sans">
          <Image
            className="absolute w-full top-[calc(50%_-_150px)] right-[0px] left-[0px] rounded-t-xl rounded-b-none max-w-full overflow-hidden h-full object-cover"
            loading="lazy"
            width={408}
            height={300}
            alt=""
            src="/link--p3816x600webp@2x.png"
          />
          <div className="absolute right-[19px] bottom-[16px] [backdrop-filter:blur(10px)] rounded-8xs bg-gray-900 w-[71px] h-[90px]">
            <div className="absolute top-[11px] left-[calc(50%_-_21.8px)] leading-[45px] font-medium flex items-center justify-center min-w-[44px] mq450:text-2xl mq450:leading-[27px] mq925:text-9xl mq925:leading-[36px]">
              23
            </div>
            <div className="absolute top-[57px] left-[calc(50%_-_12.7px)] text-mini leading-[33px] flex items-center justify-center min-w-[26px]">
              Apr
            </div>
          </div>
        </div>
        <div className="absolute top-[488px] left-[35px] text-lg leading-[25px] capitalize text-dimgray-300 flex items-center">
          <span className="w-full">
            <p className="m-0">Quisque consectetur purus ut suscipit</p>
            <p className="m-0">faucibus. Sed at ornare ligula. Quisque</p>
            <p className="m-0">dignissim justo arcu, ut…</p>
          </span>
        </div>
        <div className="absolute w-[calc(100%_-_70px)] top-[373px] right-[35px] left-[35px] border-lightgray-100 border-b-[1px] border-solid box-border h-[88px] text-xl text-gray-400 font-plus-jakarta-sans">
          <div className="absolute top-[3px] left-[0px] w-[320.9px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] leading-[33px] capitalize font-semibold flex items-center w-full h-full mq450:text-base mq450:leading-[26px]">
              <span className="w-full">
                <p className="m-0">A Guide to Embracing</p>
                <p className="m-0">Meaningful Change in Banking</p>
              </span>
            </div>
          </div>
          <div className="absolute bottom-[0px] left-[0px] bg-cadetblue-100 w-[60px] h-px" />
        </div>
        <div className="absolute top-[582px] left-[35px] w-[204px] h-9 overflow-hidden text-lg-3 text-gray-400">
          <div className="absolute top-[6.5px] left-[0px] tracking-[0.16px] capitalize">
            Continue Reading
          </div>
          <Image
            className="absolute top-[calc(50%_-_18px)] left-[157px] w-9 h-9"
            width={36}
            height={36}
            alt=""
            src="/svg.svg"
          />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[-425px] left-[1335px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[176.4px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[-865px] left-[1775px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[176.4px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[-1305px] left-[2215px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[96.2px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[-1745px] left-[2655px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[91.9px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[-2185px] left-[3095px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[176.4px] h-[15px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_910px)] top-[30px] right-[-2625px] left-[3535px] border-lightgray-200 border-[1px] border-solid box-border h-[647px]">
        <div className="absolute w-[calc(100%_-_2px)] top-[301px] right-[1px] left-[1px] bg-gray-300 h-[50px]">
          <div className="absolute top-[17px] left-[34px] w-[19px] h-[15px]" />
          <div className="absolute top-[17px] left-[57.4px] w-[51.1px] h-[15px]" />
          <div className="absolute top-[17px] left-[122.1px] w-[96.2px] h-[15px]" />
        </div>
      </div>
    </section>
  );
};

export default Container;
