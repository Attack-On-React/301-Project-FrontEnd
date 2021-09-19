<<<<<<< HEAD
import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";

class ProfileList extends Component {
  render() {
    return (
      <>

{this.props.item.courseName}
 

        
      </>
    );
  }
}

export default ProfileList;
=======
import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
class ProfileList extends Component {
  render() {
    return (
      <>
  <Accordion.Item eventKey={this.props.i}>
    <Accordion.Header>{this.props.item.courseName}</Accordion.Header>
    <Accordion.Body>
      <img alt="courseImage" src={this.props.item.urlimg}/>
      Price:{this.props.item.price}
      <Button onClick={()=>{this.props.updateCourses(this.props.item._id)}}>Update Price</Button>
      <Button>Delete</Button>
      <Button>Buy Now</Button>
    </Accordion.Body>
  </Accordion.Item>


        
      </>
    );
  }
}

export default ProfileList;
>>>>>>> f14734bc546fc38cc8eb7ebbc95411d7bc2c031a
