import React, {Component} from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Header from "../Layout/Header.jsx";
import DashboardProfile from "../Dashboard/DashboardProfile.jsx";
import DashboardProposal from "./DashboardProposal.jsx";

const useStyles = ({
  comp: {
    display: "flex",
    padding: "0px 30px 30px 30px"
  },
  index: {
    display: "flex"
  },
ab: {
    marginTop: 70,
    marginLeft: 200,
    fontSize: "24px"
  },
  pro: {
    marginTop: 70,
    marginLeft: 430,
    fontSize: "24px"
  }
});

class DashboardContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header name="Dashboard" />
        
        <div className={classes.index}>
          <div className={classes.ab}>
            <p>Profile</p>
          </div>
          <div className={classes.pro}>
            <p>Your Proposals</p>
          </div>
        </div>
        
        <div className={classes.comp}>
          <DashboardProfile />
          <DashboardProposal />
        </div>
      </div>
    );
  }
}


export default withStyles(useStyles)(DashboardContainer);
