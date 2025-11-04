import React from "react";
import styles from "../styles/ProductCard.module.css";
const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock } = product;

  return (
    <div
      data-id={id}
      className={`${styles.card} ${!inStock ? "outOfStockClass" : ""}`}
    >
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>Price: ${price}</p>
      <p className={inStock ? styles.statusIn : styles.statusOut}>
        {inStock ? "In stock" : "Out of stock"}
      </p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};
export default ProductCard;
