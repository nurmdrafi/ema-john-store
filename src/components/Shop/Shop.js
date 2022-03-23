import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToLocalStorage } from "../../utilities/localStorageManagement";

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
    addToLocalStorage(product.id)
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
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
