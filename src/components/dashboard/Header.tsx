import {
  getAuth,
  signOut,
  User,
  onAuthStateChanged,
  AuthError,
} from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  //  handleLogout: () => Promise<void>
};

// const Header: FC<Props> = ({ handleLogout }: Props) => {
const Header: FC<Props> = ({}: Props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  // logout and back to home page
  // const logOutBack = async () => {
  //   await signOut(auth);
  //   navigate("/");
  // };

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
    <div className="flex justify-between px-4 pt-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <h2 className="hidden font-bold">Welcome to Vortex Demo</h2>
      <button
        // onClick={() => logOutBack()}
        // onClick={handleLogout}
        className="border:blue-500/50 shadow-xs w-full max-w-[100px] rounded-md border border-blue-500/20 px-4 py-2.5 text-center font-semibold text-blue-500 shadow-blue-500/50 duration-200 hover:border-blue-500 md:w-max"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
