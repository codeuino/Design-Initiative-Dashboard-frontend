import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 650,
    marginTop: 0,
    height: 400,
    marginLeft: 150,
    marginRight: 40
  },
  pos1: {
    marginTop: 140
  },
  buttonspacing: {
    marginLeft: 195
  }
});

  
  
export default function MediaCard() {
  const classes = useStyles();
  const history = useHistory();
  
  
function handleClick(){
  history.push('/Organization');
}


  return (
    
    <Card className={classes.root}>
      <Card />
      <CardContent>
        <Typography
          className={classes.pos1}
          variant="body1"
          component="p"
          align="center"
        >
          You haven't applied to any organization yet.
        </Typography>

        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.buttonspacing}
            onClick={handleClick}
          >
            View Organizations
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
