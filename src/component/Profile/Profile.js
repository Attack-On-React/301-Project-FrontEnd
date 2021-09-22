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
        .get(`https://study-station.herokuapp.com/profiledata?email=${email}`)
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
        .get(`https://study-station.herokuapp.com/profiledata?email=${email}`)
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
      .put(`https://study-station.herokuapp.com/updatecourse/${this.state.id}`,obj)
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
    .delete(`https://study-station.herokuapp.com/deletecourse/${id}?email=${email}`)
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
    const {user,isAuthenticated}=this.props.auth0
 
    return (
      <>
      <div className="profilepage">
      <div className="personinfo">
        <div className="infoheader">
          {isAuthenticated && <img src={user.picture}/>}
          {isAuthenticated && <p>{user.name}</p>}
      </div>
      <div className="innerinfo">
        <div className="leftsideinfo">
        {isAuthenticated && <p>First Name: {user.given_name}</p>}
        {isAuthenticated && <p>Last Name: {user.family_name}</p>}
      </div>
      <div className="rightsideinfo">
      {isAuthenticated && <p>Email: {user.email}</p>}
      {isAuthenticated && <p>Language: {user.locale}</p>}
      {isAuthenticated && <p>Nick Name: {user.nickname}</p>}
      </div>
      </div>
      </div>
      <h3 class="courseslisttitle">- My Courses List -</h3>
      <br/>
      <br/>
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
        </div>
      </>
    );
  }
}

export default withAuth0(Profile);
