import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ProfileListModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
            <Form onSubmit={this.props.updateCourses}>
          <Modal.Body>
            Choice a subscription
              <Form.Select name="SelectSubscription" aria-label="Default select example" defaultValue={this.props.price}>
                <option value="50$/1 Month">Subscription: 50$/1 Month</option>
                <option value="90$/2 Month">Subscription: 90$/2 Month</option>
                <option value="120$/3 Month">Subscription: 120$/3 Month</option>
              </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default ProfileListModal;
