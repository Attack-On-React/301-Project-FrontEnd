import React, { Component } from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Profile from './component/Profile/Profile';
import CoursesToAdd from './component/CoursesToAdd/CoursesToAdd';
import Aboutus from './component/Aboutus/Aboutus';
import Blogs from './component/Blogs/Blogs';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Homepage/Home'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
      <Home/>
            </Route>
            <Route exact path="/blogs">
      <Blogs/>
            </Route>

            <Route exact path="/CoursesToAdd">
              <CoursesToAdd />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/Aboutus">
              <Aboutus />
            </Route>

           
          </Switch>
          <Footer />
        </Router>

      </>
    );
  }
}

export default App;