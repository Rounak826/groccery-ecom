import React from "react";
import "./ProductPage.css";
import { Heart, ShoppingBag, ShoppingCart, Star } from "react-feather";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const defaultInfo = {
  productId: "Product Name",
  name: "Product Name",
  brand: "Brand Name",
  category: "",
  subCategory: "",
  wholePrice: 0,
  salePrice: 0,
  unit: "unit",
  limit:"1",
  discount: 0,
  disType:'',
  exp: "",
  stock: 0,
  desc: "",
  img: [''],
  rating: 0,
  ratingCount: 0
}
export default function ProductPage() {
  let location =useLocation();
  let [productData, setProductData]= useState(defaultInfo);
  useEffect(()=>{
    setProductData(location.state)
  },[location,productData]);
  return (
    <div className="ProductPage">
      <div className="firstHalf">
        <div className="mainImg">
          <img src={productData.img[0].url} alt="" />
        </div>
        <div className="smallImg">
          {
            productData.img.map((x,i)=>{
              return(<div key={"pImage"+ i } className="Img">
              <img src={x.url} alt="logo" />
            </div>)
            })
          }
          
        </div>

      </div>
      <div className="secondHalf">
        <div className="Heading">
          <h1>
            {
              productData.brand+' '+productData.name
            }
          </h1>
        </div>
        <div className="price">
          <h2>₹{productData.salePrice}<span>/ {productData.unit}</span></h2>
          <button className="Ratings">
            <Star/> {productData.rating}
          </button>
           <p>{productData.ratingCount +' Ratings'}.</p>
        </div>
        <div className="ButtonContainer">
          <div className="btn">
            <div className="buyNowC">
              <button className="button">
                <ShoppingBag className="Bag" /> Buy Now
              </button>

              <input type="number" className="form-control" name=""   min={1}  max={productData.limit} id="" />
            </div>
          </div>
          <div className="Shopping">
            <button className="button">
              <Heart className="HeartIcon" />
            </button>
            <button className="button">
              <ShoppingCart className="cartIcon" />
            </button>
          </div>
        </div>
        <div className="Description">
          <h5>Product description :</h5>
          <p>
            {
              productData.desc
            }
          </p>
        </div>

        <div className="Highlights">
        
        </div>
      </div>
    </div>
  );
}
