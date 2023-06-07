import React from "react";
import "./product.css";
const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Storage: {product.storage}</p>
              <button onClick={() => onAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
