import React from 'react';
import ProductCard from '../ProductCard/ProductCard'; // Itt kell importálni a ProductCard-ot


const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Végigiterálunk a termékeken és minden egyes termékhez renderelünk egy ProductCard-ot */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
