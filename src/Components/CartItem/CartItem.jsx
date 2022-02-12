import React, { useState } from 'react';
import './cartItem.css';
import { Heart, Trash } from 'react-feather';
import { useEffect } from 'react';
import { useCallback } from 'react';

const DEBOUNCE_DELAY = 1500;

export default function CartItem(props) {
  const [qty ,setQty] = useState(props.itemData.qty)
  const [didMount, setDidMount] = useState(false);
  const debouncedUserInput = useDebounce(qty, DEBOUNCE_DELAY);
  const updateCart = props.update;
  const productID = props.itemData.productId;

  const updateCartQty=useCallback(()=>{
    
    updateCart(productID,{productid:productID,qty:debouncedUserInput});
  },[debouncedUserInput,productID])


  useEffect(() => {
    if (!didMount) {
      // required to not call API on initial render
      setDidMount(true);
      return;
    }
    updateCartQty();
    console.log('updating');
  }, [debouncedUserInput,updateCartQty]);
  
  return (
    <div className="cartItem">
                  <div className="img">
                    <img src={props.itemData.img[0].url} alt="" />
                  </div>
                  <div className="contain">
                    <div className="info">
                        <p>{props.itemData.name}</p>
                        <p className="price">Rs{props.itemData.salePrice*qty}</p>
                    </div>
                    <div className="controls"> 
                        <div className='group'>
                            <input type="number" value={qty} onChange={e=>setQty(e.target.value)} min='1' max={props.itemData.limit}/>
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
function useDebounce(value, wait = 500) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, wait);
    return () => clearTimeout(timer); // cleanup when unmounted
  }, [value, wait]);

  return debounceValue;
}
