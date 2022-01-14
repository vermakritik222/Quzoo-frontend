import React from "react";
import { Line } from "react-chartjs-2";
import "./sass/DashboardCard.scss";

function DashboardCard(props) {
  const { title, max, avg, dataset, labelset } = props;
  const labels = ["1", "2", "3", "1", "2"];
  const data = {
    labels,
    datasets: [
      {
        data: [22, 24, 43, 25, 19],
        backgroundColor: "rgba(253, 65, 61, 0.5)",
        borderColor: "rgba(253, 65, 61, 1)",
        // pointBorderColor: "#fff",
        // pointHoverBackgroundColor: "#fff",
        // pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  return (
    <div className="dashboardCard">
      <div className="dashboardCard__heading">{title}</div>
      <div className="dashboardCard__box">
        <div className="dashboardCard__box1__content1">Avg {avg}</div>
        <div className="dashboardCard__box1__content2">Max {max}</div>
      </div>
      <div className="dashboardCard__graph">
        <Line
          height={80}
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
            scales: {
              x: {
                display: false,
                ticks: {
                  stepSize: 2,
                },
              },
              y: {
                display: false,
                ticks: {
                  stepSize: 10000,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default DashboardCard;
