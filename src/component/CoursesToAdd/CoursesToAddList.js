import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { BiAddToQueue } from "react-icons/bi";


class CoursesToAddList extends Component {
  render() {
    return (
      <>
        
        <Col>
          <div class="fullCard">
            <Card style={{ width: "18rem" }}>
              <div
                onClick={() => {
                  this.props.showModal(this.props.item);
                }}
                class="cardContent"
              >
                <Card.Img
                  variant="top"
                  style={{ width: "18rem" }}
                  style={{ height: "10rem" }}
                  src={this.props.item.urlimg}
                />
                <Card.Body>
                  <Card.Title style={{ height: "7rem" }}>
                    <div class="courseTitle">{this.props.item.courseName}</div>
                  </Card.Title>
                  <Card.Text>{this.props.item.unv}</Card.Text>
                  <div class="coursesImg">
                  <Card.Img
                    variant="top"
                    style={{ width: "100px" }}
                    src={this.props.item.unvimg}
                  />
                  </div>
                  <Card.Text>Subscription: {this.props.item.price}</Card.Text>
                </Card.Body>
              </div>
              <div class="button">
                <ion-icon name="add-outline">
                  <Button  class="addbtn"
                    variant="primary"
                    onClick={() => {
                      this.props.addCourse(this.props.item);
                    }}
                  >{" "}
                    <BiAddToQueue/> Add to My Courses 
                  </Button>
                </ion-icon>
              </div>
            </Card>
          </div>
        </Col>
        

      </>
    );
  }
}
export default CoursesToAddList;