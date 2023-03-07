import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="lg:mr-0 cursor-pointer gap-8 rounded-md bg-primary-two px-8 py-2.5 font-semibold text-light-100 shadow-md shadow-blue-500/50 duration-200 hover:bg-blue-600 sm:block"
      onClick={() => setSelectedPage(SelectedPage.Contacts)}
      href={`#${SelectedPage.Contacts}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
