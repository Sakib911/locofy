import type { NextPage } from "next";
import TechStackIcons from "./tech-stack-icons";

export type Component2Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component2: NextPage<Component2Type> = ({
  className = "",
  property1 = "Frame 427321509",
}) => {
  return (
    <section
      className={`absolute top-[6383px] left-[calc(50%_-_960px)] w-[1920px] h-[100px] overflow-hidden ${className}`}
      data-property1={property1}
    >
      <TechStackIcons />
    </section>
  );
};

export default Component2;
