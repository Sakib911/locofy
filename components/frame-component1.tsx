import type { NextPage } from "next";
import {
  Button,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Typography,
} from "@mui/material";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[3008px] left-[calc(50%_-_960px)] bg-black w-full h-[220px] overflow-hidden text-left text-16xl text-neutral-white font-plus-jakarta-sans ${className}`}
    >
      <form className="m-0 absolute top-[40px] left-[1134px] w-[576px] h-[139px]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-neutral-white w-full h-[60px] overflow-hidden">
          <Button
            className="absolute h-[calc(100%_-_10px)] top-[5px] bottom-[5px] left-[428px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#2c88a3",
              borderRadius: "50px",
              "&:hover": { background: "#2c88a3" },
              width: 141,
              height: 50,
            }}
          >
            Search
          </Button>
          <div className="absolute top-[21px] left-[35px] text-base font-outfit text-black text-left opacity-[0.3]">
            Type Your Domain Name
          </div>
          <FormControl
            className="absolute top-[20px] left-[354px] font-inter text-base text-black"
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "56px",
              height: "19px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "19px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "19px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "19px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "19px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
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
                  width="16px"
                  height="16px"
                  src="/arrow-chevron-down.svg"
                  style={{}}
                />
              )}
            >
              <MenuItem>.com</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="absolute top-[90px] left-[6px] text-lg font-outfit text-neutral-white text-left inline-block opacity-[0.9] min-w-[40px]">
          .com
        </div>
        <div className="absolute top-[122px] left-[2px] text-sm font-inter text-neutral-white text-left inline-block opacity-[0.6] min-w-[50px]">
          199/Mo
        </div>
        <div className="absolute top-[122px] left-[93px] text-sm font-inter text-neutral-white text-left inline-block opacity-[0.6] min-w-[49px]">
          179/Mo
        </div>
        <div className="absolute top-[122px] left-[195px] text-sm font-inter text-neutral-white text-left inline-block opacity-[0.6] min-w-[50px]">
          189/Mo
        </div>
        <div className="absolute top-[122px] left-[307px] text-sm font-inter text-neutral-white text-left inline-block opacity-[0.6] min-w-[50px]">
          199/Mo
        </div>
        <div className="absolute top-[122px] left-[410px] text-sm font-inter text-neutral-white text-left inline-block opacity-[0.6] min-w-[50px]">
          159/Mo
        </div>
        <div className="absolute top-[122px] left-[524px] text-sm font-inter text-neutral-white text-left inline-block opacity-[0.6] min-w-[52px]">
          299/Mo
        </div>
        <div className="absolute top-[90px] left-[109px] text-lg font-outfit text-neutral-white text-left inline-block opacity-[0.9] min-w-[33px]">
          .org
        </div>
        <div className="absolute top-[90px] left-[209px] text-lg font-outfit text-neutral-white text-left inline-block opacity-[0.9] min-w-[36px]">
          .info
        </div>
        <div className="absolute top-[90px] left-[310px] text-lg font-outfit text-neutral-white text-left inline-block opacity-[0.9] min-w-[47px]">
          .store
        </div>
        <div className="absolute top-[90px] left-[428px] text-lg font-outfit text-neutral-white text-left inline-block opacity-[0.9] min-w-[32px]">
          .net
        </div>
        <div className="absolute top-[90px] left-[529px] text-lg font-outfit text-neutral-white text-left inline-block opacity-[0.9] min-w-[47px]">
          .co.uk
        </div>
      </form>
      <div className="absolute top-[57px] left-[210px] w-[810px] h-[101px]">
        <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit font-bold font-[inherit] mq450:text-2xl mq925:text-9xl">
          Get 10% Off Today
        </h2>
        <div className="absolute top-[49px] left-[0px] text-lg leading-[26px] font-outfit inline-block w-[810px] opacity-[0.8]">
          Grab the holiday offer.This offer will end in 3 days.Hurry Up! Get
          your perfect domain starting from 149/Mo.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
