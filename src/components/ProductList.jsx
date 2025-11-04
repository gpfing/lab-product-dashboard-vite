import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <p>Product unavailable</p>;
  }

  return (
    <>
      {products.map((product) => (
          <ProductCard key={product.id} product={product} onRemove={onRemove} />
        )
      )}
    </>
  );
};

export default ProductList;