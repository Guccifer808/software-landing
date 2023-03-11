import { FC } from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import { useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Navbar: FC<Props> = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBg = isTopOfPage ? "" : "shadow-sm bg-white drop-shadow";
  const navigate = useNavigate();
  return (
    <nav>
      <div
        className={` ${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-6 font-medium`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}

            <img
              src={logo}
              alt="logo"
              className="w-32"
              onClick={handleScrollToTop}
            />

            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Links */}
                <div className={`${flexBetween} text-md gap-8`}>
                  <CustomLink
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="Features"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="FAQ"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <CustomLink
                    page="Contacts"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Button */}
                <div className={`${flexBetween}`}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get Started
                  </ActionButton>

                  <button
                    onClick={() => navigate("/login")}
                    className="border:blue-500/50 shadow-xs ml-2 w-full min-w-fit rounded-md border border-blue-500/20 px-4 py-2.5 text-center font-semibold text-blue-500 shadow-blue-500/50 duration-200 hover:border-blue-500 md:w-max"
                  >
                    Login
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-primary-two p-2 text-white"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {!isMenuToggled ? (
                  <HiMenuAlt3 className="h-5 w-5" />
                ) : (
                  <HiX className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mob menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-[85px] z-30 w-full max-w-full rounded-lg border border-blue-200 bg-white p-6 transition-all duration-200 sm:right-1 sm:max-w-[300px]">
          <div
            className={`${flexBetween} text-md flex flex-col justify-center gap-6 font-semibold`}
          >
            <CustomLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Features"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="FAQ"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <CustomLink
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
