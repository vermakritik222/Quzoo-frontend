import {
  AccountCircleOutlined,
  DashboardOutlined,
  LogoutOutlined,
  NotesOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardGraph from "../components/DashboardGraph";
import DashboardListItem from "../components/DashboardListItem";
import DashboardRadarChart from "../components/DashboardRadarChart";
import request from "../util/request";
import "./sass/Dashboard.scss";

function Dashboard() {
  const [dashData, setDashData] = useState({});

  useEffect(() => {
    (() => {
      const headers = {
        withCredentials: true,
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ4NTY1YzE3Y2MzMjc3OGRmNjA2YyIsImlhdCI6MTY0MTkwNzU1OCwiZXhwIjoxNjQ5NjgzNTU4fQ.gcQRYZT_LUEdsrnJFc_XjhPToF0crfhO4XGt6a7QcvU",
      };
      axios.get(request.getDashboardData, { headers }).then((res) => {
        setDashData(res.data);
        // console.log(res.data.data);
      });
    })();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__section1">
        <div className="dashboard__section1__log">LoG0o</div>
        <div className="dashboard__section1__container">
          <div className="dashboard__section1__item ">
            <div className="dashboard__section1__icon_cover active">
              <IconButton className="dashboard__section1__item-icon ">
                <NotesOutlined
                  sx={{ fontSize: 29 }}
                  style={{ color: "rgb(31, 145, 221)" }}
                />
              </IconButton>
            </div>
            <h6 class="dashboard__section1__item-name">Dashboard</h6>
          </div>
          <div className="dashboard__section1__item">
            <div className="dashboard__section1__icon_cover">
              <IconButton className="dashboard__section1__item-icon ">
                <DashboardOutlined
                  sx={{ fontSize: 29 }}
                  style={{ color: "rgb(31, 145, 221)" }}
                />
              </IconButton>
            </div>
            <h6 class="dashboard__section1__item-name">Dashboard</h6>
          </div>
          <div className="dashboard__section1__item">
            <div className="dashboard__section1__icon_cover">
              <IconButton className="dashboard__section1__item-icon ">
                <AccountCircleOutlined
                  sx={{ fontSize: 29 }}
                  style={{ color: "rgb(31, 145, 221)" }}
                />
              </IconButton>
            </div>
            <h6 class="dashboard__section1__item-name">Dashboard</h6>
          </div>
          <div className="dashboard__section1__item">
            <div className="dashboard__section1__icon_cover">
              <IconButton className="dashboard__section1__item-icon ">
                <NotesOutlined
                  sx={{ fontSize: 29 }}
                  style={{ color: "rgb(31, 145, 221)" }}
                />
              </IconButton>
            </div>
            <h6 class="dashboard__section1__item-name">Dashboard</h6>
          </div>
          <div className="dashboard__section1__item">
            <div className="dashboard__section1__icon_cover">
              <IconButton className="dashboard__section1__item-icon ">
                <SettingsOutlined
                  sx={{ fontSize: 29 }}
                  style={{ color: "rgb(31, 145, 221)" }}
                />
              </IconButton>
            </div>
            <h6 class="dashboard__section1__item-name">Dashboard</h6>
          </div>
        </div>
        <div className="dashboard__section1__avatar">
          <Avatar src="/img/DP.jfif" style={{ cursor: "pointer" }} />
          <div className="dashboard__section1__logout">
            <div className="dashboard__section1__icon_cover">
              <IconButton className="dashboard__section1__item-icon">
                <LogoutOutlined style={{ color: "red" }} />
              </IconButton>
            </div>
            <h6
              class="dashboard__section1__item-name"
              style={{ color: "red", textTransform: "capitalize" }}
            >
              logout
            </h6>
          </div>
        </div>
      </div>
      <div className="dashboard__section2">
        <div className="dashboard__section2-left">
          <h1>your work</h1>
          <div className="dashboard__section2-left__container">
            {dashData?.data?.paperInfo.map((el) => {
              return (
                <DashboardListItem title="practice set 0" date="12/03/2021" />
              );
            })}
          </div>
        </div>
        <div className="dashboard__section2-right">
          <div className="dashboard__section2-right__up">
            <DashboardRadarChart
              che={dashData?.data?.cheTotal}
              phy={dashData?.data?.phyTotal}
              maths={dashData?.data?.mathsTotal}
              total={
                dashData?.data?.cheTotal +
                dashData?.data?.phyTotal +
                dashData?.data?.mathsTotal
              }
            />
          </div>
          <div className="dashboard__section2-right__down">
            <DashboardGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
