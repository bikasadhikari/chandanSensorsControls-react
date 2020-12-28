import React from "react";
import "./NavbarElements.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Chandan sensor controls" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sensors">Sensors</Link>
        <Link to="/automation">Automation</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <FiMenu size={35} onClick={() => props.sidebar()}/>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
