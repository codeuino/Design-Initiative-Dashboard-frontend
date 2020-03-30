import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import OrgComponent from "../Organization/OrgComponent.jsx";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 150
  },
  title: {
    fontSize: 40,
    marginLeft: 60,
    marginTop: 30
  },
  pos: {
    marginBottom: 12,
    marginLeft: 50
  },
  comp: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    padding: "30px"
  },
  search: {
    marginLeft: 200,
    marginTop: 40,
    flexGrow: 1,
    display: "flex"
  },
  searchIcon: {
    justifyContent: 'center',
    marginLeft:30,
    width: 30
  }
});



export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} component="h2">
          Organizations
        </Typography>
        <Typography className={classes.pos}>
          Find an organization to submit proposal to.
        </Typography>
      </CardContent>
    </Card>
    <div className={classes.search}>
          <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="Search for an organization or topic"
            />
      </div>
    <div className={classes.comp}>
    <OrgComponent/>
    <OrgComponent/>
    <OrgComponent/>
    <OrgComponent/>
    <OrgComponent/>
    <OrgComponent/>

      </div>
      </div>
  );
}
