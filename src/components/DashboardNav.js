import React from "react";
import "./sass/DashboardNav.scss";
import {
  AccountCircleOutlined,
  DashboardOutlined,
  LogoutOutlined,
  NotesOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import ButtonBase from "@mui/material/ButtonBase";
// import { CustomButton } from "@mui/base";
import { Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function DashboardNav(props) {
  const BtnStyle = {
    padding: "7px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  };
  const LogOutHeadingStyle = {
    color: "red",
    fontWeight: "500",
    marginTop: "7px",
  };
  const HeadingStyle = {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "0.7rem",
    fontWeight: "500",
    marginTop: "7px",
  };
  const IconStyle = {
    color: "rgba(255, 255, 255, 0.8)",
  };

  return (
    <div className="dashboardNav">
      <Link to="#" className="dashboardNav__logo">
        quzoo
      </Link>
      <div className="dashboardNav__ItemList">
        <div className="dashboardNav__ItemList__Item">
          <ButtonBase style={BtnStyle}>
            <DashboardOutlined style={IconStyle} sx={{ fontSize: 27 }} />
            <div
              className="dashboardNav__ItemList__Item__heading"
              style={HeadingStyle}
            >
              Dashboard
            </div>
          </ButtonBase>
        </div>

        <div className="dashboardNav__ItemList__Item">
          <ButtonBase style={BtnStyle}>
            <NotesOutlined style={IconStyle} sx={{ fontSize: 27 }} />
            <div
              className="dashboardNav__ItemList__Item__heading"
              style={HeadingStyle}
            >
              Dashboard
            </div>
          </ButtonBase>
        </div>

        <div className="dashboardNav__ItemList__Item">
          <ButtonBase style={BtnStyle}>
            <AccountCircleOutlined style={IconStyle} sx={{ fontSize: 27 }} />
            <div
              className="dashboardNav__ItemList__Item__heading"
              style={HeadingStyle}
            >
              Dashboard
            </div>
          </ButtonBase>
        </div>

        <div className="dashboardNav__ItemList__Item">
          <ButtonBase style={BtnStyle}>
            <SettingsOutlined style={IconStyle} sx={{ fontSize: 27 }} />
            <div
              className="dashboardNav__ItemList__Item__heading"
              style={HeadingStyle}
            >
              Dashboard
            </div>
          </ButtonBase>
        </div>
      </div>

      <div className="dashboardNav__LogOut">
        <ButtonBase className="dashboardNav__LogoutBtn" style={BtnStyle}>
          <LogoutOutlined sx={{ fontSize: 26 }} style={{ color: "red" }} />
          <div
            className="dashboardNav__LogOut__heading"
            style={LogOutHeadingStyle}
          >
            Log out
          </div>
        </ButtonBase>
      </div>
    </div>
  );
}

export default DashboardNav;
