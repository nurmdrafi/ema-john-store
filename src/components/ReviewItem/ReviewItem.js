import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, price, shipping, img, quantity } = props.product;
  const handleRemoveProduct = props.handleRemoveProduct;
  return (
    <div className="review-item">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>
          Price: <span>${price}</span>
        </p>
        <p>
          Shipping Charge: <span>${shipping}</span>
        </p>
        <p>
          Quantity: <span>{quantity}</span>
        </p>
      </div>
      <FontAwesomeIcon onClick={() => handleRemoveProduct(props.product)}
        className="delete-btn"
        icon={faTrashCan}
      ></FontAwesomeIcon>
    </div>
  );
};

export default ReviewItem;
