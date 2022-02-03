import React, { useState } from "react";
import './navbar.css'
import { LogOut, Search, Settings, ShoppingCart, Truck, User } from "react-feather";
import { Link, useNavigate,useLocation  } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Cart from '../Cart/Cart'
import logo from '../../Assets/techjainlogo.png';
export default function NavBar(props) {
  const {logout,currentUser} = useAuth();
  const [dropDown, setDropDown] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [admin ,setAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  function handleLogout(e){
    logout(e).then(e=>navigate('/login')).catch(e=>alert('failed to logout! \n Please Try Again.'));
    ;
  }

  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="" />
        <h1>TechJain</h1>
      </div>
      {
        !(location==='/login'||location==='/signup'||location==='/setup') && <div className="searchBar">
         <input type="text" placeholder="Search for items..." />
         <button><Search/></button>
       </div>
      }
         
     
      {
         currentUser?<> <div className="controls">
        
          <div className="dropDown">
              <button onClick={()=>{setDropDown(!dropDown)}}><User /></button>
              <div className="options" hidden={dropDown}>
                <Link to={admin?"/":"/admin"} onClick={()=>setAdmin(!admin)}><User />Admin</Link>
                <Link to="/trackOrder"><Truck />Track Order</Link>
                <Link to="/setup"><Settings />Account</Link>
                <button onClick={handleLogout}><LogOut />logout</button>
              </div>
  
          </div>
          <div className="dropDown">
            <button onClick={()=>setShowCart(!showCart)}><ShoppingCart /><p className="count">{3}</p></button>
            {showCart&&<Cart list={props.list}/>}
          </div>
          
        </div></>
        : <div className="controls">
          <Link className="Login" to="/login">Login</Link>
        </div>
      }
      
    </nav>
  );
}
