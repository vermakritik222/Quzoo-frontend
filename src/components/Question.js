import React from "react";
import "./sass/Question.scss";
function Question(prams) {
  const {
    idx,
    question,
    questionID,
    option1,
    option2,
    option3,
    option4,
    subCod,
  } = prams;
  return (
    <div className="question" id={idx}>
      <div className="question__statement">
        <strong>{question}</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        doloribus maiores veritatis pariatur nam delectus itaque quia minus ad
        id repellendus perspiciatis officiis, accusantium omnis nesciunt!
        Possimus quae quia veritatis?
      </div>
      <div className="option-wrapper">
        <div className="">
          <input
            className=""
            type="radio"
            name={`option_${subCod}_${questionID}`}
            id={option1._id}
          />
          <label className="question__optionLabel" htmlFor={option1._id}>
            {`(a) ${option1.option}`}
          </label>
        </div>
        <div>
          <input
            className=""
            type="radio"
            name={`option_${subCod}_${questionID}`}
            id={option2._id}
          />
          <label className="question__optionLabel" htmlFor={option2._id}>
            {`(b) ${option2.option}`}
          </label>
        </div>
        <div>
          <input
            className=""
            type="radio"
            name={`option_${subCod}_${questionID}`}
            id={option3._id}
          />

          <label className="question__optionLabel" htmlFor={option3._id}>
            {`(c) ${option3.option}`}
          </label>
        </div>
        <div>
          <input
            className=""
            type="radio"
            name={`option_${subCod}_${questionID}`}
            id={option4._id}
          />
          <label className="question__optionLabel" htmlFor={option4._id}>
            {`(d) ${option4.option}`}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Question;
