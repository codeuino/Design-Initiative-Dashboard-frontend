import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import OrganizationContainer from "./Components/Organization/OrganizationContainer";
import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import DetailContainer from "./Components/Organization/OrganizationDetail/DetailContainer";
import SignIn from "./Components/Authentication/Signin";
import SignUp from "./Components/Authentication/Signup";
import ProjectDetails from "./Components/Organization/OrganizationDetail/ProjectDetails/ProjectDetailsContainer";
import SelectedProposals from "./Components/Dashboard/Proposals/SelectedProposals";
import YourProposals from "./Components/Dashboard/Proposals/YourProposals";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/Dashboard" component={DashboardContainer} />
            <Route
              exact
              path="/organization"
              component={OrganizationContainer}
            />
            <Route
              exact
              path="/OrganizationDetail"
              component={DetailContainer}
            />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/ProjectDetails" component={ProjectDetails} />
            <Route
              exact
              path="/SelectedProposals"
              component={SelectedProposals}
            />
            <Route exact path="/YourProposals" component={YourProposals} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
