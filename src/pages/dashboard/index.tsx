import Header from "./Header";
import Sidebar from "./Sidebar";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TopCards from "./components/topCards/TopCards";
import BarChart from "./components/barChart/BarChart";
import RecentOrders from "./components/recentOrders/RecentOrders";

type Props = {};

const Dashboard = (props: Props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header handleLogout={handleLogout} />
      {/* <div className="flex flex-col"> */}
      <Sidebar />
      <TopCards />
      {/* </div> */}
      <div className="ml-20 mt-4 grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
