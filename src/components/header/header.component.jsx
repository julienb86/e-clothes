import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.component.scss";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link to="shop" className="option">
        SHOP
      </Link>
      <Link to="contact" className="option">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
