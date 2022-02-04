
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
import PrivateRoute from './PrivateRoute';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import Test from './Components/Test/Test';
import ProductPage from './Components/ProductPage/ProductPage';
import AuthProvider from './Context/AuthContext'
import PreventedRoute from './PreventedRoute';
import OrderTracking from './Components/OrderTracking/OrderTracking';
import DataProvider from './Context/DatabaseContext';
import Verify from './Components/Verify/Verify';
import UnVerifiedRoute from './unverifiedRoute';
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
      <AuthProvider>
        <DataProvider>
          <Router>
            <NavBar admin={changeAdmin} list={itemList} />

            <Routes>
              <Route path='/' element={<>

                <CarouselComp />
                <div className='offerRow'>{offerList.map(offer => <OfferCard key={"offer" + offer.offer} data={offer} />)}</div>
                <CategoryContainer>
                  {data.map(product => <ProductCard key={Math.random()} productInfo={product}></ProductCard>)}
                </CategoryContainer>
                <Contactform />
              </>} />
              <Route path='/login' element={<PreventedRoute><Login /></PreventedRoute>} />
              <Route path='/signup' element={<PreventedRoute><Signup /></PreventedRoute>} />
              <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/checkout' element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
              <Route path='/setup' element={<PrivateRoute><Setup /></PrivateRoute>} />
              <Route path='/pay' element={<PrivateRoute><Payment /></PrivateRoute>} />
              <Route path='/test' element={<Test />} />
              <Route path='/trackOrder' element={<PrivateRoute><OrderTracking /></PrivateRoute>} />
              <Route path='/verify' element={<UnVerifiedRoute><Verify /></UnVerifiedRoute>} />
            </Routes>
            <Footer></Footer>
          </Router>
        </DataProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
