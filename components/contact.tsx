import type { NextPage } from "next";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import Image from "next/image";

export type ContactType = {
  className?: string;
};

const Contact: NextPage<ContactType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full h-[150px] text-left text-lg text-neutral-white font-outfit ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-mediumblue-200 w-[1920px] h-[50px]" />
      <header className="absolute top-[50px] left-[0px] [backdrop-filter:blur(24px)] bg-gray-1100 w-[1920px] h-[100px]" />
      <Image
        className="absolute top-[71px] left-[210px] w-[141px] h-[58px] object-cover"
        width={141}
        height={58}
        alt=""
        src="/bg-remove-1-4@2x.png"
      />
      <div className="absolute top-[13px] left-[calc(50%_-_750px)] font-medium whitespace-nowrap">
        Enjoy 25% Off on Iran VPS - Limited Time Offer!
      </div>
      <div className="absolute top-[88px] left-[calc(50%_-_377px)] w-[753.5px] h-[23px] text-darkslategray-400">
        <a className="[text-decoration:none] absolute top-[0px] left-[calc(50%_+_288.75px)] text-[inherit] inline-block min-w-[96px] whitespace-nowrap">
          <span className="capitalize">C</span>
          <span className="lowercase">ONTACT</span>
          <span className="capitalize"> U</span>
          <span className="lowercase">S</span>
        </a>
        <FormControl
          className="absolute top-[0px] left-[calc(50%_-_376.75px)] font-outfit text-lg text-darkslategray-400"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "76.6px",
            height: "23px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "23px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "23px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#383737",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Outfit",
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
                width="9.6px"
                height="5.4px"
                src="/vector-3.svg"
                style={{ marginRight: "2.3092638912203256e-14px" }}
              />
            )}
          >
            <MenuItem>HOSTING</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="absolute top-[0px] left-[calc(50%_-_285.15px)] w-[78.6px] h-[23px]">
          <a className="[text-decoration:none] absolute top-[0px] left-[calc(50%_-_39.3px)] text-[inherit] inline-block min-w-[68px]">
            <span className="capitalize">D</span>
            <span className="lowercase">OMAIN</span>
          </a>
          <Image
            className="absolute h-[23.48%] w-[12.21%] top-[39.13%] right-[0%] bottom-[37.39%] left-[87.79%] max-w-full overflow-hidden max-h-full"
            width={10}
            height={5}
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <FormControl
          className="absolute top-[0px] left-[calc(50%_-_191.55px)] font-outfit text-lg text-darkslategray-400"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "20.252156602521566%",
            height: "23px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "23px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "23px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#383737",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Outfit",
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
                width="9.6px"
                height="5.4px"
                src="/vector-5.svg"
                style={{ marginRight: "2.3092638912203256e-14px" }}
              />
            )}
          >
            <MenuItem>DIGITAL MARKETING</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className="absolute top-[0px] left-[calc(50%_-_24.05px)] font-outfit text-lg text-darkslategray-400"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "69.6px",
            height: "23px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "23px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "23px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#383737",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Outfit",
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
                width="9.6px"
                height="5.4px"
                src="/vector-6.svg"
                style={{ marginRight: "2.3092638912203256e-14px" }}
              />
            )}
          >
            <MenuItem>DESIGN</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className="absolute top-[0px] left-[calc(50%_+_60.55px)] font-outfit text-lg text-darkslategray-400"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "16.270736562707363%",
            height: "23px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "23px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "23px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "23px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#383737",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Outfit",
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
                width="9.6px"
                height="5.4px"
                src="/vector-7.svg"
                style={{ marginRight: "-9.059419880941277e-14px" }}
              />
            )}
          >
            <MenuItem>DEVELOPMENT</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="absolute top-[0px] left-[calc(50%_+_198.15px)] w-[75.6px] h-[23px]">
          <a className="[text-decoration:none] absolute top-[0px] left-[calc(50%_-_37.8px)] text-[inherit] inline-block min-w-[65px]">
            <span className="capitalize">A</span>
            <span className="lowercase">DDONS</span>
          </a>
          <Image
            className="absolute h-[23.48%] w-[12.7%] top-[39.13%] right-[0%] bottom-[37.39%] left-[87.3%] max-w-full overflow-hidden max-h-full"
            width={10}
            height={5}
            alt=""
            src="/vector-8.svg"
          />
        </div>
      </div>
      <div className="absolute top-[72px] left-[1403px] w-[307px] h-14">
        <Button
          className="absolute h-full top-[0px] bottom-[0px] left-[161px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#2f8eaa",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#2f8eaa" },
            width: 146,
            height: 56,
          }}
        >
          Login
        </Button>
        <Button
          className="absolute h-full top-[0px] bottom-[0px] left-[0px]"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#2b88a3",
            fontSize: "20",
            borderColor: "#2e8da9",
            borderRadius: "32.5px",
            "&:hover": { borderColor: "#2e8da9" },
            width: 146,
            height: 56,
          }}
        >
          Register
        </Button>
      </div>
      <div className="absolute top-[13px] left-[calc(50%_+_307px)] w-[189px] h-[25px]">
        <a className="[text-decoration:none] absolute top-[1px] left-[calc(50%_-_59.5px)] font-medium text-[inherit] whitespace-nowrap">
          info@digitalpylot.io
        </a>
        <Image
          className="absolute top-[0px] left-[0px] w-[25px] h-[25px] overflow-hidden"
          width={25}
          height={25}
          alt=""
          src="/mail.svg"
        />
      </div>
      <div className="absolute top-[13px] left-[calc(50%_+_508px)] w-[163px] h-[25px]">
        <a className="[text-decoration:none] absolute top-[1px] left-[calc(50%_-_46.5px)] font-medium text-[inherit] inline-block min-w-[128px] whitespace-nowrap">
          +971 52 271 1010
        </a>
        <Image
          className="absolute top-[0px] left-[0px] w-[25px] h-[25px] overflow-hidden"
          width={25}
          height={25}
          alt=""
          src="/phonecall.svg"
        />
      </div>
      <Image
        className="absolute top-[13px] left-[1639px] w-[5px] h-6 object-contain"
        width={5}
        height={24}
        alt=""
        src="/divider.svg"
      />
      <FormControl
        className="absolute top-[14px] left-[calc(50%_+_694px)] font-outfit font-medium text-lg text-neutral-white"
        variant="standard"
        sx={{
          borderTopWidth: "0px",
          borderRightWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0px",
          borderRadius: "0px 0px 0px 0px",
          width: "55.6px",
          height: "23px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "23px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "23px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "23px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "23px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#fff",
            fontSize: 18,
            fontWeight: "Medium",
            fontFamily: "Outfit",
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
              width="9.6px"
              height="5.4px"
              src="/vector-9.svg"
              style={{ marginRight: "-9.059419880941277e-14px" }}
            />
          )}
        >
          <MenuItem>USD</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default Contact;
