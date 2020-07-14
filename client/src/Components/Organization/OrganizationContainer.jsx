import React , {Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {withStyles} from "@material-ui/core/styles";
import OrganizationCard from "../Organization/OrganizationCard.jsx";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Header from "../Layout/Header";

const useStyles = ({
  comp: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    padding: "30px"
  },
  search: {
    marginLeft: 30,
    marginTop: 40,
    flexGrow: 1,
    display: "flex",
  },
  searchIcon: {
    justifyContent: 'center',
    marginLeft:30,
    width: 30
  },
  input: {
    marginLeft: 10,
    flex: 1
  }

});

class OrganizationContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Header
        name="Organizations"
        desc="Find an organization to submit proposal to."
      />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase className={classes.input} placeholder="Search for an organization or topic" />
      </div>

      <div className={classes.comp}>
        <OrganizationCard />
      </div>
    </div>
    );
  }
}

export default withStyles(useStyles)(OrganizationContainer);


