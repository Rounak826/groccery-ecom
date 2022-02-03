import React from 'react';
import './OrderTracking.css'
import logo from './logo.png';
import order from './purchase.png';
import assinged from './assinged.png'
import dealership from './delivery.png'
import delivered from './customer.png'
export default function OrderTracking() {
    return (
        <div className="track">
            <h1>Track You Order</h1>
            <div className="Row">
                <div className='orderstatus shadow'>
                    <h4>Status</h4>
                    <div className="group">
                        <div className="statusCard">
                            <div className="image">
                                <img src={order} alt='' />
                            </div>
                            <div className="text">
                                <h3>order created</h3>
                                <p>8.30AM ,Mar 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="statusCard">
                            <div className="image">
                                <img src={assinged} alt='' />
                            </div>
                            <div className="text">
                                <h3>Assinged to dav nathan</h3>
                                <p>10.00AM ,Mar 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="statusCard">
                            <div className="image">
                                <img src={dealership} alt='' />
                            </div>
                            <div className="text">
                                <h3>At dealership</h3>
                                <p>XYZ ,Mar 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="statusCard">
                            <div className="image">
                                <img src={delivered} alt='' />
                            </div>
                            <div className="text">
                                <h3>Delivered</h3>
                                <p>XYZ ,Mar 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OrderPage shadow">
                    <div className="Header">
                        <h4>SUMMARY</h4>
                    </div>
                    <div div className="Card">
                        <div className="Image">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="price">
                            <div>
                                <h2>Oreo Biscuit</h2>
                                <p className="SubCat">Cadbury,80gm</p>
                            </div>

                            <p className="PriceCol">Rs 40</p>
                        </div>
                        <div className="Qty">
                            <h5>Qty:5</h5>
                            <p className="SubQty"> Rs 200</p>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="Row">
                        <p>Subtotal </p>
                        <p>Rs 400</p>
                    </div>
                    <div className="Row">
                        <p>Shipping Cost</p>
                        <p>+Rs40</p>
                    </div>
                    <div className="Row">
                        <p>Total Saved</p>
                        <p className="Discount">-Rs50</p>
                    </div>
                    <div className="Row">
                        <p>Total</p>
                        <p>-Rs50</p>
                    </div>
                </div>
            </div>

        </div>

    );
}
