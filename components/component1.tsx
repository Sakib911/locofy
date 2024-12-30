import type { NextPage } from "next";
import { Box } from "@mui/material";
import FrameComponent from "./frame-component";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  property1 = "Frame 427321482",
}) => {
  return (
    <div
      className={`absolute top-[1058px] left-[529px] w-[1106px] h-[78px] overflow-hidden mq1825:h-auto mq1825:min-h-[78] ${className}`}
      data-property1={property1}
    >
      <FrameComponent />
    </div>
  );
};

export default Component1;
