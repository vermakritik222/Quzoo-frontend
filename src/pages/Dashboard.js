import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../http/axios";
import DashboardGraph from "../components/DashboardGraph";
import DashboardListItem from "../components/DashboardListItem";
import DashboardRadarChart from "../components/DashboardRadarChart";
import DashboardNav from "../components/DashboardNav";
import DashboardCard from "../components/DashboardCard";
import request from "../util/request";
import "./sass/Dashboard.scss";

function Dashboard() {
  const [data, setData] = useState();
  const [graph, setGraph] = useState({});

  useEffect(() => {
    (() => {
      axios.get(request.getDashboardData).then((res) => {
        // console.log(res.data.data);
        const ldata1 = [];
        const ddata2 = [];

        for (let i = 0; i < res.data.data.paperInfo.length; i++) {
          ldata1.push(
            `${
              res.data.data.paperInfo[i].paperInfo.attemptedOn.split(" ")[1]
            } ${
              res.data.data.paperInfo[i].paperInfo.attemptedOn.split(" ")[2]
            } ${res.data.data.paperInfo[i].paperInfo.attemptedOn.split(" ")[3]}`
          );
          ddata2.push(
            res.data.data.paperInfo[i].QuizData.cheQ_correct * 4 -
              (res.data.data.paperInfo[i].QuizData.total_cheQ -
                res.data.data.paperInfo[i].QuizData.cheQ_correct) +
              (res.data.data.paperInfo[i].QuizData.phyQ_correct * 4 -
                (res.data.data.paperInfo[i].QuizData.total_phyQ -
                  res.data.data.paperInfo[i].QuizData.phyQ_correct)) +
              (res.data.data.paperInfo[i].QuizData.mathsQ_correct * 4 -
                (res.data.data.paperInfo[i].QuizData.total_mathsQ -
                  res.data.data.paperInfo[i].QuizData.mathsQ_correct))
          );
        }

        setGraph({
          label: ldata1,
          data: ddata2,
        });
        setData(res.data.data);
      });
    })();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <DashboardNav />
        <div className="dashboard__sec">
          <div className="dashboard__sec__paperlist">
            <h1>Your Work</h1>
            <div className="dashboard__sec__paperlist__container">
              {data?.paperInfo?.map((el) => {
                // console.log(el.paperInfo.setcode);
                return (
                  <Link
                    to={`/question/${el.paperInfo.setcode}`}
                    key={el.subansId}
                  >
                    <DashboardListItem
                      title={el.paperInfo.set_title}
                      date={`${el.paperInfo.attemptedOn.split(" ")[1]} ${
                        el.paperInfo.attemptedOn.split(" ")[2]
                      } ${el.paperInfo.attemptedOn.split(" ")[3]}`}
                    />
                  </Link>
                );
              })}

              <div className="dashboard__sec__paperlist__grad" />
            </div>
          </div>
          <div className="dashboard__sec2">
            <div className="dashboard__sec__row1">
              <DashboardRadarChart
                che={data?.cheTotal}
                maths={data?.mathsTotal}
                phy={data?.phyTotal}
              />
              <DashboardCard title={"physics"} max={23} avg={data?.phyTotal} />
              <DashboardCard
                title={"chemistry"}
                max={42}
                avg={data?.cheTotal}
              />
              <DashboardCard title={"maths"} max={12} avg={data?.mathsTotal} />
            </div>
            <div className="dashboard__sec__row2">
              <DashboardGraph Dlabels={graph.label} Ddata={graph.data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
