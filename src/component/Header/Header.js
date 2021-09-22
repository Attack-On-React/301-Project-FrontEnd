// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
// import { Link } from "react-router-dom";

// class Header extends Component {
//   render() {
//     return (
//       <>
//         <Navbar bg="light" variant="light">
//           <Container>
//             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//             <Nav className="me-auto">
//               <Link to="/">Home</Link>
//               <Link to="/profile">Profile</Link>
//               <Link to="/CoursesToAdd">Courses To Add</Link>
//               <Link to="/Aboutus">Aboutus</Link>
//               <LogoutButton />
//               <LoginButton />
//             </Nav>
//           </Container>
//         </Navbar>
//       </>
//     );
//   }
// }

// export default Header;

import React, { Component } from "react";

import { withAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoutButton from "./LogoutButton";
import "./Header.css";
// import User from './User/User';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "",
    };
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="https://i.ibb.co/ByB4ng8/04b2259c6ef84b5f872e6c76db6b9e01-1.png"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/CoursesToAdd">Courses</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            {
                      !isAuthenticated && (
                          <Nav>
                              <LoginButton className="loginingbtn"/>
                          </Nav>
                      )
                  }

          
          {
                      isAuthenticated && (
                          <Nav>
                              <LogoutButton className="loginingbtn"/>
                              {/* <User

                                  userEmailInfo={this.props.userEmailInfo}

                              /> */}
                          </Nav>
                      )
                  }
                  </Nav>
        </Container>
      </Navbar>

      // <Navbar className="header-nav" collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-4" fixed="top" style={{ zIndex: '10' }}>
      //     <Container>
      //         <Navbar.Brand className="navtitle" href="/"><img src="https://i.ibb.co/dWnJRBG/04b2259c6ef84b5f872e6c76db6b9e01.png"/></Navbar.Brand>
      //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //         <Navbar.Collapse id="responsive-navbar-nav">
      //             <Nav className="me-auto">
      //                 <Nav.Link className="navSections" id="home-btn" href="/">Home</Nav.Link>
      //                 <Nav.Link className="navSections"href="/CoursesToAdd">Courses</Nav.Link>
      //                 <Nav.Link className="navSections"href="/blogs">Blogs</Nav.Link>
      //                 {/* <Nav.Link href="/User">User</Nav.Link> */}
      //                 <Nav.Link className="navSections"href="/profile">Profile</Nav.Link>
      //                 <Nav.Link href="/aboutus">About Us</Nav.Link>
      //             </Nav>
      //             {
      //                 !isAuthenticated && (
      //                     <Nav>
      //                         <LoginButton />
      //                     </Nav>
      //                 )
      //             }

      //             {
      //                 isAuthenticated && (
      //                     <Nav>
      //                         <LogoutButton />
      //                         {/* <User

      //                             userEmailInfo={this.props.userEmailInfo}

      //                         /> */}
      //                     </Nav>
      //                 )
      //             }

      //         </Navbar.Collapse>
      //     </Container>
      // </Navbar>
    );
  }
}

export default withAuth0(Header);
