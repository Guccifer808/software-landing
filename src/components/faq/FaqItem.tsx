import { FC } from "react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  index: number;
  isSelected: boolean;
  handleItemClick: (index: number) => void;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const FaqItem: FC<Props> = ({
  index,
  title,
  description,
  isSelected,
  handleItemClick,
}: Props) => {
  return (
    <motion.div variants={childVariant}>
      <div className="mb-5 sm:mb-10">
        <button
          type="button"
          className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left"
          onClick={() => handleItemClick(index)}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-dark-100">{title}</h4>
            {isSelected ? (
              <FaRegArrowAltCircleUp className="w-8 text-lg text-blue-500" />
            ) : (
              <FaRegArrowAltCircleDown className="w-8 text-lg text-blue-500" />
            )}
          </div>
        </button>

        <div
          className={`max-h-0 overflow-hidden rounded-b-lg bg-blue-50/30 transition-all duration-500 ${
            isSelected ? "max-h-max" : ""
          }`}
        >
          <div className="p-6">
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FaqItem;
