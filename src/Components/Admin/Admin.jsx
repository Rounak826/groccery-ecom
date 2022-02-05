import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import OrderTabel from '../OrderTabel/OrderTabel'
import './admin.css';
import dummy from '../../Assets/product3.png';
import { Plus, Upload } from 'react-feather';
import StocksTable from '../StocksTabel/StocksTable'
import { useDatabase } from '../../Context/DatabaseContext';

export default function Admin() {
  let { createDocWithoutId, uploadImage } = useDatabase();
  let [imgCount, setImgCount] = useState(0);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState({ status: false, message: "" });
  let productNameRef = useRef();
  let brandRef = useRef();
  let categoryRef = useRef();
  let subCategoryRef = useRef();
  let wholePriceRef = useRef();
  let salesPriceRef = useRef();
  let unitRef = useRef();
  let discountRef = useRef();
  let expRef = useRef();
  let stockRef = useRef();
  let descRef = useRef();
  let imgRef = useRef();
  const [selectedImage, setSelectedImage] = useState();
  let [data, setData] = useState({
    productId:"Product Name",
    name: "Product NameBrand Name",
    brand: "Brand Name",
    category: "",
    subCategory: "",
    wholePrice: 0,
    salePrice: 0,
    unit: "unit",
    discount: 0,
    exp: "",
    stock: 0,
    desc: "",
    img: dummy,
    rating: 0,
    ratingCount: 0
  })

  const handelChange = () => {
    setData({
      productId: productNameRef.current.value+brandRef.current.value,
      name: productNameRef.current.value,
      brand: brandRef.current.value,
      category: categoryRef.current.value,
      subCategory: subCategoryRef.current.value,
      wholePrice: wholePriceRef.current.value,
      salePrice: salesPriceRef.current.value,
      unit: unitRef.current.value,
      discount: discountRef.current.value,
      exp: expRef.current.value,
      stock: stockRef.current.value,
      desc: discountRef.current.value,
      img: selectedImage,
      rating: 0,
      ratingCount: 0
    })
  }
  const imageChange = (e) => {
    console.log(data.name.length);
    if (e.target.files.length !== 0 && productNameRef.current.value&&brandRef.current.value && imgCount<4) {
      uploadImage('/products/'+data.productId+'/image'+imgCount ,e.target.files[0]).then(e=>{
        console.log('uploaded successfully')
        setImgCount(++imgCount);
      }).catch(e=>{
        console.log('failed to upload');
      })

    }else{
      alert('Please enter Product name and product brand before uploading file');
    }

  }
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createDocWithoutId('product', data).then(e => {
      alert('product added');
      setLoading(false);
    }).catch(e => {
      setLoading(false);
      console.log(e);
      alert('product could not be added');
    })
  }
  return (
    <>
      <div className="addNew">
        <div className="preview">
          <ProductCard productInfo={data} />

          <div className="slides">
            <input className='upload'
              accept="image/*"
              type="file"
              onChange={imageChange}
            />
          </div>

        </div>
        <div className="form">
          <h1>Add New Item</h1>
          <Form onChange={handelChange}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Product name</Form.Label>
                <Form.Control type="Text" placeholder="Product name" ref={productNameRef} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Brand name</Form.Label>
                <Form.Control type="Text" placeholder="Brand name" ref={brandRef} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control type="Text" placeholder="Category" ref={categoryRef} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Sub-category</Form.Label>
                <Form.Control type="Text" placeholder="Sub-category" ref={subCategoryRef} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Wholesale Price</Form.Label>
                <Form.Control type="Text" placeholder="Wholesale Price" ref={wholePriceRef} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Retail Price</Form.Label>
                <Form.Control type="Text" placeholder="Retail Price" ref={salesPriceRef} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Unit</Form.Label>
                <Form.Select ref={unitRef}>
                  <option>Select Unit</option>
                  <option value="Kg">per Kg</option>
                  <option value="Gram">per Gram</option>
                  <option value="Dozen">per Dozen</option>
                  <option value="Unit">per Unit</option>
                  <option value="liters">per liter</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Discount</Form.Label>
                <Form.Control type="number" placeholder="in percent" min={0} max={100} ref={discountRef} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Exp. Date</Form.Label>
                <Form.Control type="date" ref={expRef} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" min={0} ref={stockRef} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add Product Description here"
                style={{ height: '100px' }}
                ref={descRef}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handelSubmit}>
              {loading ? "Adding..." : "Add product"}
            </Button>
          </Form>

        </div>
      </div>
      <OrderTabel />
      <StocksTable />
    </>
  );
}
