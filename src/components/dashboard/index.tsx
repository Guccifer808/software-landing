import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Props = {};

const Dashboard = (props: Props) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirectCallback = async () => {
      // If the user is not authenticated, redirect to the homepage
      if (!isAuthenticated) {
        navigate("/");
        return;
      }
      navigate("/dashboard");
    };

    // Call the handleRedirectCallback function when the component mounts
    handleRedirectCallback();
  }, [isAuthenticated, getIdTokenClaims, navigate]);

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
