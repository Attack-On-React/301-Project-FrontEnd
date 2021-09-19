import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import ProfileList from "./ProfileList";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCourses: "",
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`http://localhost:3010/profileData?email=${email}`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          myCourses: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // const { user,isAuthenticated } = this.props.auth0;
    return (
      <>
        {this.state.myCourses.map((item) => {
          return <p>{item.courseName}</p>;
        })}
      </>
    );
  }
}

export default withAuth0(Profile);
