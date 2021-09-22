// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';

// class Footer extends React.Component {
//   render() {
//     return(
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand>&copy; Attack On React 2021</Navbar.Brand>
//       </Navbar>
//     );
//   }
// }

// export default Footer;
import React, { Component } from 'react'

import { withAuth0 } from "@auth0/auth0-react";

import "./Footer.css";
import Nav from 'react-bootstrap/Nav'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export class Footer extends Component {
  render() {

    const { isAuthenticated } = this.props.auth0;

    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ui className="list-unstyled">
                <li><Nav.Link className="servicesFooter" href="/">Home</Nav.Link></li>
                <li><Nav.Link className="servicesFooter" href="/Profile">Profile</Nav.Link></li>
                <li><Nav.Link className="servicesFooter" href="/blogs">Blogs</Nav.Link></li>
                <li><Nav.Link className="servicesFooter" href="/CoursesToAdd">Courses</Nav.Link></li>
                <li><Nav.Link className="servicesFooter" href="/Aboutus">About Us</Nav.Link></li>
              </ui>
            </div>
            <div className="col-4">
              <ui className="list-unstyled">
                <li><span className="icon"><AiFillGithub /></span> Github</li>
                <li><span className="icon"><AiFillLinkedin /></span> Linkedin</li>
              </ui>
            </div>
            <img class="footer-logo" src="https://i.ibb.co/ByB4ng8/04b2259c6ef84b5f872e6c76db6b9e01-1.png"/>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm copyRight">
              &copy;{new Date().getFullYear()} Attack-On-React
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth0(Footer)