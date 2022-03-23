import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({cart}) => {
 
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.15).toFixed(2));
  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="title">Order Summary</h2>
      <div className="cart-body">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>

      <div className="button-container">
        <button className="clear-btn">
          Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
        <button className="order-btn">
          Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Cart;
