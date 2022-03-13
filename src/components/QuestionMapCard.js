import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sass/QuestionMapCard.scss";

function QuestionMapCard(props) {
  const { phy, che, maths } = props;
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 95) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`questionMapCard ${show ? "questionMapCard__Show" : ""}`}>
      <div className="questionMapCard__container">
        <h3 className="questionMapCard__container__heading">
          <a href="#section1-phy"> physics</a>
        </h3>
        <div className="questionMapCard__container-sec1">
          {phy === undefined ? (
            <>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
            </>
          ) : (
            phy?.map((el) => {
              return (
                <a href={`#${el.qutions_id}`} key={el.qutions_id}>
                  <div>{el.question}</div>
                </a>
              );
            })
          )}
        </div>
        <h3 className="questionMapCard__container__heading">
          <a heref="#section2-che">chemistry</a>{" "}
        </h3>
        <div className="questionMapCard__container-sec2">
          {che === undefined ? (
            <>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
            </>
          ) : (
            che?.map((el) => {
              return (
                <a href={`#${el.qutions_id}`} key={el.qutions_id}>
                  <div>{el.question}</div>
                </a>
              );
            })
          )}
        </div>

        <h3 className="questionMapCard__container__heading">
          <a href="#section3-maths">maths</a>
        </h3>
        <div className="questionMapCard__container-sec3">
          {maths === undefined ? (
            <>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
              <Link to={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </Link>
            </>
          ) : (
            maths?.map((el) => {
              return (
                <a href={`#${el.qutions_id}`} key={el.qutions_id}>
                  <div>{el.question}</div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionMapCard;
