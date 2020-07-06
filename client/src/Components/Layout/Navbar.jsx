import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BrushIcon from "@material-ui/icons/Brush";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  },
  title: {
    flexGrow: 1,
    marginLeft: 5
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    history.push('/Dashboard');
    
  };

  const handle = () => {
    history.push('/Organization');
  };



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <BrushIcon />
          <Typography variant="h6" className={classes.title}>
            Season of Design
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="DASHBOARD" onClick={handleClick}/>
            <Tab label="ORGANIZATION" onClick={handle} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
