import "./sidebar.scss";
import logo from "../assets/logoa.png";
import avatar from "../assets/userDp.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="sidebar-content">
      <div
        className="navbar-nav bg-gradient-primary nav_back  sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-text nav_main">
            {" "}
            <img src={logo} alt="logo" className="img-fluid" /> Insurance Portal
          </div>
        </a>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <img src={avatar} alt="avatar" className="img-fluid avatar " />
            <p className="avatar_text">Hello ! Rusalba Ruiz </p>{" "}
            <p className="avatar_subtext">
              Welcome Back To Your Insurance Portal{" "}
            </p>
            <p className="sub_text">
              Your Plan : <span className="free_text">Free</span>
            </p>
          </a>
          <button className="button_text form-control">
            Create New Plan <i className="fa-solid fa-plus"></i>
          </button>
        </li>

        <div className="nav-item-link">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-th-large overview"></i> Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/policy"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-shield overview"></i> Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/report"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-bug Reports overview "></i> Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-map overview"></i> Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-user-circle overview"></i> User Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-history overview"></i> History
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="logout">
          <button>
            {" "}
            <i className="fa fa-sign-out overview"></i> Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
