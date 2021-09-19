import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class ModalCoursesToAddlist extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showflag} onHide={this.props.handleClose}>
          <Modal.Header>
            <Image src={this.props.urlimg} fluid /><br/><br/>
            {/* <img alt="headerImg" src={this.props.urlimg} /> */}
          </Modal.Header>
            <Modal.Title>Course name: {this.props.courseName}</Modal.Title>
            <hr/>
          <Modal.Body><h3>About this course</h3><br/>
          <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.addCourse}>
              Add to my course
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalCoursesToAddlist;
