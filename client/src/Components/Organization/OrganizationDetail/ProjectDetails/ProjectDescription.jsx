import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import { Link } from "@material-ui/core";
import useStyles from "./ProjectDescStyling";
import { about } from "../../../../Data/Projdetails.json";

const ProjectDescription = () => {
  const classes = useStyles();

  return (
    <div>
      {about.map((data) => (
        <Card className={classes.root}>
          <Card />
          <CardContent>
            <Typography className={classes.head}>
              <Box fontWeight="fontWeightBold" m={1}>
                Description:
              </Box>
            </Typography>
            <Typography className={classes.text}>{data.desc}</Typography>
            <Typography className={classes.head}>
              <Box fontWeight="fontWeightBold" m={1}>
                What do we Except?
              </Box>
            </Typography>
            <Typography className={classes.text}>{data.expect}</Typography>
            <Typography className={classes.head}>
              <Box fontWeight="fontWeightBold" m={1}>
                Tasks:
              </Box>
              <List>
                <ul type="disc" className={classes.tasks}>
                  {data.tasks.map((tasks) => (
                    <li>
                      Task #{tasks.id}{" "}
                      <Link href={tasks.t} className={classes.github}>
                        (GitHub)
                      </Link>{" "}
                    </li>
                  ))}
                </ul>
              </List>
            </Typography>
            <Typography className={classes.text}>
              <List />
            </Typography>
          </CardContent>
        </Card>
      ))}
      ;
    </div>
  );
};

export default ProjectDescription;
