import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';

import './summary.css';

export default function SummaryCard() {
  return (
      <div className="summaryCard shadow">
          <h4>ORDER SUMMARY</h4>

          <div className="cartItems">
            <SummaryItem />
            <SummaryItem />
            <SummaryItem />
          </div>
          <div className="summary">
            <div className="simp Row">
                <p>Subtotal</p>
                <p>Rs 600</p>
            </div>
            <div className="simp Row">
                <p>Delivery-cost</p>
                <p>+Rs 50</p>
            </div>
            <div className="simp Row">
                <p>Offer</p>
                <p className='discount'>-Rs 100</p>
            </div>
            <div className="my-2 Row">
                <p className='lg-txt'>Total</p>
                <p className='lg-txt'>Rs 650</p>
            </div>
          </div>
          <button>Checkout</button>
      </div>
  );
}
