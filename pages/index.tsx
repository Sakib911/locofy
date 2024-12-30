import type { NextPage } from "next";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Component1 from "../components/component1";
import BackgroundBorder from "../components/background-border";
import Tile from "../components/tile";
import FrameComponent1 from "../components/frame-component1";
import Asset from "../components/asset";
import FrameComponent2 from "../components/frame-component2";
import Component2 from "../components/component2";
import TestimonialIndicators from "../components/testimonial-indicators";
import Container from "../components/container";
import Section from "../components/section";
import Clients from "../components/clients";
import Map1 from "../components/map1";
import Contact from "../components/contact";

const ColorRules: NextPage = () => {
  return (
    <div className="w-full h-[9773px] relative bg-neutral-white overflow-hidden text-left text-5xl text-cadetblue-100 font-outfit mq1825:h-auto mq1825:min-h-[9773]">
      <Image
        className="absolute top-[7436px] left-[calc(50%_-_960px)] w-[1920px] h-[600px] object-cover"
        width={1920}
        height={600}
        alt=""
        src="/rectangle-23815@2x.png"
      />
      <section className="absolute top-[7436px] left-[calc(50%_-_960px)] [background:linear-gradient(90deg,_rgba(89,_39,_229,_0.6),_rgba(47,_142,_170,_0.6))] w-[1920px] h-[600px]" />
      <section className="absolute top-[148px] left-[0px] [background:linear-gradient(90deg,_#5927e5,_#2f8eaa)] w-[1920px] h-[950px]" />
      <Image
        className="absolute top-[148px] right-[0px] w-[517px] h-[950px] object-cover"
        width={517}
        height={950}
        alt=""
        src="/image-4@2x.png"
      />
      <Image
        className="absolute top-[148px] left-[0px] w-[1026px] h-[517px] object-contain"
        width={1026}
        height={517}
        alt=""
        src="/image-5@2x.png"
      />
      <div className="absolute top-[302px] left-[211px] w-[756px] h-[249px] text-xl text-neutral-white">
        <div className="absolute top-[0px] left-[0px] mq450:text-base">{`Fast Secure & Powerful`}</div>
        <h1 className="m-0 absolute top-[39px] left-[0px] text-[65px] leading-[70px] font-extrabold font-plus-jakarta-sans flex items-center w-[756px] mq450:text-[39px] mq450:leading-[42px] mq925:text-[52px] mq925:leading-[56px]">{`Performance Marketing für Unternehmen & Onlineshops`}</h1>
      </div>
      <div className="absolute top-[572px] left-[211px] w-[778px] h-[136px]">
        <Button
          className="absolute top-[0px] left-[0px]"
          startIcon={<img width="25px" height="25px" src="/mask-group.png" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "rgba(174, 237, 255, 0.42)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "rgba(174, 237, 255, 0.42)" },
            width: 302,
            height: 59,
          }}
        >{`Free domain & site builder`}</Button>
        <Button
          className="absolute top-[77px] left-[0px]"
          startIcon={<img width="25px" height="25px" src="/mask-group-1.png" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "rgba(174, 237, 255, 0.42)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "rgba(174, 237, 255, 0.42)" },
            width: 271,
            height: 59,
          }}
        >
          60-Days Money-Back
        </Button>
        <Button
          className="absolute top-[0px] left-[317px]"
          startIcon={<img width="25px" height="25px" src="/mask-group-2.png" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "rgba(174, 237, 255, 0.42)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "rgba(174, 237, 255, 0.42)" },
            width: 223,
            height: 59,
          }}
        >
          Email Protection
        </Button>
        <Button
          className="absolute top-[0px] left-[555px]"
          startIcon={<img width="25px" height="25px" src="/mask-group-3.png" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "rgba(174, 237, 255, 0.42)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "rgba(174, 237, 255, 0.42)" },
            width: 223,
            height: 59,
          }}
        >
          Improved cPanel
        </Button>
      </div>
      <div className="absolute top-[729px] left-[211px] text-xl text-neutral-white whitespace-nowrap mq450:text-base">
        Get a Domain Name (With FREE Email, DNS, Theft Protection, and lots
        more)
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[766px] left-[211px] shadow-[0px_4px_40px_20px_#463eda]"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "70px",
            backgroundColor: "#fff",
            borderRadius: "100px",
          },
          width: "680px",
        }}
      />
      <div className="absolute top-[784px] left-[235px] text-4xl text-steelblue mq450:text-lg">
        <span className="lowercase">WWW</span>.example.io
      </div>
      <Button
        className="absolute top-[773px] left-[716px]"
        endIcon={<img width="25px" height="19px" src="/vector.svg" />}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "23",
          background: "#2c8aa5",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#2c8aa5" },
          width: 166,
          height: 56,
        }}
      >
        Explore
      </Button>
      <section className="absolute top-[1007px] left-[calc(50%_-_720px)] shadow-[0px_4px_40px_20px_rgba(0,_0,_0,_0.05)] rounded-71xl bg-neutral-white w-[1440px] h-[180px]" />
      <div className="absolute top-[1007px] left-[calc(50%_-_720px)] rounded-tl-71xl rounded-tr-none rounded-br-none rounded-bl-71xl bg-aliceblue-100 w-[263px] h-[180px]" />
      <h3 className="m-0 absolute top-[1078px] left-[297px] text-[30px] font-medium font-[inherit] mq450:text-lg mq925:text-5xl">
        Trusted By:
      </h3>
      <div className="absolute top-[2392px] left-[-234px] [filter:blur(500px)] rounded-[50%] bg-mediumblue-300 w-[390px] h-[459px]" />
      <div className="absolute top-[6974px] left-[-234px] [filter:blur(500px)] rounded-[50%] bg-mediumblue-300 w-[390px] h-[459px]" />
      <div className="absolute top-[8523px] left-[-234px] [filter:blur(500px)] rounded-[50%] bg-mediumblue-300 w-[390px] h-[459px]" />
      <div className="absolute top-[2086px] left-[698px] flex flex-col items-start justify-start gap-6 max-w-full">
        <div className="relative font-semibold mq450:text-lgi">About Us</div>
        <h1 className="m-0 w-[935px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans inline-block max-w-full text-mediumblue-100 mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <p className="m-0">
            <span className="text-midnightblue">{`Reliable, affordable &`}</span>
            <span className="text-purple">{` `}</span>
            <span>site-specific</span>
          </p>
          <p className="m-0">
            <span>web hosting capabilities</span>
            <span className="text-purple">{` `}</span>
            <span className="text-midnightblue">beyond</span>
          </p>
          <p className="m-0 text-midnightblue">comparison</p>
        </h1>
      </div>
      <div className="absolute top-[3328px] left-[calc(50%_-_289px)] flex flex-col items-center justify-center gap-[15px] max-w-full">
        <div className="relative font-semibold mq450:text-lgi">Service</div>
        <h1 className="m-0 w-[579px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans inline-block max-w-full text-purple mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <span className="text-midnightblue">Our Providing</span>
          <span>{` `}</span>
          <span className="text-mediumblue-100">Service</span>
          <span>{` `}</span>
        </h1>
      </div>
      <section className="absolute top-[5523px] left-[calc(50%_-_674px)] flex flex-col items-center justify-center gap-[15px] max-w-full text-left text-5xl text-cadetblue-100 font-outfit">
        <div className="relative font-semibold mq450:text-lgi">Location</div>
        <h1 className="m-0 w-[1349px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans text-center inline-block max-w-full text-midnightblue mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <p className="m-0">
            <span>{`Multiple Location VPS Hosting across the `}</span>
            <span>Globe via</span>
          </p>
          <p className="m-0 text-mediumblue-100">
            <span>our Exotic</span>
            <span className="text-midnightblue"> Datacenters</span>
          </p>
        </h1>
      </section>
      <div className="absolute top-[6583px] left-[calc(50%_-_750px)] flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div className="relative font-semibold mq450:text-lgi">FAQ</div>
        <h1 className="m-0 w-[608px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans text-center inline-block max-w-full text-midnightblue mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <span>{`Digital `}</span>
          <span className="text-mediumblue-100">Marketing FAQs</span>
        </h1>
      </div>
      <div className="absolute top-[1287px] left-[calc(50%_-_240px)] flex flex-col items-center justify-center gap-[15px] max-w-full">
        <div className="relative font-semibold mq450:text-lgi">Hosting</div>
        <h1 className="m-0 w-[481px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans inline-block max-w-full text-midnightblue mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <span>Hosting</span>
          <span className="text-purple">{` `}</span>
          <span className="text-mediumblue-100">Packages</span>
        </h1>
      </div>
      <div className="absolute top-[2776px] left-[1101px] flex flex-row items-center justify-start gap-5">
        <a className="[text-decoration:none] relative font-semibold text-[inherit] mq450:text-lgi">
          Learn More
        </a>
        <div className="h-10 rounded-21xl border-cadetblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[7px]">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/ic-arrow.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2402px] left-[1101px] text-xl leading-[40px] font-medium text-lightslategray-200 text-justify inline-block w-[609px] mq450:text-base mq450:leading-[32px]">
        You are at the right place if you are looking for 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/web-hosting-in-pakistan/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">
            web hosting in Pakistan
          </span>
        </a>
        , 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/domain/pk-domain/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">PK domain</span>
        </a>
         name, and Windows hosting services with complete reliability, security,
        affordability and full 24/7 technical support. We don’t just aim to
        speed up your website with premium web hosting in Pakistan but also
        speed you up globally. With our ultra-reliable, fast, and super-secure
        servers, we are here to help your site flow in the air. Not only that
        but Navicosoft has also been established on the premises of reliable 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/digital-marketing-services-in-pakistan/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">
            digital marketing services in Pakistan
          </span>
        </a>
         and specialises in 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/healthcare-marketing-agency/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">
            healthcare marketing services
          </span>
        </a>
        {`. `}
      </div>
      <div className="absolute top-[1407px] left-[calc(50%_-_698px)] text-lg leading-[40px] text-neutral-dark-grey">
        With our feature-packed yet affordable hosting packages, let’s feel the
        ideal tech experience. We bring endless possibilities with phenomenal
        web hosting along your digital way!
      </div>
      <Image
        className="absolute top-[2355px] left-[698px] rounded-xl w-[376px] h-[507px] object-cover"
        width={376}
        height={507}
        alt=""
        src="/image@2x.png"
      />
      <Image
        className="absolute top-[2140px] left-[210px] rounded-xl w-[457px] h-[768px] object-cover"
        width={457}
        height={768}
        alt=""
        src="/image-1@2x.png"
      />
      <div className="absolute top-[2643px] left-[577px] [backdrop-filter:blur(54px)] rounded-tl-3xl rounded-tr-3xs rounded-br-3xl rounded-bl-3xs bg-gray-700 w-[180px] h-[101px] flex flex-col items-center justify-center py-[50px] px-3 box-border">
        <Image
          className="self-stretch h-[78px] relative rounded-tl-3xl rounded-tr-3xs rounded-br-3xl rounded-bl-3xs max-w-full overflow-hidden shrink-0 object-cover"
          width={156}
          height={78}
          alt=""
          src="/layer82@2x.png"
        />
      </div>
      <Image
        className="absolute top-[2001px] left-[1764px] w-[332px] h-[391px]"
        loading="lazy"
        width={332}
        height={391}
        alt=""
        src="/group-427320874.svg"
      />
      <Image
        className="absolute top-[6583px] left-[1764px] w-[332px] h-[391px]"
        loading="lazy"
        width={332}
        height={391}
        alt=""
        src="/group-427320874.svg"
      />
      <Image
        className="absolute top-[8132px] left-[1764px] w-[332px] h-[391px]"
        loading="lazy"
        width={332}
        height={391}
        alt=""
        src="/group-427320874.svg"
      />
      <Component1 property1="Frame 427321482" />
      <div className="absolute w-[calc(100%_-_1558px)] top-[1466px] right-[1349px] left-[209px] rounded-xl bg-neutral-white border-cadetblue-200 border-[1px] border-solid box-border h-[521px] text-sm text-branding-hostinger-meteorite">
        <Image
          className="absolute top-[107px] left-[0px] w-[345px] h-[392px] object-cover"
          width={345}
          height={392}
          alt=""
          src="/bg-remove-1@2x.png"
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
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[42px] left-[32px] w-[296px] h-[448px]">
          <div className="absolute top-[95px] left-[0px] w-full h-[353px]">
            <b className="absolute top-[0px] left-[0px] text-xl leading-[32px] inline-block font-plus-jakarta-sans text-black min-w-[126px] mq450:text-base mq450:leading-[26px]">
              Web Hosting
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
            >
              Choose plan
            </Button>
          </div>
          <Image
            className="absolute top-[0px] left-[0px] w-20 h-20 overflow-hidden"
            width={80}
            height={80}
            alt=""
            src="/cloud.svg"
          />
        </div>
        <Image
          className="absolute top-[194px] right-[0px] rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none w-[105px] h-[194px] object-cover"
          loading="lazy"
          width={105}
          height={194}
          alt=""
          src="/image-6@2x.png"
        />
      </div>
      <BackgroundBorder
        bgRemove1="/bg-remove-1@2x.png"
        icArrowDownPrimarysvg="pending_122:2639"
        resellerHosting="Reseller Hosting"
        image6="/image-6@2x.png"
        hosting="/hosting.svg"
      />
      <BackgroundBorder
        backgroundBorderRight="589px"
        backgroundBorderLeft="969px"
        bgRemove1="/bg-remove-1@2x.png"
        icArrowDownPrimarysvg="pending_122:2707"
        resellerHosting="Dedicated Hosting"
        resellerHostingDisplay="unset"
        resellerHostingMinWidth="unset"
        buttonBoxShadow="0px 4px 4px #207088 inset"
        image6="/image-6@2x.png"
        hosting="/hosting-1.svg"
      />
      <BackgroundBorder
        backgroundBorderRight="209px"
        backgroundBorderLeft="1349px"
        bgRemove1="/bg-remove-1@2x.png"
        icArrowDownPrimarysvg="pending_122:2767"
        resellerHosting="VPS Hosting"
        resellerHostingDisplay="inline-block"
        resellerHostingMinWidth="120px"
        buttonBoxShadow="unset"
        image6="/image-6@2x.png"
        hosting="/hosting-2.svg"
      />
      <Image
        className="absolute top-[3470px] left-[1032px] rounded-xl w-[776px] h-[728px] object-contain"
        width={776}
        height={728}
        alt=""
        src="/concretemixertruckdeliversconcretepumppouringpilesconcretepumpconstructionsitecloseupconcretedelivery-1@2x.png"
      />
      <Tile
        websiteDesign="Website Design"
        icArrow="/ic-arrow-1.svg"
        image6="/image-6@2x.png"
        image7="/image-6@2x.png"
        dOnlineDesignIsolatedIconIllu="/3donlinedesignisolatediconillustrationrender-1@2x.png"
      />
      <div className="absolute h-[calc(100%_-_9297px)] top-[3971px] bottom-[5326px] left-[calc(50%_-_750px)] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] w-[369px] text-base text-midnightblue font-plus-jakarta-sans">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] rounded-xl bg-neutral-white" />
        <div className="absolute top-[268px] left-[calc(50%_-_158.5px)] w-[316px] h-[141px]">
          <div className="absolute top-[0px] left-[calc(50%_-_158px)] w-[316px] h-5">
            <b className="absolute top-[0px] left-[calc(50%_-_158px)] inline-block w-full h-full">
              SEO Services
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
              src="/ic-arrow-1.svg"
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
            src="/image-6@2x.png"
          />
          <Image
            className="absolute top-[43px] right-[243px] rounded-tl-3xs rounded-tr-none rounded-br-xl rounded-bl-none w-[105px] h-[194px] object-contain"
            width={105}
            height={194}
            alt=""
            src="/image-6@2x.png"
          />
        </div>
        <Image
          className="absolute top-[44px] left-[78px] w-[212px] h-[170px] object-cover"
          width={212}
          height={170}
          alt=""
          src="/3dmarketingicons-1@2x.png"
        />
      </div>
      <div className="absolute h-[calc(100%_-_9297px)] top-[3971px] bottom-[5326px] left-[calc(50%_-_360px)] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] w-[369px] text-base text-midnightblue font-plus-jakarta-sans">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] rounded-xl bg-neutral-white" />
        <div className="absolute top-[268px] left-[calc(50%_-_158.5px)] w-[316px] h-[141px]">
          <div className="absolute top-[0px] left-[calc(50%_-_158px)] w-[316px] h-5">
            <b className="absolute top-[0px] left-[calc(50%_-_158px)] inline-block w-full h-full">
              Google Ads
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
              src="/ic-arrow-3.svg"
            />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_21px)] top-[10px] right-[11px] left-[10px] h-[237px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-aliceblue-100 w-full h-full" />
          <Image
            className="absolute top-[0px] right-[0px] rounded-tl-3xs rounded-tr-none rounded-br-2xl rounded-bl-none w-[105px] h-[194px] object-cover"
            width={105}
            height={194}
            alt=""
            src="/image-6@2x.png"
          />
          <Image
            className="absolute top-[43px] right-[243px] rounded-tl-3xs rounded-tr-none rounded-br-2xl rounded-bl-none w-[105px] h-[194px] object-contain"
            width={105}
            height={194}
            alt=""
            src="/image-6@2x.png"
          />
        </div>
        <Image
          className="absolute top-[76px] left-[126px] w-[117px] h-[106px] overflow-hidden"
          loading="lazy"
          width={117}
          height={106}
          alt=""
          src="/googleads-1.svg"
        />
      </div>
      <div className="absolute h-[calc(100%_-_9297px)] top-[3971px] bottom-[5326px] left-[calc(50%_+_29px)] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] w-[369px] text-base text-midnightblue font-plus-jakarta-sans">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] rounded-xl bg-neutral-white" />
        <div className="absolute top-[268px] left-[calc(50%_-_158.5px)] w-[316px] h-[141px]">
          <div className="absolute top-[0px] left-[calc(50%_-_158px)] w-[316px] h-5">
            <b className="absolute top-[0px] left-[calc(50%_-_158px)] inline-block w-full h-full">
              E-commerce Solution
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
              src="/ic-arrow-4.svg"
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
            src="/image-6@2x.png"
          />
          <Image
            className="absolute top-[43px] right-[243px] rounded-tl-3xs rounded-tr-none rounded-br-2xl rounded-bl-none w-[105px] h-[194px] object-contain"
            width={105}
            height={194}
            alt=""
            src="/image-6@2x.png"
          />
        </div>
        <Image
          className="absolute top-[54px] left-[93px] w-[183px] h-[150px] object-cover"
          width={183}
          height={150}
          alt=""
          src="/onlineshoppingstorelaptopwithsalesigndigitalmarketingpromotion3drendering-1@2x.png"
        />
      </div>
      <div className="absolute h-[calc(100%_-_9297px)] top-[3971px] bottom-[5326px] left-[calc(50%_+_419px)] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] w-[369px] text-base text-midnightblue font-plus-jakarta-sans">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_20px_40px_-40px_rgba(219,_227,_237,_0.4)] rounded-xl bg-neutral-white" />
        <div className="absolute top-[268px] left-[calc(50%_-_158.5px)] w-[316px] h-[141px]">
          <div className="absolute top-[0px] left-[calc(50%_-_158px)] w-[316px] h-5">
            <b className="absolute top-[0px] left-[calc(50%_-_158px)] inline-block w-full h-full">
              WordPress Hosting
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
              src="/ic-arrow-4.svg"
            />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_21px)] top-[10px] right-[11px] left-[10px] h-[237px]">
          <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-3xs rounded-br-xl rounded-bl-3xs bg-aliceblue-100 w-full h-full" />
          <Image
            className="absolute top-[0px] right-[0px] rounded-tl-xl rounded-tr-none rounded-br-3xs rounded-bl-none w-[105px] h-[194px] object-cover"
            width={105}
            height={194}
            alt=""
            src="/image-6@2x.png"
          />
          <Image
            className="absolute top-[43px] right-[243px] rounded-tl-xl rounded-tr-none rounded-br-3xs rounded-bl-none w-[105px] h-[194px] object-contain"
            width={105}
            height={194}
            alt=""
            src="/image-6@2x.png"
          />
        </div>
        <Image
          className="absolute top-[46px] left-[83px] w-[202px] h-[166px] object-cover"
          width={202}
          height={166}
          alt=""
          src="/webpageinterfacedesignwebdesignwebdevelopmentconcept3drendering-1@2x.png"
        />
      </div>
      <Tile
        tileLeft="calc(50% - 360px)"
        websiteDesign="Social Media Marketing"
        icArrow="/ic-arrow-3.svg"
        image6="/image-6@2x.png"
        image7="/image-6@2x.png"
        dOnlineDesignIsolatedIconIllu="/3dsmartphoneisolatedemojiwithbluebackgroundmobilephonemockupphoto-1@2x.png"
        dOnlineDesignIsolatedIconTop="37px"
        dOnlineDesignIsolatedIconHeight="184px"
      />
      <Image
        className="absolute h-[0.16%] w-[8.44%] top-[45.95%] right-[45.78%] bottom-[53.88%] left-[45.78%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        width={162}
        height={16}
        alt=""
        src="/group-1000001811.svg"
      />
      <FrameComponent1 />
      <section className="absolute top-[4608px] left-[-234px] w-[1206px] h-[768px]">
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] [filter:blur(500px)] rounded-[50%] bg-crimson w-[390px] h-[459px]" />
          <Asset />
        </div>
      </section>
      <Button
        className="absolute top-[5182px] left-[972px]"
        endIcon={<img width="25px" height="19px" src="/vector-1.svg" />}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "23",
          background: "#2f8eaa",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#2f8eaa" },
          width: 255,
          height: 65,
        }}
      >
        Explore
      </Button>
      <div className="absolute top-[4754px] left-[972px] w-[738px] flex flex-col items-start justify-start gap-6 max-w-full">
        <div className="relative font-semibold mq450:text-lgi">
          Digital Marketing
        </div>
        <h1 className="m-0 w-[751px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans inline-block max-w-[102%] text-midnightblue mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <span>{`Digital Marketing `}</span>
          <span className="text-mediumblue-100">Next Level Web Hosting</span>
          <span> Services</span>
        </h1>
      </div>
      <div className="absolute top-[4949px] left-[972px] text-xl leading-[40px] font-medium text-lightslategray-200 text-justify inline-block w-[738px] mq450:text-base mq450:leading-[32px]">
        You are at the right place if you are looking for 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/web-hosting-in-pakistan/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">
            web hosting in Pakistan
          </span>
        </a>
        , 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/domain/pk-domain/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">PK domain</span>
        </a>
         name, and Windows hosting services with complete reliability, security,
        affordability and full 24/7 technical support. We don’t just aim to
        speed up your website with premium web hosting in Pakistan but also
        speed you up globally. With our ultra-reliable, fast, and super-secure
        servers
      </div>
      <Button
        className="absolute top-[7280px] left-[983px]"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#2f8eaa",
          borderRadius: "50px",
          "&:hover": { background: "#2f8eaa" },
          width: 176,
        }}
      >
        More Questions
      </Button>
      <div className="absolute top-[7302.5px] left-[1207px] text-base [text-decoration:underline] leading-[180%] font-semibold inline-block min-w-[89px]">
        Contanct Us
      </div>
      <FrameComponent2 />
      <Component2 property1="Frame 427321509" />
      <div className="absolute top-[6711px] left-[210px] text-xl leading-[40px] font-medium text-lightslategray-200 text-justify inline-block w-[710px] mq450:text-base mq450:leading-[32px]">
        You are at the right place if you are looking for 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/web-hosting-in-pakistan/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">
            web hosting in Pakistan
          </span>
        </a>
        , 
        <a
          className="text-[inherit]"
          href="https://www.navicosoft.com/domain/pk-domain/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">PK domain</span>
        </a>
         name, and Windows hosting services with complete reliability, security,
        affordability and full 24/7 technical support.
      </div>
      <Image
        className="absolute top-[6854px] left-[210px] rounded-xl w-[714px] h-[367px] object-cover"
        width={714}
        height={367}
        alt=""
        src="/rectangle-23812@2x.png"
      />
      <div className="absolute top-[6854px] left-[210px] rounded-xl bg-gray-800 w-[714px] h-[367px]" />
      <TestimonialIndicators />
      <section className="absolute top-[7609px] left-[calc(50%_-_612px)] w-[1225px] h-[254px] max-w-full text-center text-xl text-neutral-white font-outfit">
        <Button
          className="absolute top-[189px] left-[calc(50%_-_149.5px)]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#000",
            borderRadius: "50px",
            "&:hover": { background: "#000" },
            width: 298,
            height: 65,
          }}
        >
          GET YOUR FREE PROPOSAL NOW
        </Button>
        <div className="absolute top-[0px] left-[calc(50%_-_612.5px)] flex flex-col items-center justify-center gap-[15px] max-w-full w-full">
          <div className="relative font-medium text-left inline-block max-w-full mq450:text-base">
            One’s courage to carve success stories with the freedom of
            creativity
          </div>
          <h1 className="m-0 w-[765px] relative text-36xl leading-[60px] font-bold font-plus-jakarta-sans inline-block max-w-full mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
            Let's Think Out-Of-The-Box
          </h1>
          <div className="h-[50px] relative font-medium inline-block mq450:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </section>
      <div className="absolute top-[8136px] left-[593px] w-[735px] h-[151px] text-center">
        <div className="absolute top-[0px] left-[289px] font-semibold text-left mq450:text-lgi">
          R<span className="lowercase">EAD</span> O
          <span className="lowercase">UR</span> B
          <span className="lowercase">LOG</span>
        </div>
        <h1 className="m-0 absolute top-[47px] left-[0px] text-36xl leading-[60px] font-bold font-plus-jakarta-sans whitespace-nowrap text-midnightblue mq450:text-14xl mq450:leading-[36px] mq925:text-25xl mq925:leading-[48px]">
          <span>{`Featured `}</span>
          <span className="text-mediumblue-100">News and Insights</span>
        </h1>
        <div className="absolute top-[124px] left-[calc(50%_-_305.5px)] text-lg leading-[27px] text-dimgray-300">
          Read and update the latest news from us. Donec eu magna pretium in in
          odio.
        </div>
      </div>
      <Container />
      <Image
        className="absolute top-[calc(50%_+_3738.5px)] left-[calc(50%_-_749px)] w-5 h-[38px]"
        width={20}
        height={38}
        alt=""
        src="/button--previous-slide--svg.svg"
      />
      <Image
        className="absolute top-[calc(50%_+_3738.5px)] left-[calc(50%_+_729px)] w-5 h-[38px] object-contain"
        width={20}
        height={38}
        alt=""
        src="/button--next-slide--svg.svg"
      />
      <Section />
      <section className="absolute top-[9692.9px] left-[0px] [background:linear-gradient(90deg,_#5927e5,_#2f8eaa)] border-gray-1000 border-t-[1px] border-solid box-border w-[1920px] h-20 text-left text-xl text-neutral-white font-plus-jakarta-sans">
        <div className="absolute top-[27.1px] left-[210px] leading-[25px] font-medium mq450:text-base mq450:leading-[20px]">
          Copyright © 2024 Digital Pylot - FZCO - All rights reserved
        </div>
        <div className="absolute top-[27.1px] right-[210px] leading-[25px] font-medium text-right mq450:text-base mq450:leading-[20px]">{`Confidentiality & Privacy  |  Legal Information  |  Return and Refund Policy`}</div>
      </section>
      <Clients />
      <div className="absolute top-[704.3px] left-[1453.4px] w-[227px] h-[166px] text-6xl text-neutral-white">
        <div className="absolute top-[71px] left-[0px] rounded-t-81xl rounded-b-none bg-aliceblue-100 w-[69px] h-[95px]" />
        <div className="absolute top-[30px] left-[79px] rounded-t-81xl rounded-b-none bg-cadetblue-100 w-[69px] h-[136px]" />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[158px] rounded-t-81xl rounded-b-none bg-mediumblue-100 w-[69px]" />
        <div className="absolute top-[153.7px] left-[25.6px] tracking-[0.1em] leading-[150%] font-semibold text-cadetblue-100 [transform:_rotate(-90deg)] [transform-origin:0_0] mq450:text-xl mq450:leading-[30px]">
          70%
        </div>
        <div className="absolute top-[153.7px] left-[104.6px] tracking-[0.1em] leading-[150%] font-semibold [transform:_rotate(-90deg)] [transform-origin:0_0] mq450:text-xl mq450:leading-[30px]">
          85%
        </div>
        <div className="absolute top-[153.7px] left-[183.6px] tracking-[0.1em] leading-[150%] font-semibold [transform:_rotate(-90deg)] [transform-origin:0_0] mq450:text-xl mq450:leading-[30px]">
          100%
        </div>
      </div>
      <div className="absolute top-[5728px] left-[calc(50%_-_550px)] w-[1101px] h-[555px]">
        <Map1 />
      </div>
      <Contact />
    </div>
  );
};

export default ColorRules;
