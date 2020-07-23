import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./ProjectDescStyling";

const RightPane = () => {
  const classes = useStyles();
  return (
    <div>
      <CardContent className={classes.RightCardContent}>
        <Typography className={classes.submit}>
          <Button
            className={classes.cap}
            variant="contained"
            color="primary"
            disableElevation
          >
            Submit Proposal{" "}
          </Button>
        </Typography>
      </CardContent>
      <CardContent className={classes.RightCardContent}>
        <Typography className={classes.mentors}>
          Mentors:
          <Typography>
            <Link href="#" className={classes.mentors} color="inherit">
              Jaskirat Singh
            </Link>
            ,{" "}
            <Link href="#" className={classes.mentors} color="inherit">
              Siddharth
            </Link>
          </Typography>
        </Typography>
      </CardContent>
      <CardContent className={classes.RightCardContent}>
        <Typography>
          <Button
            variant="outlined"
            color="primary"
            className={classes.contact}
          >
            IRC Channel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.contact}
          >
            Mailing List
          </Button>
        </Typography>
      </CardContent>
    </div>
  );
};

export default RightPane;
