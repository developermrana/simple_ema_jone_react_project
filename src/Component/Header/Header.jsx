import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <img src={logo} alt="Logo" />
      <nav className="navbar">
        <a href="home">Order</a>
        <a href="home">Order Review</a>
        <a href="home">Manage Inventory</a>
        <a href="home">Login</a>
      </nav>
    </section>
  );
};

export default Header;
