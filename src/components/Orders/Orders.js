import React from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { removeItemFromCart } from "../../utilities/localStorageManagement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((item) => item.id !== product.id);
    setCart(rest);
    removeItemFromCart(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="review-cart">
        <Cart cart={cart}>
          <div className="button-container">
            <button className="clear-btn">
              Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <Link to="/inventory" style={{ textDecoration: 'none' }}>
              <button className="order-btn">
                Proceed Checkout{" "}
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
