import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import "../Styles/Home.css";
import ProductPage from "./DisplayProduct";

const products = [
  {
    name: "Product 1",
    description: "This is the description for Product 1",
    picture: "https://picsum.photos/200",
    price: 10.99,
    stock: 20,
    category: "Category A",
  },
  {
    name: "Product 2",
    description: "This is the description for Product 2",
    picture: "https://picsum.photos/200",
    price: 29.99,
    stock: 5,
    category: "Category B",
  },
  // More products
];

const HomePage = () => {
  const [displayProduct, setDisplayProduct] = useState(null);

  return (
    <div className="home-outer">
      {displayProduct === null ? (
        <div className="products-outer">
          <Typography variant="h4">Products</Typography>
          <div className="products-wrapper">
            {products.map((product) => (
              <Card onClick={() => setDisplayProduct(product)} className="card-outer" key={product.name}>
                <CardMedia
                  component="img"
                  className="home-product-img"
                  image={product.picture}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    {product.price} USD
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.stock} in stock
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {product.category}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <ProductPage product={displayProduct} />
      )}
    </div>
  );
};

export default HomePage;
