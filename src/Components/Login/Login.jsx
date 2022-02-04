import React, { useRef } from 'react';
import './login.css';
import { useState } from "react";
import illustration from '../../Assets/setup.svg';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { useAuth } from "../../Context/AuthContext";

export default function Login() {
  let navigate = useNavigate();
    const {authenticateUser, forgetPassword}= useAuth();
    const [show, setShow] = useState(true);
    const [otpSent, setOtpSent] = useState(false);
    const mobilenoRef = useRef();
    const OtpRef = useRef();
    const emailRef= useRef()
    const passwordRef= useRef()
    const [error, setError] = useState({ status: false, message: "" });
    const [loading, setLoading] = useState(false);
    const [mailValidation, setMailValidation] = useState({ border:"solid 1px #F4C372" })
    const [passValidation, setPassValidation] = useState({ border:"solid 1px #F4C372" });
    const auth = getAuth();
    function invisibleRecaptcha() {
      window.recaptchaVerifier = new RecaptchaVerifier('Recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      }, auth);
    }
    function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      setError({ status: false, message: "" })
      if (Validation()) {
          setError("");
          setLoading(true);
          authenticateUser(emailRef.current.value, passwordRef.current.value).then(
            (e) => {
              setLoading(false);
              navigate("/");

            }
          ).catch(e=>{
          setLoading(false);
          setError({ status: true, message: "Email/Password Incorrect. Try Again." });
          })
      }else{
        setLoading(false);
      }
      
      
        
    }
    function handleSendOTP(e) {
      setLoading(true);
      setError({ status: false, message: "" })
      e.preventDefault();
      invisibleRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      if(mobilenoRef.current.value.length===13){
        signInWithPhoneNumber(auth, mobilenoRef.current.value, appVerifier).then(confirmationResult => {

          setOtpSent(true);
          setLoading(false);
          window.confirmationResult = confirmationResult; 
    
        }).catch(e => {
          setLoading(false);
          setError({status:true,message:"Could'nt send OTP"})
        });
      }else{
        setLoading(false);
        setError({status:true,message:"Enter Valid Mobile No."});
      }

    }
    function handleSubmitOTP(e) {
      setLoading(true);
      setError({ status: false, message: "" })
      e.preventDefault();
      console.log('submit otp');
      if(OtpRef.current.value.length===6){
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(OtpRef.current.value).then((result) => {
          // User signed in successfully.
          console.log('athenticated');
          navigate('/')
          setLoading(false);
          
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          setError({status:true,message:"Could'nt Verify OTP"})
          setLoading(false);
        });
      }else{
        setLoading(false);
        setError({status:true,message:"Incorrect OTP"});
      }
    
    }
    function Validation() {

      let flag= true;
      console.log(validateEmail(emailRef.current.value));
      if(!validateEmail(emailRef.current.value)){
        setError({ status: true, message: "Email Is Not Valid" })
        flag=false;
      }else if(!checkPassword(passwordRef.current.value, passwordRef.current.value)){
        flag=false;
      }else{
        flag=true;
        setError({ status: false, message: "" })
      }
      return flag;
  
    }
    function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setMailValidation({ border:"solid 1px #F4C372" })
        return (true)
      } else {
        setMailValidation({ border:"solid 2px red" })
        return (false)
      }
  
    }
    function checkPassword(str) {
    
      // at least one number, one lowercase and one uppercase letter
      // at least six characters
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      if (re.test(str)) {
        setPassValidation({ border:"solid 1px #F4C372" })
       
      }
  
       else {
        setPassValidation({ border:"solid 2px red" })
        setError({status:true,message:"Password to weak Use Strong password"});
      }
  
      return re.test(str)
    }
    function handelForget(e){
      e.preventDefault();
      forgetPassword(emailRef.current.value).then(e=>{
        alert("Please check your email to reset password")
      }).catch(e=>{
        setError({status:true,message:"Failed to send Password Reset Email"})
      })
    }

    
    return (
    <div className="login">
    <div className="illustration">
       <img src={illustration} alt="" />
    </div>
    <div className="form">
       <h2>login</h2>
       {error.status&&<div className="alert alert-danger" role="alert">
       {error.message}
       </div>}
       {show?emailloginForm(setShow, show,emailRef,passwordRef,handleSubmit,loading,mailValidation,passValidation,handelForget): otpSent
            ? otpForm(setShow, show, OtpRef, handleSubmitOTP,loading)
            : mobilelogin(setShow, show, mobilenoRef, handleSendOTP,loading)}
    </div>
  </div>
  );
}
function otpForm(setShow, show, OtpRef, handleSubmitOTP,loading) {
  return (
    <form action="">
      <div className="formInput">
        <label htmlFor="otp">Enter OTP No.</label>
        <input type="text" name="otp" ref={OtpRef} />
      </div>
      <button onClick={e => setShow(!show)} className="link">resend OTP</button>
      <button onClick={e => setShow(!show)} className="link">Use Email Instead</button>
      <div className="formRow">
        <button className="secondary">Login</button>
        <button className="primary" onClick={handleSubmitOTP}>{loading?"Logging in...":"Submit"}</button>
      </div>
    </form>
  );
}
function mobilelogin(setShow, show, mobilenoRef, handleSendOTP,loading) {
  return (
    <form action="">
      <div className="formInput">
        <label htmlFor="Number">Enter Your Mobile No. </label>
        <input type="text" name="number" ref={mobilenoRef} />
      </div>

      <button onClick={e => setShow(!show)} className="link">Use Email Instead</button>
      <div className="formRow">
        <button className="secondary">Login</button>
        <button id="sendOtpBtn" onClick={handleSendOTP} className="primary">{loading?"sending...":"Send Otp"}</button>
      </div>
      <div id="Recaptcha-container"></div>
    </form>
  );
}
  function emailloginForm(setShow,show,emailRef,passwordRef,handleSubmit,loading,mailValidation,passValidation,handelForget){
    return(
      <form action="">
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <input type="Email" name="email" ref={emailRef} style={mailValidation}/>
            </div>
            
            <div className="formInput">
              <label htmlFor="password">Password</label>
              <input type="Password" name="email" ref={passwordRef} style={passValidation} />
            </div>
            
            <button onClick={e=>setShow(!show)} className="link">Use Mobile Instead</button>
            <button onClick={handelForget} className="link">Forget Password</button>
       
            
            <div className="formRow">
              <Link to='/signup' className="secondary">Signup</Link>
              <Link to='/' className="primary" onClick={handleSubmit}>{loading ? "logging in..." : "Login"}</Link>
            </div>
          </form>
    );
  }