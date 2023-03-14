import Header from "./Header";
import Sidebar from "./Sidebar";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSuccess } from "../../store/actions/authActions";
import { RootState } from "../../store";
type Props = {};

const Dashboard = (props: Props) => {
  const { user, needVerification, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="font-xl">Welcome {user?.firstName}</h1>
      {/* <Header handleLogout={handleLogout} /> */}
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
