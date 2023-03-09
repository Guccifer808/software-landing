import { FC } from "react";
import ActionButton from "../../shared/ActionButton";
import { motion } from "framer-motion";
import { SelectedPage, FeaturesType } from "../../shared/types";
import Feature from "./Feature";
import features from "../../assets/images/features/features.png";
import icon1 from "../../assets/images/features/icon1.png";
import icon2 from "../../assets/images/features/icon2.png";
import icon3 from "../../assets/images/features/icon3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const featuresList: Array<FeaturesType> = [
  {
    image: { icon1 },
    title: "Web Design",
    action: "Learn more",
  },
  {
    image: { icon2 },
    title: "Automation",
    action: "Learn more",
  },
  {
    image: { icon3 },
    title: "Infographics",
    action: "Learn more",
  },
];
//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Features: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section className="pb-16" id="features">
      <motion.div
        className="mx-auto max-w-7xl px-8 md:px-6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        {/* heading text  */}
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
          <span className="font-medium text-blue-500">Our Features</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Discover our features
          </h1>
        </motion.div>
        {/* services img  */}
        <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
          <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
            <img
              src={features}
              alt="features img"
              className="h-full scale-125 sm:w-full sm:object-cover"
            />
          </div>
          {/* titles */}
          <div className="md:w-7/12">
            <div className="mb-16 flex flex-col">
              <p className="mb-3 text-slate-500">
                Our solutions are tailored to meet your business needs. We offer
                top-notch services in web design, automation, and infographics.
              </p>
              <p className="mb-10 text-slate-500">
                We specialize in creating visually appealing and user-friendly
                websites, optimizing business processes with automation
                services, and presenting complex information in a clear and
                engaging manner through our infographics service.
              </p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Get Started
              </ActionButton>
            </div>
            {/* services */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {featuresList.map((item: FeaturesType) => (
                <Feature
                  key={item.title}
                  image={Object.values(item.image)[0]} // extract the image file path
                  title={item.title}
                  action={item.action}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
