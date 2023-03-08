import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Service = ({ icon, title, description }: Props) => {
  return (
    <motion.div variants={childVariant}>
      <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 text-dark-100 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 hover:text-white">
        <div className="text-blue-500 group-hover:text-white">{icon}</div>
        <h4 className="mt-3 mb-1 text-[17px] font-semibold duration-200 ">
          {title}
        </h4>
        <p className="text-center text-sm duration-200">{description}</p>
      </div>
    </motion.div>
  );
};

export default Service;
