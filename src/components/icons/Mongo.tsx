import * as React from "react";
import type { SVGProps } from "react";

const Mongo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g>
      <path
        d="M16.6 2.2c-.3-.5-.8-.5-1.1 0C14.7 4.1 8.2 14.2 15.2 28.2c.2.4.7.4.9 0 7-14 0-24.1-0.5-26z"
        fill="#10AA50"
      />
      <path
        d="M16 29.5c-.1 0-.2 0-.3-.1-.2-.1-.3-.3-.3-.5V4.1c0-.3.2-.5.5-.5s.5.2.5.5v24.8c0 .2-.1.4-.3.5-.1.1-.2.1-.3.1z"
        fill="#12924F"
      />
      <path
        d="M16 30c-.2 0-.4-.1-.5-.3-.1-.2-.1-.4 0-.6l.5-1.1.5 1.1c.1.2.1.4 0 .6-.1.2-.3.3-.5.3z"
        fill="#B8C4C2"
      />
    </g>
  </svg>
);

export default Mongo;
