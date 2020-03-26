import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DashboardContent from "../Dashboard/DashboardContent.jsx";
import DashboardComponent from "../Dashboard/DashboardComponent.jsx";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 150
  },
  title: {
    fontSize: 40,
    marginLeft: 50,
    marginTop: 30
  },
  comp: {
    display: "flex"
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} component="h2">
            Dashboard
          </Typography>
        </CardContent>
      </Card>
      <div className={classes.comp}>
        <DashboardContent />
        <DashboardComponent />
      </div>
    </div>
  );
}
