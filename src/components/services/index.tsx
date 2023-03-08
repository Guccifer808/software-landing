import { FC } from "react";
import ActionButton from "../../shared/ActionButton";
import { motion } from "framer-motion";
import { SelectedPage, ServicesType } from "../../shared/types";
import features from "../../assets/images/features/features.png";
import Service from "./Service";
import {
  FaChartArea,
  FaCloudUploadAlt,
  FaPencilRuler,
  FaCodeBranch,
  FaEnvelopeOpenText,
  FaCloudDownloadAlt,
} from "react-icons/fa";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const servicesList: Array<ServicesType> = [
  {
    icon: <FaChartArea size={30} />,
    title: "Business Intelligence",
    description: "Learn more",
  },
  {
    icon: <FaCloudUploadAlt size={30} />,
    title: "Cloud-based",
    description: "Learn more",
  },
  {
    icon: <FaCodeBranch size={30} />,
    title: "Easy Integration",
    description: "Learn more",
  },

  {
    icon: <FaPencilRuler size={30} />,
    title: "Cutting-edge design",
    description: "Learn more",
  },

  {
    icon: <FaEnvelopeOpenText size={30} />,
    title: "CRM Software",
    description: "Learn more",
  },

  {
    icon: <FaCloudDownloadAlt size={30} />,
    title: "Frequent Updates",
    description: "Learn more",
  },
];
//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Services: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section className="py-16" id="services">
      <motion.div
        className="mx-auto max-w-7xl px-8 md:px-6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        {/* heading text */}
        <motion.div
          className="mb-5 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="font-medium text-blue-500">Our Services</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Our services are exceptional
          </h1>
          <p className="max-w-2 mx-auto mt-2 text-slate-500">
            Streamline Your Business Operations with Efficient SaaS Services
          </p>
        </motion.div>
        {/* box wrapper */}
        {/* services */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {servicesList.map((item: ServicesType) => (
            <Service
              key={item.title}
              icon={item.icon} // extract the image file path
              title={item.title}
              description={item.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
