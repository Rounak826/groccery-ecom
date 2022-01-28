import React from "react";
import { Button } from "react-bootstrap";
import { Star, X } from "react-feather";
import ProductCard from "../ProductCard/ProductCard";
import './product.css';
import dummy from '../../Assets/product3.png';
import { Link } from "react-router-dom";
let data = [
  
  {
    name: 'detergent',
    img: dummy,
    wholePrice: Math.round(Math.random() * 1000),
    salePrice: Math.round(Math.random() * 1000),
    discount: Math.round(Math.random() * 100) + '% off',
    rating: Math.round(Math.random() * 10),
    ratingCount: Math.round(Math.random() * 10000)
  },
  {
    name: 'detergent',
    img: dummy,
    wholePrice: Math.round(Math.random() * 1000),
    salePrice: Math.round(Math.random() * 1000),
    discount: Math.round(Math.random() * 100) + '% off',
    rating: Math.round(Math.random() * 10),
    ratingCount: Math.round(Math.random() * 10000)
  },
  {
    name: 'detergent',
    img: dummy,
    wholePrice: Math.round(Math.random() * 1000),
    salePrice: Math.round(Math.random() * 1000),
    discount: Math.round(Math.random() * 100) + '% off',
    rating: Math.round(Math.random() * 10),
    ratingCount: Math.round(Math.random() * 10000)
  },
  {
    name: 'detergent',
    img: dummy,
    wholePrice: Math.round(Math.random() * 1000),
    salePrice: Math.round(Math.random() * 1000),
    discount: Math.round(Math.random() * 100) + '% off',
    rating: Math.round(Math.random() * 10),
    ratingCount: Math.round(Math.random() * 10000)
  },
  {
    name: 'detergent',
    img: dummy,
    wholePrice: Math.round(Math.random() * 1000),
    salePrice: Math.round(Math.random() * 1000),
    discount: Math.round(Math.random() * 100) + '% off',
    rating: Math.round(Math.random() * 10),
    ratingCount: Math.round(Math.random() * 10000)
  },
]
export default function ProductPage() {
  return (
    <>
    <div className="productPage">
      <div className="productImage">
        <img alt="product"
          src="https://m.media-amazon.com/images/I/61jWRhATVNS._SX522_.jpg"
        ></img>
      </div>
      <div className="productDesc">
        <h3>
          Dabur Cold Pressed Mustard Oil <br></br>-1L : Healthy Cooking Oil with
          the Goodness of <br></br>Omega 3 and 6
        </h3>
        <br></br>
        <span><Star fill="yellow" color="yellow"/> 4.3</span>
        <hr></hr>
        <h3>
          Rs 265/-(Per Litre)
        </h3>
        <h5>
          MRP <del>Rs 285.00</del>
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem 4rem 0 0",
          }}
        >
          <img alt="product" src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"></img>
          <img alt="product" src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns-struck._CB484058890_.png"></img>
          <img alt="product" src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"></img>
          <img alt="product" src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"></img>
        </div>
        <div className="info">
          <b>Best Before: 12/3/22</b>
          <b>Design name: NEW</b>
          <b>Brand : Dabur</b>
          <b>Weight : 990gms</b>
          <b>Speciality : Vegetarian</b>
        </div>

        <label><b>Quantity :</b> </label>

        <input type="number" min="1" max="100" style={{ marginLeft: "10px" }}></input>
        <br /><br />
        <Button className="btn addToCart" style={{backgroundColor:"rgb(149, 197, 78)"}}> Add To Cart</Button>
        <Link to="/checkout" className="btn buy" style={{backgroundColor:"rgb(243, 212, 36)"}} ><b>Buy Now</b></Link><br></br><br></br>
        <Button>Add to wishlist</Button>

        <hr></hr>

        <img alt="product"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AgAAAfQBIkEj2+/Z6tXp3tHfr9+sAfAAAeQAAeAAAcgAAdAD6/foAdgD0+fRhnmFhmmHq8urL4cvE3MSozajZ6dlDk0Mriiup0alysnIQgRBBjkHX7deHvYdrrmtgo2B8rnywz7Bao1rl8uVYmVi82ryYxZgyiTLV59VnqGdRm1Gpyqk1kjU+kz57rXudRuC9AAAEsklEQVR4nO2dW1fiMBRGaWUgLZR7C1qUq1JQmf//76bF5XKWktq0nJM0/fabDxL2yj0nObRaAAAAAAAAAAAAAAAAAPIJ2nUiKCF43/lTHzr36ortB8+tD95DW92w4zr1we3AUGqou/kVoJphvLwznWVcyXD52DWdx2UVQ/euq/yP3HTvXBheB4bGAEMpMDQGGEqBoTHAUAoMjQGGUmBoDDCUAkNjgKEUGBoDDKXAUPXjomn4tFqPxuPxaL16CqeR+le6jn7DYDJ9W8Vi0Bv4nhCu6wrh+elfIl69TSclIpvf0GwYHMO/c2fgXYtjud7AmW/CY0VJrYbDwy4RV+2+LEWyOwyrFKLPcDg7eX1RIPYn+t5pVl5Sl2F3O/L9wgFO3x9tJ2VL0mP4chZeYb8MT5xfyhWlwzCYvffVQ+Ru/31WZtDRYBhtCnW/n4j+JlIvjt8wXJTzuzguQuXyuA2jXa/KHQ63t9srlshsuE3UBpifeMlWrUhew1BUv4QjPLWWymk4OfUq+2X0TipzI6Ph/rVqC/3Ee1XojHyG++dbCaaKz8UV2QyPi9sJpoqLo2mG+wqz4DXEomgtMhnesol+ULih8hhObjbI/Kf4WmxE5TE83V4wVTyZYxjeZh78Tq/Q1M9huKWowQyvyAKOwTBaUN2XFkmB0YbBcEdVhWkl7kwwJOqEHxToiuSGdG00w138uuunNgw2t13LfEdsfju7oTac9UkFHac/02z4TluFaSW+6zV8oa7CtBJ/OUelNZyc6Z8Ouef89Smt4Za6jV4U81c2pIbDEd1k/4U3yg3bkBrOisdequDnDqekhicmw9xtFKXhkKONZoi8ZkppeBgwGfYPegyDHcdImiHWOUs3QsNjwiToOEnO2SKhYchVhWklvukwDP5yDTTplJizw6AznMzpV2yfuHP5yo3OcMrmlylONRi+cc0VGQN5R6QzXPF1w7QjrjQYxnzdMP0iMb9hm2+uyBBSAzLDiLMbph1ReuZGZjilPCb9SU86mJIZhsx1KD0aJjN84tkbfuI/sRuyThZ50wWZ4Zp5LF2zG46YDUfshmPOCT/9JmMYwlDZ0P5+aP9Yav98aP+axv51qf17C/v3h/bv8e0/p2nAWZv956WsZ96OjjNv++MWwcb22JP98UPWGHDOHUzE8SsYtg701/Y+0HUXowH3aey/E9WAe2323020/34p0x3h/O+Ae94VDe2/q9+A9xb2v5mx/91TA96ukb4/9I14f9iKEqquaMobUrp3wLEh74Ab8Ja7Ae/xG5BTwf68GA3IbdKA/DQNyDHUgDxRDcj1lRJ61ccbEZubr611i5x7fqKY5ZM7b+Le9ryJLftzX7YakL+0ATloM17OrmIeYbdOeYQzJsq5oEtnndaZz1sUzOct6pjP+8LwsC6Qk31d15zsF4JjuJm7uXn1ozrn1b9g+W8jfH2cxb9vQQ0MpcDQGGAoBYbGAEMpMDQGGEqBoTHAUAoMjQGGUmBoDDCUAkNjgKGUhhg6y8eu6TwunSqG8fLOdJZxJUPHNR+nmmFNgOFVwwdPd/NTwHtQNwzuO3/qQ+e+RCAyaNeJ6pFWAAAAAAAAAAAAAAAAsJ1/CXuhRgSl+j4AAAAASUVORK5CYII="
          height={"20px"}
          width={"20px"}
        ></img>
        <b>This is a vegetarian product</b>
        <hr></hr>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h4>About this item</h4>
          <ol>
            <li>
              It is cold pressed from finest quality mustards ensuring that the
              natural properties and health benefits of mustard is intact
            </li>
            <li>It contains good ratio of omega -3 and omega -6 fatty acids</li>
            <li>
              It is rich in mono saturated fatty acids making it heart friendly
              and also helps in managing cholesterol
            </li>
            <li>It relieves sinus congestion and invigorates digestion</li>
          </ol>
        </div>
      </div>
    </div>
    <section className="featuredProduct">
    <h3>Featured items you may like </h3>
    <div className="featured">
      {data.map(x=><ProductCard key={x.discount+X.salePrice+x.wholePrice} productInfo={x} />)}
    </div>
    </section>
    
          
          </>
  );
}
