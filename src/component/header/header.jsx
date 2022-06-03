import "./header.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoa.png";

const Header = ({navOpen}) => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Overview
              <div className="line"></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/policy"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Policy
              <div className="line"></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/report"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Reports
               <div className="line"></div>
            </NavLink>
          </li>
        </ul>
        <div className="bar">
           <div>  <img src={logo} alt="logo" className="img-fluid" /> Insurance Portal</div>
           <p className="avatar_text">Hello! Rusalba Ruiz </p>
           <button onClick={() => navOpen(true)}  > <i className="fa fa-bars" ></i></button>
        </div>
   
      </nav>
    </div>
  );
};

export default Header;
