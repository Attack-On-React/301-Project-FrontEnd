import React, { Component } from "react";
import axios from "axios";
import CoursesToAddList from "./CoursesToAddList";
import Row from "react-bootstrap/Row";
import ModalCoursesToAddlist from "./ModalCoursesToAddlist";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";

class CoursesToAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedItems: [],
      courseArray: [],
      showflag: false,
      courseName: "",
      urlimg: "",
      unv: "",
      unvimg: "",
      description: "",
      price: "",
    };
  }

  // Method to self invoke to render the data from the server side
  componentDidMount = () => {
    axios
      .get("http://localhost:3010/coursesData")
      .then((result) => {
        this.setState({
          courseArray: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**================== add Item To Fav ==================== */

  addCourse = (item) => {
    console.log(item);
    const { user } = this.props.auth0;
    const email = user.email;

    const obj = {
      courseName: item.courseName,
      urlimg: item.urlimg,
      unv: item.unv,
      unvimg: item.urlimg,
      description: item.description,
      price: item.price,
    };
    axios.post("http://localhost:3010/addcourse", obj).then((result) => {
      this.setState({
        addedItems: result.data,
      });
    });
  };
  //--------------------------------------------
  render() {
    return (
      <>
        <h1>These our courses</h1>
        <Row xs={1} md={3} className="g-4">
          {this.state.courseArray.map((item) => {
            return <CoursesToAddList item={item} addCourse={this.addCourse} />;
          })}
        </Row>
      </>
    );
  }
}

export default withAuth0(CoursesToAdd);
