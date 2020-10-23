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
          (no projects)
        </Typography>

        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.buttonspacing}
          >
            Add New Project
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
