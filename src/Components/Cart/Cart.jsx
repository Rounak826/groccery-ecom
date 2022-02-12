import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './cart.css'

export default function Cart(props) {
 
  return (
      <div className="cart">
          <h4>Your Items</h4>
          <div className="list">
              {     
                  props.data.list.map(item =>{
                  return <CartItem update={props.update} key={item.productId} itemData={item}/>})
              }
              
          </div>
          <div className="bottom"> 
            <Link to="/checkout">Proceed</Link>
            <h4>
                Total: {'Rs '+props.data.Total}
            </h4>
          </div>
      </div>
  );
}
