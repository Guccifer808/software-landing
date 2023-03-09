import { FC } from "react";
import { useState } from "react";
import { FaqType, SelectedPage } from "../../shared/types";
import FaqItem from "./FaqItem";
import faqImage from "../../assets/images/faq.png";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const faqList: Array<FaqType> = [
  {
    title: "What are the benefits of using Vortex?",
    description:
      "Vortex solutions offer many benefits, including cost-effectiveness, scalability, ease of use, and accessibility. We also provide automatic software updates and maintenance, so you don't have to worry about managing software on your own.",
  },
  {
    title: "How secure is my data with Vortex solutions?",
    description:
      "Vortex use various security measures to protect your data, including encryption, firewalls, and regular data backups. However, it's essential to follow best practices like strong passwords and access controls to ensure your data is secure.",
  },
  {
    title: "How do I evaluate the success with Vortex?",
    description:
      "To evaluate the success, track metrics like user adoption, ROI, and user satisfaction. You can also gather feedback from your team to see if the software is meeting their needs and improving their productivity.",
  },
  {
    title: "What kind of customer support can I expect?",
    description:
      "Vortex offer customer support through email, phone, or live chat. Also we offer support resources like knowledge bases and user communities.",
  },
];
//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Faq: FC<Props> = ({ setSelectedPage }: Props) => {
  const [selected, setSelected] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    if (index === selected) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };
  return (
    <section className="py-16" id="faq">
      <motion.div
        className="mx-auto max-w-7xl px-8 md:px-6"
        onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}
      >
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
          <span className="font-medium text-blue-500">Our FAQ</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Frequently Asked Questions
          </h1>
        </motion.div>
        <div className="md:flex md:justify-between md:gap-6">
          <div className="mb-8 flex justify-center md:mb-0 md:w-5/12">
            <img src={faqImage} alt="faq" className="max-h-[500px]" />
          </div>
          <div className="md:w-6/12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {faqList.map((item, index) => (
                <FaqItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  index={index}
                  isSelected={index === selected}
                  handleItemClick={handleItemClick}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
