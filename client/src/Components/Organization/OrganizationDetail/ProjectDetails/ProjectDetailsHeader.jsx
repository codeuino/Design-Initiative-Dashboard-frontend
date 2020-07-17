import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Data} from "./../../../../Data/Projdetails.json"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  LeftCardContent: {
    textAlign: "left",
    marginLeft: 70,
  },
  RightCardContent: {
    marginRight: 70,
    textAlign: "Right",
  },
  projectname: {
    marginTop: 30,
    fontSize: 48,
  },
  submit: {
    marginTop: 30,
    fontSize: 18,
  },
  orgname: {
    fontSize: 20,
    marginLeft:-7,
    marginTop: -35,

  },
  orglink: {
    fontSize: 15,
    marginTop: -30,

  },
  cap: {
    borderRadius: "30px",
marginLeft:10,
fontSize: 13,
    textTransform: "none",
  },
  tt: {
    fontSize: 18,
    marginTop: 15,

  },
  mentors: {
    fontSize: 18,

  },
  contact:{
    fontSize:13,
    marginLeft:10,
  }
}));

export default function ProjectDetailsHeader() {
  const classes = useStyles();

  function LeftPane() {
    return (
      <React.Fragment>
        <CardContent className={classes.LeftCardContent}>
          <Typography className={classes.projectname} >
            Donut
          </Typography>
        </CardContent>
        <CardContent className={classes.LeftCardContent}>
          <Typography className={classes.orgname} >
            <Box fontWeight="fontWeightBold" m={1}>
              Codeuino
            </Box>
          </Typography>
        </CardContent>

        <CardContent className={classes.LeftCardContent}>
          <Typography className={classes.orglink}>
            <Link href="#" >
              www.codeuino.org/donut
            </Link>
          </Typography>
        </CardContent>

        <CardContent className={classes.LeftCardContent}>
          {" "}
          <Typography className={classes.tt} component="h3">
            <Typography
              variant="h5"
              component="h2"
              align="left"
              className={classes.tt}
            >
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
          <Typography className={classes.tt} component="h3">
            <Typography
              variant="h5"
              component="h2"
              align="left"
              className={classes.tt}
            >
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
      </React.Fragment>
    );
  }
  function RightPane() {
    return (
      <React.Fragment>
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
          <Typography >
            <Button variant="outlined" color="primary" className={classes.contact}>
              IRC Channel
            </Button>
            <Button variant="outlined" color="primary" className={classes.contact}>
              Mailing List
            </Button>
          </Typography>
        </CardContent>
      </React.Fragment>
    );
  }
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <LeftPane />
        </Grid>
        <Grid item xs={4}>
          <RightPane />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Card>
        <Grid container>
          <Grid container item xs={12}>
            <FormRow />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
