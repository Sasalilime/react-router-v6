import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="navbar-container">
        <ul className="navbar">
          <li className="link">
            <Link to="/">Accueil</Link>
          </li>
          <li className="link">
            <Link to="/infos">Infos</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
