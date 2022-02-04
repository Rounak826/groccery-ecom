import React, { useRef } from 'react';
import './test.css'
export default function Test() {
  let nameRef = useRef();
  let emailRef = useRef();
  function handelSubmit(e,email, password,){
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  }
  return (
    
    <div className="test">
        <form action="">
            <div className="formGroup1">'
            <div className="input1">
                <label htmlFor="input1" ref={nameRef}>input 1</label>
                <input type="text" name="input1"/>
            </div>
            <div className="input1">
                <label htmlFor="input1" ref={emailRef}>input 2</label>
                <input type="text" name="input1"/>
            </div>
            
            <button onClick={handelSubmit}>Submit</button>
            </div>
            
        </form>
    </div>
  );
}
