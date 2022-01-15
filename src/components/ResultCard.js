import React, { useEffect, useState } from "react";
import "./sass/ResultCard.scss";
import { Bar } from "react-chartjs-2";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { red } from "@mui/material/colors";

function ResultCard(props) {
  const { scored, total, totalMarks } = props;

  const labels = [scored[0].label, scored[1].label, scored[2].label];
  const data = {
    labels,
    datasets: [
      {
        data: [scored[0].data, scored[1].data, scored[2].data],
        backgroundColor: "rgba(253, 65, 61, 0.5)",
      },
    ],
  };
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
    <div className={`resultCard ${show ? "resultCard__show" : ""}`}>
      <div className="resultCard__container1">
        <div className="container1__content">
          <div className="container1__heading">Answers</div>
          <div className="container1__data">{`${total}/${totalMarks}`}</div>
        </div>
        <div className="container1__graph">
          <Bar
            height={70}
            width={100}
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },

              responsive: true,
              maintainAspectRatio: false,
              indexAxis: "x",
              //   scales: {
              // x: {
              //   display: false,
              //   ticks: {
              //     stepSize: 2,
              //   },
              // },
              // y: {
              //   display: false,
              //   ticks: {
              //     stepSize: 10000,
              //   },
              // },
              //   },
            }}
          />
        </div>
      </div>

      <div className="resultCard__container2">
        <div className="container2__box">
          <div className="container2__box-heading">{scored[0].label}</div>
          <div className="container2__box_content">
            <div className="container2__box_content_positive">
              {`+ ${scored[0].positive}`}
              <ArrowUpward fontSize="small" color="success" />
            </div>
            <div className="container2__box_content_negative">
              {`- ${scored[0].negative}`}
              <ArrowDownward fontSize="small" sx={{ color: red[500] }} />
            </div>
            <div className="container2__box_content_total">
              :&nbsp;&nbsp;&nbsp; {scored[0].data}
            </div>
          </div>
        </div>

        <div className="container2__box">
          <div className="container2__box-heading">{scored[1].label}</div>
          <div className="container2__box_content">
            <div className="container2__box_content_positive">
              {`+ ${scored[1].positive}`}
              <ArrowUpward fontSize="small" color="success" />
            </div>
            <div className="container2__box_content_negative">
              {`- ${scored[1].negative}`}
              <ArrowDownward fontSize="small" sx={{ color: red[500] }} />
            </div>
            <div className="container2__box_content_total">
              :&nbsp;&nbsp;&nbsp; {scored[1].data}
            </div>
          </div>
        </div>

        <div className="container2__box">
          <div className="container2__box-heading">{scored[2].label}</div>
          <div className="container2__box_content">
            <div className="container2__box_content_positive">
              {`+ ${scored[2].positive}`}
              <ArrowUpward fontSize="small" color="success" />
            </div>
            <div className="container2__box_content_negative">
              {`- ${scored[2].negative}`}
              <ArrowDownward fontSize="small" sx={{ color: red[500] }} />
            </div>
            <div className="container2__box_content_total">
              :&nbsp;&nbsp;&nbsp; {scored[2].data}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
