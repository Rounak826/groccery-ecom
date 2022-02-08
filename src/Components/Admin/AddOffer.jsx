import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDatabase } from '../../Context/DatabaseContext';
import OfferCard from '../OfferCard/OfferCard'
import { useEffect } from 'react';
import { useCallback } from 'react';
import {PlusSquare} from 'react-feather';
export default function AddOffer() {
  let { getAllDocs,createDocWithoutId, uploadImage, getImageURL, deleteImage } = useDatabase();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState({ status: false, message: "" });
  let [Success, setSuccess] = useState({ status: false, message: "" });
  let [currentOffer , setCurrentOffer] = useState('');
  let [color , setColor] = useState('#d13d3d');
  let productIDref = useRef();
  let productNameRef = useRef();
  let descRef = useRef();
  let imgRef = useRef();
  
  const [offers,setOffers] = useState([]);

  const getOffers = useCallback(async () => {
    const data = await getAllDocs('offers');
    let offerList = await data.docs.map(doc=>({...doc.data(),id:doc.id}));
    setOffers(await offerList);
   
  }, [getAllDocs]);
  useEffect(() => {
    getOffers();
  }, [getOffers]);

  const selectHandler= (id)=>{
    setCurrentOffer(id);
    console.log(currentOffer);
    const card=  document.getElementsByClassName('Card')
    console.log(card.length);
    for(let i=0;i<card.length;i++){
        card[i].style.border= 'none';
    }
    document.getElementById(id).style.border = 'solid 4px black';
}  
  const handelChange= ()=>{
      
  }

  const handelSubmit= ()=>{
      
}
    return (
        <div className="addOffer addNew">
            <div className="preview-list">
                {offers.map(offer => <OfferCard id ={offer.id} event={()=>selectHandler(offer.id)} key={offer.id} data={offer} />)}
                <div className="Card">
                    <PlusSquare />
                </div>
            </div>
            <div className="form">
                <h1>Add New Item</h1>

                {error.status && <div className="alert alert-danger" role="alert">
                    {error.message}
                </div>}
                {Success.status && <div className="alert alert-success" role="alert">
                    {Success.message}
                </div>}
                <Form onChange={handelChange}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Product ID</Form.Label>
                            <Form.Control type="Text" placeholder="Product name" ref={productIDref} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="Text" placeholder="Category" ref={productNameRef} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Offer Description</Form.Label>
                            <Form.Control type="file" placeholder="Sub-category" ref={imgRef} />
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Offer Description</Form.Label>
                            <Form.Control type="text" placeholder="Sub-category" ref={descRef} />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Select Color</Form.Label>
                    <Row className="mb-3 select-color">
                        <button className='color' onClick={()=>setColor('#CBE193')} style={{backgroundColor:'#CBE193'}}></button>
                        <button className='color' onClick={()=>setColor('#FB8A2')} style={{backgroundColor:'#FB8A2'}}></button>
                        <button className='color' onClick={()=>setColor('#FBCC29')} style={{backgroundColor:'#FBCC29'}}></button>
                        <button className='color' onClick={()=>setColor('#A188EA')} style={{backgroundColor:'#A188EA'}}></button>
                        <button className='color' onClick={()=>setColor('#EF6BC2')} style={{backgroundColor:'#EF6BC2'}}></button>
                        <button className='color' onClick={()=>setColor('#55ACE3')} style={{backgroundColor:'#55ACE3'}}></button>
                        <button className='color' onClick={()=>setColor('#56CAD1')} style={{backgroundColor:'#56CAD1'}}></button>
                       
                    </Row>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Control id="reset" className='reset' variant="primary" type="reset" />
                        <Button variant="primary" type="submit" onClick={handelSubmit}>
                            {loading ? "Adding..." : "Add product"}
                        </Button>

                    </Row>


                </Form>
            </div>
        </div>
    );
}
