import Image from "next/image";
import type { ImgHTMLAttributes } from "react";

// Usage: <Mcp width={64} height={64} />
// Do NOT use as an SVG icon. Use as a React component for images.

interface McpProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  width?: number;
  height?: number;
  alt?: string;
}

const Mcp = ({ width = 64, height = 64, alt = "Mcp Logo", ...props }: McpProps) => (
  <Image src="/mcp.png" alt={alt} width={width} height={height} {...props} />
);

export default Mcp;
