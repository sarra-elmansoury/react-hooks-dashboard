import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';

const ProductCard = ({ product }) => {
  const { deleteProduct, toggleStock, darkMode } = useProducts();

  return (
    <Card className={`h-100 border-0 shadow-sm ${darkMode ? 'bg-dark border border-secondary text-light' : ''}`}>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="fw-bold fs-6 mb-0">{product.name}</Card.Title>
          <Badge bg={product.inStock ? 'success' : 'danger'} className="fw-normal">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
        <Card.Text className="fs-3 fw-bold mb-4">
          ${product.price.toLocaleString()}
        </Card.Text>
        <div className="d-flex gap-2 mt-auto">
          <Button 
            variant={darkMode ? 'outline-light' : 'outline-secondary'} 
            size="sm" 
            onClick={() => toggleStock(product.id)}
            className="flex-grow-1"
          >
            Toggle Stock
          </Button>
          <Button 
            variant="outline-danger" 
            size="sm" 
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default React.memo(ProductCard);