import React,{ useCallback, useEffect, useState }  from "react";
import './navbar.css'
import { LogOut, Search, Settings, ShoppingCart, Truck, User } from "react-feather";
import { Link, useNavigate,useLocation  } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Cart from '../Cart/Cart'
import logo from '../../Assets/techjainlogo.png';
import { useDatabase } from '../../Context/DatabaseContext';
export default function NavBar(props) {
  const {logout,currentUser} = useAuth();
  const [dropDown, setDropDown] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [admin ,setAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const {getAllNestedDocs,getDocWithID,updateNestedDocWithId,reload} = useDatabase();
  const [cart, setCart] = useState({list:[],Total:0});
  const [didMount, setDidMount] = useState(false);
  const uid = currentUser?currentUser.uid:false;

  const fetchCartList = useCallback(
    ()=>{
    getAllNestedDocs('UserInfo',uid,'cart').then(res=>{
     let list = [];
     let Total = 0;
     res.docs.map(item=>getDocWithID('product',item.id).then(doc=>{
        Total = Total+doc.data().salePrice*item.data().qty;
        list.push({...doc.data(),qty:item.data().qty})
        
      }))
      setTimeout(()=>{

        setCart({list,Total});
        
      },200)
      

      }).catch(e=>{console.log(e)});

    },[uid,getAllNestedDocs,getDocWithID]
  )
  const updateCart = (docID,data)=>{
    if (!didMount) {
      // required to not call API on initial render
      setDidMount(true);
      return;
    }
    updateNestedDocWithId('UserInfo',currentUser.uid,'cart',docID,data).then(()=>{
      fetchCartList();
      
    }).catch(e=>{
      console.log('failed to update cartItem',e);
    })
  }
  useEffect(() => {

    if(uid){
      fetchCartList();
    }
    
    setCartCount(cart.list.length);
  }, [uid,cart.list.length,fetchCartList,reload]);
  

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
            <button onClick={()=>setShowCart(!showCart)}><ShoppingCart /><p className="count">{cartCount}</p></button>
            {showCart&&<Cart update={updateCart} data={cart}/>}
          </div>
          
        </div></>
        : <div className="controls">
          <Link className="Login" to="/login">Login</Link>
        </div>
      }
      
    </nav>
  );
}
