import React from "react";
import "./sass/Nav.scss";

function Nav(props) {
  const { practicePage } = props;
  return (
    <div className="nav">
      <header id="header">
        <a href="#home" className="logo">
          logo
        </a>
        <ul className="nav">
          <li className="item">
            <a href="sec">home</a>
          </li>
          <li className="item">
            <a href="#sec" className={practicePage && "active"}>
              Practice
            </a>
          </li>
          <li className="item">
            <a href="sec">contact</a>
          </li>
          <li className="item">
            <a href="sec">work</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Nav;
