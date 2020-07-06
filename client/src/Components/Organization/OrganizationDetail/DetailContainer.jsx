import React from "react";
import Header from "../../Layout/Header";
import About from "./About.jsx";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles({
  comp: {
    display: "flex"
  },
  multicomp: {
    display: "block",
  },
  index: {
    display: "flex"
  },
ab: {
    marginTop: 70,
    marginLeft: 110,
    fontSize: "24px"
  },
  pro: {
    marginTop: 70,
    marginLeft: 450,
    fontSize: "24px"
  },
  pos: {
    display: "block"
  }
});

export default function Detail() {
  const classes = useStyles();

  return (
    <div>
      <Header name="Codeuino" />
      <div className={classes.pos}>
        <div className={classes.index}>
          <div className={classes.ab}>
            <p>About</p>
          </div>
          <div className={classes.pro}>
            <p>Projects</p>
          </div>
        </div>
        <div className={classes.comp}>
          <About />
          <div className={classes.multicomp}>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
