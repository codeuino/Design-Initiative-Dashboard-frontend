import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import OrganizationContainer from './Components/Organization/OrganizationContainer';
import DashboardContainer from './Components/Dashboard/DashboardContainer';
import DetailContainer from './Components/Organization/OrganizationDetail/DetailContainer';
import SignIn from './Components/Authentication/Signin'
import SignUp from './Components/Authentication/Signup'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
	  <Navbar />
        <div className="App">
          <Switch>
             <Route exact path='/Dashboard' component={DashboardContainer} /> 
             <Route exact path='/organization' component={OrganizationContainer} />
			        <Route exact path='/OrganizationDetail' component = {DetailContainer} />			 
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
