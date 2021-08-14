import React from "react";

import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h3>Nimap Infotech</h3>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/task" className="nav-links">
              Task
            </Link>
          </li>
          {localStorage.getItem("user") ? (
            <li>
              <Link to="/user" className="nav-links">
                User
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" className="nav-links">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
