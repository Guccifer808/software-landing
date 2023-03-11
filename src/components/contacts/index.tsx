import { FC } from "react";
import { SelectedPage } from "../../shared/types";
import { FaLocationArrow, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import effectImage from "../../assets/images/effect.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const addressLink = "https://goo.gl/maps/jyAjCDkoypxddJ5q7";
const emailLink = "mailto:contact@vortex.com";
const phoneNumber = "1 234 5679";

const Contacts: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section className="relative overflow-hidden py-16" id="contacts">
      <img
        src={effectImage}
        alt="effect"
        className="absolute bottom-[-400px] -z-10 w-full opacity-[0.2]"
      />
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <motion.div
          className="-mx-4 flex flex-wrap lg:justify-between"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contacts)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* left info */}
          <div className="w-full px-4 md:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="font-medium text-blue-500">Contact Us</span>
              <h1 className="mb-3 text-2xl font-bold text-dark-100 sm:text-3xl">
                Get in touch with us
              </h1>
              <p className="mb-8 text-slate-500">
                Get in touch with us and unlock the potential of Vortex
                Solutions
              </p>
              {/* address */}
              <div className="mb-8 flex w-full max-w-[420px] items-center  rounded-lg bg-white p-4 shadow-md shadow-blue-500/10 duration-200 hover:scale-105 hover:shadow-xl">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <FaLocationArrow size={30} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark-100">
                    Our Location
                  </h4>
                  <p className="cursor-pointer text-base text-slate-400">
                    <a href={addressLink} target="_blank" rel="noreferrer">
                      Silicone Valley, San Jose , CA
                    </a>
                  </p>
                </div>
              </div>

              {/* phone */}
              <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10  duration-200 hover:scale-105 hover:shadow-xl">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <FaPhoneAlt size={30} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark-100">
                    Phone Number
                  </h4>
                  <p className="cursor-pointer text-base text-slate-400">
                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                  </p>
                </div>
              </div>
              {/* mail */}
              <div className="mb-8 flex w-full max-w-[420px] items-center  rounded-lg bg-white p-4 shadow-md shadow-blue-500/10 duration-200 hover:scale-105 hover:shadow-xl">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <FaEnvelopeOpen size={30} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark-100">
                    Email
                  </h4>
                  <p className="cursor-pointer text-base text-slate-400">
                    <a href={emailLink}>{emailLink}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="w-full px-4 md:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg shadow-blue-500/10 sm:p-12">
              <form action="">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Your Passsword"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full resize-none rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-blue-300 bg-blue-500 p-3 text-white transition-all duration-200 hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contacts;
