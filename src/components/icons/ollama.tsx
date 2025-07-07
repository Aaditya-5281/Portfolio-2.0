import Image from "next/image";
import type { ImgHTMLAttributes } from "react";

// Usage: <Ollama width={64} height={64} />
// Do NOT use as an SVG icon. Use as a React component for images.

interface OllamaProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  width?: number;
  height?: number;
  alt?: string;
}

const Ollama = ({ width = 64, height = 64, alt = "Ollama Logo", ...props }: OllamaProps) => (
  <Image src="/ollama.png" alt={alt} width={width} height={height} {...props} />
);

export default Ollama;
