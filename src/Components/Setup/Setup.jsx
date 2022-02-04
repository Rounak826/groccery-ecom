import React, {useRef} from 'react';
import './setup.css';
import Form1 from './form1';
import { Form, Row, Col } from 'react-bootstrap';
import setupImg from '../../Assets/setup.svg'
import { Link } from 'react-router-dom';
import { useDatabase } from '../../Context/DatabaseContext';
import {useAuth } from '../../Context/AuthContext';

export default function Setup() {
  let fnameRef = useRef();
  let lnameRef = useRef();
  let mobRef = useRef();
  const {currentUser} = useAuth();
  const { createDocWithId } = useDatabase();
  function handleSUbmit(e) {
    console.log('clicked');
    e.preventDefault();
    createDocWithId('UserInfo',currentUser.uid, {
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      MobNo: mobRef.current.value

    }).then(e=>{
      alert('Information Saved');
    }).catch(e=>{
      console.log(e);
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
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <button className="submit" onClick={handleSUbmit}>Submit</button>
          </Form>

        </div>
    </div>
  );
}
