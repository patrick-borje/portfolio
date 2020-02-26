import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <h2>PATRICK.DEV</h2>
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/MyWorks" className="nav-link">
              My Works
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
