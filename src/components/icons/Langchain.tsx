import * as React from "react";
import type { SVGProps } from "react";

const Langchain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <image
      href="\icon.svg"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

export default Langchain;
