import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./ProjectHeaderStyling";
import { about } from "../../../../Data/Projdetails.json";

const LeftPane = () => {
  const classes = useStyles();
  return (
    <div>
      {about.map((data) => (
        <div>
          <CardContent className={classes.LeftCardContent}>
            <Typography className={classes.projectname}>
              {data.projname}
            </Typography>
          </CardContent>
          <CardContent className={classes.LeftCardContent}>
            <Typography className={classes.orgname}>
              <Box fontWeight="fontWeightBold" m={1}>
                {data.orgname}
              </Box>
            </Typography>
          </CardContent>
          <CardContent className={classes.LeftCardContent}>
            <Typography className={classes.orglink}>
              <Link href={data.orglink} target="_blank">
                {data.orglink}
              </Link>
            </Typography>
          </CardContent>
          <CardContent className={classes.LeftCardContent}>
            <Typography variant="h5" align="left" className={classes.tt}>
              Topics:
              {data.topics.map((tp) => (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.cap}
                >
                  {tp.name}
                </Button>
              ))}
            </Typography>
            <Typography variant="h5" align="left" className={classes.tt}>
              Technology required:
              {data.techreq.map((tr) => (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.cap}
                >
                  {tr.req}
                </Button>
              ))}
            </Typography>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default LeftPane;
