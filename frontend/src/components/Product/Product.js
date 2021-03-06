import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = ({ addToCart, product }) => {
  const { img, name, price, ratings, seller} = product;
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
      <button onClick={() => addToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
    </div>
  );
};

export default Product;
