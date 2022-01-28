import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './cart.css'
export default function Cart(props) {
  let [cartTotal, setCartTotal] =   useState(0);
  const total = useCallback(
    ()=>{
        let total = 0;
        props.list.map(item => total = total + item.price*item.qty)
        setCartTotal(total);
    },[props.list])   
  useEffect(() => {
    total();
  }, [total]);
  
  return (
      <div className="cart">
          <h4>Your Items</h4>
          <div className="list">
              {
                  props.list.map(item =><CartItem total={total} key='item.price' itemData={item}/>)
              }
              
          </div>
          <div className="bottom"> 
            <Link to="/checkout">Proceed</Link>
            <h4>
                Total: Rs {cartTotal}
            </h4>
          </div>
      </div>
  );
}
