import React from "react";
import './checkout.css';
import { Form, Row, Col} from "react-bootstrap";
import CartItem from '../CartItem/CartItem';
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function CheckOut(props) {
  let [cartTotal, setCartTotal] =   useState(0);
  const total = useCallback(
    ()=>{
        let total = 0;
        props.list.map(item => total = total + item.price*item.qty)
        setCartTotal(total);
    },[props.list])   
  useEffect(() => {
    total();
  }, [total]);
  
  return (

    <div className="checkout">
      
      <div className="main">
      <h2>Add delivery details</h2> 
        <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Reciver's name</Form.Label>
                <Form.Control type="Text" placeholder="Enter Reciever's Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Reciver's Contact</Form.Label>
                <Form.Control type="Text" placeholder="Enter Mobile No" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="Email" placeholder="Email Adress" />
              </Form.Group>
            </Row>
            
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Reciver's Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Deliver Address"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <div style={{display:"flex", width:"10%",justifyContent:"left",}}>
         <b></b>
         <img src="https://pixlok.com/wp-content/uploads/2021/02/PhonePe-Logo-Svg.jpg" height={"50px"} width={"50px"} alt="payment"></img>
         <img src="https://iconape.com/wp-content/uploads/1/12/google-pay-logo-0%D9%A2.png" height={"50px"} width={"100px"} alt="paymnet"></img>
         <img src="https://www.nicepng.com/png/detail/217-2178986_png-credit-cards-debit-and-credit-cards-png.png" height={"50px"} width={"100px"} alt="pay"></img>
         <img src="https://pngfree.io/upload/imgs/lovepik/cash-on-delivery-logo-with-bundle-icon.png"height={"50px"} width={"100px"} alt="payment"></img>
        </div><br></br>
        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Link to="/" className="btn secondary mx-3">
              Continue Shopping
            </Link>
            <Link to="/pay" className="btn primary">
              Pay Rs.{cartTotal} and checkout
            </Link>
        </Form.Group>
            
          </Form>
      </div>
      <div className="summary">
        <h2>Your Cart items</h2>
              {
                  props.list.map(item =><CartItem total={total} key='item.price   ' itemData={item}/>)
              }
      </div>
    </div>




  );
}
