import React from 'react';
import './Contactform.css';
export default function Contactform() {
  return(
      <div className="contanctform" >
          <div className='info'>
          <h1>Get in touch with us.....</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
          </div>
          <div className="control"> 
          <input type="text" placeholder='Enter Your Email' />
          <div className="controlbutton">
              <button>subscribe</button>
              </div> 
          
          </div>

      </div>
  )



}
