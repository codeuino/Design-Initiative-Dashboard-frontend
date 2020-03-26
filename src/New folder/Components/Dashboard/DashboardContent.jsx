import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DashboardImage from "../Dashboard/DashboardImage.jsx";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345
  },
  pos: {
    marginTop: 60
  },
  media: {
    height: 40,
    marginTop: 50
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Card elevation={3} />

      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>

      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />

      <CardContent>
        <DashboardImage />

        <Typography
          className={classes.pos}
          variant="h5"
          component="h2"
          align="center"
        >
          Name
        </Typography>
        <Typography
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
