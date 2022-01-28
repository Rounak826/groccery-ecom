import React, { useState } from "react";
import './navbar.css'
import { LogOut, Search, Settings, ShoppingCart, User } from "react-feather";
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart'
import logo from '../../Assets/techjainlogo.png';
export default function NavBar(props) {
  const [dropDown, setDropDown] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [admin ,setAdmin] = useState(false);
  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="" />
        <h1>TechJain</h1>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search for items..." />
        <button><Search/></button>
      </div>
      <div className="controls">
        
        <div className="dropDown">
            <button onClick={()=>{setDropDown(!dropDown)}}><User /></button>
            <div className="options" hidden={dropDown}>
              <Link to={admin?"/":"/admin"} onClick={()=>setAdmin(!admin)}><User />Admin</Link>
              <Link to="/setup"><Settings />Settings</Link>
              <Link to="/login"><LogOut />logout</Link>
            </div>

        </div>
        <div className="dropDown">
          <button onClick={()=>setShowCart(!showCart)}><ShoppingCart /></button>
          {showCart&&<Cart list={props.list}/>}
        </div>
        
      </div>
    </nav>
  );
}
