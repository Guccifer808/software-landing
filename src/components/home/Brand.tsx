import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  image: string;
  alt: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Brand: FC<Props> = ({ image, alt }: Props) => {
  return (
    <motion.img
      src={image}
      alt={alt}
      className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
      variants={childVariant}
    />
  );
};

export default Brand;
