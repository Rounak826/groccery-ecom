import React from 'react';
import './login.css';
import { useState } from "react";
import illustration from '../../Assets/setup.svg';
import { Link } from 'react-router-dom';
export default function Login() {
    const [show, setShow] = useState(true);
    const [otpSent, setOtpSent] = useState(false);
  return (
    <div className="login">
    <div className="illustration">
       <img src={illustration} alt="" />
    </div>
    <div className="form">
       <h2>login</h2>
       {show?emailloginForm(setShow, show): otpSent?otpForm(setShow,show):mobilelogin(setShow,show,setOtpSent)}
    </div>
  </div>
  );
}
function otpForm(setShow,show){
    return(
      <form action="">
            <div className="formInput">
              <label htmlFor="otp">Enter OTP No.</label>
              <input type="text" name="otp" />
            </div>
            <button onClick={e=>setShow(!show)} class="link">resend OTP</button>
            <button onClick={e=>setShow(!show)} class="link">Use Email Instead</button>
            <div className="formRow">
              <button className="secondary">Signup</button>
              <Link to='/' className="primary">Submit</Link>
            </div>
          </form>
    );
  }
  function mobilelogin(setShow,show, setOtpSent){
    return(
      <form action="">
      <div className="formInput">
        <label htmlFor="Number">Enter Your Mobile No. </label>
        <input type="text" name="number" />
      </div>
      
      <button onClick={e=>setShow(!show)} class="link">Use Email Instead</button>
      <div className="formRow">
        <button className="secondary">Signup</button>
        <button onClick={e=>setOtpSent(true)} className="primary">Send Otp</button>
      </div>
    </form>
    );
  }
  function emailloginForm(setShow,show){
    return(
      <form action="">
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <input type="Email" name="email" />
            </div>
            
            <div className="formInput">
              <label htmlFor="password">Password</label>
              <input type="Password" name="email" />
            </div>
  
            <button onClick={e=>setShow(!show)} class="link">Use Mobile Instead</button>
            <div className="formRow">
              <Link to='/signup' className="secondary">Signup</Link>
              <Link to='/' className="primary">login</Link>
            </div>
          </form>
    );
  }