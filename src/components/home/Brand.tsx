import { motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  image: string;
  alt: string;
};

const Brand: FC<Props> = ({ image, alt }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25, // Percentage of the element that needs to be visible to trigger the animation
  });

  const childVariant = {
    hidden: { opacity: 0.01, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.img
      src={image}
      alt={alt}
      className="w-32 transform cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
      variants={childVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when the element enters the viewport
      ref={ref}
    />
  );
};

export default Brand;
