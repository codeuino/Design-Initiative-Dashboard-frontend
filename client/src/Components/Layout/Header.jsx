import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BrushIcon from "@material-ui/icons/Brush";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import DashboardPanel from "../Dashboard/DashboardPanel";
import OrganizationPanel from "../Organization/OrganizationPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

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

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <Tab label="DASHBOARD" {...a11yProps(1)} />
            <Tab label="ORGANIZATIONS" {...a11yProps(0)} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={1}>
        <OrganizationPanel />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <DashboardPanel />
      </TabPanel> 
    </div>
  );
}
