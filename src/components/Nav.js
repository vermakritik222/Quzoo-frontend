import React from "react";
import { Link } from "react-router-dom";
import "./sass/Nav.scss";

function Nav(props) {
  const { practicePage, dashboard, questionsPage } = props;
  return (
    <div className="nav">
      <header id="header">
        <a href="#" className="logo">
          quzoo
        </a>
        <ul className="nav">
          {!questionsPage && (
            <>
              <li className="item">
                <Link to="/login">home</Link>
              </li>
              <li className="item">
                <Link to="/allsets" className={practicePage && "activeNav"}>
                  Practice
                </Link>
              </li>
              <li className="item">
                <Link to="/question/20181">contact</Link>
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
