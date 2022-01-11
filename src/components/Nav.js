import React from "react";
import { Link } from "react-router-dom";
import "./sass/Nav.scss";

function Nav(props) {
  const { practicePage, dashboard, questionsPage } = props;
  return (
    <div className="nav">
      <header id="header">
        <a href="#" className="logo">
          log0o
        </a>
        <ul className="nav">
          {!questionsPage && (
            <>
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
            </>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Nav;
