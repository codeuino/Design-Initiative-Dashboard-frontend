import React from "react";
import Header from "../../../../Components/Layout/Header";
import DashboardProfile from "./DashboardProfile.js";
import DashboardProposal from "./DashboardProposal.js";
import useStyles from "./DasboardStyling";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Header name="Dashboard" />
      <div className={classes.dashboard}>
        <div className={classes.dashpro}>
          <p>Profile</p>
        </div>
        <div className={classes.dashprop}>
          <p>Project Mentoring</p>
        </div>
      </div>

      <div className={classes.container}>
        <DashboardProfile />
        <DashboardProposal />
      </div>
    </div>
  );
}
