import React from "react";
import logo from "../images/LOGO.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo-kasa" />

      <div className="liens">
      <NavLink to="/" className="lien" end>
          Accueil
        </NavLink>
        <NavLink to="/Apropos" className="lien">
          À Propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
