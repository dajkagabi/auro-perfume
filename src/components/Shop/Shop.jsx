

import React, { useState, useEffect } from 'react';
import ProductFilter from '../ProductFilter/ProductFilter';
import ProductGrid from '../ProductGrid/ProductGrid'; 
import allProducts from '../data/products'; 

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState('grid'); 


  useEffect(() => {
    let currentProducts = [...allProducts];

    if (searchTerm) {
      currentProducts = currentProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      currentProducts = currentProducts.filter(product =>
        product.category === selectedCategory
      );
    }

    switch (sortBy) {
      case 'Price: Low to High':
        currentProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        currentProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Newest Arrivals':
        currentProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'Featured':
      default:
        break;
    }

    setFilteredProducts(currentProducts);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}     
        setViewMode={setViewMode} 
      />
      <div className="container mx-auto px-4 py-8">
    
        <ProductGrid products={filteredProducts} viewMode={viewMode} />
        <p className="text-center text-gray-600 mt-8">
          Megjelenített termékek száma: {filteredProducts.length}
        </p>
      </div>
    </div>
  );
};

export default ShopPage;