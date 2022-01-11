import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import PublishIcon from "@mui/icons-material/Publish";
import "./sass/QuestionPage.scss";
import SkeletonQuestion from "../components/SkeletonQuestion";
import { useParams } from "react-router-dom";
import requests from "../util/request";
import Nav from "../components/Nav";
import ResultCard from "../components/ResultCard";
import QuestionMapCard from "../components/QuestionMapCard";

function QuestionPage() {
  const [Qdata, setQdata] = useState([]);
  const [ansData, setAnsData] = useState({});
  const { setcode } = useParams();
  useEffect(() => {
    (() => {
      axios
        .get(requests.getQuestionPaper.replace("<<SETCODE>>", setcode))
        .then((res) => {
          setQdata(res.data.data);
        });
    })();
  }, [setcode]);

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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ4NTY1YzE3Y2MzMjc3OGRmNjA2YyIsImlhdCI6MTY0MTkwNzU1OCwiZXhwIjoxNjQ5NjgzNTU4fQ.gcQRYZT_LUEdsrnJFc_XjhPToF0crfhO4XGt6a7QcvU",
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/questions/postans", data, { headers })
      .then((res) => {
        showResponce(res.data.data, e);
        setAnsData(res.data.data);
        console.log(res.data.data);
      });
  }

  function showResponce(res, e) {
    for (let i = 0; i < e.target.length; i++) {
      for (let j = 0; j < res.doc.length; j++) {
        if (e.target[i].checked && e.target[i].id === res.doc[j].ans) {
          if (res.doc[j].correct__ans) {
            e.target[i].labels[0].classList.value += " green__label";
          } else {
            e.target[i].labels[0].classList.value += " red__label";
          }
        }
        if (e.target[i].type !== "submit") {
          e.target[i].disabled = true;
        }
      }
    }
  }
  return (
    <div className="questionPage">
      <Nav />
      <div className="questionPage__container">
        <div className="questionPage__resultBlock">
          {ansData.QuizData ? (
            <ResultCard
              total={
                ansData.QuizData.phyQ_correct * 4 -
                (ansData.QuizData.total_phyQ - ansData.QuizData.phyQ_correct) +
                (ansData.QuizData.cheQ_correct * 4 -
                  (ansData.QuizData.total_cheQ -
                    ansData.QuizData.cheQ_correct)) +
                (ansData.QuizData.mathsQ_correct * 4 -
                  (ansData.QuizData.total_mathsQ -
                    ansData.QuizData.mathsQ_correct))
              }
              totalMarks={ansData.paperInfo.totalMarks || "60"}
              scored={[
                {
                  data:
                    ansData.QuizData.phyQ_correct * 4 -
                    (ansData.QuizData.total_phyQ -
                      ansData.QuizData.phyQ_correct),
                  positive: ansData.QuizData.phyQ_correct * 4,
                  label: "physics",
                  negative:
                    ansData.QuizData.total_phyQ - ansData.QuizData.phyQ_correct,
                },
                {
                  data:
                    ansData.QuizData.cheQ_correct * 4 -
                    (ansData.QuizData.total_cheQ -
                      ansData.QuizData.cheQ_correct),
                  positive: ansData.QuizData.cheQ_correct * 4,
                  label: "Chemistry",
                  negative:
                    ansData.QuizData.total_cheQ - ansData.QuizData.cheQ_correct,
                },
                {
                  data:
                    ansData.QuizData.mathsQ_correct * 4 -
                    (ansData.QuizData.total_mathsQ -
                      ansData.QuizData.mathsQ_correct),
                  positive: ansData.QuizData.mathsQ_correct * 4,
                  label: "Maths",
                  negative:
                    ansData.QuizData.total_mathsQ -
                    ansData.QuizData.mathsQ_correct,
                },
              ]}
            />
          ) : (
            <QuestionMapCard
              phy={Qdata?.physics?.phy}
              che={Qdata?.chemistry?.che}
              maths={Qdata?.maths?.maths}
            />
          )}
        </div>
        <form className="questionForm" onSubmit={(e) => Submit(e)} action="">
          <div className="section1" id="section1-phy">
            {Qdata.length === 0 ? (
              <div>
                {" "}
                <SkeletonQuestion /> <SkeletonQuestion /> <SkeletonQuestion />{" "}
                <SkeletonQuestion />{" "}
              </div>
            ) : (
              Qdata?.physics?.phy.map((el) => {
                return (
                  <Question
                    idx={el._id}
                    key={el.question}
                    question={el.question}
                    questionID={el._id}
                    subCod={el.subCod}
                    option1={{
                      option: el.options[0].option,
                      _id: el.options[0]._id,
                    }}
                    option2={{
                      option: el.options[1].option,
                      _id: el.options[1]._id,
                    }}
                    option3={{
                      option: el.options[2].option,
                      _id: el.options[2]._id,
                    }}
                    option4={{
                      option: el.options[3].option,
                      _id: el.options[3]._id,
                    }}
                  />
                );
              })
            )}
          </div>
          <div className="section2" id="section2-che">
            {Qdata.length === 0 ? (
              <div>
                {" "}
                <SkeletonQuestion /> <SkeletonQuestion /> <SkeletonQuestion />{" "}
                <SkeletonQuestion />{" "}
              </div>
            ) : (
              Qdata?.chemistry?.che.map((el) => {
                return (
                  <Question
                    idx={el._id}
                    key={el.question}
                    question={el.question}
                    questionID={el._id}
                    subCod={el.subCod}
                    option1={{
                      option: el.options[0].option,
                      _id: el.options[0]._id,
                    }}
                    option2={{
                      option: el.options[1].option,
                      _id: el.options[1]._id,
                    }}
                    option3={{
                      option: el.options[2].option,
                      _id: el.options[2]._id,
                    }}
                    option4={{
                      option: el.options[3].option,
                      _id: el.options[3]._id,
                    }}
                  />
                );
              })
            )}
          </div>
          <div className="section3" id="section3-maths">
            {Qdata.length === 0 ? (
              <div>
                {" "}
                <SkeletonQuestion /> <SkeletonQuestion /> <SkeletonQuestion />{" "}
                <SkeletonQuestion />{" "}
              </div>
            ) : (
              Qdata?.maths?.maths.map((el) => {
                return (
                  <Question
                    idx={el._id}
                    key={el.question}
                    question={el.question}
                    questionID={el._id}
                    subCod={el.subCod}
                    option1={{
                      option: el.options[0].option,
                      _id: el.options[0]._id,
                    }}
                    option2={{
                      option: el.options[1].option,
                      _id: el.options[1]._id,
                    }}
                    option3={{
                      option: el.options[2].option,
                      _id: el.options[2]._id,
                    }}
                    option4={{
                      option: el.options[3].option,
                      _id: el.options[3]._id,
                    }}
                  />
                );
              })
            )}
          </div>

          <div className="questionForm__submitBtn">
            <Button type="submit" variant="contained" endIcon={<PublishIcon />}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionPage;
