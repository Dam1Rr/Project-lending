import React from "react";
import s from "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="headerr">
        <h2 className="ash1">TheBox</h2>

        <span className="pi">
          <p>Home</p>
          <p>About Us</p>
          <p>Projects</p>
          <p>Services</p>
          <p className="pi2">Contact Us</p>
        </span>
      </div>
    </div>
  );
};


export default Header;
