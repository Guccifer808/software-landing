import { motion } from "framer-motion";
import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";
type Props = {
  image: string;
  title: string;
  action: string;
  setSelectedPage: (value: SelectedPage) => void;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Feature: FC<Props> = ({
  image,
  title,
  action,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg duration-200 hover:scale-105 hover:shadow-xl"
      variants={childVariant}
    >
      <img className="mb-3 w-16" src={image} alt={title} />
      <h3 className="text-lg font-bold text-slate-600">{title}</h3>
      <AnchorLink
        className="text-sm text-blue-500"
        onClick={() => setSelectedPage(SelectedPage.Contacts)}
        href={`#${SelectedPage.Contacts}`}
      >
        {action}
      </AnchorLink>
    </motion.div>
  );
};

export default Feature;
