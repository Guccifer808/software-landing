import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
