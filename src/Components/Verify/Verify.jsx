import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import verify from '../../Assets/Verified.gif'
import './verify.css';
export default function Verify() {
    let {currentUser} = useAuth();
    const navigate = useNavigate();
    let [loading,setLoading] = useState(false);
    const handleReload = ()=>{
        window.location.reload(false);
    }
    const resendHandler = ()=>{
        setLoading(true)
        currentUser.user.sendEmailVerification().then(e=>{
            setLoading(false);
          }).catch(e=>{
            setLoading(false);
          });
    }
  return (
      <div className="verify">
          <div className="image">
            <img src={verify} alt="" />
          </div>
          <div className="row">
              <h3>Please Verify Your Email</h3>
              <p>Check your Mail and click on the link to verify your email,then Reload this page to continue shopping.</p>
          </div>
          <div className="Row">
           <button onClick={resendHandler}>{loading?"Sending":"Resend Verification"}</button> <button onClick={handleReload}>Reload</button>
          </div>
      </div>
  );
}
