import logo from "../assets/images/logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="absolute sticky left-0 top-0 w-full bg-white/90 backdrop-blur">
      <div className="mx-auto h-[90px] max-w-7xl px-8 md:px-6">
        <div className="relative flex h-full items-center justify-between border-b border-dark-100/10">
          {/* Logo */}
          <div className="w-[13rem] max-w-full">
            <a href="/">
              <img src={logo} alt="logo" className="w-full" />
            </a>
          </div>
          {/* Menu */}
          <div className="flex w-full items-center justify-between">
            <nav className="">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
