
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import dummy from './Assets/product3.png';
import Setup from './Components/Setup/Setup';
import Footer from './Components/Footer/Footer'

import Admin from './Components/Admin/Admin';
import Signup from './Components/Signup/Signup';
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
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';

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
              <Route path='/' element={<Dashboard/>} />
              <Route path='/login' element={<PreventedRoute><Login /></PreventedRoute>} />
              <Route path='/signup' element={<PreventedRoute><Signup /></PreventedRoute>} />
              <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/checkout' element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
              <Route path='/setup' element={<PrivateRoute><Setup /></PrivateRoute>} />
              <Route path='/pay' element={<PrivateRoute><Payment /></PrivateRoute>} />
              <Route path='/test' element={<Test/>} />
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
