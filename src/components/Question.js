import React from "react";
import "./sass/Question.css";
function Question(prams) {
  const { question, questionID, option1, option2, option3, option4, subCod } =
    prams;
  return (
    <div className="question">
      <div className="question__statement">
        <strong>{question}</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        doloribus maiores veritatis pariatur nam delectus itaque quia minus ad
        id repellendus perspiciatis officiis, accusantium omnis nesciunt!
        Possimus quae quia veritatis?
      </div>
      <label className="question__optionLabel" htmlFor={option1._id}>
        <input
          className=""
          type="radio"
          name={`option-${subCod}-${questionID}`}
          id={option1._id}
        />
        {option1.option}
      </label>
      <label className="question__optionLabel" htmlFor={option2._id}>
        <input
          className=""
          type="radio"
          name={`option-${subCod}-${questionID}`}
          id={option2._id}
        />
        {option2.option}
      </label>
      <label className="question__optionLabel" htmlFor={option3._id}>
        <input
          className=""
          type="radio"
          name={`option-${subCod}-${questionID}`}
          id={option3._id}
        />
        {option3.option}
      </label>
      <label className="question__optionLabel" htmlFor={option4._id}>
        <input
          className=""
          type="radio"
          name={`option-${subCod}-${questionID}`}
          id={option4._id}
        />
        {option4.option}
      </label>
    </div>
  );
}

export default Question;
