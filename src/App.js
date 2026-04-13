import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ProductProvider } from './context/ProductContext';
import { useProducts } from './hooks/useProducts';
import { useSearch } from './hooks/useSearch';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardView = () => {
  const { products, darkMode } = useProducts();
  const { search, setSearch, inStockOnly, setInStockOnly, filteredProducts } = useSearch(products);

  const bgClass = darkMode ? 'bg-black text-light' : 'bg-light text-dark';
  const sidebarClass = darkMode ? 'bg-dark' : 'bg-white';
  const chartClass = darkMode ? 'bg-dark border border-secondary text-light' : 'bg-white';

  return (
    <div className={`min-vh-100 ${bgClass}`}>
      <Navbar />
      <Container fluid className="px-4 py-4">
        <Row>
          <Col lg={2} className="d-none d-lg-block border-end min-vh-100 pe-4">
            <div className={`p-3 rounded mb-4 ${sidebarClass}`}>
              <div className="fw-bold mb-3 text-muted" style={{fontSize: '0.8rem', textTransform: 'uppercase'}}>Application UI</div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="fw-bold bg-primary bg-opacity-10 text-primary p-2 rounded">Dashboard</li>
                <li className="text-muted px-2">Projects</li>
                <li className="text-muted px-2">Tasks</li>
                <li className="text-muted px-2">Reporting</li>
                <li className="text-muted px-2">Users</li>
              </ul>
            </div>
          </Col>
          
          <Col lg={10} className="ps-lg-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold mb-0">Dashboard</h2>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary btn-sm bg-white">Select dates</button>
                <button className="btn btn-outline-secondary btn-sm bg-white">Filters</button>
              </div>
            </div>

            <Card className={`mb-4 border-0 shadow-sm ${chartClass}`}>
              <Card.Body className="p-4">
                <div className="text-muted fw-semibold mb-2">MRR</div>
                <h1 className="fw-bold mb-4">$18,880 <span className="text-success fs-6 fw-normal">7.4%</span></h1>
                <div style={{ height: '120px', position: 'relative' }} className="d-flex align-items-end">
                  <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    <path d="M0,80 Q100,50 200,70 T400,60 T600,40 T800,20 T1000,10 L1000,100 L0,100 Z" fill="rgba(111, 66, 193, 0.1)" stroke="#6f42c1" strokeWidth="2" />
                  </svg>
                </div>
              </Card.Body>
            </Card>

            <SearchBar
              search={search}
              setSearch={setSearch}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
            />

            <AddProductForm />
            
            <h6 className="fw-bold mt-5 mb-3">Recent Items</h6>
            <ProductList products={filteredProducts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <DashboardView />
    </ProductProvider>
  );
};

export default App;