import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type Map1Type = {
  className?: string;
};

const Map1: NextPage<Map1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_550.5px)] w-full h-full overflow-hidden text-right text-5xl text-mediumblue-100 font-outfit ${className}`}
    >
      <Image
        className="absolute h-[90.41%] w-[100.03%] top-[9.57%] right-[-0.03%] bottom-[0.02%] left-[0%] max-w-full overflow-hidden max-h-full"
        width={1101}
        height={502}
        alt=""
        src="/vector-2.svg"
      />
      <Image
        className="absolute h-[36.23%] w-[33.37%] top-[20.58%] right-[54.31%] bottom-[43.19%] left-[12.32%] max-w-full overflow-hidden max-h-full"
        width={367}
        height={201}
        alt=""
        src="/north-america.svg"
      />
      <Image
        className="absolute h-[21.53%] w-[34.93%] top-[10.83%] right-[19.59%] bottom-[67.64%] left-[45.48%] max-w-full overflow-hidden max-h-full"
        width={385}
        height={120}
        alt=""
        src="/group-1.svg"
      />
      <Image
        className="absolute h-[27.03%] w-[25.4%] top-[27.12%] right-[19.59%] bottom-[45.86%] left-[55%] max-w-full overflow-hidden max-h-full"
        width={280}
        height={150}
        alt=""
        src="/group-2.svg"
      />
      <Image
        className="absolute h-[45.5%] w-[7.69%] top-[30.67%] right-[12.3%] bottom-[23.84%] left-[80.01%] max-w-full overflow-hidden max-h-full"
        width={85}
        height={253}
        alt=""
        src="/group-3.svg"
      />
      <Image
        className="absolute h-[29.64%] w-[25.3%] top-[46.52%] right-[19.68%] bottom-[23.84%] left-[55.01%] max-w-full overflow-hidden max-h-full"
        width={279}
        height={165}
        alt=""
        src="/group-4.svg"
      />
      <Image
        className="absolute h-[26.38%] w-[67.72%] top-[49.78%] right-[19.68%] bottom-[23.84%] left-[12.6%] max-w-full overflow-hidden max-h-full"
        width={746}
        height={146}
        alt=""
        src="/group-5.svg"
      />
      <Image
        className="absolute h-[51.37%] w-[34.68%] top-[23.95%] right-[19.85%] bottom-[24.68%] left-[45.47%] max-w-full overflow-hidden max-h-full"
        width={382}
        height={285}
        alt=""
        src="/group-6.svg"
      />
      <Image
        className="absolute h-[23.66%] w-[42.42%] top-[33.35%] right-[45.16%] bottom-[42.99%] left-[12.43%] max-w-full overflow-hidden max-h-full"
        width={467}
        height={131}
        alt=""
        src="/group-7.svg"
      />
      <Image
        className="absolute h-[27.37%] w-[8.96%] top-[6.83%] right-[15.11%] bottom-[65.8%] left-[75.92%] max-w-full overflow-hidden max-h-full"
        width={99}
        height={152}
        alt=""
        src="/group-8.svg"
      />
      <Image
        className="absolute h-[76.02%] w-[74.1%] top-[0%] right-[15.1%] bottom-[23.98%] left-[10.8%] max-w-full overflow-hidden max-h-full"
        width={816}
        height={422}
        alt=""
        src="/group-9.svg"
      />
      <Image
        className="absolute h-[25.91%] w-[8.96%] top-[29.55%] right-[82.77%] bottom-[44.54%] left-[8.27%] max-w-full overflow-hidden max-h-full"
        width={99}
        height={144}
        alt=""
        src="/continents.svg"
      />
      <Image
        className="absolute h-[25.91%] w-[8.96%] top-[43.24%] right-[61.79%] bottom-[30.85%] left-[29.25%] max-w-full overflow-hidden max-h-full"
        width={99}
        height={144}
        alt=""
        src="/continents.svg"
      />
      <Image
        className="absolute h-[18.77%] w-[6.49%] top-[37.3%] right-[42.1%] bottom-[43.93%] left-[51.41%] max-w-full overflow-hidden max-h-full"
        width={72}
        height={104}
        alt=""
        src="/group-1000001906.svg"
      />
      <div className="absolute top-[40px] left-[491px] rounded-[50%] bg-black w-5 h-5" />
      <div className="absolute top-[79px] left-[876px] rounded-[50%] bg-black w-5 h-5" />
      <div className="absolute top-[310px] left-[872px] rounded-[50%] bg-black w-5 h-5" />
      <div className="absolute top-[113px] left-[45px] font-semibold mq450:text-lgi">
        North Autres
      </div>
      <div className="absolute top-[204px] left-[294px] font-semibold mq450:text-lgi">
        South Anierica
      </div>
      <div className="absolute top-[341px] left-[568px] font-semibold inline-block min-w-[68px] mq450:text-lgi">
        Africa
      </div>
      <div className="absolute top-[13px] left-[564px] font-semibold text-left inline-block min-w-[78px] mq450:text-lgi">
        Europe
      </div>
      <div className="absolute top-[64px] left-[953px] font-semibold text-left inline-block min-w-[48px] mq450:text-lgi">
        Asia
      </div>
      <div className="absolute top-[341px] left-[953px] font-semibold text-left inline-block min-w-[92px] mq450:text-lgi">
        Oceania
      </div>
    </div>
  );
};

export default Map1;
