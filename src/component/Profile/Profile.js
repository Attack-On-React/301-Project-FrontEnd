import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import ProfileList from "./ProfileList";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import ProfileListModal from "./ProfileListModal";
import "./Profile.css"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addArray: [],
      showModalFlag: false,
      price: "",
      id: "",
    };
  }

  componentDidMount = async () => {
    const { user, isAuthenticated } = this.props.auth0;

    if (isAuthenticated) {
      const email = user.email;

      await axios
        .get(`http://localhost:3010/profiledata?email=${email}`)
        .then((result) => {
          this.setState({
            addArray: result.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  componentDidUpdate = async () => {
    const { user, isAuthenticated } = this.props.auth0;

    if (isAuthenticated) {
      const email = user.email;

      await axios
        .get(`http://localhost:3010/profiledata?email=${email}`)
        .then((result) => {
          this.setState({
            addArray: result.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  updateCourses = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj={

      price:event.target.SelectSubscription.value,
      email:email
    }
     axios
      .put(`http://localhost:3010/updatecourse/${this.state.id}`,obj)
      .then((result) => {
        this.setState({
          addArray: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  showProfileModal = (item) => {
    this.setState({
      showModalFlag: true,
      price: item.price,
      id: item._id,
    });
  };
  handleClose = () => {
    this.setState({
      showModalFlag: false,
    });
  };

  deleteCourses=(id)=>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .delete(`http://localhost:3010/deletecourse/${id}?email=${email}`)
    .then(result=>{
      this.setState({
        addArray:result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    // const { user,isAuthenticated } = this.props.auth0;
    return (
      <>
      <div class="accordionstyle">
        <Accordion defaultActiveKey="0">
          {this.state.addArray &&
            this.state.addArray.map((item, i) => {
              return (
                <ProfileList
                deleteCourses={this.deleteCourses}
                  item={item}
                  i={i}
                  updateCourses={this.updateCourses}
                  showProfileModal={this.showProfileModal}
                />
              );
            })}
        </Accordion>
        <ProfileListModal
          updateCourses={this.updateCourses}
          price={this.state.price}
          show={this.state.showModalFlag}
          handleClose={this.handleClose}
        />
        </div>
      </>
    );
  }
}

export default withAuth0(Profile);
