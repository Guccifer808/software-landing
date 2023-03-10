import Hero from "./home";
import Navbar from "./navbar";
import Features from "./features";
import { SelectedPage } from "../shared/types";
import About from "./about";
import Services from "./services";
import Faq from "./faq";
import Contacts from "./contacts";
import Footer from "./footer";
import { useEffect, useState } from "react";
type Props = { setSelectedPage: (value: SelectedPage) => void };

const Homepage = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  // const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsTopOfPage(window.scrollY === 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    //adding event listener
    window.addEventListener("scroll", handleScroll);
    //removing on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Faq setSelectedPage={setSelectedPage} />
      <Contacts setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default Homepage;
