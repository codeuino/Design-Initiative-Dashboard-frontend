import React from "react";
import Header from "../../../../../Components/Layout/Header";
import Profile from "../DashboardProfile";
import useStyles from "./ProjectsMentoringStyling";
import Projects from "./Projects";

const ProjectsMentoring = () => {
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
            <p>Project Mentoring</p>
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ProjectsMentoring;
