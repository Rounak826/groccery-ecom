import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDatabase } from '../../Context/DatabaseContext';
import OfferCard from '../OfferCard/OfferCard'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { PlusSquare } from 'react-feather';
export default function AddOffer() {
    let { getAllDocs, createDocWithId, uploadImage, getImageURL, deleteImage,updateDocWithId,deleteDocWithID} = useDatabase();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState({ status: false, message: "" });
    let [Success, setSuccess] = useState({ status: false, message: "" });
    let [color, setColor] = useState('#d13d3d');
    let [selectedImage, setSelectedImage] =  useState({url:'',path:''});
    let [selectedId, setSelectedId] = useState('');
    let productIDref = useRef();
    let productNameRef = useRef();
    let offerRef = useRef();
    let typeRef = useRef();

    let [currentOffer, setCurrentOffer] = useState({
        id:'',
        desc:'',
        img: {url:'',path:''},
        offer: '',
        type: '',
        hex:color

    });
    const [offers, setOffers] = useState([]);

    const getOffers = useCallback(async () => {
        const data = await getAllDocs('offers');
        let offerList = await data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setOffers(await offerList);

    }, [getAllDocs]);

    useEffect(() => {
        getOffers();
    }, [getOffers]);

    const deleteHandler = (index) => {
        setSuccess({status:false,message:''});
        setError({status:false, message:''})

        let id = offers[index].id;
        updateDocWithId('product',id,{discount:'',disType:''}).then(e=>{
            
            console.log('reseted discount',e);
            
            deleteImage('/offers/'+id+'/image').then(e=>{
                
                console.log("deleted image",e);
                
                deleteDocWithID('offers',id).then(e=>{
                
                    console.log("deleted offer",e);
                   setSuccess({status:true,message:'Offer Deleted Successfully'}); 

                }).catch(e=>{
                    console.log("Failed to Remove offer",e)
                    setError({status:true, message:'Failed to Remove offer'})
                })

            }).catch(e=>{
                console.log("'Failed to Delete Offer Image ",e)
                setError({status:true, message:'Failed to Delete Offer Image '})
            })

        }).catch(e=>{
            console.log("'Failed to remove Offer from product'",e)
            setError({status:true, message:'Failed to remove Offer from product'})
        })
    }
    const handelChange = useCallback((e) => {
        e?e.preventDefault():e=0;
        setCurrentOffer({
            id: productIDref.current.value,
            desc: productNameRef.current.value,
            img: selectedImage,
            offer: offerRef.current.value,
            type: typeRef.current.value,
            hex:color
        })
    },[selectedImage,color])

    const imageChange = (e) => {
        setError({status:false, message:""})
    
          if (e.target.files.length !== 0 && productIDref.current.value) {

            uploadImage('/offers/' + currentOffer.id + '/image', e.target.files[0]).then(e => {
    
    
              getImageURL('/offers/' + currentOffer.id + '/image').then(e => {
                setSelectedImage({url:e, path:'/offers/' + currentOffer.id + '/image'})

    
              }).catch(e => {
                console.log(e)
                setError({status:true, message:"Image could'nt be fetched to display"})
              });
    
    
    
            }).catch(e => {
              console.log(e);
              setError({status:true, message:"Image could'nt be Added"})
            })
    
          } else {
            setError({status:true, message:'Please Select Offercard to edit or enter ProductId'})
          }
    
      }

    const handelSubmit = (e) => {
        e.preventDefault();
        createDocWithId('offers',currentOffer.id,currentOffer).then(e=>{

            updateDocWithId('product',currentOffer.id,{
                discount: currentOffer.offer,
                disType: currentOffer.type
            } ).then(e=>{
                setSuccess({status:true,message:"Offer Added Successfully!"});
                setTimeout(()=>setSuccess({status:false, message:""}),5000);
            }).catch(e=>{
                deleteDocWithID('offers',currentOffer.id);
                setError({status:true,message:"Failed to Add Offer. Try Again!"});
            })
            
            

        }).catch(e=>{
            setError({status:true,message:"Failed to Add Offer. Try Again!"});
        });
    }
    const handelColor = (e,hex)=>{
        e.preventDefault()
        setColor(hex);
        handelChange();
    }
    useEffect(() => {
        handelChange();
      }, [selectedImage,handelChange]);
    return (
        <div className="addOffer addNew">
            <div className="preview-list">
            <OfferCard id="newOffer" event={() => console.log('hehe')} data={currentOffer}/>
                {offers.map((offer,index) => <OfferCard id={offer.id} event={() => deleteHandler(index)} key={offer.id} data={offer} />)}
                
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
                            <Form.Control type="Text" placeholder="eg. On Cereals" ref={productNameRef} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={imageChange} placeholder="Sub-category" />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Offer</Form.Label>
                            <Form.Control type="text" placeholder="Enter offer eg. 15" ref={offerRef} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Select Offer Type</Form.Label>
                        <Form.Select aria-label="Select Offer Type" ref={typeRef}>
                            <option value="% Off">% Off</option>
                            <option value="Rs Flat Discount">Rs Flat Discount</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Select Color</Form.Label>
                        <Row className="mb-3 select-color">
                            <button className='color' onClick={(e) => handelColor(e,'#B2C77D')} style={{ backgroundColor: '#B2C77D' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#FF716E')} style={{ backgroundColor: '#FF716E' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#FB8A2E')} style={{ backgroundColor: '#FB8A2E' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#FBCC29')} style={{ backgroundColor: '#FBCC29' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#A188EA')} style={{ backgroundColor: '#A188EA' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#EF6BC2')} style={{ backgroundColor: '#EF6BC2' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#55ACE3')} style={{ backgroundColor: '#55ACE3' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#56CAD1')} style={{ backgroundColor: '#56CAD1' }}></button>
                            <button className='color' onClick={(e) => handelColor(e,'#455760')} style={{ backgroundColor: '#455760' }}></button>

                        </Row>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Control id="reset" className='reset' variant="primary" type="reset" />
                        <Button variant="primary" type="submit" onClick={handelSubmit}>
                            {loading ? "Adding..." : "Add Offer"}
                        </Button>

                    </Row>


                </Form>
            </div>
        </div>
    );
}
