import React, { Component } from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Profile from './component/Profile/Profile';
import CoursesToAdd from './component/CoursesToAdd/CoursesToAdd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Header/>
        <Switch>
              <Route exact path="/">
   
              </Route>
              <Route exact path="/CoursesToAdd">
                <CoursesToAdd/>
              </Route>
              <Route exact path="/profile">
                  <Profile/>
                </Route>           
            </Switch>
        <Footer/>
     </Router>
      </>
    );
  }
}

export default App;