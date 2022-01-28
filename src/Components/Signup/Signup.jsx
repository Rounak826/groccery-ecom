import React from "react";
import { useState } from "react";
import './signup.css';
import illustration from '../../Assets/setup.svg';
import { Link } from "react-router-dom";
export default function Signup(){
  const [show, setShow] = useState(true);
  const [otpSent, setOtpSent] = useState(false);


  return (
   <div className="signup">
     <div className="illustration">
        <img src={illustration} alt="" />
     </div>
     <div className="form">
        <h2>Signup</h2>
        {show?emailSignupForm(setShow, show): otpSent?otpForm(setShow,show):mobileSignup(setShow,show,setOtpSent)}
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
            <button className="secondary">Login</button>
            <button className="primary">Submit</button>
          </div>
        </form>
  );
}
function mobileSignup(setShow,show, setOtpSent){
  return(
    <form action="">
    <div className="formInput">
      <label htmlFor="Number">Enter Your Mobile No. </label>
      <input type="text" name="number" />
    </div>
    
    <button onClick={e=>setShow(!show)} class="link">Use Email Instead</button>
    <div className="formRow">
      <button className="secondary">Login</button>
      <button onClick={e=>setOtpSent(true)} className="primary">Send Otp</button>
    </div>
  </form>
  );
}
function emailSignupForm(setShow,show){
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

          
          <div className="formInput">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input type="password" name="confirmPass" />
          </div>
          <button onClick={e=>setShow(!show)} class="link">Use Mobile Instead</button>
          <div className="formRow">
            <Link to='/login'   className="secondary">Login</Link>
            <Link to='/setup' className="primary">Signup</Link>
          </div>
        </form>
  );
}