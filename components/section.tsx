import type { NextPage } from "next";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <footer
      className={`absolute top-[9085px] left-[0px] bg-gray-500 w-full h-[607.9px] text-left text-xl text-silver font-outfit ${className}`}
    >
      <div className="absolute h-full w-[calc(100%_-_1260px)] top-[0px] right-[300px] bottom-[0px] left-[960px] border-gray-1000 border-l-[1px] border-solid box-border">
        <div className="absolute top-[75px] left-[71px] w-[679px] h-[457.9px]">
          <div className="absolute top-[407.9px] left-[59px] w-[481px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] leading-[25px] mq450:text-base mq450:leading-[20px]">
              <p className="m-0">
                Please sign up to follow the latest news and events from us, we
              </p>
              <p className="m-0">promise not to spam your inbox.</p>
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-full">
            <FormControl
              className="absolute w-full top-[320px] right-[0px] left-[0px] font-outfit text-base text-neutral-white"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                backgroundColor: "#353e47",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "60px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "60px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "60px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "60px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "60px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Outfit",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "30px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="36px"
                    height="29px"
                    src="/button.svg"
                    style={{ marginRight: "25px" }}
                  />
                )}
              >
                <MenuItem>Don't miss the latest news from us...</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="absolute top-[calc(50%_+_187.95px)] left-[0px] rounded-20xl bg-darkslategray-300 w-[39px] h-[39px] text-base text-neutral-white font-font-awesome-5-free">
              <div className="absolute top-[11.5px] left-[12.5px] leading-[16px] flex items-center min-w-[14.4px]">
                
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[246px] h-[229.9px]">
              <div className="absolute top-[0px] left-[0px] text-4xl leading-[22.9px] font-semibold font-plus-jakarta-sans text-neutral-white mq450:text-lg mq450:leading-[18px]">
                Our Services
              </div>
              <div className="absolute top-[44.9px] left-[0px] whitespace-nowrap mq450:text-base">
                Online Business Consulting
              </div>
              <div className="absolute top-[84.9px] left-[0px] mq450:text-base">
                Portfolio Management
              </div>
              <div className="absolute top-[124.9px] left-[0px] mq450:text-base">
                Search Engine Optimization
              </div>
              <a className="[text-decoration:none] absolute top-[164.9px] left-[0px] text-[inherit] mq450:text-base">
                Managed IT Services
              </a>
              <div className="absolute top-[204.9px] left-[0px] whitespace-nowrap mq450:text-base">
                Conversion Optimization
              </div>
            </div>
            <div className="absolute top-[0px] left-[307px] w-[179px] h-[227.9px]">
              <div className="absolute top-[0px] left-[0px] text-4xl leading-[22.9px] font-semibold font-plus-jakarta-sans text-neutral-white inline-block min-w-[127px] mq450:text-lg mq450:leading-[18px]">
                Quick Links
              </div>
              <a className="[text-decoration:none] absolute top-[42.9px] left-[0px] text-[inherit] inline-block min-w-[81px] mq450:text-base">
                About Us
              </a>
              <div className="absolute top-[82.9px] left-[0px] mq450:text-base">
                Leadership Member
              </div>
              <div className="absolute top-[122.9px] left-[0px] inline-block min-w-[112px] mq450:text-base">
                Our Services
              </div>
              <a className="[text-decoration:none] absolute top-[162.9px] left-[0px] text-[inherit] inline-block min-w-[71px] mq450:text-base">
                Careers
              </a>
              <a className="[text-decoration:none] absolute top-[202.9px] left-[0px] text-[inherit] inline-block min-w-[113px] mq450:text-base">
                Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[67px] left-[210px] w-[654px] h-[474px] text-lightslategray-100">
        <div className="absolute top-[109px] left-[0px] leading-[30px] font-public-sans text-silver flex items-center mq450:text-base mq450:leading-[24px]">
          <span className="w-full">
            <p className="m-0">
              We understand that business can be chaotic. That’s where we come
              in.
            </p>
            <p className="m-0">
              We’re focused on adding some much-needed balance to the mix.
            </p>
          </span>
        </div>
        <div className="absolute top-[194px] left-[0px] text-lgi-4 leading-[22.9px] font-medium text-neutral-white flex items-center">
          Comany Information
        </div>
        <div className="absolute top-[238px] left-[37px] leading-[25px] text-silver mq450:text-base mq450:leading-[20px]">
          Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates
        </div>
        <div className="absolute top-[283px] left-[37px] leading-[25px] text-silver mq450:text-base mq450:leading-[20px]">
          Send mail: info@digitalpylot.io
        </div>
        <div className="absolute top-[328px] left-[37px] leading-[25px] text-silver mq450:text-base mq450:leading-[20px]">
          Call us: +971 52 271 1010
        </div>
        <a className="[text-decoration:none] absolute top-[449px] left-[0px] text-[inherit] text-center inline-block min-w-[88px] mq450:text-base">
          Facebook
        </a>
        <div className="absolute top-[449px] left-[101.7px] text-center inline-block min-w-[92px] mq450:text-base">
          Twitter / X
        </div>
        <div className="absolute top-[449px] left-[207.3px] text-center inline-block min-w-[100px] mq450:text-base">
          Instagrams
        </div>
        <div className="absolute top-[449px] left-[326.2px] text-center inline-block min-w-[53px] mq450:text-base">
          Skype
        </div>
        <div className="absolute top-[449px] left-[397.9px] text-center inline-block min-w-[93px] mq450:text-base">
          Telegrams
        </div>
        <Image
          className="absolute top-[0px] left-[0px] w-[191px] h-[78px] object-cover"
          loading="lazy"
          width={191}
          height={78}
          alt=""
          src="/bg-removepngw-1@2x.png"
        />
      </div>
      <Image
        className="absolute top-[305px] left-[210px] w-[26px] h-[26px] overflow-hidden"
        width={26}
        height={26}
        alt=""
        src="/location.svg"
      />
      <Image
        className="absolute top-[350px] left-[210px] w-[26px] h-[26px] overflow-hidden"
        width={26}
        height={26}
        alt=""
        src="/mail-1.svg"
      />
      <Image
        className="absolute top-[395px] left-[210px] w-[26px] h-[26px] overflow-hidden"
        width={26}
        height={26}
        alt=""
        src="/phonecall-1.svg"
      />
    </footer>
  );
};

export default Section;
