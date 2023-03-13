import { getAuth, signOut } from "firebase/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Header: FC<Props> = ({}: Props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  // logout and back to home page
  const logOutBack = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <h2>Welcome to Vortex Demo</h2>
      <button
        onClick={() => logOutBack()}
        className="border:blue-500/50 shadow-xs w-full min-w-fit rounded-md border border-blue-500/20 px-4 py-2.5 text-center font-semibold text-blue-500 shadow-blue-500/50 duration-200 hover:border-blue-500 md:w-max"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
