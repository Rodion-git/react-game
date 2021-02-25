import React from "react";

import "./NavBar.css";
import logo from "../assets/images/logo_navbar.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-custom">
      <div className="navbar-logo">
        <img className="navbar-logo__img" src={logo} alt="logo chess" />
      </div>
      <div className="settings">
        <span className="navbar-toggler-icon"></span>
      </div>
    </nav>
  );
};

export default Navbar;
