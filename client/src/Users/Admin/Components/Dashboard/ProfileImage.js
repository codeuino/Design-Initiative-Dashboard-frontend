import React from "react";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./DasboardStyling";

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.profileimage}>
      <Avatar
        alt={props.name}
        src="/static/images/avatar/1.jpg"
        className={classes.large}
      />
    </div>
  );
}
