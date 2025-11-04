import React from "react";
import ProductList from "./components/ProductList";
const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 2499, inStock: true },
    { id: 2, name: "Phone", price: 1499, inStock: false },
    { id: 3, name: "Tablet", price: 849.99, inStock: true },
  ];

  const handleRemove = (id) => {
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) card.remove();
  };

  return (
    <div>
      <h1 id="header">Product Dashboard</h1>
      <div className="product-list">
        <ProductList products={products} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default App;