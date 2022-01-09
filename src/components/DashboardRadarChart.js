import React from "react";
import { Radar } from "react-chartjs-2";
import "./sass/DashboardRadarChart.scss";

function DashboardRadarChart() {
  const labels = ["chemistry", "physics", "Maths", "total"];
  const data = {
    labels,
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: "rgba(31, 145, 221, 0.7)",
        borderColor: "rgb(31, 145, 221)",
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
