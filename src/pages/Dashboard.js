import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardGraph from "../components/DashboardGraph";
import DashboardListItem from "../components/DashboardListItem";
import DashboardRadarChart from "../components/DashboardRadarChart";
import DashboardNav from "../components/DashboardNav";
import request from "../util/request";
import "./sass/Dashboard.scss";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <DashboardNav />
        <div className="dashboard__sec">
          <div className="dashboard__sec__paperlist">
            <h1>Your Work</h1>
            <div className="dashboard__sec__paperlist__container">
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <DashboardListItem title="practice set 1" date="12/2/2020" />
              <div className="dashboard__sec__paperlist__grad" />
            </div>
          </div>
          <div className="dashboard__sec2">
            <div className="dashboard__sec__row1">
              <DashboardRadarChart che={23} maths={23} phy={23} />
              <DashboardCard title={"physics"} max={23} avg={45} />
              <DashboardCard title={"chemistry"} max={42} avg={22} />
              <DashboardCard title={"maths"} max={12} avg={12} />
            </div>
            <div className="dashboard__sec__row2">
              <DashboardGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
