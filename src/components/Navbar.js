import React from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
}
