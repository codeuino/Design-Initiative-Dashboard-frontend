import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./DasboardStyling";

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.proposal}>
      <Card />
      <CardContent>
        <Typography
          className={classes.message}
          variant="body1"
          component="p"
          align="center"
        >
         You are not mentoring any project yet. The admin will alot you a project.
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
