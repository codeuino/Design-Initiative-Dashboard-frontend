import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileImage from "./ProfileImage";
import { admin } from "../../../../Data/Profile.json";
import useStyles from "./DasboardStyling";

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <>
      {admin.map((ad) => (
        <Card className={classes.profile}>
          <Card elevation={3} />
          <CardActions>
            <Button size="small" color="primary" className={classes.editbutton}>
              Edit
            </Button>
          </CardActions>

          <CardContent>
            <ProfileImage name={ad.name}/>

            <Typography
              className={classes.name}
              variant="h5"
              component="h2"
              align="center"
            >
              {ad.name}
            </Typography>
            <Typography
              className={classes.email}
              variant="body1"
              component="p"
              align="center"
            >
              {ad.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
