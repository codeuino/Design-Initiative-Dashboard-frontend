import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import { Link } from "@material-ui/core";
import useStyles from "./ProjectDescStyling";

function ProjectDescription() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <Card />
        <CardContent>
          <Typography className={classes.head} component="h2">
            <Box fontWeight="fontWeightBold" m={1}>
              Description:
            </Box>
          </Typography>
          <Typography className={classes.text} component="h2">
            Donut is the core project of Codeuino. It needs some graphics to be
            worked on and also to improve the UX of the whole platform. Donut is
            the core project of Codeuino. It needs some graphics to be worked on
            and also to improve the UX of the whole platform. Donut is the core
            project of Codeuino. It needs some graphics to be worked on and also
            to improve the UX of the whole platform.Donut is the core project of
            Codeuino. It needs some graphics to be worked on and also to improve
            the UX of the whole platform.
          </Typography>
          <Typography className={classes.head} component="h2">
            <Box fontWeight="fontWeightBold" m={1}>
              What do we Except?
            </Box>
          </Typography>
          <Typography className={classes.text} component="h2">
            Donut is the core project of Codeuino. It needs some graphics to be
            worked on and also to improve the UX of the whole platform. Donut is
            the core project of Codeuino. It needs some graphics to be worked on
            and also to improve the UX of the whole platform. Donut is the core
            project of Codeuino. It needs some graphics to be worked on and also
            to improve the UX of the whole platform.Donut is the core project of
            Codeuino. It needs some graphics to be worked on and also to improve
            the UX of the whole platform.{" "}
          </Typography>
          <Typography className={classes.head} component="h2">
            <Box fontWeight="fontWeightBold" m={1}>
              Tasks:
            </Box>
            <List>
              <ul type="disc" className={classes.tasks}>
                <li>
                  Task #1{" "}
                  <Link href="#" className={classes.github}>
                    (GitHub)
                  </Link>{" "}
                </li>
                <li>
                  Task #2{" "}
                  <Link href="#" className={classes.github}>
                    (GitHub)
                  </Link>
                </li>
                <li>
                  Task #3{" "}
                  <Link href="#" className={classes.github}>
                    (GitHub)
                  </Link>
                </li>
              </ul>
            </List>
          </Typography>
          <Typography className={classes.text} component="h2">
            <List />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectDescription;
