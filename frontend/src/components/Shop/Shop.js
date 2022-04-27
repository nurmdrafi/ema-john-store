import "./Shop.css";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToLocalStorage } from "../../utilities/localStorageManagement";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // Load Product based on page number and size
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  // get product count and set page count
  useEffect(() => {
    fetch("http://localhost:5000/productsCount")
      .then((res) => res.text())
      .then((data) => {
        const productCount = data;
        const pages = Math.ceil(productCount / parseInt(size));
        setPageCount(pages);
      });
  }, [size]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToLocalStorage(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}>
        <div className="button-container">
          <button className="clear-btn">
            Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </button>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <button className="order-btn">
              Review Order{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </div>
      </Cart>

      <div className="pagination">
        {[...Array(pageCount).keys()].map((number, item) => (
          <button
            key={item}
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
