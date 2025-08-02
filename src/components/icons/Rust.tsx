import Image from "next/image";
import type { ImgHTMLAttributes } from "react";

interface RustProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  width?: number;
  height?: number;
  alt?: string;
}

const Rust = ({ width = 64, height = 64, alt = "Rust Logo", ...props }: RustProps) => (
  <Image src="/rust.png" alt={alt} width={width} height={height} {...props} />
);

export default Rust;
