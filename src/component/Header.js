import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <LogoutButton />
              <LoginButton />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
