import React, { useState } from 'react';
import { Row, Col, Spinner, Pagination } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductList = ({ products }) => {
  const { loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <Spinner animation="border" variant="primary" />
        <div className="mt-3 text-muted">Loading data...</div>
      </div>
    );
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Row className="g-4 mb-4">
        {currentProducts.map(product => (
          <Col key={product.id} xs={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
        {currentProducts.length === 0 && (
          <Col>
            <div className="text-center py-5 text-muted border rounded">No data available.</div>
          </Col>
        )}
      </Row>
      {totalPages > 1 && (
        <Pagination className="justify-content-center">
          <Pagination.Prev 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1} 
          />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item 
              key={i + 1} 
              active={i + 1 === currentPage} 
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages} 
          />
        </Pagination>
      )}
    </>
  );
};

export default ProductList;