import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ProfileList from './ProfileList';
import Accordion from "react-bootstrap/Accordion";
import axios from 'axios';


class Profile extends Component {

  constructor(props){
    super(props);
    this.state={
      addArray:[],
    }
  }

  componentDidMount= async()=>{
    const { user,isAuthenticated } = this.props.auth0;
    
    if(isAuthenticated){
      const email= user.email;

      await axios
      .get(`http://localhost:3010/profiledata?email=${email}`)
      .then(result=>{
        this.setState({
          addArray:result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
  componentDidUpdate= async()=>{
    const { user,isAuthenticated } = this.props.auth0;
    
    if(isAuthenticated){
      const email= user.email;

      await axios
      .get(`http://localhost:3010/profiledata?email=${email}`)
      .then(result=>{
        this.setState({
          addArray:result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }

  updateCourses=(id)=>{
    
    axios
    .put(`http://localhost:3010/updatecourse/${id}`)
    .then (result=>{
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
    return  <>
    <Accordion defaultActiveKey="0">
          {this.state.addArray &&
          this.state.addArray.map((item,i)=>{
            return <ProfileList item={item} i={i} updateCourses={this.updateCourses}/>
          })}
          </Accordion>
        </>;

  }
}

export default withAuth0(Profile);
