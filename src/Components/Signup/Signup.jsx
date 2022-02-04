import React from "react";
import { useState, useRef } from "react";
import './signup.css';
import illustration from '../../Assets/setup.svg';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
export default function Signup() {
  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpassRef = useRef();
  const mobilenoRef = useRef();
  const OtpRef = useRef();
  const { createUser} = useAuth();
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const auth = getAuth();
  const [mailValidation, setMailValidation] = useState({ border:"solid 1px #F4C372" })
  const  [passValidation, setPassValidation] = useState({ border:"solid 1px #F4C372" });
  const  [cPassValidation, setCPassValidation] = useState({ border:"solid 1px #F4C372" });
  function invisibleRecaptcha() {

    const auth = getAuth();
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
        createUser(emailRef.current.value, passwordRef.current.value).then(
          (e) => {
            e.user.sendEmailVerification().then(e=>{
              setLoading(false);
              navigate("/verify");
            }).catch(e=>{
              setError({status:true, message:'Verification could not be sent!'})
            });
            
            
          }
        ).catch(e=>{
          setError({ status: true, message: "failed to create account" });
          setLoading(false);
        })
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
        navigate('/setup')
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
    if(!validateEmail(emailRef.current.value)){
      setError({ status: true, message: "Email Is Not Valid" })
      flag=false;
    }else if(!checkPassword(passwordRef.current.value, confirmpassRef.current.value)){
      flag=false;
    }else{
      flag=true;
      setError({ status: false, message: "" })
    }
    return flag;

  }
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setMailValidation({ border:"solid 1px #F4C372" })
      return (true)
    } else {
      setMailValidation({ border:"solid 2px red" })
      return (false)
    }

  }
  function checkPassword(str, checkstr) {
    
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (re.test(str)) {
      setPassValidation({ border:"solid 1px #F4C372" })
      if(str===checkstr){
        setCPassValidation({ border:"solid 1px #F4C372" })
      }else{
        setCPassValidation({ border:"solid 2px red" }) 
        setError({status:true,message:"Password don't match"});
      }

    } else {
      setPassValidation({ border:"solid 2px red" })
      setError({status:true,message:"Password to weak Use Strong password"});
    }

    return re.test(str) && str===checkstr;
  }


  return (
    <div className="signup">
      <div className="illustration">
        <img src={illustration} alt="" />
      </div>
      <div className="form">
        <h2>Signup</h2>
        {error.status&&<div className="alert alert-danger" role="alert">
         {error.message}
        </div>}
        {show ? emailSignupForm(
          setShow,
          show,
          emailRef,
          passwordRef,
          confirmpassRef,
          handleSubmit,
          loading,
          mailValidation,
          passValidation,
          cPassValidation
        )
          : otpSent
            ? otpForm(setShow, show, OtpRef, handleSubmitOTP,loading)
            : mobileSignup(setShow, show, mobilenoRef, handleSendOTP,loading)}
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
        <button className="primary" onClick={handleSubmitOTP}>{loading?"Creating Account...":"Submit"}</button>
      </div>
    </form>
  );
}
function mobileSignup(setShow, show, mobilenoRef, handleSendOTP,loading) {
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
function emailSignupForm(
  setShow,
  show,
  emailRef,
  passwordRef,
  confirmpassRef,
  handleSubmit,
  loading,
  mailValidation,
  passValidation,
  cPassValidation
  ) {
  return (
    <form action="">
      <div className="formInput">
        <label htmlFor="email">Email</label>
        <input type="Email" name="email" ref={emailRef} style={mailValidation} />
      </div>

      <div className="formInput">
        <label htmlFor="password">Password</label>
        <input type="Password" name="password" ref={passwordRef} style={passValidation}/>
      </div>


      <div className="formInput">
        <label htmlFor="confirmPass">Confirm Password</label>
        <input type="password" name="confirmPass" ref={confirmpassRef} style={cPassValidation}/>
      </div>
      <button onClick={e => setShow(!show)} className="link">Use Mobile Instead</button>
      <div className="formRow">
        <Link to='/login' className="secondary">Login</Link>
        <Link to='/setup' className="primary" onClick={handleSubmit}>{loading ? "Creating..." : "Signup"}</Link>
      </div>
    </form>
  );
}