import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import { FcCurrencyExchange,FcCancel,FcSynchronize } from "react-icons/fc";
import './ProfileList.css';
class ProfileList extends Component {
  render() {
    return (
      <>
  <Accordion.Item eventKey={this.props.i}>
    <Accordion.Header>{this.props.item.courseName}</Accordion.Header>
    <Accordion.Body>
      <img alt="courseImage" src={this.props.item.urlimg}/>
      <div class ="bottons">
      Price:{this.props.item.price}
      <Button onClick={()=>{this.props.showProfileModal(this.props.item)}}><FcSynchronize class="svgProfile"/>Update subscription</Button>
      <Button onClick={()=>{this.props.deleteCourses(this.props.item._id)}}><FcCancel class="svgProfile"/>Delete</Button>
      <a href="/purchase"><Button> <FcCurrencyExchange class="svgProfile"/> Buy Now</Button></a>
      </div>
    </Accordion.Body>
  </Accordion.Item>


        
      </>
    );
  }
}

export default ProfileList;