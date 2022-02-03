import React, { useState } from 'react';
import dummy from '../../Assets/product3.png';
export default function SummaryItem() {
   const [qty,setQty]= useState(1);
  return (
    <div className="item">

    <div className="img">
        <img src={dummy} alt="" />
    </div>

    <div className="info">
        <div className="head">
            <h5>Tide -Liquid Detergent</h5>
            <p>Lorem ipsum dolor sit amet. - 250 l  </p>
        </div>
        <div className="bottom">
            <span><p>RS 200</p></span>
            <div className="counter">
                <button>-</button>
                <input onChange={e=>setQty(e.target.value)} value={qty} type="text" />
                <button>+</button>
            </div>
        </div>
    </div>
</div>
  );
}
