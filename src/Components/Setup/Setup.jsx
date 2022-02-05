import React, {useRef, useState} from 'react';
import './setup.css';
import Form1 from './form1';
import { Form, Row, Col } from 'react-bootstrap';
import setupImg from '../../Assets/setup.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useDatabase } from '../../Context/DatabaseContext';
import {useAuth } from '../../Context/AuthContext';
import { sendEmailVerification } from 'firebase/auth';

export default function Setup() {
  let navigate = useNavigate();
  let [loading, setloading] = useState(false);
  let fnameRef = useRef();
  let lnameRef = useRef();
  let mobRef = useRef();
  let emailRef = useRef();
  const {currentUser} = useAuth();
  const { createDocWithId } = useDatabase();

  function handleSUbmit(e) {
    setloading(true);
    console.log('clicked', mobRef.current.value);
    e.preventDefault();
    createDocWithId('UserInfo',currentUser.uid, {
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      Mobile: mobRef.current.value,
      Email: emailRef.current.value
    }).then(e=>{
      setloading(false);
      alert('Information Saved');
      navigate('/')
    }).catch(e=>{
      setloading(false);
      console.log(e);
      alert('Failed to save information');
    })
  }
  return (
    <div className="setup">
        <div className="illustration">
          <img src={setupImg} alt="" />
        </div>
        <div className="form">
          <h1>Profile Setup</h1>
          <div className="progress">
            <div className="circle">1</div>
            <div className="line"></div>
            <div className="circle">2</div>
            <div className="line"></div>
            <div className="circle">3</div>
          </div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="Text" placeholder="First name" ref={fnameRef} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Text" placeholder="Last name" ref={lnameRef}/>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control placeholder="+91 XXXX XXXX XX" ref={mobRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder="Jhondoe@XYZ.com" ref={emailRef}/>
            </Form.Group>
            <button className="submit" onClick={handleSUbmit}>{loading?"Saving...":"Submit"}</button>
          </Form>

        </div>
    </div>
  );
}
