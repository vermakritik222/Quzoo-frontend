import React, { useEffect, useState } from "react";
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
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
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
          <a href="#section2-che">chemistry</a>{" "}
        </h3>
        <div className="questionMapCard__container-sec2">
          {che === undefined ? (
            <>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
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
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
              <a href={`#`}>
                <div className="questionMapCard__container__skeleton"></div>
              </a>
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
