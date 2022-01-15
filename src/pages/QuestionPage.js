import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Question from "../components/Question";
import PublishIcon from "@mui/icons-material/Publish";
import "./sass/QuestionPage.scss";
import SkeletonQuestion from "../components/SkeletonQuestion";
import { useParams } from "react-router-dom";
import requests from "../util/request";
import Nav from "../components/Nav";
import ResultCard from "../components/ResultCard";
import QuestionMapCard from "../components/QuestionMapCard";
const Auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTFlZjVjZWU3ODA4NTdmMDJkYWJmYyIsImlhdCI6MTY0MjE5NjgyOSwiZXhwIjoxNjQ5OTcyODI5fQ.FRJp8MUvsPSVnnXbvrb0QRiJ42WUNxzVC744R8gL4iw";
function QuestionPage() {
  const [Qdata, setQdata] = useState([]);
  const [ansData, setAnsData] = useState({});
  const { setcode } = useParams();
  const formref = useRef();

  useEffect(() => {
    const check = () => {
      const headers = {
        withCredentials: true,
        Authorization: `Bearer ${Auth}`,
      };

      axios
        .get(requests.checkInfo.replace("<<SETCODE>>", setcode), { headers })
        .then((res) => {
          if (res.data.data.document) {
            getQuestionPaper(res.data.data.document[0]);
            // showCheckResponce(formref.current, res.data.data.document[0]);
            setAnsData(res.data.data.document[0]);
          } else {
            getQuestionPaper();
          }
        })
        .catch((el) => {
          getQuestionPaper();
        });
    };
    check();

    const getQuestionPaper = (check) => {
      axios
        .get(requests.getQuestionPaper.replace("<<SETCODE>>", setcode))
        .then((res) => {
          // console.log(res.data.data);
          setQdata(res.data.data);
          if (check) {
            showCheckResponce(formref.current, check);
          }
        });
    };
  }, [setcode]);

  function Submit(e) {
    e.preventDefault();
    const map = [];
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].checked) {
        const temp = {
          Qid: e.target[i].name.split("_")[2],
          sub: e.target[i].name.split("_")[1],
          ans: e.target[i].id,
        };
        map.push(temp);
      }
      e.target[i].disabled = true;
    }

    const final = {
      paperInfo: {
        setcode: setcode,
        set_id: "61ded226e83b6f330c49ad76",
        set_title: "practice set 1",
        type: "JEE-mains",
        full_duration: 3,
        attemptedOn: `${new Date()}`,
      },
      map,
    };

    console.log(final);
    postAns(final, e);
  }

  function postAns(data, e) {
    const headers = {
      withCredentials: true,
      Authorization: `Bearer ${Auth}`,
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/user/postAns", data, { headers })
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

  const showCheckResponce = (e, data) => {
    for (let i = 0; i < e.length; i++) {
      console.log("hello");
      for (let j = 0; j < data.doc.length; j++) {
        if (e[i].id === data.doc[j].ans) {
          if (data.doc[j].correct__ans) {
            console.log(e[i].id, "green__label");
            e[i].labels[0].classList.value += " green__label";
          } else {
            console.log(e[i].id, "red__label");
            e[i].labels[0].classList.value += " red__label";
          }
        }
      }
      // e.target[i].disabled = true;
    }

    console.log(e[0].id);
    console.log(data.doc[0].ans);
  };
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
              phy={Qdata?.Questions?.PQuestions}
              che={Qdata?.Questions?.CQuestions}
              maths={Qdata?.Questions?.MQuestions}
            />
          )}
        </div>
        <form
          className="questionForm"
          ref={formref}
          onSubmit={(e) => Submit(e)}
          action=""
        >
          <div className="section1" id="section1-phy">
            {Qdata.length === 0 ? (
              <div>
                {" "}
                <SkeletonQuestion /> <SkeletonQuestion /> <SkeletonQuestion />{" "}
                <SkeletonQuestion />{" "}
              </div>
            ) : (
              Qdata?.Questions?.PQuestions.map((el) => {
                return (
                  <Question
                    idx={el.qutions_id}
                    key={el.qutions_id}
                    question={el.question}
                    questionID={el.qutions_id}
                    subCod={el.subCod}
                    option1={{
                      option: el.options[0].option,
                      _id: el.options[0].option_id,
                    }}
                    option2={{
                      option: el.options[1].option,
                      _id: el.options[1].option_id,
                    }}
                    option3={{
                      option: el.options[2].option,
                      _id: el.options[2].option_id,
                    }}
                    option4={{
                      option: el.options[3].option,
                      _id: el.options[3].option_id,
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
              Qdata?.Questions?.CQuestions.map((el) => {
                return (
                  <Question
                    idx={el.qutions_id}
                    key={el.qutions_id}
                    question={el.question}
                    questionID={el.qutions_id}
                    subCod={el.subCod}
                    option1={{
                      option: el.options[0].option,
                      _id: el.options[0].option_id,
                    }}
                    option2={{
                      option: el.options[1].option,
                      _id: el.options[1].option_id,
                    }}
                    option3={{
                      option: el.options[2].option,
                      _id: el.options[2].option_id,
                    }}
                    option4={{
                      option: el.options[3].option,
                      _id: el.options[3].option_id,
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
              Qdata?.Questions?.MQuestions.map((el) => {
                return (
                  <Question
                    idx={el.qutions_id}
                    key={el.qutions_id}
                    question={el.question}
                    questionID={el.qutions_id}
                    subCod={el.subCod}
                    option1={{
                      option: el.options[0].option,
                      _id: el.options[0].option_id,
                    }}
                    option2={{
                      option: el.options[1].option,
                      _id: el.options[1].option_id,
                    }}
                    option3={{
                      option: el.options[2].option,
                      _id: el.options[2].option_id,
                    }}
                    option4={{
                      option: el.options[3].option,
                      _id: el.options[3].option_id,
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
