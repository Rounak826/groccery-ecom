
import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';
import NavBar from './Components/Navbar/Navbar';
import dummy from './Assets/product3.png';
import CarouselComp from './Components/Carousel/carousel';
import CategoryContainer from './Components/Category_container/Category_container';
import Setup from './Components/Setup/Setup';
import Footer from './Components/Footer/Footer'
import { useState } from 'react';
import Admin from './Components/Admin/Admin';
import Signup from './Components/Signup/Signup';
import OfferCard from './Components/OfferCard/OfferCard';
import Contactform from './Components/contactform/contactform/Contactform'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CheckOut from './Components/Checkout/CheckOut';
import Login from './Components/Login/Login';
import ProductPage from './Components/Product/Product_page';
import Payment from './Components/Payment/Payment'
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
let itemList = [
  {
    name: 'Detergent liquid small pack',
    price: Math.round(Math.random() * 1000),
    qty: Math.round(Math.random() * 10),
    image: dummy
  },
  {
    name: 'Detergent liquid small pack',
    price: Math.round(Math.random() * 1000),
    qty: Math.round(Math.random() * 10),
    image: dummy
  },
  {
    name: 'Detergent liquid small pack',
    price: Math.round(Math.random() * 1000),
    qty: Math.round(Math.random() * 10),
    image: dummy
  }

]
let offerList = [
  {
    offer: Math.round(Math.random() * 100) + '% Off',
    desc: " on Detergent",
    img: dummy
  },
  {
    offer: Math.round(Math.random() * 100) + '% Off',
    desc: " on Detergent",
    img: dummy
  },
  {
    offer: Math.round(Math.random() * 100) + '% Off',
    desc: " on Detergent",
    img: dummy
  },
  {
    offer: Math.round(Math.random() * 100) + '% Off',
    desc: " on Detergent",
    img: dummy
  }
]
function App() {
  const [admin, setAdmin] = useState(false);
  const changeAdmin = () => {
    setAdmin(!admin);
  }
  return (
    <div className="App">
      <Router>
        <NavBar admin={changeAdmin} list={itemList} />
        
      <Routes>
        <Route path = '/' element={<>
        
        <CarouselComp />
        <div className='offerRow'>{offerList.map(offer => <OfferCard key={"offer" + offer.offer} data={offer} />)}</div>
        <CategoryContainer>
          {data.map(product => <ProductCard key={Math.random()} productInfo={product}></ProductCard>)}
        </CategoryContainer>
        <Contactform />
        </>} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/signup' element={<Signup />} />
        <Route path = '/admin' element={ <Admin />} />
        <Route path = '/product' element={<ProductPage />} />
        <Route path = '/checkout' element={<CheckOut list={itemList} />} />
        <Route path = '/setup' element={<Setup />} />
        <Route path = '/pay' element={<Payment />} />
  
      </Routes>
      <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
