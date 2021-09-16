import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';
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