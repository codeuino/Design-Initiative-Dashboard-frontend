import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Header'
import Dashboard from './Components/Dashboard/DashboardPanel'
import Organization from './Components/Organization/OrganizationPanel'
import SignIn from './Components/Authentication/Signin'
import SignUp from './Components/Authentication/Signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
             <Route exact path='/'component={Navbar} /> 
             {/* <Route path='/organizations' component={Organization} />  */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
