import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { MdClose } from "react-icons/md";

const Sidebar = (props) => {
  const open = props.open;
  return (
    <div className="sidebar" style={{top: `${open ? '0px' : '-1000px'}`, zIndex: `${open ? '1001' : ''}`}}>
      <div className="side-links">
        <div className="close-icon">
          <MdClose size={45} onClick={() => props.sidebar()}/>
        </div>
        <Link to="/" onClick={() => props.sidebar()}>Home</Link>
        <Link to="/sensors" onClick={() => props.sidebar()}>Sensors</Link>
        <Link to="/automation" onClick={() => props.sidebar()}>Automation</Link>
        <Link to="/services" onClick={() => props.sidebar()}>Services</Link>
        <Link to="/contact" onClick={() => props.sidebar()}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Sidebar;
