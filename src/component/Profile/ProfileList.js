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
    <Accordion.Header><h5 className="accordingtitle">{this.props.item.courseName}</h5></Accordion.Header>
    <Accordion.Body>
      <div class="imgprice"> 
      <img className="imgprofilelist" alt="courseImage" src={this.props.item.urlimg}/>
      <h6 className="textPrice">Subscription: {this.props.item.price}</h6>
      </div>
      <div class ="bottons">
      
      <Button className="btnProfile" onClick={()=>{this.props.showProfileModal(this.props.item)}}><FcSynchronize className="svgProfile"/>Update </Button>
      <Button className="btnProfile" onClick={()=>{this.props.deleteCourses(this.props.item._id)}}><FcCancel className="svgProfile"/>Delete</Button>
      <a href="/purchase"><Button className="btnProfile"> <FcCurrencyExchange className="svgProfile"/> Buy Now</Button></a>
      </div>
    </Accordion.Body>
  </Accordion.Item>


        
      </>
    );
  }
}

export default ProfileList;