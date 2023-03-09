import { FC } from "react";
import { motion } from "framer-motion";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import { FaBriefcase, FaCubes, FaCode } from "react-icons/fa";
import about from "../../assets/images/about.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About: FC<Props> = ({ setSelectedPage }) => {
  return (
    <section className="py-16" id="about">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="md:flex md:justify-between md:gap-6">
          <div className="md:w-6/12">
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
              <span className="font-medium text-blue-500">About Us</span>
              <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                Vortex Solutions
              </h1>
            </motion.div>
            <p className="mb-6 text-slate-500">
              Our cutting-edge services provide a valuable suite that enable
              businesses to thrive all while being flexible and adaptable to
              meet evolving needs.
            </p>
            <ul>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <FaBriefcase />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  Essential for businesses to enhance their online presence and
                  processes.
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <FaCubes />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  We provide scalable solutions that can adapt to your
                  business's evolving needs.
                </p>
              </li>
              <li className="mb-8 flex items-center">
                <motion.div
                  className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white"
                  onViewportEnter={() => setSelectedPage(SelectedPage.About)}
                >
                  <FaCode />
                </motion.div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  With our no-code approach, our solutions are easy to implement
                  and maintain.
                </p>
              </li>
            </ul>
            <div className="flex w-full min-w-full">
              <ActionButton setSelectedPage={setSelectedPage}>
                Get Started
              </ActionButton>
            </div>
          </div>

          {/* about img */}
          <div className="mt-8 flex justify-center md:mt-0 md:w-5/12">
            <img
              src={about}
              alt="about us"
              className="max-h-[500px] md:max-h-max"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
