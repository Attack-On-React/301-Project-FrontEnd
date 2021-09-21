import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./Css/Modal.css"

class ModalCoursesToAddlist extends Component {
  render() {
    return (
      <>
        <Modal size="lg" show={this.props.showflag} onHide={this.props.handleClose}>
          <Modal.Header>
            <Image src={this.props.urlimg} fluid />
            {/* <img alt="headerImg" src={this.props.urlimg} /> */}
            <Modal.Title>Course name: {this.props.courseName}</Modal.Title>
          </Modal.Header>
          <Modal.Body><h3>About this course</h3>
          <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button  className="addbtn" variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalCoursesToAddlist;