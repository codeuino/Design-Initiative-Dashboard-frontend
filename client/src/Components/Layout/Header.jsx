import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 150,
  },
  title: {
    fontSize: 40,
    marginLeft: 60,
    marginTop: 30,
  },
  pos: {
    marginBottom: 12,
    marginLeft: 60,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.pos}>{props.desc}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
