import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import useStyles from "./ProjectHeaderStyling";

const FormRow = () => {
  return (
    <React.Fragment>
      <Grid item xs={8}>
        <LeftPane />
      </Grid>
      <Grid item xs={4}>
        <RightPane />
      </Grid>
    </React.Fragment>
  );
};

const ProjectDetailsHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <Grid container>
          <Grid container item xs={12}>
            <FormRow />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ProjectDetailsHeader;
