import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 150
  },
  title: {
    fontSize: 40,
    marginLeft: 50,
    marginTop: 20
  },
  pos: {
    marginBottom: 15,
    marginLeft: 50
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} component="h2">
          Organizations
        </Typography>
        <Typography className={classes.pos}>
          Find an organization to submit proposal to.
        </Typography>
      </CardContent>
    </Card>
  );
}
