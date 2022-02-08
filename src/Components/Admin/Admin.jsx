import React from 'react';

import OrderTabel from '../OrderTabel/OrderTabel'
import './admin.css';

import StocksTable from '../StocksTabel/StocksTable'
import AddProduct from './AddProduct';
import AddOffer from './AddOffer';

export default function Admin() {
  
  return (
    <>
      <AddProduct/>
      <AddOffer/>
      <OrderTabel />
      <StocksTable />
    </>
  );
}
