import * as React from "react";
import type { SVGProps } from "react";

const Medium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#A9A9A9" /> {/* subtle grey */}
    <path
      d="M8.5 11.5h-.7v-1h5.2l4.1 8.7 4.1-8.7h5.2v1h-.7l-1.7 1.7v8.6l1.7 1.7h.7v1h-7v-1h.7l1.7-1.7v-7.2l-4.2 9.2h-1l-4.2-9.2v7.2l1.7 1.7h.7v1h-5v-1h.7l1.7-1.7v-8.6l-1.7-1.7z"
      fill="#12100E"
    />
  </svg>
);

export default Medium;
