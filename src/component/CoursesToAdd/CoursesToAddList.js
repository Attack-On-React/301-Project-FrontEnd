import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class CoursesToAddList extends Component {
  render() {
    return (
      <>
      <Col>
        <Card style={{ width: "18rem" }} onClick={()=>{this.props.showModal(this.props.item)}}>
          <Card.Img variant="top" src={this.props.item.urlimg} />
          <Card.Body>
            <Card.Title>Course name: {this.props.item.courseName}</Card.Title>
            <Card.Text>
                {this.props.item.unv}<br/>
                <img  alt ="UnviercityImage" src={this.props.item.unvimg}/><br/>
                Price: {this.props.item.price}
            </Card.Text>
          </Card.Body>
        </Card>
            <Button variant="primary"onClick={()=>{this.props.addCourse(this.props.item)}}>Add to my courses</Button>
        </Col>
      </>
    );
  }
}
export default CoursesToAddList;
