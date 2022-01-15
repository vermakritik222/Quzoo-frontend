import React from "react";
import { Line } from "react-chartjs-2";
import "./sass/DashboardGraph.scss";

function DashboardGraph(props) {
  const labels = props.Dlabels;
  const data = {
    labels,
    datasets: [
      {
        data: props.Ddata,
        backgroundColor: "rgba(253, 65, 61, 0.5)",
        borderColor: "rgba(253, 65, 61, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return (
    <div className="dashboardGraph">
      <div className="dashboardGraph__covert">
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
          }}
        />
      </div>
    </div>
  );
}

export default DashboardGraph;
