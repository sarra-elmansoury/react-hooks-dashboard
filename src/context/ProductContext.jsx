import React, { createContext, useReducer, useEffect, useState, useCallback } from 'react';
import { productReducer } from '../reducers/productReducer';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products'));
    if (saved && saved.length > 0) {
      dispatch({ type: 'SET_PRODUCTS', payload: saved });
      setLoading(false);
    } else {
      setTimeout(() => {
        const data = [
          { id: 1, name: "Premium License", price: 1000, inStock: true },
          { id: 2, name: "Analytics Dashboard", price: 500, inStock: true },
          { id: 3, name: "UI Components Kit", price: 150, inStock: false },
          { id: 4, name: "Cloud Storage 1TB", price: 200, inStock: true },
        ];
        dispatch({ type: 'SET_PRODUCTS', payload: data });
        setLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products, loading]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addProduct = useCallback((product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  }, []);

  const deleteProduct = useCallback((id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  }, []);

  const toggleStock = useCallback((id) => {
    dispatch({ type: "TOGGLE_STOCK", payload: id });
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return (
    <ProductContext.Provider value={{ 
      products, loading, addProduct, deleteProduct, toggleStock, darkMode, toggleTheme 
    }}>
      {children}
    </ProductContext.Provider>
  );
};