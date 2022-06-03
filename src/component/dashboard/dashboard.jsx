import React from "react";
import "./dashboard.scss";
import vector from "../assets/vector.png";
import avatar from "../assets/image.png";
import logo from "../assets/logoa.png";
import DashUp from "./dash-up";
import DashDown from "./dash-down";

const Dashboard = () => {
  return (
     <div className="dashboard">
         <DashUp/>
         <DashDown/>
     </div>
  );
};

export default Dashboard;
