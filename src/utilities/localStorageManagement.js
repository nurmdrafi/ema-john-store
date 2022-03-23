const addToLocalStorage = (id) => {
  let shoppingCart = {}; // inital value

  // [step 01] \\

  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    // if exist then convert string to object [OLD]
    shoppingCart = JSON.parse(storedCart);
  }

  // [step 02] \\

  // add quantity
  const quantity = shoppingCart[id];

  // if exist [OLD]
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  }
  // if not exist [NEW]
  else {
    shoppingCart[id] = 1;
  }

  // [step 03] \\

  // finally update local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromLocalStorage = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToLocalStorage, removeFromLocalStorage, deleteShoppingCart };
