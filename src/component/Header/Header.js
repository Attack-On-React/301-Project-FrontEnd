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
      showMobileNavBar:false,
    };
    this.togglePhoneNavBar=React.createRef();
  }

  handleShowMobileNavBar=()=>{
    this.setState((currentState) => ({
      showMobileNavBar:!currentState.showMobileNavBar
    }))
  }


  onClickOutsideHandler=(e)=>{
    if(this.state.showMobileNavBar && !this.togglePhoneNavBar.current.contains(e.target)){
    this.setState({showMobileNavBar:false})
    }
  }

  componentDidMount=()=>{
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount=()=>{
    window.removeEventListener('click', this.onClickOutsideHandler);
  }


  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <nav>
            <ul class="navContainer">
              <img
                id="logo-image"
                src="https://i.ibb.co/ByB4ng8/04b2259c6ef84b5f872e6c76db6b9e01-1.png"
              />
              <li class="nav-item desktopNavbar">
                <a href="/">Home</a>
              </li>
              <li class="nav-item desktopNavbar">
                <a href="/profile">Profile</a>
              </li>
              <li class="nav-item desktopNavbar">
                <a href="/blogs">blogs</a>
              </li>
              <li class="nav-item desktopNavbar">
                <a href="/CoursesToAdd">Courses</a>
              </li>
              <li class="nav-item desktopNavbar">
                <a href="/aboutus">About Us</a>
              </li>
              <li class="desktopNavbar">
                {!isAuthenticated && <LoginButton className="logingButton" />}

                {isAuthenticated && <LogoutButton className="logingButton" />}
              </li>
              <svg ref={this.togglePhoneNavBar} className="headerSVG" onClick={()=>{this.handleShowMobileNavBar()}} id="svg" width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                <g fill="#62b5d8" fill-rule="evenodd">
                  <path  d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
                </g>
              </svg>
            </ul>
            {this.state.showMobileNavBar?(
            <ul class="mobileNavbar">
              <li class="mobileNavbarItem">
                <a href="/">Home</a>
              </li>
              <li class="mobileNavbarItem ">
                <a href="/profile">Profile</a>
              </li>
              <li class="mobileNavbarItem">
                <a href="/blogs">blogs</a>
              </li>
              <li class="mobileNavbarItem">
                <a href="/CoursesToAdd">Courses</a>
              </li>
              <li class="mobileNavbarItem">
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                {!isAuthenticated && <LoginButton className="loginingbtnMobile" />}

                {isAuthenticated && <LogoutButton className="loginingbtnMobile" />}
              </li>
            </ul>
              ):null}
        </nav>
      </>
      // <Navbar bg="dark" variant="dark">
      //   <Container>
      //     <Nav className="me-auto">
      //     <Nav.Link href="/">
      //       <img src="https://i.ibb.co/ByB4ng8/04b2259c6ef84b5f872e6c76db6b9e01-1.png" />
      //     </Nav.Link>
      //       <Nav.Link href="/">Home</Nav.Link>
      //       <Nav.Link href="/profile">Profile</Nav.Link>
      //       <Nav.Link href="/blogs">Blogs</Nav.Link>
      //       <Nav.Link href="/CoursesToAdd">Courses</Nav.Link>
      //       <Nav.Link href="/aboutus">About Us</Nav.Link>
      //       {!isAuthenticated && (
      //         <Nav>
      //           <LoginButton className="loginingbtn" />
      //         </Nav>
      //       )}

      //       {isAuthenticated && (
      //         <Nav>
      //           <LogoutButton className="loginingbtn" />
      //           {/* <User

      //                             userEmailInfo={this.props.userEmailInfo}

      //                         /> */}
      //         </Nav>
      //       )}
      //     </Nav>
      //   </Container>
      // </Navbar>

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
