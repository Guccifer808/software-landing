import { MdPerson, MdShoppingCart, MdSettings, MdPoll } from "react-icons/md";
import { GiTripleCorn } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FC } from "react";

type Props = {};

const Sidebar: FC<Props> = ({}: Props) => {
  return (
    <div className="flex">
      <div className="fixed mt-20 flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
        <div className="flex flex-col items-center">
          <Link to="/">
            {/* Logo icon */}
            <div className="inline-block rounded-lg bg-blue-500 p-3 text-white">
              <GiTripleCorn size={22} />
            </div>
          </Link>
          {/* Border separator */}
          <span className="w-full border-b-[1px] border-slate-300 p-2"></span>
          {/* Sidebar Items */}
          {/* <Link to="/"> */}
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
            <MdPoll size={22} />
          </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
            <MdPerson size={22} />
          </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
            <MdShoppingCart size={22} />
          </div>
          {/* </Link> */}

          {/* <Link to="/"> */}
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
            <MdSettings size={22} />
          </div>
          {/* </Link> */}
        </div>
      </div>
      {/* Main right side */}
    </div>
  );
};

export default Sidebar;
