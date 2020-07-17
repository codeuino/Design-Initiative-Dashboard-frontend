import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { cardData } from "../../../Data/Proj.json";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    maxWidth: 700,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 150,
    height: 150,
    display: "block",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  im: {
    marginLeft: 45,
    marginTop: 15,
    height: 100,
    width: 100,
  },
  content: {
    marginTop: 0,
    marginLeft: 20,
  },

  pos1: {
    marginTop: 0,
    maxWidth: 450,
  },
  pos2: {
    marginTop: 5,
    height: 10,
  },
  btn: {
    marginLeft: 570,
  },
  cap: {
    marginTop: 0,
    marginLeft: 30,
    borderRadius: "30px",
    height: 23,
    textTransform: "none",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {cardData.map((data) => (
        <Card className={classes.root}>
          <CardActionArea>
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
          </CardActionArea>
          <div>
            <CardActions>
              <Button size="small" color="primary" className={classes.btn}>
                View more
              </Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
}
