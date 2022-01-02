import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import "./sass/QuestionPage.css";

function QuestionPage() {
  const [Qdata, setQdata] = useState([]);
  useEffect(() => {
    (() => {
      axios
        .get("http://127.0.0.1:8000/api/v1/questions/questionpaper/20181")
        .then((res) => {
          setQdata(res.data.data);
        });
    })();
  }, []);

  function Submit(e) {
    e.preventDefault();
    const map = [];
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].checked) {
        const temp = {
          Qid: e.target[i].name.split("-")[2],
          sub: e.target[i].name.split("-")[1],
          ans: e.target[i].id,
        };
        map.push(temp);
      }
      e.target[i].disabled = true;
    }

    const final = {
      userID: "null",
      paperInfo: {
        year: 20181,
        type: "JEE-mains",
        attemptedOn: `${new Date()}`,
        full_duration: 3,
      },
      map,
    };

    console.log(final);
    postAns(final, e);
  }

  function postAns(data, e) {
    const headers = {
      withCredentials: true,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2VjYmQ3Y2RlNTY0ZjcyZGZhMjlhYSIsImlhdCI6MTY0MTExODcyMywiZXhwIjoxNjQ4ODk0NzIzfQ.IpJuxN1xBxWivAOxxa4wdnQgB_QIUgGJrUblgAliqdI",
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/questions/postans", data, { headers })
      .then((res) => {
        showResponce(res.data.data, e);
        // console.log(res.data);
      });
  }

  function showResponce(res, e) {
    for (let i = 0; i < e.target.length; i++) {
      for (let j = 0; j < res.doc.length; j++) {
        if (e.target[i].checked && e.target[i].id === res.doc[j].ans) {
          if (res.doc[j].correct__ans) {
            e.target[i].parentElement.classList.value += " green__label";
          } else {
            e.target[i].parentElement.classList.value += " red__label";
          }
        }
        e.target[i].disabled = true;
      }
    }
  }
  return (
    <div className="questionPage">
      <form className="questionForm" onSubmit={(e) => Submit(e)} action="">
        <br />
        <br />
        {Qdata?.physics?.phy.map((el) => {
          return (
            <Question
              key={el.question}
              question={el.question}
              questionID={el._id}
              subCod={el.subCod}
              option1={{ option: el.options[0].option, _id: el.options[0]._id }}
              option2={{ option: el.options[1].option, _id: el.options[1]._id }}
              option3={{ option: el.options[2].option, _id: el.options[2]._id }}
              option4={{ option: el.options[3].option, _id: el.options[3]._id }}
            />
          );
        })}
        <br />
        <br />
        <br />
        <br />
        {Qdata?.chemistry?.che.map((el) => {
          return (
            <Question
              key={el.question}
              subCod={el.subCod}
              question={el.question}
              questionID={el._id}
              option1={{ option: el.options[0].option, _id: el.options[0]._id }}
              option2={{ option: el.options[1].option, _id: el.options[1]._id }}
              option3={{ option: el.options[2].option, _id: el.options[2]._id }}
              option4={{ option: el.options[3].option, _id: el.options[3]._id }}
            />
          );
        })}
        <br />
        <br />
        <br />
        <br />
        {Qdata?.maths?.maths.map((el) => {
          return (
            <Question
              key={el.question}
              question={el.question}
              questionID={el._id}
              subCod={el.subCod}
              option1={{ option: el.options[0].option, _id: el.options[0]._id }}
              option2={{ option: el.options[1].option, _id: el.options[1]._id }}
              option3={{ option: el.options[2].option, _id: el.options[2]._id }}
              option4={{ option: el.options[3].option, _id: el.options[3]._id }}
            />
          );
        })}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

export default QuestionPage;
