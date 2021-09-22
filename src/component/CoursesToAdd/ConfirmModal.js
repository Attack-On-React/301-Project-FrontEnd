import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ConfirmModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide>
          <Modal.Header closeButton>
            <Modal.Title>Adding Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have added this course to your courses list</Modal.Body>
          <Modal.Footer>
            <Button className="addbtn" variant="primary" onClick={this.props.handleModalClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ConfirmModal;
