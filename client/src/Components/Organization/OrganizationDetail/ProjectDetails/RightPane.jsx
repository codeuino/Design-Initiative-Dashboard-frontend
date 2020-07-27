import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./ProjectHeaderStyling";
import { about } from "../../../../Data/Projdetails.json";

const RightPane = () => {
  const classes = useStyles();
  return (
    <div>
      {about.map((data) => (
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
                  {data.mentor1}
                </Link>
                ,{" "}
                <Link href="#" className={classes.mentors} color="inherit">
                  {data.mentor2}
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
                href={data.irc}
                target="_blank"
              >
                IRC Channel
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.contact}
                href={data.mailinglist}
                target="_blank"
              >
                Mailing List
              </Button>
            </Typography>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default RightPane;
