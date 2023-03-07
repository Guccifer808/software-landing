import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";

import hero from "../../assets/images/hero.png";
import brand1 from "../../assets/images/brand/brand1.png";
import brand2 from "../../assets/images/brand/brand2.png";
import brand3 from "../../assets/images/brand/brand3.png";
import brand4 from "../../assets/images/brand/brand4.png";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="flex w-full items-center justify-between py-10 md:h-full md:pb-0"
    >
      <div className="mx-auto mt-32 flex max-w-7xl flex-wrap items-center justify-between px-8 md:mt-14 md:px-6">
        <div className="w-full md:basis-5/12">
          <h1 className="mb-2 text-4xl font-bold leading-snug text-slate-800 sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            Everything you need to run your online{" "}
            <span className="text-blue-600">business</span>
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

            {/* <button className="mt-4 box-border w-full rounded-md border border-blue-500/20 px-8 py-2.5 font-semibold text-blue-500 shadow-md shadow-blue-500/10 duration-200 sm:mt-0 sm:w-auto "> */}
            <button className="box-border w-full cursor-pointer gap-8 rounded-md border border-blue-500/20 px-8 py-2.5 text-center font-semibold text-blue-500 shadow-sm shadow-blue-500/50 duration-200 hover:shadow-md hover:shadow-blue-500 sm:mt-0 sm:block lg:mr-0">
              Register Now
            </button>
          </div>

          {/* brand */}
          <div className="mt-6 flex flex-wrap items-center justify-around gap-4 md:justify-start">
            <img
              src={brand1}
              alt="brand"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
            <img
              src={brand2}
              alt="brand"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
            <img
              src={brand3}
              alt="brand"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
            <img
              src={brand4}
              alt="brand"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
          </div>
        </div>

        <div className="hidden items-center justify-end pb-10 md:flex md:w-6/12 md:pb-28">
          <div className="relative z-10 inline-block pt-2 lg:pt-0">
            <img src={hero} alt="hero section img" className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
