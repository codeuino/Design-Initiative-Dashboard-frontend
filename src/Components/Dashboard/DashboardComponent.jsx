import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 650,
    marginTop: 100,
    height: 400,
    marginLeft: 150,
    marginRight: 40
  },
  pos1: {
    marginTop: 140
  },
  pos2: {
    marginBottom: 40
  },
  buttonspacing: {
    marginLeft: 195
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Card />
      <CardContent>
        <Typography
          className={classes.pos1}
          variant="h5"
          component="p"
          align="center"
        >
          You haven't applied to any organization yet.
        </Typography>

        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.buttonspacing}
          >
            View Organizations
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
