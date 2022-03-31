import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(props.children);
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
        {props.children}
    </div>
  );
};

export default Cart;
