import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DashboardImage from "../Dashboard/DashboardImage.jsx";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    marginTop: 100,
    height: 400,
    marginLeft: 170
  },
  pos1: {
    marginTop: 35,
    marginBottom: 40
  },
  pos2: {
    marginBottom: 40
  },
  buttonspacing: {
    marginLeft: 240
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Card elevation={3} />

      <CardActions>
        <Button size="small" color="primary" className={classes.buttonspacing}>
          Edit
        </Button>
      </CardActions>

      <CardContent>
        <DashboardImage />

        <Typography
          className={classes.pos1}
          variant="h5"
          component="h2"
          align="center"
        >
          Name
        </Typography>
        <Typography
          className={classes.pos2}
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          email.sample@gmail.com
        </Typography>
      </CardContent>
    </Card>
  );
}
