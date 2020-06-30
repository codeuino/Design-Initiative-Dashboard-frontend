import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {cardData} from "./Org.json";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FFFFFF",
    maxWidth: 345,
    marginTop: 50,
    marginLeft: 40,
    height: 350
  },
  large: {
    marginLeft: 235
  },
  im: {
    marginLeft: 135,
    marginTop: 40,
    height: 75,
    width: 75
  },
  pos1: {
    marginTop: 25
  },
  pos2: {
    marginTop: 50
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();
    return (
        <React.Fragment>
        {cardData.map((data) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.im}
                component="img"
                alt="org-logo"
                height="140"
                src= {data.image}
                title="Organization card"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                  className={classes.pos1}
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                  className={classes.pos2}
                >
                  {data.summary}
                </Typography>
              </CardContent>
            </CardActionArea> 
            <CardActions>
                <Button size="small" color="primary" className={classes.large}>
                  See more
                </Button>
              </CardActions>
          </Card>
        ))}
        </React.Fragment> 
    );
};      
