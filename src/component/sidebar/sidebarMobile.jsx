import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const SidebarMobile = ({ setMobileNavOpen }) => {
  return (
    <div className="wrapp">
      <div className="mobileNavBar">
        <div className="close">
          <button onClick={() => setMobileNavOpen(false)}>
            {" "}
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileNavOpen(false)}
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
                onClick={() => setMobileNavOpen(false)}
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
                onClick={() => setMobileNavOpen(false)}
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
                onClick={() => setMobileNavOpen(false)}
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
                onClick={() => setMobileNavOpen(false)}
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
                onClick={() => setMobileNavOpen(false)}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i className="fa fa-history overview"></i> History
              </NavLink>
            </li>
            <li>
              <button
                className="logout"
                onClick={() => setMobileNavOpen(false)}
              >
                {" "}
                <i className="fa fa-sign-out overview"></i> Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
