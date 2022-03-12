import React from "react";
import { Link } from "react-router-dom";
import "./sass/setCard.scss";

function SetCard(props) {
  const { img, title, link, description, skeleton } = props;
  return (
    <div className="setCard">
      <div className="SetCard__imgCover">
        <img src={img} alt="" />
      </div>
      <div className="SetCard__content">
        <h2 className={skeleton ? "heading skeleton__heading" : "heading"}>
          {title}
        </h2>
        {skeleton ? (
          <div>
            <div className="skeleton__text"></div>
            <div className="skeleton__text"></div>
          </div>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="SetCard__startbtn">
        {skeleton ? (
          <div className="skeleton__SetCard__startbtn"></div>
        ) : (
          <Link to={link}>Start</Link>
        )}
      </div>
    </div>
  );
}

export default SetCard;
