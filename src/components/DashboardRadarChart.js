import React from "react";
import { Radar } from "react-chartjs-2";
import "./sass/DashboardRadarChart.scss";

function DashboardRadarChart(props) {
  const { che, phy, maths } = props;
  const labels = ["Physics", "Chemistry", "Maths"];
  const data = {
    labels,
    datasets: [
      {
        data: [phy, che, maths],
        backgroundColor: "rgba(253, 65, 61, 0.5)",
        borderColor: "rgb(253, 65, 61)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  return (
    <div className="dashboardRadarChart">
      <Radar
        height={300}
        width={300}
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
        }}
      />
    </div>
  );
}

export default DashboardRadarChart;
