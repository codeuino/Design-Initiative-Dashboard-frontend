import React from "react";
import Header from "../../Layout/Header";
import Profile from "../DashboardProfile";
import useStyles from "./ProposalStyling";
import PropDetail from "./ProposalDetail";

export default function Detail() {
  const classes = useStyles();
  return (
    <div>
      <Header name="Dashboard" />
      <div className={classes.comp}>
        <div className={classes.multicomp}>
            <div className={classes.pro}>
              <p>Profile</p>
            </div>
            <Profile />
        </div>
        <div className={classes.multicomp}>
          <div className={classes.pro}>
            <p>Your Proposals</p>
          </div>
          <PropDetail />
        </div>
      </div>
    </div>
  );
}
