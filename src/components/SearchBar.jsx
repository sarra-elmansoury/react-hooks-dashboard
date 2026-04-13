import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';

const SearchBar = ({ search, setSearch, inStockOnly, setInStockOnly }) => {
  const { darkMode } = useProducts();

  return (
    <Row className="mb-4 align-items-center">
      <Col md={8} lg={6}>
        <Form.Control
          type="text"
          placeholder="Search products... (Press Ctrl+K)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={darkMode ? 'bg-dark text-light border-secondary' : ''}
        />
      </Col>
      <Col md={4}>
        <Form.Check
          type="switch"
          id="stock-switch"
          label="In Stock Only"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
      </Col>
    </Row>
  );
};

export default SearchBar;