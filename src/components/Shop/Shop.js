import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import {
  addToLocalStorage,
  getStoredCart,
  deleteShoppingCart
} from "../../utilities/localStorageManagement";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  // Load Cart from Local Storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find(product => product.id === selectedProduct.id);
    if(!exist){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToLocalStorage(selectedProduct.id);
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
