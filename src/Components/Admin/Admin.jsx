import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import OrderTabel from '../OrderTabel/OrderTabel'
import './admin.css';
import { X } from 'react-feather';
import StocksTable from '../StocksTabel/StocksTable'
import { useDatabase } from '../../Context/DatabaseContext';
import { useEffect } from 'react';
import { useCallback } from 'react';
const defaultInput = {
  productId: "Product Name",
  name: "Product Name",
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
  img: [],
  rating: 0,
  ratingCount: 0
}
export default function Admin() {
  let { createDocWithoutId, uploadImage, getImageURL, deleteImage } = useDatabase();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState({ status: false, message: "" });
  let [Success, setSuccess] = useState({ status: false, message: "" });
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
  let [imgList, setImgList] = useState([])
  let [data, setData] = useState(defaultInput);

  const handelChange = useCallback(() => {
    setData({
      productId: productNameRef.current.value + brandRef.current.value,
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
      img: imgList,
      rating: 0,
      ratingCount: 0
    })

  }, [imgList]);
  const imageChange = (e) => {
    setError({status:false, message:""})
    if (imgList.length < 4) {
      if (e.target.files.length !== 0 && productNameRef.current.value && brandRef.current.value) {
        uploadImage('/products/' + data.productId + '/image' + imgList.length, e.target.files[0]).then(e => {


          getImageURL('/products/' + data.productId + '/image' + imgList.length).then(e => {
            imgList.push({ url: e, path: '/products/' + data.productId + '/image' + imgList.length });
            setTimeout(handelChange, 1000);

          }).catch(e => {
            console.log(e)
            setError({status:true, message:"Image could'nt be fetched to display"})
          });



        }).catch(e => {
          console.log(e);
          setError({status:true, message:"Image could'nt be Added"})
        })

      } else {
        setError({status:true, message:'Please enter Product name and product brand before uploading file'})
      }
    } else {
      setError({status:true, message:"Image List Full, You can only add 4 images"})
    }


  }

  const handelDelete = (pathName) => {
    deleteImage(pathName).then(e => {
      const index = imgList.map(e => e.path).indexOf(pathName);
      let temp = array_remove(imgList, index);
      setImgList(temp);
      setTimeout(handelChange, 500);
    }).catch(e => {
      setError({status:true, message:"Failed to delete image"})
    })

  }
  function array_remove(arr, index) {
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return arr;
  }
  const handelSubmit = (e) => {
    
    e.preventDefault();
    setLoading(true);
    createDocWithoutId('product', data).then(e => {
      setSuccess({status:true, message:"Product Added Successfully!"})
      setTimeout(()=>setSuccess({status:false, message:""}),4000);
      setLoading(false);
      setData(defaultInput);
      document.getElementById("reset").click();
      setImgList([]);
    }).catch(e => {
      setLoading(false);
      console.log(e);
      setError({status:true, message:"Failed to Add New Product, Try Again!"})
    })
  }
  useEffect(() => {
    handelChange();
  }, [imgList, handelChange]);

  return (
    <>
      <div className="addNew">
        <div className="preview">
          <ProductCard productInfo={data} />

          <div className="slides">
            {imgList.map((img, index) => {
              return (<div id={img.path} key={img.url} className="tiles">
                {(index === imgList.length - 1) && <X className='delete' onClick={() => handelDelete(img.path)} />}
                <img src={img.url} alt="" />
              </div>)
            })
            }

            <input className='upload'
              accept="image/*"
              type="file"
              onChange={imageChange}
            />
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
            <Row className="mb-3">
            <Form.Control id="reset" className='reset' variant="primary" type="reset" />
            <Button variant="primary" type="submit" onClick={handelSubmit}>
              {loading ? "Adding..." : "Add product"}
            </Button>
            
            </Row>
            

          </Form>

        </div>
      </div>
      <OrderTabel />
      <StocksTable />
    </>
  );
}
