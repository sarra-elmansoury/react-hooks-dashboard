import { useState, useMemo } from 'react';

export const useSearch = (products) => {
  const [search, setSearch] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchStock = inStockOnly ? p.inStock : true;
      return matchName && matchStock;
    });
  }, [products, search, inStockOnly]);

  return { search, setSearch, inStockOnly, setInStockOnly, filteredProducts };
};