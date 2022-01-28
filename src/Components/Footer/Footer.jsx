import React from "react";
import './footer.css';
import logo from '../../Assets/techjainlogo.png'; 
import {
    Twitter,Facebook,Youtube,Instagram, MapPin
} from "react-feather"

const Footer = () => {
  return (
    <footer>
        <div className="brand">
            <img src={logo} alt="" />
            
            <span><MapPin /> Budha Gali No 1, Main Rd, Versova, Andheri (w)</span>
            
        </div>
        <div className="links">
            <div className="list">
                <h4>Explore</h4>
                <ul>
                    <li>About</li>
                    <li>Home</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="list">
                <h4>Legal</h4>
                    <ul>
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>    
                    </ul>
            </div>
            <div className="list">
                <h4>Social Media</h4>
                <ul>
                    <li><Facebook/> Facebook</li>
                    <li><Instagram/> Instagram</li>
                    <li><Twitter /> Twitter</li>
                    <li><Youtube /> Youtube</li>
                </ul>
            </div>
        </div>

    </footer>
  );
};
export default Footer;