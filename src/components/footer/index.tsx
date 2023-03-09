import { FC } from "react";
import logo from "../../assets/images/logo.png";

import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
type Props = {};

const Footer: FC<Props> = ({}: Props) => {
  return (
    <footer className="bg-slate-50/80 pt-16">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        {/* footer top */}
        <div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <img src={logo} alt="footer" className="w-36" />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-slate-500">
                Streamline your business operations with Vortex - The all-in-one
                SaaS solution for project management, collaboration, and
                workflow automation.
              </p>
            </div>
          </div>

          <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
            <div className="">
              {/* head */}
              <p className="font-semibold text-slate-700">Category</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    References
                  </a>
                </li>
              </ul>
              <p className="font-semibold text-slate-700">Category</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End footer top */}

        <div>
          {/* footer bottom */}
          <div className="flex flex-col justify-between border-t py-8 sm:flex-row">
            <p className="text-sm text-slate-500">
              © 2023{" "}
              <a
                href="https://github.com/Guccifer808/software-landing"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-500"
              >
                Guccifer808
              </a>
            </p>
            {/* Social icons */}
            <div className="mt-4 flex items-center space-x-4 sm:mt-0">
              <a href="#">
                <FaFacebook className="text-2xl text-slate-500 duration-300 hover:text-blue-500" />
              </a>
              <a href="#">
                <FaYoutube className="text-2xl text-slate-500 duration-300 hover:text-blue-500" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl text-slate-500 duration-300 hover:text-blue-500" />
              </a>
            </div>
          </div>
          {/* End footer bottom */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
