import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link: FC<Props> = ({ page, selectedPage, setSelectedPage }: Props) => {
  //to lowercase for id, treat as SelectedPage enum
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-two" : ""
      } transition duration-500 hover:text-primary-two`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
