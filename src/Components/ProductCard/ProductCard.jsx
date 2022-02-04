import React from 'react';
import './productCard.css';

import { Heart, Star } from 'react-feather';
import { ShoppingCart } from 'react-feather';
import {Link} from 'react-router-dom'
export default function ProductCard(props) {
  return (

      <div className="pCard">
         <div className="top">
           <div className="label">
              {props.productInfo.discount}
           </div>
           <button><Heart/></button>
         </div>
          <div className="pImage">
           <Link to={"/product"}><img src={props.productInfo.img} alt=""/></Link>
          </div>

          <div className="pInfo">
            <h4>{props.productInfo.name} </h4>
            <div className="rating">
              <Star size={"1.1rem"} fill='yellow'/> 
              <span>{props.productInfo.rating}</span>
              <span className='disabledText'> | {props.productInfo.ratingCount}</span>
            </div>
            <p>Wholesale price: <span>Rs {props.productInfo.wholePrice}</span></p>
            <p>Retail Price: <span>Rs {props.productInfo.salePrice}</span></p>
          </div>
          <div className="pControl">
              <select name="quantity" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button><ShoppingCart/></button>
          </div>

      </div>
  );
}
