import React from 'react';
import { Navbar as BsNavbar, Container, Button, Nav } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';

const Navbar = () => {
  const { darkMode, toggleTheme } = useProducts();

  return (
    <BsNavbar bg={darkMode ? 'dark' : 'white'} variant={darkMode ? 'dark' : 'light'} className="border-bottom py-2 shadow-sm sticky-top">
      <Container fluid className="px-4">
        <BsNavbar.Brand href="#home" className="d-flex align-items-center fw-bold">
          <div className="bg-primary rounded-circle me-2" style={{width: 24, height: 24}}></div>
          Untitled UI
        </BsNavbar.Brand>
        <Nav className="ms-auto">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'} size="sm" onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Nav>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;