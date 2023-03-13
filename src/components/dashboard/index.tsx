import Header from "./Header";
import Sidebar from "./Sidebar";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <Header handleLogout={handleLogout} />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
