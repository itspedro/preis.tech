import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";

export interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
};
function CustomImage(props: CustomImageProps) {

  const { src, alt, priority } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      priority={priority}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto"
      }} />
  );
};

export default CustomImage;