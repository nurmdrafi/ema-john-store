import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price, ratings, seller } = props.product;
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
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
