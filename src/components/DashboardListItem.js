import { FeedOutlined } from "@mui/icons-material";
import React from "react";
import "./sass/DashboardListItem.scss";

function DashboardListItem(props) {
  const { title, date } = props;
  return (
    <div className="dashboardListItem">
      <FeedOutlined />
      <div className="dashboardListItem__name">{title}</div>
      <div className="dashboardListItem__datetime">{date}</div>
    </div>
  );
}

export default DashboardListItem;
