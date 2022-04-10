import "./Shop.css";
import React from 'react';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToLocalStorage,
  getStoredCart,
  deleteShoppingCart,
} from "../../utilities/localStorageManagement";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
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
      <Cart cart={cart}>
        <div className="button-container">
          <button className="clear-btn">
            Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </button>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <button className="order-btn">
              Review Order{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </div>
      </Cart>
    </div>
  );
};

export default Shop;
