import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      // className="w-full cursor-pointer gap-8 rounded-md bg-blue-500 px-8 py-2.5 text-center font-semibold text-light-100 shadow-md shadow-blue-500/50 duration-200 hover:bg-blue-600 sm:block lg:mr-0"
      // className="w-full min-w-[200px] rounded-md bg-blue-500 px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-blue-500/20 duration-200 hover:bg-blue-600 md:w-max"
      offset="100"
      className="w-full gap-4 rounded-md bg-blue-500 px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-blue-500/20 duration-200 hover:bg-blue-600 md:w-max"
      onClick={() => setSelectedPage(SelectedPage.Contacts)}
      href={`#${SelectedPage.Contacts}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
