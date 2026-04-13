import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';

const AddProductForm = () => {
  const { addProduct, darkMode } = useProducts();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return;
    
    addProduct({ 
      id: Date.now(), 
      name, 
      price: Number(price), 
      inStock 
    });
    
    setName('');
    setPrice('');
    setInStock(true);
    inputRef.current?.focus();
  };

  return (
    <Card className={`mb-4 shadow-sm border-0 ${darkMode ? 'bg-dark border border-secondary text-light' : ''}`}>
      <Card.Body>
        <h6 className="mb-3 fw-bold">Start creating content</h6>
        <Form onSubmit={handleSubmit}>
          <Row className="g-2">
            <Col md={5}>
              <Form.Control
                ref={inputRef}
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={darkMode ? 'bg-dark text-light border-secondary' : ''}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={darkMode ? 'bg-dark text-light border-secondary' : ''}
              />
            </Col>
            <Col md={2} className="d-flex align-items-center">
              <Form.Check
                type="checkbox"
                label="In Stock"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
              />
            </Col>
            <Col md={2}>
              <Button type="submit" variant="primary" className="w-100">Add Product</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddProductForm;