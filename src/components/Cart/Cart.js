import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({cart}) => {

  return (
    <div className="cart-container">
      <h2 className="title">Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $</p>
      <p>Total Shipping Charge: $</p>
      <p>Tax: $</p>
      <h3>Grand Total: $</h3>
      <div className="button-container">
      <button className="clear-btn">
        Clear Cart  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
      <button className="order-btn">
        Review Order  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
      </div>
      
    </div>
  );
};

export default Cart;
