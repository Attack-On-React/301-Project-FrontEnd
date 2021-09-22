import React, { Component } from 'react';
import "./PurchaseForm.css";
import { FaCcVisa,FaCcPaypal,FaCcMastercard,FaCcDiscover,FaEnvelope,FaRegAddressCard,FaCity } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";


class PurchaseForm extends Component {
    render() {
        return (
<div class="purchasepage">
  <div class="textPurchase">
<h2 >PRODUCT ORDER FORM</h2>
<h5 class="innertextpurchase">Please fill out the form below to complete your order </h5>
</div>
<div class="rowdiv">
  <div class="col-75">
    <div class="containerPurchase">
      <form >
      
        <div class="rowdiv">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label class="labelPurchase" for="fname"><i><BsFillPersonFill class="svgPurchase"/></i> Full Name</label>
            <input class="inputPurchase" type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label class="labelPurchase" for="email"><i><FaEnvelope class="svgPurchase"/></i> Email</label>
            <input class="inputPurchase" type="text" id="email" name="email" placeholder="john@example.com"/>
            <label class="labelPurchase" for="adr"><i><FaRegAddressCard class="svgPurchase"/></i> Address</label>
            <input class="inputPurchase" type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label class="labelPurchase" for="city"><i><FaCity class="svgPurchase"/></i> City</label>
            <input class="inputPurchase" type="text" id="city" name="city" placeholder="New York"/>

            <div class="rowdiv">
              <div class="col-50">
                <label class="labelPurchase" for="state">State</label>
                <input class="inputPurchase" type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label class="labelPurchase" for="zip">Zip</label>
                <input class="inputPurchase" type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label class="labelPurchase" for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i  style={{color:"navy"}}><FaCcVisa /></i>
              <i  style={{color:"blue"}}><FaCcPaypal/></i>
              <i  style={{color:"red"}}><FaCcMastercard/></i>
              <i  style={{color:"orange"}}><FaCcDiscover/></i>
            </div>
            <label class="labelPurchase" for="cname">Name on Card</label>
            <input class="inputPurchase" type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label class="labelPurchase" for="ccnum">Credit card number</label>
            <input class="inputPurchase" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label class="labelPurchase" for="expmonth">Exp Month</label>
            <input class="inputPurchase" type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div class="rowdiv">
              <div class="col-50">
                <label class="labelPurchase" for="expyear">Exp Year</label>
                <input class="inputPurchase" type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label class="labelPurchase" for="cvv">CVV</label>
                <input class="inputPurchase" type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label class="labelPurchase">
          <input class="inputPurchase" type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input class="inputPurchase" type="submit" value="Continue to checkout" class="btnPurchase"/>
      </form>
    </div>
  </div>
 
</div>
</div>
        );
    }
}

export default PurchaseForm;





