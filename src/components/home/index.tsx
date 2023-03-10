import { FC } from "react";
import ActionButton from "../../shared/ActionButton";
import { motion } from "framer-motion";
import { BrandsType, SelectedPage } from "../../shared/types";
import Brand from "./Brand";
import hero from "../../assets/images/hero.png";
import brand1 from "../../assets/images/brand/brand1.png";
import brand2 from "../../assets/images/brand/brand2.png";
import brand3 from "../../assets/images/brand/brand3.png";
import brand4 from "../../assets/images/brand/brand4.png";
import { useNavigate } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const brandsList: Array<BrandsType> = [
  {
    image: { brand1 },
    alt: "Soflex",
  },
  {
    image: { brand2 },
    alt: "Flairo",
  },
  {
    image: { brand3 },
    alt: "CloudCode",
  },
  {
    image: { brand4 },
    alt: "Outshifter",
  },
];
//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Home: FC<Props> = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  return (
    <motion.section
      id="home"
      className="flex w-full items-center justify-between py-16 md:h-full"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
      <div className="mx-auto mt-32 flex max-w-7xl flex-wrap items-center justify-between px-8 md:mt-14 md:px-6">
        <div className="w-full md:basis-5/12">
          <h1 className="mb-2 text-4xl font-bold leading-snug text-slate-800 sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            Everything you need to run your online
            <span className="text-blue-600"> business</span>
          </h1>
          <p className="mb-8 max-w-[480px] text-base text-slate-500">
            Transform your online business with ease. Discover our SaaS
            solutions designed to streamline operations, boost sales, and
            maximize profits.
          </p>
          <div className="flex flex-wrap gap-4">
            <ActionButton setSelectedPage={setSelectedPage}>
              Get Started
            </ActionButton>
            <button
              onClick={() => navigate("/login")}
              className="border:blue-500/50 w-full min-w-[200px] rounded-md border  border-blue-500/20 px-8 py-2.5 text-center font-semibold text-blue-500 shadow-blue-500/50 duration-200 hover:border-blue-500 md:w-max"
            >
              Register Now
            </button>
          </div>

          {/* Brands */}
          <motion.div
            className="mt-6 flex flex-wrap items-center justify-around gap-4 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {brandsList.map((brand: BrandsType) => (
              <Brand
                key={brand.alt}
                image={Object.values(brand.image)[0]}
                alt={brand.alt}
              />
            ))}
          </motion.div>
        </div>
        {/* Image */}
        <div className="hidden items-center justify-end pb-10 md:flex md:w-6/12 md:pb-10">
          <div className="relative z-10 inline-block pt-2 lg:pt-0">
            <img src={hero} alt="hero section img" className="max-w-full" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Home;
