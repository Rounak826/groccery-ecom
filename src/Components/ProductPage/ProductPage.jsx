import React from "react";
import logo from "./logo.jpg";
import benefits from "./benefits.jpg";
import Ingredients from "./Ingredients.jpg";
import Uses from "./Uses.jpg";
import star from "./star.svg";
import "./ProductPage.css";
import { ChevronDown, Heart, ShoppingBag, ShoppingCart } from "react-feather";
export default function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="firstHalf">
        <div className="mainImg">
          <img src={logo} alt="" />
        </div>
        <div className="smallImg">
          <div className="Img">
            <img src={Ingredients} alt="logo" />
          </div>
          <div className="Img">
            <img src={benefits} alt="logo" />
          </div>
          <div className="Img">
            <img src={Uses} alt="logo" />
          </div>
          <div className="Img">
            <img src={benefits} alt="logo" />
          </div>
        </div>
        <div className="ButtonContainer">
          <div className="btn">
            <div className="buyNowC">
              <button class="button">
                <ShoppingBag className="Bag" /> Buy Now
              </button>

              <button class="button2">
                <ChevronDown className="DownIcon" />
                Qty.
              </button>
            </div>
          </div>
          <div className="Shopping">
            <button class="button3">
              <Heart className="HeartIcon" />
            </button>
            <button className="button4">
              <ShoppingCart className="BagIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="secondHalf">
        <div className="Heading">
          <h1>
            Dabur Almond Hair Oil with Almonds , Soya Protein and Vitamin E for
            Non Sticky , Damage free Hair - 500ml
          </h1>
        </div>
        <div className="price">
          <h2>₹280.00 <span>(₹56.00 /100 ml)</span></h2>
          <button class="Ratings">
            <img className="Star" src={star} alt="logo" /> 4.2
          </button>
          7,654 Ratings & 5,789 Reviews.
        </div>
        <div className="Description">
          <h5>Product description :</h5>
          <p>
            Do you suffer from hairfall or dry and dull hair? Well to solve
            this, you need to address the problem at source. Hair is made up of
            protein. Environmental problems like pollution, stress or even hair
            styling leads to loss of this protein in hair which in turn leads to
            hair damage. The hair damage eventually results in dry and dull hair
            or hairfall problems. Now say bye-bye to hair damage with Dabur
            Almond Hair Oil! Specially formulated with the goodness of Almond,
            Vitamin E and enriched with Soya protein, Dabur Almond Hair Oil
            gives damage free hair and helps make your hair strong from root to
            tip. So why wait? Switch to Dabur Almond Hair Oil today!
          </p>
        </div>

        <div className="Highlights">
          <h5>About this item</h5>
          <ul>
            <li>
              Dabur Almond Hair Oil helps protect hair from damage and keeps it
              damage free
            </li>
            <li>
              It is enhanced with the presence of soya protein and Vitamin E
              which nourishes and moisturises your hair making it softer ,
              smoother and shinier.
            </li>
            <li>
              It strengthens your hair from root to top ensuring stronger hair.
            </li>
            <li>
              It is a light and non-sticky hair oil , suitable for all hair
              types and helps keep your hair refreshed all day long.
            </li>
            <li>
              Directions for usage: Pour out a generous amount of this oil on
              your palm. Apply the oil on the scalp , by massaging gently using
              your fingertips
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
