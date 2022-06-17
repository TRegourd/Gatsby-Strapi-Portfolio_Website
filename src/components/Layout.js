import React from "react";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../assets/css/main.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
