import React from "react";
import "../styles/header.scss";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={`top-header ${theme}-mode `}>
      <div className="container flex">
        <div>
          <Link to="/" className="logo">
            Kushal Nandwani
          </Link>
          <br />
          <nav className="top-menu">
            <ul className="flex">
              <li>
                {/* <NavLink
                  activeClassName="active"
                  className="link"
                  to={"/about"}
                >
                  About
                </NavLink> */}
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="link"
                  to={"/projects"}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <a
                  id="gh"
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://github.com/knandwani98"}
                >
                  Github ↗️
                </a>
              </li>
              <li>
                <a
                  id="twitter"
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://twitter.com/knandwani98"}
                >
                  Twitter ↗️
                </a>
              </li>
              <li>
                <a
                  id="ig"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.instagram.com/kushal_nandwani"}
                >
                  Instagram ↗️
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button onClick={toggleTheme} className={`theme-btn ${theme}-mode`}>
            {theme === "dark" ? "🌒" : "🌔"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
