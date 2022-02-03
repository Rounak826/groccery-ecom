import React, { useState } from 'react';
import { CreditCard, PlusCircle } from 'react-feather';
import SummaryCard from '../SummaryCard/SummaryCard';
import './Checkout.css';
const addressList = [
  {
    id: "xccwww453",
    name: "Jhon Doe",
    address: "r/o Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, debitis."
  },
  {
    id: "xccw33",
    name: "Jhon Doe",
    address: "r/o Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, debitis."
  }
]
const citylist = ['Bhopal', 'Sehore', 'Narwar']
export default function CheckoutPage() {
  let [payMethod, setPayMethod] = useState('Debit');
  let [showForm, setShowForm] = useState(false);
  console.log(payMethod);
  return (
    <div className="CheckoutPage">
      <div className="checkOutform">
        <h3>SELECT DELIVERY ADDRESS</h3>
        <div className="address">
          {
            addressList.map(item => <AddressCard key={item.id} data={item} />)
          }
        </div>
        <h3 className='my-5'>DELIVERY SLOT</h3>
        <form action="" >
        <div className="formGroup w-50">
          <div className="formItem w-50 ">
            <label htmlFor="method">Deliver Item By</label>
            <select defaultValue={payMethod} onChange={e => setPayMethod(e.target.value)} name='method'>
              <option value="UPI">Morning</option>
              <option value="COD">Afternoon</option>
              <option value="COD">Evening</option>
            </select>
          </div>
          <div className="formItem w-50 pt-4">
           <input type="checkbox" name="Instant" id="" />
          </div>
          pay 50 Rs and get Item's Delivered within 2 hours
        </div>
        </form>
        <div className="New" onClick={e => setShowForm(!showForm)}>
          <PlusCircle />
          Add New Delivery Address
        </div>

        {showForm ? <>
          <form action="">
            <h3>PERSONAL DETAILS</h3>
            <div className="formGroup">
              <div className="formItem w-50 ">
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder='Enter First Name' name='firstName' />
              </div>
              <div className="formItem w-50 ML-1r">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder='Enter Last Name' name='lastName' />
              </div>
            </div>
            <div className="formGroup">
              <div className="formItem w-50 ">
                <label htmlFor="firstName">Mobile No.</label>
                <input type="text" placeholder='+91 000000000' name='firstName' />
              </div>
              <div className="formItem w-50 ML-1r">
                <label htmlFor="lastName">Email Address</label>
                <input type="text" placeholder='Someone@XYZ.com' name='lastName' />
              </div>
            </div>

            <h3>DELIVERY ADDRESS</h3>
            <div className="formItem w-100">
              <label htmlFor="Line1">Delivery Address</label>
              <input type="text" placeholder='Enter Your address' name='lastName' />
            </div>
            <div className="formGroup w-50">
              <div className="formItem w-50">
                <label htmlFor="method">Select City Name</label>
                <select defaultValue={payMethod} onChange={e => setPayMethod(e.target.value)} name='method'>
                  {citylist.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
              </div>
              <div className="formItem w-50 ML-1r">
                <label htmlFor="Pincode">Pincode</label>
                <input type="text" placeholder='City Pincode' name='expDate' />
              </div>
            </div>
          </form></> : ""}
        <h3>PAYMENT METHODS</h3>
        <form action="">
          <div className="formItem w-50">
            <label htmlFor="method">Select Payment Method</label>
            <select defaultValue={payMethod} onChange={e => setPayMethod(e.target.value)} name='method'>
              <option value="UPI">UPI</option>
              <option value="COD">Cash on delivery</option>
            </select>
          </div>
          {payMethod === 'UPI' && <UpiForm />}
          {payMethod === 'COD' && <COD />}
        </form>
      </div>
      <div className="summaryDiv">
        <SummaryCard />
      </div>

    </div>

  );
}

function AddressCard(props) {
  return (

    <div className="card shadow">
      <div className="head">
        <h3>{props.data.name}</h3>
        <input type="radio" value={props.data.id} readOnly />
      </div>
      <div className="body">
        <p>{props.data.address}</p>
        <button>Edit</button>
      </div>
    </div>
  );
}
/*
function DebitForm() {

  return (
    <>
      <div className="formItem w-50">
        <label htmlFor="CardNo.">Card No.</label>
        <div className="iconInput">
          <CreditCard />
          <input type="text" placeholder='Enter 16-Digit card No.' name='CardNo.' />
        </div>

      </div>
      <div className="formGroup w-50">
        <div className="formItem w-50 ">
          <label htmlFor="expDate">Expiry Date</label>
          <input type="text" placeholder='MM/YY' name='expDate' />
        </div>
        <div className="formItem w-50 ML-1r">
          <label htmlFor="cvv">CVV / CVC</label>
          <input type="text" placeholder='CVV' name="CVV" />
        </div>
      </div>
    </>
  );
}
function NetForm() {
  return (
    <>
      <div className="formItem w-50">
        <label htmlFor="bank">Select Bank Name</label>
        <select defaultValue={'Debit'} name='bank'>
          <option value="Debit">SBI</option>
          <option value="UPI">BOB</option>
          <option value="Net">IDBI</option>
          <option value="COD">Axis Bank</option>
        </select>
      </div>
    </>
  );
}
*/
function UpiForm() {
  return (
    <>
      <div className="formItem w-50">
        <label htmlFor="CardNo.">UPI ID</label>
        <div className="iconInput">
          <CreditCard />
          <input type="text" placeholder='Enter your UPI ID' name='CardNo.' />
        </div>
      </div>
    </>
  )
}
function COD() {
  return (
    <>
      <h5>Cash On Delivery</h5>
    </>
  )
}