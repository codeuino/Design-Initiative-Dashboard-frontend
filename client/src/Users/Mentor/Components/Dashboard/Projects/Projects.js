import React from "react";
import useStyles from "./ProjectsStyling";
import Card from "@material-ui/core/Card";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import Button from "@materiaal-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { projectMentoring } from "../../../../../Data/ProposalInfo.json";

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      {projectMentoring.map((data) => (
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardMedia
              className={classes.im}
              component="img"
              alt="org-logo"
              height="140"
              src={data.image}
              title="Organisation card"
            />
            <CardContent className={classes.content}>
              <Typography
                variant="h5"
                component="h2"
                align="left"
                className={classes.pos1}
              >
                {data.title}
                {data.features.map((f) => (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.cap}
                  >
                    {f.name}
                  </Button>
                ))}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="left"
                className={classes.pos2}
              >
                {data.desc}
              </Typography>
            </CardContent>
          </div>
          <div>
            <CardActions>
              <Button size="small" color="primary" className={classes.btn}>
                View More
              </Button>
              {/*<Button size="small" color="primary" className={classes.btn}>
                View Project
                </Button>*/}
            </CardActions>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
