import React from "react";
import { Link } from "react-router-dom";
import "./sass/Nav.scss";

function Nav(props) {
  const { practicePage, dashboard } = props;
  return (
    <div className="nav">
      <header id="header">
        <a href="#" className="logo">
          logo
        </a>
        <ul className="nav">
          <li className="item">
            <a href="#">home</a>
          </li>
          <li className="item">
            <a href="#" className={practicePage && "activeNav"}>
              Practice
            </a>
          </li>
          <li className="item">
            <a href="#">contact</a>
          </li>
          <li className="item">
            <Link to="/Dashboard" className={dashboard && "active"}>
              Dashboard
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Nav;
