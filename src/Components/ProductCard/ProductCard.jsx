import React from 'react';
import './productCard.css';
import imagePlaceholder from '../../Assets/placeholder.jpg';
import { Heart, Star } from 'react-feather';
import { ShoppingCart } from 'react-feather';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
const labelFiller = ['New','Featured','Fresh','popular'];
export default function ProductCard(props) {
  let [labeltext , setLabeltext] = useState('');
  const label= useCallback(()=>{
    if(!props.productInfo.disType){
      if(props.productInfo.stock===0){
        console.log(props.productInfo.stock)
        setLabeltext('Sold Out');
      }else if(props.productInfo.stock<10){
        setLabeltext('Limited')
      }else{
        setLabeltext(labelFiller[Math.floor(Math.random() * 3)] );
      }
    }
  }, [props.productInfo]);

  useEffect(() => {
    label()
  }, [label,]);
  
  return (

      <div className="pCard">
         <div className="top">
           
           <div className="label">
              {props.productInfo.disType?props.productInfo.discount+props.productInfo.disType:labeltext}
           </div>
           <button><Heart/></button>
         </div>
          <div className="pImage">
           <Link to={"/product"}><img src={props.productInfo.img[0]?props.productInfo.img[0].url:imagePlaceholder} alt=""/></Link>
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
