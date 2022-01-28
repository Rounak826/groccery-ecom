import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import OrderTabel from '../OrderTabel/OrderTabel'
import './admin.css';
import dummy from '../../Assets/product3.png';
import { Plus, Upload } from 'react-feather';
import StocksTable from '../StocksTabel/StocksTable'
let data = {
  name: 'detergent',
  img: dummy,
  wholePrice: Math.round(Math.random() * 1000),
  salePrice: Math.round(Math.random() * 1000),
  discount: Math.round(Math.random() * 100) + '% off',
  rating: Math.round(Math.random() * 10),
  ratingCount: Math.round(Math.random() * 10000)
}
export default function Admin() {

  return (
    <>
      <div className="addNew">
        <div className="preview">
          <ProductCard productInfo={data} />
          <div className="slides">
            <div className="upload">
              <Upload />
            </div>
            <div className="upload">
              <Upload />
            </div>
            <div className="upload">
              <Upload />
            </div>
            <div className="add">
              <Plus />
            </div>
          </div>
        </div>
        <div className="form">
          <h1>Add New Item</h1>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Product name</Form.Label>
                <Form.Control type="Text" placeholder="Product name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Brand name</Form.Label>
                <Form.Control type="Text" placeholder="Brand name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Wholesale Price</Form.Label>
                <Form.Control type="Text" placeholder="Wholesale Price" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Retail Price</Form.Label>
                <Form.Control type="Text" placeholder="Retail Price" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Unit</Form.Label>
                <Form.Select >
                  <option>Select Unit</option>
                  <option value="Kg">per Kg</option>
                  <option value="Gram">per Gram</option>
                  <option value="Dozen">per Dozen</option>
                  <option value="Unit">per Unit</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Discount</Form.Label>
                <Form.Control type="number" placeholder="in percent" min={0} max={100}  />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Exp. Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" min={0} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add Product Description here"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add product
            </Button>
          </Form>

        </div>
      </div>
      <OrderTabel />
      <StocksTable />
    </>
  );
}
