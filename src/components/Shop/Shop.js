import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // Load Products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add To Cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // [peviousCart + newCart]
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addtocart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $</p>
        <p>Total Shipping Charge: $</p>
        <p>Tax: $</p>
        <h3>Grand Total: $</h3>
        <button>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
        <button>Review Order <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon></button>
      </div>
    </div>
  );
};

export default Shop;
