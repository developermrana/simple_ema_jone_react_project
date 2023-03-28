import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <div>
        <a href="home">Home</a>
        <a href="home">About</a>
        <a href="home">Service</a>
        <a href="home">Contact</a>
      </div>
    </div>
  );
};

export default Header;
