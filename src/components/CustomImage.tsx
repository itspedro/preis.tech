import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  priority?: boolean;
};

function CustomImage(props: CustomImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      layout="responsive"
      width={500}
      height={500}
      priority={props.priority}
    />
  );
};

export default CustomImage;