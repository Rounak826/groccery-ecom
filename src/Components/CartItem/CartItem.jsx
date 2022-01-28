import React, { useState } from 'react';
import './cartItem.css';
import { Heart, Trash } from 'react-feather';
export default function CartItem(props) {
  const [qty ,setQty] = useState(props.itemData.qty)
  return (
    <div className="cartItem">
                  <div className="img">
                    <img src={props.itemData.image} alt="" />
                  </div>
                  <div className="contain">
                    <div className="info">
                        <p>{props.itemData.name}</p>
                        <p className="price">Rs{props.itemData.price*qty}</p>
                    </div>
                    <div className="controls"> 
                        <div className='group'>
                            <input type="number" value={qty} onChange={e=>setQty(e.target.value)} min='1' max='10'/>
                            <p>Quantity</p>    
                        </div>
                        <div className='group'>
                            <button><Heart/></button>
                            <p>Add to wishlist</p>
                        </div> 
                        <div className='group'>
                            <button><Trash/></button>
                            <p>Delete</p>
                        </div>
                        
                    </div>
                  </div>
                  

              </div>
  );
}
