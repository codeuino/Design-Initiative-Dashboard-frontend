import React from "react";
import Header from "../../Layout/Header";
import Profile from "../DashboardProfile";
import { makeStyles } from "@material-ui/core/styles";
import PropDetail from "./ProposalDetail";

const useStyles = makeStyles({
  comp: {
    display: "flex",
    marginLeft: -60,
    paddingBottom: 10,
    justifyContent: "center",
    alignItem: "center"
  },
  multicomp: {
    display: "block",
  },
  index: {
    display: "flex"
  },
  pro: {
    marginTop: 70,
    marginLeft: 170,
    fontSize: "24px"
  },
});

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
