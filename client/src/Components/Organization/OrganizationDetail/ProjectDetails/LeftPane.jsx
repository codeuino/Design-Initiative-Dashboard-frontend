import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./ProjectDescStyling";

const LeftPane = () => {
  const classes = useStyles();
  return (
    <div>
      <CardContent className={classes.LeftCardContent}>
        <Typography className={classes.projectname}>Donut</Typography>
      </CardContent>
      <CardContent className={classes.LeftCardContent}>
        <Typography className={classes.orgname}>
          <Box fontWeight="fontWeightBold" m={1}>
            Codeuino
          </Box>
        </Typography>
      </CardContent>
      <CardContent className={classes.LeftCardContent}>
        <Typography className={classes.orglink}>
          <Link href="#">www.codeuino.org/donut</Link>
        </Typography>
      </CardContent>
      <CardContent className={classes.LeftCardContent}>
        <Typography className={classes.tt}>
          <Typography variant="h5" align="left" className={classes.tt}>
            Topics:
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.cap}
            >
              UI/UX
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.cap}
            >
              Graphic Design
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.cap}
            >
              Web Design
            </Button>
          </Typography>
        </Typography>
        <Typography className={classes.tt}>
          <Typography variant="h5" align="left" className={classes.tt}>
            Technology required:
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.cap}
            >
              Adobe Illustrator
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.cap}
            >
              Figma
            </Button>
          </Typography>
        </Typography>
      </CardContent>
    </div>
  );
};

export default LeftPane;
