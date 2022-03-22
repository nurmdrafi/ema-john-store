import React from "react";
import "./Product.css";

const Product = ({ addtocart, product }) => {
  const addToCart = addtocart;
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <h3>Price: ${price}</h3>
        <div className="product-info">
          <p>Manufacture: {seller}</p>
          <p>Rating: {ratings} star</p>
        </div>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
