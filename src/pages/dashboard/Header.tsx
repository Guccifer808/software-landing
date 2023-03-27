import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
type Props = { handleLogout: () => Promise<void> };

const Header: FC<Props> = ({ handleLogout }: Props) => {
  const auth = getAuth();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  return (
    <div className="flex">
      <div className="fixed flex w-screen flex-row items-center justify-between border-b-[1px] bg-white p-4 pt-4">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        <h2 className="hidden font-bold">Welcome to Vortex Demo</h2>
        <button
          onClick={handleLogout}
          className="border:blue-500/50 shadow-xs w-full max-w-[100px] rounded-md border border-blue-500/20 px-4 py-2.5 text-center font-semibold text-blue-500 shadow-blue-500/50 duration-200 hover:border-blue-500 md:w-max"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
