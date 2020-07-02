import React from "react";
import {Card} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {about} from "../../../Data/Proj.json";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FFFFFF",
    maxWidth: 345,
    marginTop: 0,
    marginLeft: 100,
    height: 400
  },
  pos2: {
    marginTop: 20
  },
  cap: {
    marginTop: 40,
    marginLeft: 30,
    borderRadius: "30px",
    height: 23,
    textTransform: "none"
  }
}));

export default function AboutCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <React.Fragment>
      {about.map((data)=> (
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            align="left"
            className={classes.pos2}
          >
            {data.desc}
          </Typography>
          
          {data.features.map((f) => (
            <Button variant="contained" color="primary" size="small" className={classes.cap} >
              {f.name}
            </Button>
        ))}

        </CardContent>
        </CardActionArea>
        
      ))}
        
       </React.Fragment>
    </Card>
  );
}
