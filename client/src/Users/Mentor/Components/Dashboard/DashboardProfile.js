import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileImage from "./ProfileImage";
import { mentors } from "../../../../Data/Profile.json";
import useStyles from "./DasboardStyling";

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      {mentors.map((mt) => (
        <Card className={classes.profile}>
          <Card elevation={3} />
          <CardActions>
            <Button size="small" color="primary" className={classes.editbutton}>
              Edit
            </Button>
          </CardActions>

          <CardContent>
            <ProfileImage />

            <Typography
              className={classes.name}
              variant="h5"
              component="h2"
              align="center"
            >
              {mt.name}
            </Typography>
            <Typography
              className={classes.email}
              variant="body1"
              component="p"
              align="center"
            >
              {mt.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
