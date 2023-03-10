import { FC } from "react";
import logo from "../../assets/images/logo.png";

import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

interface FooterColumn {
  heading: string;
  links: { title: string; href: string }[];
}

interface Props {
  columns: FooterColumn[];
  author: string;
  githubUrl: string;
}

const columns = [
  {
    heading: "About",
    links: [
      { title: "Our Company", href: "/about" },
      { title: "Our Team", href: "/team" },
      { title: "Our Services", href: "/services" },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { title: "Phone", href: "tel:1234567890" },
      { title: "Email", href: "mailto:info@example.com" },
      { title: "Address", href: "/address" },
    ],
  },
  {
    heading: "Services",
    links: [
      { title: "Our Company", href: "/about" },
      { title: "Our Team", href: "/team" },
      { title: "Our Services", href: "/services" },
    ],
  },
  {
    heading: "Careers",
    links: [
      { title: "Phone", href: "tel:1234567890" },
      { title: "Email", href: "mailto:info@example.com" },
      { title: "Address", href: "/address" },
    ],
  },
];

const author = "Guccifer808";
const githubUrl = "https://github.com/guccifer808";

{
  /* <Footer columns={columns} author={author} githubUrl={githubUrl} /> */
}

const Footer: FC<Props> = ({ columns, author, githubUrl }: Props) => {
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

          <div className="mb-6 grid grid-cols-2 gap-6 whitespace-nowrap lg:grid-cols-8 lg:gap-48">
            {columns.map((column, index) => (
              <div key={index} className="row-gap-8">
                <p className="font-semibold text-dark-100 ">{column.heading}</p>
                <ul className="mt-2 space-y-2">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-500 transition-colors duration-300 hover:text-blue-500"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* End footer top */}

        <div>
          {/* footer bottom */}
          <div className="flex flex-col justify-between border-t py-8 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()}{" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-500"
              >
                {author}
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
