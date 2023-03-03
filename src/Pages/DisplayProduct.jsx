import React from "react";
import "../Styles/DisplayProduct.css";

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <div className="product-image">
        <img className="display-single-product" src={product.picture} alt={product.name} />
      </div>
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-stock">
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </p>
        <div className="product-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy now</button>
          <button onClick={() => window.location.href = "/"} className="go-back">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
