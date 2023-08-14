import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import "./Header.css";

const Header = () => {
  const [activePage, setActivePage] = useState("/");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // const [activeItem, setActiveItem] = useState(false)

  // const handleClick = () => {
  //   setActiveItem(true)
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary-color header">
      {/* <Link className="navbar-brand" to="#">
        <img src={logo} alt="logo" className="logo" />
      </Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              // onClick={handleClick}

              onClick={() => handlePageChange("/")}
              className={clsx("nav-link", activePage === '/' ? 'active' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onClick={() => handlePageChange("/history")}
              className={clsx("nav-link", activePage === '/history' ? 'active' : '')}
              to="/history"
            >
              History
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
