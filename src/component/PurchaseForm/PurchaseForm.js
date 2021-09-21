import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./PurchaseForm.css";

class PurchaseForm extends Component {
    render() {
        return (
            <div class='full'>
            <Form>
            <br/>
  <Row className="mb-3">
    
      <div class ='details'>
    <Form.Group>
        <Form.Label>Full Name</Form.Label><br/>
      <Form.Control type='text' style={{ width: '24rem'}}/>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" style={{ width: '24rem'}}/>
    </Form.Group>
</div>
  </Row>



<div class='payment'>
  <Form.Group className="mb-3">
    <Form.Label>Payment accepted cards</Form.Label><br/>
    <img src='https://www.munroefalls.com/ImageRepository/Document?documentId=1712'/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Name of Credit Card Owner</Form.Label>
    <Form.Control type='text' style={{ width: '24rem'}}/>
  </Form.Group>
  <br/>
  <Form.Group className="mb-3">
    <Form.Label>Credit Card Number</Form.Label>
    <Form.Control type='number' style={{ width: '24rem'}}/>
  </Form.Group>
  </div>
  <br/>

  <div class='address'>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>City</Form.Label>
    <Form.Control style={{ width: '24rem'}}/>
  </Form.Group>
    <br/>
    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Zip</Form.Label>
    <Form.Control style={{ width: '24rem'}}/>
  </Form.Group>
    <br/>
    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control style={{ width: '24rem'}}/>
  </Form.Group>

  </div>

  <br/>
  <Button id='checkout' type="submit" style={{ width: '15rem', height:'5rem'}}>
    Proceed to checkout
  </Button>
</Form>

<br/>
            </div>
        );
    }
}

export default PurchaseForm;